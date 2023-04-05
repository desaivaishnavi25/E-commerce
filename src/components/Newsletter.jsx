import React from 'react';
import styled from 'styled-components';
import {mobile} from "../responsive";


const Conatiner  = styled.div`
    height:60vh;
    background-color:#f2f2f2;
    display:flex;
    align-items:center;
    justify-content:center;
    flex-direction:column;
`;
const Title  = styled.h1`
    font-size:70px;
    margin-bottom:20px;
    font-family: 'Alkatra', cursive;
`;
const Descritpion  = styled.div`
    font-size:24px;
    font-weight:300;
    font-family: 'Lora', serif;
    margin-bottom:20px;
    ${mobile({textAlign:"center"})};
`;
const InputContainer = styled.div`
    width:50%;
    background-color:#f2f2f2;
    display:flex;
    justify-content:space-between;
    font-family: 'Lora', serif;
    ${mobile({width:"80%"})};
`;


export const Newsletter = () => {
  return (
    <Conatiner>
        <Title>Newsletter</Title>
        <Descritpion>Get updates about the lastest fashion.</Descritpion>
        <InputContainer>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et velit corrupti earum, possimus magnam quisquam mollitia rem dolores expedita dignissimos aspernatur provident natus cupiditate veritatis eum accusamus obcaecati facere minima.

        </InputContainer>
    </Conatiner>
  )
}

