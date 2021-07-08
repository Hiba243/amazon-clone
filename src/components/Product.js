import './Product.css'
import ProductForm  from './ProductForm';
import {Link} from "react-router-dom";
import { useStateValue } from "./StateProvider";

function Product({ id, title, image, price}) {
    const [{basket},dispatch] = useStateValue();
    const addToBasketHandler = (amount) => {
        dispatch({
            type: "ADD_TO_BASKET",
            item: {
              id: id,
              title: title,
              image: image,
              price: price,
              amount: amount,
            },
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
