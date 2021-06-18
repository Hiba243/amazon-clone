import './App.css';
import Header from './components/Header';
import Home from './components/Home'
import Checkout from './components/Checkout'
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import Login from './components/Login';
import React, { useEffect } from "react";
import { auth } from "./firebase";
import { useStateValue } from "./components/StateProvider";

function App() {
  const [{ user }, dispatch] = useStateValue();


  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          {user && <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          }
          {/*default root should always be at the bottom*/}
          {user && <Route path="/">
            <Header />
            <Home />
          </Route>
          }

        </Switch>
      </div>
    </Router>
  );
}

export default App;
