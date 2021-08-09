import './Checkout.css'
import Subtotal from './Subtotal'
import CheckoutProduct from './CheckoutProduct'
import { useStateValue } from "./StateProvider";

function Checkout() {
    const [{ basket }] = useStateValue();
    return (
        <div className="checkout section-padding">
            <div className="checkout__left">
                <div>
                    <h2 className="checkout__title">Your shopping basket</h2>
                    {basket?.map(item => (
                        <CheckoutProduct
                            key={item.id}
                            id={item.id}
                            title={item.title}
                            image={item.image}
                            price={item.price}
                            rating={item.rating}
                            amount={item.amount}
                            desc={item.desc}
                            hidebutton={false}
                        />
                    ))}
                </div>
            </div>
            <div className="checkout__right">
                <Subtotal />
            </div>
        </div>
    )
}

export default Checkout
