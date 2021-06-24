import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search'
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket'
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { auth } from "../firebase";

function Header() {
    
    const [{basket,user}, dispatch] = useStateValue();
    var email=null;
    if(user)
    email=user.user.email;
    const handleAuthenticaton = () => {
        if (email) {
            dispatch({
                type: "REMOVE_USER",
                user: auth
            });
        }
    }
    return (
        <div className="header">
            <Link to="/home">
                <img src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="logo" className="header__logo"></img>
            </Link>
            <div className="header__search">
                <input className="header__searchInput" type="text"></input>
                <SearchIcon className="header__searchIcon"></SearchIcon>
            </div>
            <div className="header__nav" >
                <Link to='/'>
                    <div className="header__option" onClick={handleAuthenticaton}>
                        <span className="header__optionLineOne">Hello {!email ? 'Guest' : user.user.email}</span>
                        <span className="header__optionLineTwo">{email ? 'Sign Out' : 'Sign In'}</span>
                    </div>
                </Link>
                <div className="header__option">
                    <span className="header__optionLineOne">Returns</span>
                    <span className="header__optionLineTwo">& orders</span>
                </div>
                <div className="header__option">
                    <span className="header__optionLineOne">Your</span>
                    <span className="header__optionLineTwo">Prime</span>
                </div>
                <Link to="/checkout">
                    <div className="header__optionBasket">
                        <ShoppingBasketIcon />
                        <span className="header__optionLineTwo header__basketCount">{basket?.length}</span>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default Header
