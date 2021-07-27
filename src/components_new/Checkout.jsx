import React, {Fragment} from 'react';
import '../Styles/Checkout.css';
import { Link } from "react-router-dom";
import Header from './Header';
// import Footer from './FooterFeet';

function Checkout({ cart }) {

    console.log(cart)

    return (
      <div>
        <Header/>
      </div>  
    )
}

export default Checkout
