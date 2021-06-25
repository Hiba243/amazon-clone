import {useContext} from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search'
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket'
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { auth } from "../firebase";
import AuthContext from './reducer';

function Header() {

    const authCtx = useContext(AuthContext);
    const handleAuthenticaton = () => {
        console.log(authCtx.isLoggedIn)
        if (authCtx.isLoggedIn) {
            authCtx.logout();
        }
    }
    const useremail=authCtx.email;
    console.log(useremail);
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
                <Link to={authCtx.isLoggedIn ? '/': '/login'}>
                    <div className="header__option" onClick={handleAuthenticaton}>
                        <span className="header__optionLineOne">Hello {useremail? useremail: 'Guest'}</span>
                        <span className="header__optionLineTwo">{authCtx.isLoggedIn ? 'Sign Out': 'Sign In'}</span>
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
                        <span className="header__optionLineTwo header__basketCount">{authCtx.basket?.length}</span>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default Header
