import './Product.css'
import ProductForm from './ProductForm';
import { Link, useHistory } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import React, { useRef, useEffect } from 'react';
import CSSRulePlugin from "gsap/CSSRulePlugin";
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TimelineLite, Power2 } from "gsap";
import useOnScreen from './useOnScreen';

function Product({ id, title, image, price, desc }) {
    let image1 = useRef(null);
    let container = useRef(null);
    let imageReveal = CSSRulePlugin.getRule(".img-container:after");
    const history = useHistory();
    const [{ basket }, dispatch] = useStateValue();

    const img = useRef();
    let isVisible = useOnScreen(img);
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
    let tl = new TimelineLite();

    useEffect(() => {
        if (isVisible) {
            tl.to(container, 0, { css: { visibility: "visible" } });
            tl.to(imageReveal, 1, { width: "0%", ease: Power2.easeInOut });
        }
    },[isVisible]);

    return (

        <div className="product">
            <Link to={"/products/" + id}>
                <section className="main">
                    <div className="container" ref={el => (container = el)}>
                        <>
                            <div className="img-container" ref={img}>
                                <img src={image} ref={el => { image1 = el; }} />
                            </div>
                        </>
                    </div>
                </section>
                {/* <div className="product productImg">
                    <img src={image} alt="product img"></img>
                </div> */}
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
