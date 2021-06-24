import './App.css';
import Header from './components/Header';
import Home from './components/Home'
import Checkout from './components/Checkout'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from './components/Login';
import React from "react";
import { useStateValue } from "./components/StateProvider";

function App() {
  const [{ user }] = useStateValue();

  return (
    <Router>
      <div className="app">
        <Switch>
          {user && <Route path="/home">
            <Header />
            <Home />
          </Route>
          }
          {user && <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          }
          <Route path="/">
            <Login />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
