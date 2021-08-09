import './Header.css'
import { useState, useRef } from 'react'
import { Link, useHistory } from "react-router-dom";
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import useProducts from './use-products';
import { useStateValue } from "./StateProvider";
import { auth } from "../firebase";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  paper: {
    fontFamily: "Object Sans"
  }
});

function Header() {
  const classes = useStyles();
  const refHamburger = useRef();
  const refNavMenu = useRef();
  const refSearchBar = useRef();

  function mobileMenu() {
    const hamburger = refHamburger.current;
    const navMenu = refNavMenu.current;
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
    var bodyelem;
    if (hamburger.classList.contains('active')) {
      bodyelem = document.getElementsByTagName('body');
      bodyelem[0].style.overflow = 'hidden';
    }
    else {
      bodyelem = document.getElementsByTagName('body');
      bodyelem[0].style.overflow = 'visible';
    }
  }


  function closeMenu() {
    const hamburger = refHamburger.current;
    const navMenu = refNavMenu.current;
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
    var bodyelem = document.getElementsByTagName('body');
    bodyelem[0].style.position = 'relative';
    bodyelem[0].style.overflow = 'visible';
  }

  const history = useHistory();
  const [{ basket, user }, dispatch] = useStateValue();
  let list = useProducts();
  list = [
    ...new Set(
      list.map((product) => { return product.category; })
    ),
  ];
  const [value, setValue] = useState(list[0]);
  const [inputValue, setInputValue] = useState('');
  const handleAuthenticaton = () => {
    auth.signOut();
  }

  const setSearch = (e) => {
    if (e) {
      let url = "/filtered/" + e;
      history.push(url);
    }
  }

  return (
    <header className="section-padding">
      <nav className="navbar">
        <ul className="nav__menu" ref={refNavMenu}>
          <div className="link-flex">

            <li className="nav__item">
              <Link to="/" className="nav__link link-effect" onClick={closeMenu}
              >Home</Link
              >
            </li>
          </div>
          <div className="link-flex">

            <li className="nav__item">
              <Link to="/allProducts" className="nav__link link-effect" onClick={closeMenu}
              >Products</Link
              >
            </li>
          </div>
          <div className="link-flex">

            <li className="nav__item">
              <Link to="/about" className="nav__link link-effect" onClick={closeMenu}
              >About</Link
              >
            </li>
          </div>
        </ul>
        <div className="hamburger" ref={refHamburger} onClick={mobileMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
        <Link to="/" className="logo">SUPER<span className="logo-skin">SKIN</span></Link>

        <div className="flex-au">

          <div className="header__search">

            <Autocomplete
              className="AutoComplete"
              value={value}
              onChange={(event, newValue) => {
                setValue(newValue);
                setSearch(newValue);
              }}
              inputValue={inputValue}
              onInputChange={(event, newInputValue) => {
                setInputValue(newInputValue);
              }}
              id="combo-box-demo"
              classes={{ paper: classes.paper }}
              options={list}
              renderInput={(params) => <TextField {...params} />}
              style={{ width: "200px", fontFamily: 'Object Sans' }}
              ref={refSearchBar}
            />

          </div>
          <div className="header__nav" >
            <Link to={!user ? '/login' : history.location.pathname}>
              <div className="header__option" onClick={handleAuthenticaton}>
                {user ? <p>SIGN OUT</p> : <p>SIGN IN</p>}
              </div>
            </Link>
            <Link to="/checkout">
              <div className="header__optionBasket">
                <p>CART {basket.length > 0 ? `[ ${basket.length} ]` : ''}</p>
              </div>
            </Link>
          </div>
        </div>
      </nav>
    </header>

  )
}

export default Header
