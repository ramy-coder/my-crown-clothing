import { useContext } from 'react';
import { CartContext } from '../../context/cart.context';
import { useNavigate } from 'react-router-dom';

import './cart-dropdown.styles.scss'

import CustomButton from '../button/button.component';
import CartItem from '../cart-item/cart-item.component';

const CartDropdown = () => {
    const {cartItems}= useContext(CartContext);
    const navigate = useNavigate();

    const gotoCheckoutHandler = () => {
        navigate('/checkout');
    }
    return (
        <div className='cart-dropdown-container'>
            <div className='cart-items'>                
                {
                    cartItems.map((item) => (<CartItem  key={item.id} cartItem={item} />))
                }
            </div>
            <CustomButton onClick = {gotoCheckoutHandler}> Checkout </CustomButton>
        </div>

    );
}

export default CartDropdown;