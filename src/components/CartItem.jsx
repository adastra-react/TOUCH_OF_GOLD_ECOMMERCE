import React, { Fragment } from 'react';
import { ToastContainer, toast } from 'material-react-toastify';
import 'material-react-toastify/dist/ReactToastify.css';
import '../Styles/CartItem.css'

function CartItem({ item, handleUpdateCartQty, handleRemoveFromCart, handleEmptyCart }) {

    const RemoveFromCartToast = () => toast.warning(`${item.name} remove from cart!`)


    return (
        <Fragment>
          <div className="card">
              <div className="prod_img_cont" >
                <img className="product_img" src={item.media.source} />
              </div>
          <div className="card-body">
            <h2>{item.name}</h2>
            <h5>${item.price.formatted_with_code}</h5>
            <br />
            <button className="quantity_btn" onClick={() => {
                handleUpdateCartQty(item.id, item.quantity + 1)
            }}>+</button>
            <h5>quantity: {item.quantity}</h5>
            <br />
            <button className="quantity_btn" onClick={() => {
                handleUpdateCartQty(item.id, item.quantity - 1)
            }}>-</button>
            
          </div>
          <div className="add_to_card_cont">
              {/* <button className="add_to_card_btn">ADD TO CART</button> */}
              <button
              onClick={() => {
                  handleRemoveFromCart(item.id)
                  RemoveFromCartToast();
              }}
               className="add_to_card_btn">REMOVE FROM CART</button>
          </div>
        </div>
       </Fragment>
    )
}

export default CartItem
