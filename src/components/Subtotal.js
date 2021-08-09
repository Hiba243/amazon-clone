import './Subtotal.css'
import CurrencyFormat from "react-currency-format"
import { getBasketTotal } from "./reducer";
import { useHistory, Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";

function Subtotal() {
    const [{ basket, user }, dispatch] = useStateValue();
    const basketLength = basket.length;

    const history = useHistory();
    const goToCheckout = () => {
        if (!user) {
            history.push('/login')
        }
        else {
            history.push('/payment')
        }
    }

    return (
        <div className="subtotal">
            <CurrencyFormat
                renderText={(value) => (
                    <>
                        <p className="subtotal__heading">
                            Total {basketLength} items: {value}
                        </p>

                    </>
                )}
                decimalScale={2}
                value={getBasketTotal(basket)}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
            />
            {basketLength > 0 && <button className="button" onClick={goToCheckout}>Proceed to checkout</button>}
            {user ? <Link to="/orders"><button className="button">Your order history</button></Link> : ''}
        </div>
    )
}

export default Subtotal
