import './Home.css'
import Product from './Product'
import useProducts from './use-products';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

const items = [
  <div className="item" data-value="1"><img src="https://images.ctfassets.net/vnxry7jc7f2k/5Xra2xQwAg0moYjschl66s/c01263879933895ee760cebd1dd4bf8f/cleanser_1.jpg?w=800&q=80" alt="" className="car-img"/></div>,
  <div className="item" data-value="2"><img src="https://images.ctfassets.net/vnxry7jc7f2k/3CYv0nAOcWSZDzwhpk9WxH/60fc213aef68ae9bbd19167edd711d9e/body_oil_website.jpg?w=800&q=80" alt="" className="car-img" /></div>,
  <div className="item" data-value="3"><img src="https://images.ctfassets.net/vnxry7jc7f2k/1PNTOAKbMO9OYCo6Kylajx/15c6ff35f6602eb32f1ddec11a983675/superfluid_ott1572_1.jpg?w=800&q=80" alt="" className="car-img"/></div>,
  <div className="item" data-value="4"><img src="https://images.ctfassets.net/vnxry7jc7f2k/4QFKGEQqSG8XMtyW46kZmi/11c07b20d87b474aa181e8d2575f3c6d/superfluid_ott1577_ok.jpg?w=800&q=80" alt="" className="car-img" /></div>,
  <div className="item" data-value="5"><img src="https://images.ctfassets.net/vnxry7jc7f2k/7y89t8eh0gocsTlv93PTcu/c5b1835703906d4ce5dcd46467b09c9f/superfluid_ott1574_1.jpg?w=800&q=80" alt="" className="car-img"/></div>,
];

function Home() {
  const products = useProducts();

  const productsList = products.map((meal) => <Product
    key={meal.id}
    id={meal.id}
    title={meal.title}
    price={meal.price}
    image={meal.image}
  />
  );
  const productCategoryList= products.map((meal) => <Product
  key={meal.id}
  id={meal.id}
  title={meal.category}
  price={meal.price}
  image={meal.image}
/>
);
console.log(productCategoryList)
  return (
    <div>
    
    <div className="home">
    
      <div className="home__container">
      <AliceCarousel
        autoPlay
        autoPlayStrategy="none"
        autoPlayInterval={1000}
        animationDuration={1000}
        animationType="fadeout"
        infinite
        touchTracking={false}
        disableDotsControls
        disableButtonsControls
        items={items}
    />
    <p className="heading">Magical</p>
    <p className="heading-beauty">Beauty</p>
      </div>
       <div className="about">
         <div className="abt-img">
         <img src="https://images.ctfassets.net/vnxry7jc7f2k/5Xra2xQwAg0moYjschl66s/c01263879933895ee760cebd1dd4bf8f/cleanser_1.jpg?w=800&q=80" alt="" className="car-img abt-img-1"/>
         </div>
      <div className="features">
      <div className="feature__1 ft-1">
          <p className="abt-content">Magical Beauty is a skincare line inspired by real skin - with the aim of making skincare easy and stress free. Explore all 20+ products for all needs and all budgets</p>
          
          <button class="sml-btn">Shop All</button>
        </div>
        
      </div>
      </div>
      <div><p className="heading-home" >Best Sellers</p></div>
      <div className="home__row">
        {productsList} 
        {productsList[0]} 
        {productsList[1]} 
        {productsList[2]} 
      </div>
      <div><p className="heading-home" style={{fontFamily:'Object Sans'}}>IN THE PRESS</p></div>
      <marquee className="marquee-features" style={{fontFamily:'New York'}}>Elle - Les Echos - The Sunday Times - British Vogue - Eurowoman - The New York Times - WWD - The Business of Fashion - Elle - Les Echos - The Sunday Times - British Vogue - Eurowoman - The New York Times - WWD - The Business of Fashion - </marquee>
      <marquee className="marquee-features" style={{fontFamily:'New York'}}>Elle - Les Echos - The Sunday Times - British Vogue - Eurowoman - The New York Times - WWD - The Business of Fashion - Elle - Les Echos - The Sunday Times - British Vogue - Eurowoman - The New York Times - WWD - The Business of Fashion - </marquee>
      <marquee className="marquee-features" style={{fontFamily:'New York'}}>Elle - Les Echos - The Sunday Times - British Vogue - Eurowoman - The New York Times - WWD - The Business of Fashion - Elle - Les Echos - The Sunday Times - British Vogue - Eurowoman - The New York Times - WWD - The Business of Fashion - </marquee>
      <div><p className="heading-home">Shop by Category</p></div>
      <div className="home__row categories">
        {productCategoryList[0]} 
        {productCategoryList[1]} 
      </div>
      <div className="home__row categories"> 
      {productCategoryList[2]} 
      {productCategoryList[3]}  
      </div>
      <div className="about">
        
      <div className="features">
      <div className="feature__1 ft-1">
          <p className="abt-content">We’re serious about ingredients. Our 200+ carefully selected brands are at the forefront of the clean beauty movement. No toxins. Only goodness.</p>
          <marquee className="abt-marquee" style={{color:'#c4293c'}}>Cruelty Free | Vegan | Natural &amp; Organic | Cruelty Free | Vegan | Natural &amp; Organic | </marquee>
      </div>
        
      </div>
      <div className="abt-img">
         <img src="https://images.ctfassets.net/vnxry7jc7f2k/5Xra2xQwAg0moYjschl66s/c01263879933895ee760cebd1dd4bf8f/cleanser_1.jpg?w=800&q=80" alt="" className="car-img abt-img-1"/>
         </div>
      </div>
      <div className="footer">
        <p>&#169; 2021 Designed and Developed by Hiba</p>
        <p>Magical Beauty</p>
      </div>
    </div>
    </div>
  )
}

export default Home
