import './Subtotal.css'
import {useContext} from 'react'
import CurrencyFormat from "react-currency-format"
import { getBasketTotal } from "./reducer";
import AuthContext from './reducer';
import { useHistory } from "react-router-dom";

function Subtotal() {

    const authCtx = useContext(AuthContext);
    const basketLength=authCtx.basket.length;
    const basket=getBasketTotal(authCtx.basket);
    const history = useHistory();
    const goToCheckout = () => {       
        if(!authCtx.isLoggedIn){
           history.push('/login')
        }
        else{
            history.push('/payment')
        }
    }
   
    return (
        <div className="subtotal">
            <CurrencyFormat
                renderText={(value) => (
                    <>
                        <p>
                            Subtotal {basketLength} items: <strong>{value}</strong>
                        </p>
                       
                    </>
                )}
                decimalScale={2}
                value={basket}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
            />
            {basketLength>0 && <button onClick={goToCheckout}>Proceed to checkout</button>}
        </div>
    )
}

export default Subtotal
