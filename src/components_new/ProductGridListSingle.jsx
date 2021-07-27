import React, { Fragment } from 'react';
import '../Styles/ProductGridListSingle.css';
import { ToastContainer, toast } from 'material-react-toastify';
import 'material-react-toastify/dist/ReactToastify.css';

function ProductGridListSingle({ product, handleAddToCart }) {

    console.log(product);

    const AddToCartToast = () => toast.dark(`${product.name} added to cart!`)


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
              <button onClick={() => {
                handleAddToCart(product.id, 1);
                AddToCartToast();
              }} className="add_to_card_btn">ADD TO CART</button>
          </div>
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
       </Fragment>
    )
}

export default ProductGridListSingle
