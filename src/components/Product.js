import {useContext} from 'react'
import './Product.css'
import { useStateValue } from './StateProvider';
import ProductForm  from './ProductForm';
import AuthContext from './reducer';
import { auth } from '../firebase';

function Product({ id, title, image, price}) {
    const authCtx = useContext(AuthContext);

    const addToBasketHandler = (amount) => {
        authCtx.addItem({
            id: id,
            title: title,
            image:  image,
            price: price,
            amount: amount
        });     
    };
    return (
        <div className="product">
            <div className="product__info">
                <p><strong>{title}</strong></p>
                <p className="product__price"><small>$</small><strong>{price}</strong></p>
            </div>            
            <img src={image} alt="product img">
            </img>
            <div>
                <ProductForm id={id} onAddToCart={addToBasketHandler}/>
            </div>
        </div>
    )
}

export default Product
