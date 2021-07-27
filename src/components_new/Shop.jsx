import React from 'react';
import Header from '../components_new/Header';
import { Link } from 'react-router-dom';
import ProductGridListSingle from './ProductGridListSingle'

function Shop({ handleAddToCart, totalItems, products }) {
    return (
        <div>
            <Header totalItems={totalItems} />
            <div className="daily_deals_cont">
                    <div className="daily_deals_head_cont">
                    <div className="comp_rout_indicator" >
                        <p> <Link className="header_nav_link" to="/" >Home</Link> / Shop</p>
                    </div>
                        <div className="grid_list">
                            {products.map((product) => {
                                return(
                                    <ProductGridListSingle
                                        product={product}
                                        handleAddToCart={handleAddToCart}
                                        key={product.id}
                                    />
                                )
                            })}
                            </div>
                    </div>
                </div>
        </div>
    )
}

export default Shop
