import './CheckoutProduct.css'
import {useContext} from 'react'
import AuthContext from './reducer';

function CheckoutProduct({id,image,price,title,amount}) {
    const authCtx = useContext(AuthContext);

    const removeFromBasket = () => {
        authCtx.removeItem(id);
    }
    const addToBasketHandler = () => {
        authCtx.addItem({
            id: id,
            title: title,
            image:  image,
            price: price,
            amount: 1
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
