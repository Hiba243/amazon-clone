import './Product.css'
import { Link, useHistory } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import React, { useRef, useEffect } from 'react';
import CSSRulePlugin from "gsap/CSSRulePlugin";
import useOnScreen from './useOnScreen';

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
                <div className="img-container">
                    <img src={image} alt="product" />
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
        </div>

    )
}

export default Product
