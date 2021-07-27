import React from 'react';
import { Link } from "react-router-dom";
import '../Styles/Header.css';
import { withStyles } from "@material-ui/core/styles";
import { IconButton, Badge } from '@material-ui/core'
import Logo from '../assets/svg/Touch of Gold - Image-based.svg';
import heartIcon from '../assets/svg/heart.svg';
import bagIcon from '../assets/svg/shopping-bag.svg';
import userIcon from '../assets/svg/user.svg';

const styles = theme => ({
    margin: {
      margin: theme.spacing.unit * 2
    },
    customBadge: {
      backgroundColor: "#00AFD7",
      color: "white"
    }
  });

function Header({ totalItems }) {
    
    return (
        <div className="head_header">
            <div className="header_cont">
                <div className="header_logo_cont">
                    <img src={Logo} alt="logo" />
                </div>
                <div className="header_nav_cont">
                    <Link className="header_nav_link" to="/">
                        <p className="header_nav_link_txt">Home</p>
                    </Link>
                    <Link className="header_nav_link" to="/shop">
                        <p className="header_nav_link_txt" >Shop</p>
                    </Link>
                    <Link className="header_nav_link" to="/contact">
                        <p className="header_nav_link_txt" >Contact Us</p>
                    </Link>
                </div>
                <div className="header_cart_cont">
                    <img className="header_cart_icons" src={userIcon} alt="" />
                    <img className="header_cart_icons" src={heartIcon} alt="" />
                    <Link to="/cart">
                        <IconButton>
                            <Badge badgeContent={totalItems} showZero={false} color="secondary">
                                <img className="header_cart_icons" src={bagIcon} alt="" color="default" />
                            </Badge>
                        </IconButton>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Header
