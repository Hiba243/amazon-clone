import './Subtotal.css'
import {useContext} from 'react'
import CurrencyFormat from "react-currency-format"
import { getBasketTotal } from "./reducer";
import AuthContext from './reducer';

function Subtotal() {

    const authCtx = useContext(AuthContext);
    const basket=getBasketTotal(authCtx.basket);
    return (
        <div className="subtotal">
            <CurrencyFormat
                renderText={(value) => (
                    <>
                        <p>
                            Subtotal {basket?.length} items: <strong>{value}</strong>
                        </p>
                        <small className="subtotal__gift">
                            <input type="checkbox" /> This order contains a gift
                        </small>
                    </>
                )}
                decimalScale={2}
                value={basket}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
            />
            <button>Proceed to checkout</button>
        </div>
    )
}

export default Subtotal
