import './FilteredProducts.css'
import Product from './Product'
import {useParams} from "react-router-dom";
import { useEffect, useState,useContext } from 'react'
import AuthContext from './reducer';

function FilteredProducts() {
  const authCtx = useContext(AuthContext);
  const params =  useParams();
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

  let filteredList;
  filteredList= products.filter((product) => product.category.toLowerCase().includes(params.filterTag));

  return (
    <div className="home">
      <div className="home__row">
      {filteredList?.map(item => (
                        <Product
                        key={item.id}
                        id={item.id}
                        title={item.title}
                        image={item.image}
                        price={item.price}
                        rating={item.rating}
                        amount={item.amount}
                        />
      ))}
      </div>
    </div>
  )
}

export default FilteredProducts
