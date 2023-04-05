import React from 'react';
import {Newsletter} from '../components/Newsletter';
import {Footer} from '../components/Footer';
import {Slider} from '../components/Slider';
import {Categories} from '../components/Categories';
export const Home = () => {
  return (
    <div>
        <Slider/>
        <Categories/>
       <Newsletter/>
        <Footer/>
    </div>
  )
}

