import React from 'react'
import Product from './Product'
import useProducts from './use-products';
import './AllProducts.css'

function AllProducts() {
    const products = useProducts();

  const productsList = products.map((meal) => <Product
    key={meal.id}
    id={meal.id}
    title={meal.title}
    price={meal.price}
    image={meal.image}
  />
  );
    return (
        <div className="allProducts">
        <div id="productList"><p className="shopProductsHeading">Shop all products</p></div>
        <div className="home__row">
          {productsList}
          {productsList[0]}
          {productsList[1]}
          {productsList[2]}
        </div>
        </div>
    )
}

export default AllProducts
