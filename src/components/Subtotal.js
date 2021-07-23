import './Subtotal.css'
import CurrencyFormat from "react-currency-format"
import { getBasketTotal } from "./reducer";
import { useHistory,Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";

function Subtotal() {
    const [{ basket,user }, dispatch] = useStateValue();
   console.log(user);
    const basketLength=basket.length;
  
    const history = useHistory();
    const goToCheckout = () => {       
        if(!user){
           history.push('/login')
        }
        else{
            history.push('/payment')
        }
    }
   
    return (
        <div className="subtotal">
            {user ? <Link to="/orders">Your order history</Link> : ''}
            <CurrencyFormat
                renderText={(value) => (
                    <>
                        <p>
                            Subtotal {basketLength} items: <strong>{value}</strong>
                        </p>
                       
                    </>
                )}
                decimalScale={2}
                value={getBasketTotal(basket)}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
            />
            {basketLength>0 && <button onClick={goToCheckout}>Proceed to checkout</button>}
        </div>
    )
}

export default Subtotal
