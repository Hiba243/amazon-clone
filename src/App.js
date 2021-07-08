import './App.css';
import Header from './components/Header';
import Home from './components/Home'
import Checkout from './components/Checkout'
import FilteredProducts from './components/FilteredProducts'
import Login from './components/Login';
import ProductDetail from './components/ProductDetail';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {useEffect} from "react";
import Register from './components/Register';
import Payment from './components/Payment';
import {loadStripe} from "@stripe/stripe-js";
import {Elements}  from "@stripe/react-stripe-js";
import { useStateValue } from "./components/StateProvider";
import {auth} from "./firebase";

const promise= loadStripe('pk_test_51JAszhSF3XO15ySUFDYqeN2mPoDY4cKb0VQ4xjWMNqdl3M3sWxXCcVx487splKGO4tZHyxRzsXwUM2kfpoT3WDkQ00hHsp5sYM');

function App() {
  
  const [{basket, user}, dispatch] = useStateValue();
  useEffect(()=>{
    const data=localStorage.getItem('basket-list');
    if(data)
    dispatch({
      type: "ADD_TO_BASKET",
      item: (JSON.parse(data)),
    });
  },[]);
  useEffect(()=>{
    localStorage.setItem('basket-list',JSON.stringify(basket));
  })

  useEffect(()=>{

    auth.onAuthStateChanged((authUser) => {

      if (authUser) {
        // the user just logged in / the user was logged in

        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  },[]);

  return (
    <Router>
      <div className="app">
        <Switch>         
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/filtered/:filterTag">
            <Header />
            <FilteredProducts />
          </Route>
          <Route path="/products/:productId">
            <Header />
            <ProductDetail />
          </Route>
          {user && <Route path="/payment">
            <Header />
            <Elements stripe={promise}>
            <Payment/>
            </Elements>
          </Route>}
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
