import React, { useState, useEffect, useCallback } from 'react';
import { useReducer } from 'react';

let logoutTimer;

const AuthContext = React.createContext({
  token: '',
  email: '',
  isLoggedIn: false,
  basket: [],
  totalAmount: 0,
  login: (token) => {},
  logout: () => {},
  addToBasket: (item) => {},
  removeFromBasket: (id) => {},
  addUserEmail: (email) => {},
  removeUserEmail: () => {},
});
const defaultCartState = {
  basket: [],
  totalAmount: 0,
};
const cartReducer = (state, action) => {
  if (action.type === 'ADD') {
    console.log(state);
    const updatedTotalAmount =
      (state.totalAmount + (action.item.price * action.item.amount));
    console.log(state.totalAmount);
    const existingCartItemIndex = state.basket.findIndex(
      (item) => item.id === action.item.id
    );
    const existingCartItem = state.basket[existingCartItemIndex];
    let updatedItems;

    if (existingCartItem) {
      const updatedItem = {
        ...existingCartItem,
        amount: existingCartItem.amount + action.item.amount,
      };
      updatedItems = [...state.basket];
      updatedItems[existingCartItemIndex] = updatedItem;
    } else {
      updatedItems = state.basket.concat(action.item);
    }

    return {
      basket: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }
  if (action.type === 'REMOVE') {
    const existingCartItemIndex = state.basket.findIndex(
      (item) => item.id === action.id
    );
    const existingItem = state.basket[existingCartItemIndex];
    const updatedTotalAmount = state.totalAmount - existingItem.price;
    let updatedItems;
    if (existingItem.amount === 1) {
      updatedItems = state.basket.filter(item => item.id !== action.id);
    } else {
      const updatedItem = { ...existingItem, amount: existingItem.amount - 1 };
      updatedItems = [...state.basket];
      updatedItems[existingCartItemIndex] = updatedItem;
    }

    return {
      basket: updatedItems,
      totalAmount: updatedTotalAmount
    };
  }

  if (action.type === 'CLEAR') {
    return defaultCartState;
  }

  return defaultCartState;
};

export const getBasketTotal = (basket) =>
    basket?.reduce((amount, item) => (item.price * item.amount) + amount, 0);

const calculateRemainingTime = (expirationTime) => {
  const currentTime = new Date().getTime();
  const adjExpirationTime = new Date(expirationTime).getTime();

  const remainingDuration = adjExpirationTime - currentTime;

  return remainingDuration;
};

const retrieveStoredToken = () => {
  const storedToken = localStorage.getItem('token');
  const storedExpirationDate = localStorage.getItem('expirationTime');
  const storedEmail = localStorage.getItem('email');

  const remainingTime = calculateRemainingTime(storedExpirationDate);

  if (remainingTime <= 3600) {
    localStorage.removeItem('token');
    localStorage.removeItem('expirationTime');
    localStorage.removeItem('email');
    return null;
  }

  return {
    token: storedToken,
    duration: remainingTime,
    email: storedEmail
  };
};

export const AuthContextProvider = (props) => {
  const tokenData = retrieveStoredToken();
  
  let initialToken;
  let initialEmail;
  if (tokenData) {
    initialToken = tokenData.token;
    initialEmail=tokenData.email;
  }

  const [token, setToken] = useState(initialToken);
  const [email,setEmail]=useState(initialEmail);
  const userIsLoggedIn = !!token;

  const logoutHandler = useCallback(() => {
    setToken(null);
    setEmail(null);
    localStorage.removeItem('token');
    localStorage.removeItem('expirationTime');
    localStorage.removeItem('email');

    if (logoutTimer) {
      clearTimeout(logoutTimer);
    }
  }, []);

  const loginHandler = (token, expirationTime, email) => {
    setToken(token);
    setEmail(email);
    localStorage.setItem('token', token);
    localStorage.setItem('expirationTime', expirationTime);
    localStorage.setItem('email', email);

    const remainingTime = calculateRemainingTime(expirationTime);

    logoutTimer = setTimeout(logoutHandler, remainingTime);
  };
  useEffect(() => {
    if (tokenData) {
      console.log(tokenData.duration);
      logoutTimer = setTimeout(logoutHandler, tokenData.duration);
    }
  }, [tokenData, logoutHandler]);

  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );

  const addItemToCartHandler = (item) => {
    dispatchCartAction({ type: 'ADD', item: item });
  };

  const removeItemFromCartHandler = (id) => {
    dispatchCartAction({ type: 'REMOVE', id: id });
  };

  const clearCartHandler = () => {
    dispatchCartAction({type: 'CLEAR'});
  };
  
  const contextValue = {
    token: token,
    email: email,
    isLoggedIn: userIsLoggedIn,
    login: loginHandler,
    logout: logoutHandler,
    basket: cartState.basket,
    totalAmount: cartState.totalAmount,
    user:cartState.user,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
    clearCart: clearCartHandler,
  };
  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
