import React, { useState } from 'react';
import image1 from '../Assets/image1.png';
import image2 from '../Assets/image2.png';
import image3 from '../Assets/image3.png';
import { sliderItems } from '../data';
import ArrowLeftOutlinedIcon from '@mui/icons-material/ArrowLeftOutlined';
import ArrowRightOutlinedIcon from '@mui/icons-material/ArrowRightOutlined';
import {mobile} from "../responsive";


import styled from "styled-components"

const Container = styled.div`
margin-top:25px;
    width:100%;
    height:100vh;
    display:flex;
    position:relative;
    overflow:hidden;
    ${mobile({display:"none"})}
`;

const Arrow = styled.div`
    width:50px;
    height:50px;
    background-color:white;
    border-radius:50%;
    display:flex;
    align-items:center;
    justify-content:center;
    position:absolute;
    top:0;
    bottom:0;
    left:${props=>props.direction==="left" && "10px"};
    right:${props=>props.direction==="right" && "10px"};
    margin:auto;
    cursor:pointer;
    opacity:0.5;
    z-index:2;
`;

const Wrapper = styled.div`
  height:100%;
  display:flex;
  transition: all 1.5s ease;
  transform:translateX(${props=>props.slideIndex*-100}vw);
`;

const Slide = styled.div`
  width:100vw;
  height:100vh;
  display:flex;
  align-item:center;
  background-color:#f2f2f2;
`;

const ImgContainer = styled.div`
  height:100%;
  flex:1;
`;

const Image = styled.img`
height:80%;
padding-left:200px;
padding-top:100px;
`;

const InfoContainer = styled.div`
  flex:1;
  padding:50px;
  margin-top:200px;
  text-align:center;
`;

const Title = styled.h1`
  font-size:55px;
  font-weight:bold;
  font-family: 'Urbanist', sans-serif;
`;
const Desc = styled.p`
  margin:50px 0px;
  font-size:20px;
  font-weight:500;
  letter-spacing:3px;
  font-family: 'Alkatra', cursive;
`;
const Button = styled.button`
  padding:10px;
  font-size:20px;
  background-color:transparent;
  cursor:pointer;
  box-shadow: 2px 5px;
`;

export const Slider = () => {
    const [slideIndex, setSlideIndex] = useState(0)
    const handleClick = (direction) => {
        if(direction==="left"){
          setSlideIndex(slideIndex>0 ? slideIndex-1 : 2)
        }
        else{
          setSlideIndex(slideIndex<2 ? slideIndex+1 : 0)
        }
    };

  return (
    <Container>
        <Arrow direction="left" onClick={()=>handleClick("left")}>
          <ArrowLeftOutlinedIcon/>
        </Arrow>
        <Wrapper slideIndex = {slideIndex}>
          {sliderItems.map(item=>(
              <Slide>
              <ImgContainer>
              <Image src={item.img} alt="Not available"/>
              </ImgContainer>
              <InfoContainer>
                <Title> {item.title}</Title>
                <Desc>{item.desc}</Desc>
                <Button>
                  {item.btn}
                </Button>
              </InfoContainer>
              </Slide>
          ))}
        </Wrapper>
        <Arrow direction="right" onClick={()=>handleClick("right")}>
          <ArrowRightOutlinedIcon/>
        </Arrow>
    </Container>
  )
}

