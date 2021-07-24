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

    console.log(cart)

    const FilledCart = () => {
        return(
            <>
            <div>
                <p>Your shopping cart</p>
            </div>
           <div className="grid_list">
                {cart.line_items.map((item) => {
                    return(
                        <CartItem item={item} />
                    )
                })}
            </div>
            <div className="cart_checkout_section"> 
                <div className="action_buttons" >
                    <button>CONTINUE SHOPPING</button>
                    <button>CLEAR SHOPPING CART</button>
                </div>
                <div className="cart_checkout_box">
                    <div className="cart_subtotal">
                        <div className="cart_subtotal_container" >
                            <div>
                                <h3>Cart Total</h3>
                                <p>_______________</p>
                            </div>
                            <div>
                                <p>Total products</p>
                                <p>Total products</p>
                            </div>
                            <div>
                                <h3 className="grand_total" >Grand Total</h3>
                                <h3 className="grand_total" >Grand Total</h3>
                            </div>
                        </div>
                        <button className="checkout_btn" >PROCEED TO CHECKOUT</button>
                    </div>
                </div>
            </div>
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
