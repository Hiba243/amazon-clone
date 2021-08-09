import React from 'react'
import Product from './Product'
import useProducts from './use-products';
import './AllProducts.css'

function AllProducts() {
  const products = useProducts();

  const productsList = products.map((prdct) => <Product
    key={prdct.id}
    id={prdct.id}
    title={prdct.title}
    price={prdct.price}
    image={prdct.image}
    desc={prdct.desc}
  />
  );
  return (
    <div className="section-padding allProducts">
      <div id="productList"><p className="shopProductsHeading allProductsPageHeading">OUR PRODUCTS</p></div>
      <div className="home__row">
        {productsList}
      </div>
    </div>
  )
}

export default AllProducts
