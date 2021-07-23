import React, { useEffect } from 'react';
import Header from './Header';
import { Link } from "react-router-dom";
import '../Styles/Cart.css';
import { Grid } from '@material-ui/core'
import CartItem from './CartItem';

function Cart({ cart, totalItems }) {

    const EmptyCart = () => (
        <div>
            <p>You have no items in your shopping cart</p>
        </div>
    )

    const FilledCart = () => {
        return(
            <>
            <Grid container >
            {cart.line_items.map((item) => {
                    return(
                     <div key={item.id} >
                         <CartItem item={item} />
                     </div>
                    )
                })}
            </Grid>
            </>
        )
    }

    console.log(cart)
    console.log(cart.line_items)

    if(cart.line_items === undefined) return 'Loading...'

    return (
        <div>
            <Header totalItems={totalItems}/>
           <div className="cart_container">
                <div className="comp_rout_indicator" >
                    <p> <Link className="header_nav_link" to="/" >Home</Link> / Cart</p>
                </div>
                {cart.total_items.length !== 0 ?  <FilledCart/> : <EmptyCart/>}
           </div>
        </div>
    )
}

export default Cart
