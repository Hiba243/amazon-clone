import './App.css';
import Header from './components/Header';
import Home from './components/Home'
import Checkout from './components/Checkout'
import FilteredProducts from './components/FilteredProducts'
import Login from './components/Login';
import ProductDetail from './components/ProductDetail';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {useContext,useEffect} from "react";
import AuthContext from './components/reducer';

function App() {
  const authCtx = useContext(AuthContext);
  useEffect(()=>{
    const data=localStorage.getItem('basket-list');
    if(data)
    authCtx.addItem(JSON.parse(data));
  },[]);
  useEffect(()=>{
    localStorage.setItem('basket-list',JSON.stringify(authCtx.basket));
  })

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
          <Route path="/login">
            <Login />
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
