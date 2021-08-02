import React from 'react'
import './About.css'
import { Link } from "react-router-dom";
function About() {
    return (
        <div className="about aboutPage" id="about">
        <div className="abt-img">
          <img src="https://images.ctfassets.net/vnxry7jc7f2k/5Xra2xQwAg0moYjschl66s/c01263879933895ee760cebd1dd4bf8f/cleanser_1.jpg?w=800&q=80" alt="" className="car-img abt-img-1" />
        </div>
        <div className="features">
          <div className="feature__1">
            <p className="abt-content">Magical Beauty is a skincare line inspired by real skin - with the aim of making skincare easy and stress free. Explore all 20+ products for all needs and all budgets</p>
            <br />
            <p className="abt-content">We’re serious about ingredients. Our 200+ carefully selected brands are at the forefront of the clean beauty movement. No toxins. Only goodness.</p>
            <br />
            <p className="abt-content">We’re serious about ingredients. Our 200+ carefully selected brands are at the forefront of the clean beauty movement. No toxins. Only goodness.</p>
            <br />
            <Link to="/allProducts"><button className="button sml-btn">Shop All</button></Link>
          </div>
        </div>
      </div>
    )
}

export default About
