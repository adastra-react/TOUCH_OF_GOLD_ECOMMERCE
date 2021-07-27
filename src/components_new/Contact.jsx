import React from 'react';
import Header from '../components_new/Header';
import { Link } from 'react-router-dom';

function Contact({ totalItems }) {
    return (
        <div>
            <Header totalItems={totalItems} />
            <div>
                <div className="comp_rout_indicator" >
                        <p> <Link className="header_nav_link" to="/" >Home</Link> / Contact</p>
                </div>
            </div>
        </div>
    )
}

export default Contact
