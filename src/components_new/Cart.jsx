import React, { useEffect } from 'react';
import Header from './Header';
import { Link } from "react-router-dom";
import '../Styles/Cart.css';
import { Grid } from '@material-ui/core'
import CartItem from './CartItem';
import { ToastContainer, toast } from 'material-react-toastify';
import 'material-react-toastify/dist/ReactToastify.css';


function Cart({ cart, totalItems, handleUpdateCartQty, handleRemoveFromCart, handleEmptyCart }) {

    const EmptyCart = () => (
        <div>
            <p>You have no items in your shopping cart</p>
        </div>
    )

    console.log(cart)

    const clearCartToast = () => toast.warning("Shopping cart cleared!")

    const FilledCart = () => {
        return(
            <>
            
           <div className="grid_list">
                {cart.line_items.map((item) => {
                    return(
                        <CartItem
                            handleUpdateCartQty={handleUpdateCartQty}
                            handleRemoveFromCart={handleRemoveFromCart}
                            handleEmptyCart={handleEmptyCart}
                            item={item} />
                    )
                })}
            </div>
            <div className="cart_checkout_section"> 
                <div className="action_buttons" >
                    <Link to="/">
                        <button className="action_btn" >CONTINUE SHOPPING</button>
                    </Link>
                   
                    <button className="action_btn" onClick={() => {
                        handleEmptyCart()
                        clearCartToast()
                    }} >CLEAR SHOPPING CART</button>
                </div>
                <div className="cart_checkout_box">
                    <div className="cart_subtotal">
                        <div className="cart_subtotal_container" >
                            <div>
                                <h3 className="checkout_box_text">Cart Total</h3>
                                <p>_______________</p>
                            </div>
                            <div>
                                <p className="checkout_box_text">Total products</p>
                                <p className="checkout_box_text">{cart.total_items} : {cart.subtotal.formatted_with_symbol}</p>
                               
                            </div>
                            <div>
                                <h3 className="grand_total checkout_box_text" >Grand Total</h3>
                                <h3 className="grand_total checkout_box_text" >{cart.subtotal.formatted_with_symbol}</h3>
                            </div>
                        </div>
                        <Link to="/checkout">
                            <button className="checkout_btn" >PROCEED TO CHECKOUT</button>
                        </Link>
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
                    <p> <Link className="header_nav_link" to="/" >Home</Link> / Your shopping cart.</p>
                </div>
                {cart.total_items.length !== 0 ?  <FilledCart/> : <EmptyCart/>}
                <ToastContainer
                                position="bottom-left"
                                autoClose={3000}
                                hideProgressBar
                                newestOnTop={false}
                                closeOnClick
                                rtl={false}
                                pauseOnFocusLoss
                                draggable
                                pauseOnHover
                                 />
           </div>
           <br />
        </div>
    )
}

export default Cart
