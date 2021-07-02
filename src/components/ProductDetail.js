import './ProductDetail.css'
import { useContext } from 'react'
import ProductForm from './ProductForm';
import AuthContext from './reducer';
import { useParams } from "react-router-dom";
import useProducts from './use-products';

function ProductDetail() {
  const authCtx = useContext(AuthContext);
  const params = useParams();
  const products = useProducts();

  let filteredList;
  filteredList = products.filter(item => item.id === params.productId);

  const addToBasketHandler = (amount) => {
    authCtx.addItem({
      id: filteredList[0].id,
      title: filteredList[0].title,
      image: filteredList[0].image,
      price: filteredList[0].price,
      amount: amount
    });
  };

  return (
    <div className="home">
      <div className="home__row">
        {filteredList?.map(item => (
          <div className="product" key={item.id}>
            <div className="product__info">
              <p><strong>{item.title}</strong></p>
              <p className="product__price"><small>$</small><strong>{item.price}</strong></p>
            </div>
            <img src={item.image} alt="product img">
            </img>
            <div>
              <ProductForm id={item.id} onAddToCart={addToBasketHandler} />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ProductDetail
