import './FilteredProducts.css'
import Product from './Product'
import { useParams } from "react-router-dom";
import useProducts from './use-products';

function FilteredByTag() {
  const params = useParams();
  const products = useProducts();
  console.log(params);
  let filteredList;
  filteredList = products.filter((product) => product.tags.toLowerCase().includes(params.tag));

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

export default FilteredByTag
