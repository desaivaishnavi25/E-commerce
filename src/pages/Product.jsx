import React, {useContext} from 'react';
import { FavoriteBorderOutlined, SearchOutlined, ShoppingCartOutlined } from '@mui/icons-material';
import styled from 'styled-components';
import {ShopContext} from '../context/shopContext';
import {mobile} from "../responsive";

const Container  =styled.div`
border-radius: 15px;
width: 300px;
height: 350px;
margin: 100px;
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;
`;

const Image = styled.img`
height:75%;
z-index:2;
cursor:pointer;
${mobile({height:"20vh"})};
`;

const NameAndPrice = styled.div`

`;
const Desc  =styled.div`
  padding:20px;
  margin-botton:25px;
`;
const Name = styled.p`
font-family: 'Itim', cursive;
font-size:20px;
`;
const Price = styled.p`
font-family: 'Itim', cursive;
font-size:20px;
`;
const Button = styled.button`
  background-color:black;
  border:1px solid black;
  border-radius:5px;
  color:white;
  padding:5px;
  cursor:pointer;
`;


 const Product = (props) => {
    const {id, productName, price,img} = props.data;
    const {addToCart, cartItems} = useContext(ShopContext);
    const cartItemAmount = cartItems[id]
  return (
    <Container>
      
       <Image src={img}/>
       <Desc>
        <NameAndPrice>
        <Name>{productName}</Name>
            <Price>${price}</Price>
        </NameAndPrice>
        <Button  onClick={() => addToCart(id)}>Add to Cart   {cartItemAmount >0 && <>({cartItemAmount})</>}
        </Button>
       </Desc>
    </Container>
  );
};

export default Product;
