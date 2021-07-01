import './Header.css'
import {useContext,useState} from 'react'
import SearchIcon from '@material-ui/icons/Search'
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket'
import { Link, useHistory } from "react-router-dom";
import AuthContext from './reducer';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

function Header() {
    const history = useHistory();
    const authCtx = useContext(AuthContext);
    const list=authCtx.listOfItems;
    const [value, setValue] = useState(list[0]);
    const [inputValue, setInputValue] = useState('');

    const handleAuthenticaton = () => {
        console.log(authCtx.isLoggedIn)
        if (authCtx.isLoggedIn) {
            authCtx.logout();
        }
    }
    const useremail=authCtx.email;
    
    const setSearch = (e) => {
        if(e){
        let url="/filtered/" + e;
        history.push(url);
        }
    }
    
    return (
        <div className="header">
            <Link to="/home">
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
                      setSearch(newValue?.category);
                    }}
                    inputValue={inputValue}
                    onInputChange={(event, newInputValue) => {
                    setInputValue(newInputValue);
                    }}
                    id="combo-box-demo"
                    options={list}
                    getOptionLabel={(option) => option.category}
                    renderInput={(params) => <TextField {...params}/>}
                />
                
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
