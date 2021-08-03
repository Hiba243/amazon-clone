import './Product.css'
import ProductForm from './ProductForm';
import { Link, useHistory } from "react-router-dom";
import { useStateValue } from "./StateProvider";

function Product({ id, title, image, price, desc }) {
    const history = useHistory();
    const [{ basket }, dispatch] = useStateValue();
    const addToBasketHandler = () => {

        dispatch({
            type: "ADD_TO_BASKET",
            item: {
                id: id,
                title: title,
                image: image,
                price: price,
                desc: desc,
                amount: 1,
            },
        });
        history.push("/checkout")
    };

    return (

        <div className="product">
            <Link to={"/products/" + id}>
            <div className="product productImg">
            <img src={image} alt="product img">
            </img>
            </div>
            </Link>
            <div className="desc">
                <div className="product__info">
                    <Link to={"/products/" + id}><p className="product_name"><strong>{title}</strong></p></Link>
                    <Link to={"/products/" + id}>
                        <div className="product__info-price-desc">
                            <p>{desc}</p>
                            <p className="product__price" style={{ color: '#c4293c' }}>${price}</p>
                        </div>
                    </Link>
                    <button className="button prdct-btn" onClick={addToBasketHandler}>Add to cart</button>
                </div>
            </div>
            {/* <div>
                <ProductForm id={id} onAddToCart={addToBasketHandler}/>
            </div> */}
        </div>

    )
}

export default Product
