import React from 'react'
import './About.css'
import { Link } from "react-router-dom";
import useProducts from './use-products';
function About() {
  const products = useProducts();
  return (
    <div className="about aboutPage section-padding" id="about">
      <div className="abt-img">
        <img src={products[0] ? products[0].image : ''}  alt="" className="car-img abt-img-1 abtPageImg" />
      </div>
      <div className="features">
        <div className="feature__1">
          <p className="abt-content abtPageContent">Magical Beauty is a skincare line inspired by real skin - with the aim of making skincare easy and stress free. Explore all 20+ products for all needs and all budgets</p>
          <br />
          <p className="abt-content abtPageContent">We’re serious about ingredients. Our 200+ carefully selected brands are at the forefront of the clean beauty movement. No toxins. Only goodness.</p>
          <br />
          <p className="abt-content abtPageContent">We’re serious about ingredients. Our 200+ carefully selected brands are at the forefront of the clean beauty movement. No toxins. Only goodness.</p>
          <br />
          <Link to="/allProducts"><button className="button sml-btn">Shop All</button></Link>
        </div>
      </div>
    </div>
  )
}

export default About
