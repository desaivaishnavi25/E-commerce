
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {mobile} from "../responsive";

const Container = styled.div`
    height:60px;
    ${mobile({height:"50px"})};

`;
const Wrapper = styled.div`
padding: 10px 20px;
display:flex;
align-items:center;
justify-content:space-between;
${mobile({padding:"10px 0px"})};
`;

const Left = styled.div`
    flex:1;
    display:flex;
    align-items:center;
`;

const Language = styled.span`
font-size:14px;
cursor:pointer;
margin-right:15px;
font-family: 'Urbanist', sans-serif;
${mobile({display:"none"})};
`;
const About = styled.span`
    font-size:14px;
    cursor:pointer;
    font-family: 'Urbanist', sans-serif;
    marrgin-left:25px;
`;

const Center = styled.div`
    flex:1;
    text-align:center;
`;

const Logo = styled.h1`
    font-weight:bold;
    font-family: 'Lora', serif;
    ${mobile({fontSize:"24px"})};
`;

const Right = styled.div`
    flex:1;
    display:flex;
    align-items:center;
    justify-content:flex-end;
    ${mobile({flex:2 , justifyContent:"center"})};
`;

const MenuItem = styled.div`
    font-size:14px;
    cursor:pointer;
    margin-left:25px;
    font-family: 'Urbanist', sans-serif;
    ${mobile({fontSize:"12px",marginLeft:"10px"})};
    
`;

const Navbar = () => {
  return (
    <Container>
        <Wrapper>
            <Left>
                <Language>EN</Language>
                <About>About Us</About>
            </Left>
            <Center><Logo>LEVIS@</Logo></Center>
            <Right>
                <MenuItem>MY CART</MenuItem>
                <MenuItem>
                <Link to="/cart">
                    <ShoppingCartOutlinedIcon/>
                    </Link>
                </MenuItem>
            </Right>
            </Wrapper>
        </Container>
  )
}

export default Navbar
