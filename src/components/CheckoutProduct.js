import React from 'react'
import './CheckoutProduct.css'
import { useStateValue } from './StateProvider';

function CheckoutProduct({id,image,price,title,rating,amount}) {
    const [{ basket }, dispatch] = useStateValue();
    const removeFromBasket = () => {
        console.log('removing item');
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            id: id
        })
    }
    const addToBasketHandler = () => {
        dispatch({
            type: 'ADD_TO_BASKET',
            item: {
                id: id,
                title: title,
                image:  image,
                price: price,
                amount: 1
            }
        });
      };
    return (
        <div className="checkoutProduct" key={id}>
            <img src={image} alt="" className="checkoutProduct__image"/>
            <div className="checkoutProduct__info">
                <p className="checkoutProduct__title">
                    {title}
                </p>
                <p className="checkoutProduct__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <p>Amount: {amount}</p>
                <button onClick={removeFromBasket}>-</button>
                <button onClick={addToBasketHandler}>+</button>
            </div>
        </div>
    )
}

export default CheckoutProduct
