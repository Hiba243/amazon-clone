import './ProductForm.css'
import { useRef, useState } from 'react';

function ProductForm(props) {
    const [amountIsValid, setAmountIsValid] = useState(true);
    const amountInputRef = useRef();

    const submitHandler = (event) => {
        event.preventDefault();

        const enteredAmount = amountInputRef.current.value;
        const enteredAmountNumber = +enteredAmount;

        if (
            enteredAmount.trim().length === 0 ||
            enteredAmountNumber < 1 ||
            enteredAmountNumber > 5
        ) {
            setAmountIsValid(false);
            return;
        }

        props.onAddToCart(enteredAmountNumber);
    };

    return (
        <form onSubmit={submitHandler} className="form">
            <div class="form-input">
            <label><strong>AMOUNT: </strong></label>
            <input
                ref={amountInputRef}
                type="number"
                min="1"
                max="5"
                step="1"
                defaultValue="1"
                id= {'amount_' + props.id}                
            />
            </div>
            <button className="button form-btn">+ ADD TO CART</button>
            {!amountIsValid && <p>Please enter a valid amount (1-5).</p>}
        </form>
    );
}

export default ProductForm
