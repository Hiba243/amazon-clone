import './FilteredProducts.css'

import Product from './Product'
import {useParams} from "react-router-dom";

function FilteredProducts() {
  const params =  useParams();
  let filteredList=sessionStorage.getItem('product-list');
  filteredList=JSON.parse(filteredList);  
  filteredList=filteredList.filter((product) => product.category.toLowerCase().includes(params.filterTag));

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
