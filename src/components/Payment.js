import {useContext} from 'react'
import './Payment.css'
import AuthContext from './reducer';
import CheckoutProduct from './CheckoutProduct';
import { Link } from "react-router-dom";

function Payment() {
    const authCtx = useContext(AuthContext);
    const basket=authCtx.basket;
    const useremail=authCtx.email;
    return (
        <div className="payment">
            <div className="payment__container">

                <h1>
                    Checkout (
                        <Link to="/checkout">{basket?.length} items</Link>
                        )
                </h1>

                <div className='payment__section'>
                <div className='payment__title'>
                        <h3>User Details</h3>
                    </div>
                    <div className='payment__address'>
                        <p>{useremail? useremail: 'Guest'}</p>
                    </div>
                </div>
                <div className='payment__section'>
                <div className='payment__title'>
                        <h3>Review items and delivery</h3>
                    </div>
                    <div className='payment__items'>
                        {basket.map(item => (
                            <CheckoutProduct
                                id={item.id}
                                title={item.title}
                                image={item.image}
                                price={item.price}
                                amount={item.amount}
                            />
                        ))}
                    </div>
                </div>
                <div className='payment__section'>
                <div className="payment__title">
                        <h3>Payment Method</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Payment
