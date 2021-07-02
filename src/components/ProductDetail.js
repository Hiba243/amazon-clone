import './ProductDetail.css'
import {useContext,useEffect,useState} from 'react'
import ProductForm  from './ProductForm';
import AuthContext from './reducer';
import {useParams} from "react-router-dom";

function ProductDetail() {
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
  filteredList= products.filter(item => item.id === params.productId);

  const addToBasketHandler = (amount) => {
    authCtx.addItem({
        id: filteredList[0].id,
        title: filteredList[0].title,
        image:  filteredList[0].image,
        price: filteredList[0].price,
        amount: amount
    });     
};

    return (
        <div className="home">
      <div className="home__row">
      {filteredList?.map(item => (
                        <div className="product">
                        <div className="product__info">
                            <p><strong>{item.title}</strong></p>
                            <p className="product__price"><small>$</small><strong>{item.price}</strong></p>
                        </div>            
                        <img src={item.image} alt="product img">
                        </img>
                        <div>
                            <ProductForm id={item.id} onAddToCart={addToBasketHandler}/>
                        </div>
                    </div>
      ))}
      </div>
    </div>
    )
}

export default ProductDetail
