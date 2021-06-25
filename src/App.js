import './App.css';
import Header from './components/Header';
import Home from './components/Home'
import Checkout from './components/Checkout'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from './components/Login';
import {useContext} from "react";
import AuthContext from './components/reducer';

function App() {
  const authCtx = useContext(AuthContext);
  return (
    <Router>
      <div className="app">
        <Switch>
          {authCtx.isLoggedIn && <Route path="/home">
            <Header />
            <Home />
          </Route>
          }
          {authCtx.isLoggedIn && <Route path="/checkout">
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
