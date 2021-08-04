import './Home.css'
import Product from './Product'
import useProducts from './use-products';
import Image2 from '../img/Captured.JPG';
import useImages from './use-images';
import {Link} from 'react-router-dom'
import React, { useRef, useEffect } from 'react';
import CSSRulePlugin from "gsap/CSSRulePlugin";
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TimelineLite, Power2 } from "gsap";
import useOnScreen from './useOnScreen';

function Home() {
  const products = useProducts();
  const images = useImages();
  
  let image1 = useRef(null);
  let container = useRef(null);
  const img = useRef();
  let isVisible = useOnScreen(img);
  let imageReveal = CSSRulePlugin.getRule(".img-containerHome:after");
  let tl = new TimelineLite();

  let imageAbout = useRef(null);
  let containerAbout = useRef(null);
  const imgAbout = useRef();
  let isVisibleAbout = useOnScreen(imgAbout);
  let imageRevealAbout = CSSRulePlugin.getRule(".img-containerAbout:after");
  let tlAbout = new TimelineLite();

  useEffect(() => {
      if (isVisible) {
          tl.to(container, 0, { css: { visibility: "visible" } });
          tl.to(imageReveal, 1, { width: "0%", ease: Power2.easeInOut });
      }
      if (isVisibleAbout) {
        tlAbout.to(containerAbout, 0, { css: { visibility: "visible" } });
        tlAbout.to(imageRevealAbout, 1, { width: "0%", ease: Power2.easeInOut });
    }
  });

  
  const productsList = products.map((prdct) => <Product
    key={prdct.id}
    id={prdct.id}
    title={prdct.title}
    price={prdct.price}
    image={prdct.image}
    desc={prdct.desc}
  />
  );
  const id= images[0] ? images[0].imgId : '';
  const imgId=products[0] ? products[0].id :  '';
  return (
    <div className="home">
      <div>
        <Link to={"/products/"+id}>
                <section className="mainHome">
                    <div className="containerHome" ref={el => (container = el)}>
                        <>
                            <div className="img-containerHome" ref={img}>
                                <img src={images[0] ? images[0].image : ''} ref={el => { image1 = el; }} />
                            </div>
                        </>
                    </div>
                </section>
          {/* <img src={images[0] ? images[0].image : ''} className="home__container" alt="" /> */}
          </Link>
      </div>
      <div id="productList"><p className="shopProductsHeading section-padding">OUR PRODUCTS</p>
      <p className="shopProductsSubHeading section-padding">We created Superfluid with the aim of making skincare easy and stress free, fun and bold. And we forgot - all of our products are also vegan and cruelty free.</p></div>
      <div className="home__row section-padding">
        {productsList}
      </div>
      <div className="about" id="about">
        <div className="abt-img">
        <Link to={"/products/"+imgId}>
        <section className="mainAbout">
                    <div className="containerAbout" ref={el => (containerAbout = el)}>
                        <>
                            <div className="img-containerAbout" ref={imgAbout}>
                                <img src={products[0] ? products[0].image : ''} ref={el => { imageAbout = el; }} />
                            </div>
                        </>
                    </div>
                </section>
                </Link>
          {/* <img src={products[0] ? products[0].image : ''} alt="" className="car-img abt-img-1" /> */}
        </div>
        <div className="features">
          <div className="feature__1">
            <p className="abt-content">SuperSkin is a skincare line inspired by real skin - with the aim of making skincare easy and stress free. Explore all 20+ products for all needs and all budgets</p>
            <br />
            <p className="abt-content">We’re serious about ingredients. Our ingredients are carefully selected and we are at the forefront of the clean beauty movement. No toxins. Only goodness.</p>
            <br />
            
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
