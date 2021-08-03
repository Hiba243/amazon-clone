import './ProductDetail.css'
import ProductForm from './ProductForm';
import { useHistory, useParams } from "react-router-dom";
import useProducts from './use-products';
import { useStateValue } from "./StateProvider";
function ProductDetail() {
  const [{ basket, user }, dispatch] = useStateValue();
  const params = useParams();
  const products = useProducts();
  const history=useHistory();
  let filteredList;
  filteredList = products.filter(item => item.id === params.productId);

  const addToBasketHandler = (amount) => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: filteredList[0].id,
        title: filteredList[0].title,
        image: filteredList[0].image,
        price: filteredList[0].price,
        desc: filteredList[0].desc,
        amount: amount,
      },
    });
    history.push("/checkout")
  };

  return (
    <div className="productDetail">
      {filteredList?.map(item => (
        <div className="productDetailFlex" key={item.id}>
          <img src={item.image} alt="product img" className="productDetailImg">
          </img>
          <div className="productDetailsFlex" key={item.id}>
            <div className="productDetail__info">
              <p className="productDetailTitle"><strong>{item.title}</strong></p>
            </div>
            <div>
            <p className="productDetail__price"><strong>DESCRIPTION: </strong>{item.desc}</p>
            </div>
            <div className="productDetail__info">
            
              <p className="productDetail__price"><strong>PRICE: </strong>${item.price}</p>
            </div>
            <div>
              <ProductForm id={item.id} onAddToCart={addToBasketHandler} />
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default ProductDetail
