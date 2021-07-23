import React from 'react';
import Header from '../components/Header';
import { Link } from 'react-router-dom';

function Shop({ totalItems }) {
    return (
        <div>
            <Header totalItems={totalItems} />
            <div>
                <div className="comp_rout_indicator" >
                        <p> <Link className="header_nav_link" to="/" >Home</Link> / Shop</p>
                </div>
            </div>
        </div>
    )
}

export default Shop
