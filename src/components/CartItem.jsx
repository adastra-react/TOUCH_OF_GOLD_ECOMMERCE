import React, { Fragment } from 'react';

function CartItem({ item }) {
    return (
        <Fragment>
          <div className="card">
              <div className="prod_img_cont" >
                <img className="product_img" src={item.media.source} />
              </div>
          <div className="card-body">
            <h2>{item.name}</h2>
            <h5>${item.price.formatted_with_code}</h5>
            <h5>quantity: {item.quantity}</h5>
          </div>
          <div className="add_to_card_cont">
              {/* <button className="add_to_card_btn">ADD TO CART</button> */}
              <button className="add_to_card_btn">REMOVE FROM CART</button>
          </div>
        </div>
       </Fragment>
    )
}

export default CartItem
