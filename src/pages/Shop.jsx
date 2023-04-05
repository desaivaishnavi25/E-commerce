import React from 'react'
import styled from 'styled-components'
import { popularProducts } from '../data';
import Product from './Product';
import {mobile} from "../responsive";

const Conatiner = styled.div`
`;
const ShopTitle = styled.div`
    text-align:center;
    font-family: 'Lora', serif;
    padding-top:10px;
    `;
const Products = styled.div`
display:flex;
width: 100%;
height: auto;
display: grid;
grid-template-columns: 1fr 1fr 1fr;
place-items: center;
${mobile({padding:"0px", flexDirection:"column"})};
`;

export const Shop = () => {
  return (
    <Conatiner>
        <ShopTitle>
            <h1>Our Products</h1>
        </ShopTitle>
        <Products>
            {popularProducts.map((product)=>
                <Product data={product}/>
            )}
        </Products>
    </Conatiner>
  )
}
