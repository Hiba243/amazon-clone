import './Home.css'
import { useEffect, useState,useContext } from 'react'
import Product from './Product'
import AuthContext from './reducer';

function Home() {
  const authCtx = useContext(AuthContext);
  const [products, setproducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [httpError, setHttpError] = useState();
  
  useEffect(() => {
    if (!sessionStorage.getItem('product-list')) {
      const fetchproducts = async () => {
        const response = await fetch('https://clone-d6025-default-rtdb.asia-southeast1.firebasedatabase.app//products.json');
        if (!response.ok) {
          throw new Error("Something went wrong");
        }
        const responseData = await response.json();
        const loadedproducts = [];
        for (const key in responseData) {
          loadedproducts.push({
            id: key,
            title: responseData[key].title,
            price: responseData[key].price,
            image: responseData[key].image,
            tags: responseData[key].tags,
            category: responseData[key].category,
          });
        }
        sessionStorage.setItem('product-list', JSON.stringify(loadedproducts));
        setproducts(loadedproducts);
        authCtx.addListOfItems(loadedproducts);
        setIsLoading(false);
      };


      fetchproducts().catch(error => {
        setIsLoading(false);
        setHttpError(error.message);
      });
    }
    else {
      const prodarr = sessionStorage.getItem('product-list');
      setproducts(JSON.parse(prodarr));
      authCtx.addListOfItems(JSON.parse(prodarr));
    }
  },[]);

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
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
        />
      </div>
      <div className="home__row">
        <ul className="ul">{productsList}</ul>
      </div>
    </div>
  )
}

export default Home
