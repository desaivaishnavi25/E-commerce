import React, {useContext} from 'react'
import styled from 'styled-components'
import { popularProducts } from '../data';
import {ShopContext} from '../context/shopContext';
import {CartItem} from './CartItem';
import { useNavigate } from "react-router-dom";

const Container = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`;
const Title = styled.h1`
font-family: 'Urbanist', sans-serif;
`;
const Checkout = styled.div`
`;
const Subtotal = styled.p`
font-family: 'Urbanist', sans-serif;
font-size:40px;
`;
const Button = styled.button`
padding:10px;
font-size:20px;
background-color:transparent;
cursor:pointer;
box-shadow: 2px 5px;
margin:10px;
`;
const Subtitle = styled.h1`
font-family: 'Lora', serif;
`;

export const Cart = () => {
  const { cartItems, getTotalCartAmount, checkout } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();

  const navigate = useNavigate();

  return (
    <Container>
      <div>
        <Title>Your Cart Items</Title>
      </div>
      <Container>
        {popularProducts.map((product) => {
          if (cartItems[product.id] !== 0) {
            return <CartItem data={product} />;
          }
        })}
      </Container>

      {totalAmount > 0 ? (
        <Checkout>
          <Subtotal> Total: ${totalAmount} </Subtotal>
          <Button onClick={() => navigate("/")}> Continue Shopping </Button>
          <Button
            onClick={() => {
              checkout();
              navigate("/checkout");
            }}
          >
            {" "}
            Checkout{" "}
          </Button>
        </Checkout>
      ) : (
        <Subtitle> Your Shopping Cart is Empty</Subtitle>
      )}
    </Container>
  );
};



