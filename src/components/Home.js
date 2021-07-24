import './Home.css'
import Product from './Product'
import useProducts from './use-products';

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

  return (
    <div className="home">
      <div className="home__container">
      </div>
      <div className="features">
        <div className="feature__1">
          <p>FIND</p>
          <p>01.Unique and Meaningful Jewellery</p>
          <p>From handcrafted treasures to vintage finds to heritage icons</p>
        </div>
        <div className="feature__1">
        <p>FIND</p>
          <p>01.Unique and Meaningful Jewellery</p>
          <p>From handcrafted treasures to vintage finds to heritage icons</p>
        </div>
        <div className="feature__1">
        <p>FIND</p>
          <p>01.Unique and Meaningful Jewellery</p>
          <p>From handcrafted treasures to vintage finds to heritage icons</p>
        </div>
      </div>
      <div className="home__row">
        {productsList} 
        {productsList[0]} 
        {productsList[1]} 
      </div>
      <marquee className="marquee-features">This text will scroll from right to left</marquee>
      <div className="home__row categories">
        {productsList[2]} 
        {productsList[0]} 
      </div>
      <div className="home__row categories"> 
        {productsList[1]} 
        {productsList[3]} 
      </div>
      <div className="extra-features">
        <div className="extra-features-content">
          <p>SUPER clean beauty</p>
        </div>
        <div className="extra-features-img">

        </div>
      </div>
    </div>
  )
}

export default Home
