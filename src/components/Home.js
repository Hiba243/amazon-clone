import './Home.css'
import Product from './Product'
import useProducts from './use-products';
import Image2 from '../img/Captured.JPG';
import useImages from './use-images';
import {Link} from 'react-router-dom'

function Home() {
  const products = useProducts();
  const images = useImages();
  
  const productsList = products.map((prdct) => <Product
    key={prdct.id}
    id={prdct.id}
    title={prdct.title}
    price={prdct.price}
    image={prdct.image}
    desc={prdct.desc}
  />
  );
  console.log(images[0]);
  const id= images[0] ? images[0].imgId : '';
  return (
    <div className="home">
      <div>
        <Link to={"/products/"+id}><img src={images[0] ? images[0].image : ''} className="home__container" alt="" /></Link>
      </div>
      <div id="productList"><p className="shopProductsHeading section-padding">OUR PRODUCTS</p>
      <p className="shopProductsSubHeading section-padding">We created Superfluid with the aim of making skincare easy and stress free, fun and bold. And we forgot - all of our products are also vegan and cruelty free.</p></div>
      <div className="home__row section-padding">
        {productsList}
      </div>
      <div className="about" id="about">
        <div className="abt-img">
          <img src="https://images.ctfassets.net/vnxry7jc7f2k/5Xra2xQwAg0moYjschl66s/c01263879933895ee760cebd1dd4bf8f/cleanser_1.jpg?w=800&q=80" alt="" className="car-img abt-img-1" />
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
