import React, { Fragment } from 'react';
import '../Styles/ProductGridListSingle.css'

function ProductGridListSingle({ product }) {

    console.log(product)

    return (
        <Fragment>
          <div className="card">
              <div className="prod_img_cont" >
                <img className="product_img" src={product.media.source} />
              </div>
          <div className="card-body">
            <h2>{product.name}</h2>
            <h5>${product.price.formatted_with_code}</h5>
          </div>
          <div className="add_to_card_cont">
              <button className="add_to_card_btn">ADD TO CART</button>
          </div>
        </div>
       </Fragment>
    )
}

export default ProductGridListSingle
