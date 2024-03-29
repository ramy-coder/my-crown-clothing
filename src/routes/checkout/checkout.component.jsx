import './checkout.styles.scss';
import { useContext } from "react";
import { CartContext } from '../../context/cart.context'

import CheckoutList from "../../components/checkout-list/checkout-list.component"


const Checkoutcomp= () => {

    const { cartItems,cartTotal }= useContext(CartContext);



    return(
        <div  className="checkout-container">
            <div className='checkout-header'>
                <div className='header-block'>
                <span>Product</span>
                </div>
                <div className='header-block'>
                <span> Description</span>
            </div>
            <div className='header-block'>
                <span>Quantity </span>
            </div>
            <div className='header-block'>
                <span> Price</span>
            </div>
            <div className='header-block'>
                <span>Remove</span>
            </div>
        </div> 
    
            {
                cartItems.map((item) => (<CheckoutList  key={item.id} cartItem={item} />))
            }
      
       
            <div className="total">Total : ${cartTotal}</div>
        </div>
    );
}

export default Checkoutcomp;
