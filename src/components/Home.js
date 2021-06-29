import { useEffect, useState } from 'react'
import './Home.css'
import Product from './Product'
function Home() {

  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [httpError, setHttpError] = useState();
  useEffect(() => {
    if (!localStorage.getItem('product-list')) {
      console.log("first time");
      const fetchMeals = async () => {
        const response = await fetch('https://clone-d6025-default-rtdb.asia-southeast1.firebasedatabase.app//products.json');
        if (!response.ok) {
          throw new Error("Something went wrong");
        }
        const responseData = await response.json();
        const loadedMeals = [];
        for (const key in responseData) {
          loadedMeals.push({
            id: key,
            title: responseData[key].title,
            price: responseData[key].price,
            image: responseData[key].image
          });
        }
        localStorage.setItem('product-list', JSON.stringify(loadedMeals));
        setMeals(loadedMeals);
        setIsLoading(false);
      };


      fetchMeals().catch(error => {
        setIsLoading(false);
        setHttpError(error.message);
      });
    }
    else {
      const prodarr = localStorage.getItem('product-list');
      setMeals(JSON.parse(prodarr));
    }
  }, []);

  const mealsList = meals.map((meal) => <Product
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
        <ul className="ul">{mealsList}</ul>
      </div>
    </div>
  )
}

export default Home
