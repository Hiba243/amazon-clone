import './Product.css'
import {useContext} from 'react'
import ProductForm  from './ProductForm';
import AuthContext from './reducer';
import {Link} from "react-router-dom";

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
                <Link to={"/products/"+id}><p><strong>{title}</strong></p></Link>
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
