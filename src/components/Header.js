import './Header.css'
import {useState} from 'react'
import SearchIcon from '@material-ui/icons/Search'
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket'
import { Link, useHistory } from "react-router-dom";
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import useProducts from './use-products';
import { useStateValue } from "./StateProvider";
import { auth } from "../firebase";

function Header() {
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
        <div className="header">
            <Link to="/">
                <img src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="logo" className="header__logo"></img>
            </Link>
            <div className="header__search">
                {/* <input className="header__searchInput" type="text"
                onChange={(e) => {
                    setSearch(e.target.value.toLowerCase());
                  }}
                ></input> */}
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
                    options={list}                   
                    renderInput={(params) => <TextField {...params}/>}
                />
                
            </div>
            <div className="header__nav" >
                <Link to={!user ? '/login' : history.location.pathname}>
                    <div className="header__option" onClick={handleAuthenticaton}>
                        {/* <span className="header__optionLineOne">Hello {!user ? 'Guest' : user.email}</span> */}
                        
                        <span className="header__optionLineTwo">{user ? 'Sign Out' : 'Sign In'}</span>
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
                        <ShoppingBasketIcon />
                        <span className="header__optionLineTwo header__basketCount">{basket?.length}</span>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default Header
