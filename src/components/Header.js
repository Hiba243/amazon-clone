import './Header.css'
import {useState,useRef} from 'react'
import SearchIcon from '@material-ui/icons/Search'
import ShoppingBasketOutlinedIcon from '@material-ui/icons/ShoppingBasketOutlined';
import { Link, useHistory } from "react-router-dom";
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import useProducts from './use-products';
import { useStateValue } from "./StateProvider";
import { auth } from "../firebase";
import PersonOutlineOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import { makeStyles } from "@material-ui/core/styles";
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';

const useStyles = makeStyles({
  paper: {
    fontFamily: "Object Sans"
  }
});

function Header() {
    const classes = useStyles();
    const refHamburger = useRef();
  const refNavMenu = useRef();
  const refStar1 = useRef();
  const refStar2 = useRef();
  const refStar3 = useRef();
  const refSearchIcon = useRef();
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
    const [{ basket,user }, dispatch] = useStateValue();
    let list= useProducts();
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
        if(e){
        let url="/filtered/" + e;
        history.push(url);
        }
    }
    
    return (
        <header>
      <nav className="navbar">
      <ul className="nav__menu" ref={refNavMenu}>
          <div className="link-flex">
            <div className="star" id="star-1" ref={refStar1}></div>
            <li className="nav__item">
              <a href="#about" className="nav__link link-effect" onClick={closeMenu} 
              >Face Wash</a
              >
            </li>
          </div>
          <div className="link-flex">
            <div className="star" id="star-2" ref={refStar2}></div>
            <li className="nav__item">
              <a href="#work" className="nav__link link-effect" onClick={closeMenu} >Serum</a>
            </li>
          </div>
          <div className="link-flex">
            <div className="star" id="star-3" ref={refStar3}></div>
            <li className="nav__item">
              <a href="#contact" className="nav__link link-effect" onClick={closeMenu} 
              >Exfoliant</a
              >
            </li>
          </div>
        </ul>
        <div className="hamburger" ref={refHamburger} onClick={mobileMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
       
           
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
                   renderInput={(params) => <TextField {...params}/>}
                   style={{ width: "200px" , fontFamily: 'Object Sans'}}
                   ref={refSearchBar}
               />
              
           </div> 
           <div className="header__nav" >
                 <Link to={!user ? '/login' : history.location.pathname}>
                     <div className="header__option" onClick={handleAuthenticaton}>
                         <PersonOutlineOutlinedIcon/>
                         
                     </div>
                 </Link>
                 {/* <Link to='/orders'>
                 <div className="header__option">
                     <span className="header__optionLineOne">Returns</span>
                     <span className="header__optionLineTwo">& orders</span>
                 </div>
                 </Link> */}
                 <Link to="/checkout">
                     <div className="header__optionBasket">
                         <ShoppingBasketOutlinedIcon/>
                    
                     </div>
                 </Link>
             </div>
             </div>
      </nav>
    </header>
        // <div className="header">
            
        //      <div className="header__search">
        //         {/* <input className="header__searchInput" type="text"
        //         onChange={(e) => {
        //             setSearch(e.target.value.toLowerCase());
        //           }}
        //         ></input> */}
        //         <Autocomplete
        //             className="AutoComplete"
        //             value={value}
        //             onChange={(event, newValue) => {                     
        //               setValue(newValue);
        //               setSearch(newValue);
        //             }}
        //             inputValue={inputValue}
        //             onInputChange={(event, newInputValue) => {
        //             setInputValue(newInputValue);
        //             }}
        //             id="combo-box-demo"
        //             options={list}                   
        //             renderInput={(params) => <TextField {...params}/>}
        //             style={{ width: "200px" }}
        //         />
                
        //     </div>
            
        //     <Link to="/" className="logo">
        //         <h1>SUPERFLUID</h1>
        //     </Link>
           
        //     <div className="header__nav" >
        //         <Link to={!user ? '/login' : history.location.pathname} className="no-underline">
        //             <div className="header__option" onClick={handleAuthenticaton}>
        //                 {/* <span className="header__optionLineOne">Hello {!user ? 'Guest' : user.email}</span> */}
                        
        //                 <span className="header__optionLineTwo">{user ? 'Sign Out' : 'Sign In'}</span>
        //             </div>
        //         </Link>
        //         {/* <Link to='/orders'>
        //         <div className="header__option">
        //             <span className="header__optionLineOne">Returns</span>
        //             <span className="header__optionLineTwo">& orders</span>
        //         </div>
        //         </Link> */}
        //         <Link to="/checkout">
        //             <div className="header__optionBasket">
        //                 <ShoppingBasketIcon />
        //                 <span className="header__optionLineTwo header__basketCount">{basket?.length}</span>
        //             </div>
        //         </Link>
        //     </div>
          
        // </div>
    )
}

export default Header
