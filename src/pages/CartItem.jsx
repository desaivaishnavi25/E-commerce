import React, { useContext } from "react";
import { ShopContext } from "../context/shopContext";
import styled from 'styled-components';
import {mobile} from "../responsive";

const Container = styled.div`
width: 700px;
height: 275px;
display: flex;
align-items: center;
box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.2);
border-radius: 25px;
margin: 30px;
${mobile({width:"275px", height:"300px",flexDirection:"column"})}
`;
const Image = styled.img`
width: 200px;
padding:15px;
margin-right:15px;
${mobile({width:"100px"})}
`;
const Desc = styled.div`
width: 100%;
`;
const ProductName = styled.p`
font-family: 'Urbanist', sans-serif;
font-size:25px;
`;
const ProductPrice = styled.p`
font-family: 'Urbanist', sans-serif;
`;
const countHandler = styled.div``;
const Button = styled.button`
background-color: rgb(19, 19, 19);
color: white;
border: none;
border-radius: 8px;
margin: 10px;
cursor: pointer;
padding:5px 10px;
`;
const Input = styled.input`
width: 25px;
text-align: center;
font-weight: bolder;
`;

export const CartItem = (props) => {
  const { id, productName, price, img } = props.data;
  const { cartItems, addToCart, removeFromCart, updateCartItemCount } =
    useContext(ShopContext);

  return (
    <Container>
      <Image src={img} />
      <Desc>
        <ProductName>
          <b>{productName}</b>
        </ProductName>
        <ProductPrice> Price: ${price}</ProductPrice>
        <countHandler>
          <Button onClick={() => removeFromCart(id)}> - </Button>
          <Input
            value={cartItems[id]}
            onChange={(e) => updateCartItemCount(Number(e.target.value), id)}
          />
          <Button onClick={() => addToCart(id)}> + </Button>
        </countHandler>
      </Desc>
    </Container>
  );
};
