import { ReactComponent as ShoppingCart } from '../../assets/shopping-bag.svg';
import './cart-icon.styles.scss'
import { CartContext } from '../../context/cart.context';
import { useContext } from 'react';

const Carticon = () => {
    const {isCartOpen, setisCartOpen,cartCount} = useContext(CartContext);
    // const totalQuantity = cartItems.reduce((total,current) => total + current, 0 );
    const cartState = () => {
        setisCartOpen(!isCartOpen);
    }
    return (
        <div className='cart-icon-container' onClick={cartState}>
            <ShoppingCart className='shopping-icon' />
            <span className='item-count'>{cartCount}</span>
        </div>
     );
}

export default Carticon;