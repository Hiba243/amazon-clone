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
                      
            <img src={image} alt="product img">
            </img>
            <div className="desc">
            <div className="product__info">
                <Link to={"/products/"+id} style={{color:'white'}}><p><strong>SuperBalm</strong></p></Link></div>  
                <div className="product__info-price-desc">
                    <p  style={{color:'white'}}>lip balm</p>
                <p className="product__price"  style={{color:'white'}}>${price}</p>
                </div>
                </div>
            
            {/* <div>
                <ProductForm id={id} onAddToCart={addToBasketHandler}/>
            </div> */}
        </div>
    )
}

export default Product
