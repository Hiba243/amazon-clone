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
        <img
          className="home__image"
          src="https://images.ctfassets.net/vnxry7jc7f2k/6qLnklOHdp6QrLvsYptzhT/0da0711f319ec077517e14fc65d34174/slider_oil-01.jpg?w=1800&h=1119&q=80&fm=webp"
          alt=""
        />
      </div>
      <div className="home__row">
        {productsList} 
        {productsList[0]} 
        {productsList[1]} 
      </div>
    </div>
  )
}

export default Home
