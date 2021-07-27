import React, { useEffect, useState } from 'react';
import '../Styles/Home.css';
import Header from './Header';
// import Footer from './FooterFeet';
import supportImg_1 from '../assets/img/support-1.png';
import supportImg_2 from '../assets/img/support-2.png';
import supportImg_3 from '../assets/img/support-3.png';
import supportImg_4 from '../assets/img/support-4.png';
import ProductGridListSingle from './ProductGridListSingle';;

function Home({ products, handleAddToCart, totalItems }) {

    // if (!products.length) return <p>Loading...</p>;
    console.log(products)

    return (
        <div className="home">
            <Header totalItems={totalItems} />
            <div className="home_container">
                <div className="home_slider">
                    <div className="home_text_cont">
                        <h1>
                            SUMMER SALE
                        </h1>
                    </div>
                    <div className="home_img_cont">
                        <h1>IMAGE</h1>
                    </div>
                </div>
                <div className="jumbotron">
                    <div className="jumbo_items_cont">
                        {/* <div className="img_cont"> */}
                            <img className="jumbo_img" src={supportImg_1} alt="" />
                        {/* </div> */}
                         <div className="jumbo_items">
                            <p className="jumbo_para">
                                Free Shipping
                            </p>
                            <p className="jumbo_para jumbo_para_second">Shipping through DHL</p>
                         </div>
                    </div>
                    <div className="jumbo_items_cont">
                         <img className="jumbo_img" src={supportImg_2} alt="" />
                         <div className="jumbo_items">
                            <p className="jumbo_para">
                            Support 24/7
                            </p>
                            <p className="jumbo_para jumbo_para_second">100% after sales customer support</p>
                         </div>
                    </div>
                    <div className="jumbo_items_cont">
                         <img className="jumbo_img" src={supportImg_3} alt="" />
                         <div className="jumbo_items">
                            <p className="jumbo_para">
                                Money Return
                            </p>
                            <p className="jumbo_para jumbo_para_second">refund on defective merchendise</p>
                         </div>
                    </div>
                    <div className="jumbo_items_cont">
                         <img className="jumbo_img" src={supportImg_4} alt="" />
                         <div className="jumbo_items">
                            <p className="jumbo_para">
                                Order Discount
                            </p>
                            <p className="jumbo_para jumbo_para_second">Discounts available at checkout</p>
                         </div>
                    </div>
                </div>
                <div className="daily_deals_cont">
                    <div className="daily_deals_head_cont">
                    <div className="comp_rout_indicator" >
                        <p>Go to the shop page for all products</p>
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
            {/* <Footer/> */}
        </div>
    )
}

export default Home
