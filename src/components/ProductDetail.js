import './ProductDetail.css'
import {useContext} from 'react'
import ProductForm  from './ProductForm';
import AuthContext from './reducer';
import {useParams} from "react-router-dom";

function ProductDetail() {
    const authCtx = useContext(AuthContext);
    const params =  useParams();
    let filteredList=sessionStorage.getItem('product-list');
    filteredList=JSON.parse(filteredList);  
    const product=filteredList.filter(item => item.id === params.productId);
   
    const title=product[0].title;
    const id=product[0].id;
    const image=  product[0].image;
    const price=product[0].price;
    
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

export default ProductDetail
