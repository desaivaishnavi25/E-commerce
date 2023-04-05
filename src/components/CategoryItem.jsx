import styled from "styled-components"
import { categories } from "../data";
import {Link} from "react-router-dom";
import {mobile} from "../responsive";

const Container = styled.div`
flex:1;
margin:3px;
height:80vh;
position:relative;
`;
const Image = styled.img`
  width:100%;
  height:100%;
  object-fit:cover;
  ${mobile({height:"20vh"})};

`;
const Info = styled.div`
position:absolute;
top:0;
left:0;
width:100%;
height:100%;
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
`;
const Title = styled.h1`
  margin:20px;
  font-style:italic;
  font-size:45px;
`;
const Button = styled.button`
  border:none;
  padding:10px;
  background-color:white;
  cursor:pointer;
  font-weight:bold;
  border-radius:5px;
`;


export const CategoryItem = ({item}) => {
  return (
    <Container>
      <Image src={item.img}/>
      <Info>
        <Title>{item.title}</Title>
        
        <Link to="/shop"><Button>SHOP NOW</Button></Link>
      </Info>
    </Container>
  )
}


