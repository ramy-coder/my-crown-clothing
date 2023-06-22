import './checkout-list.styles.scss'
import { useContext } from 'react';
import { CartContext } from '../../context/cart.context';

const CheckoutList = ({cartItem}) => {
     const {name,price,imageUrl, quantity,id} = cartItem;
    const {removeItemfromCart,addItemtoCart,removeProductfromCart} = useContext(CartContext);
    const productFromCart = () => {
        removeProductfromCart(cartItem);
}
const incrementQuantity = () => {
    addItemtoCart(cartItem);
}

const decrementQuantity = () => {
    removeItemfromCart(cartItem);
}
      return(
      <div key = {id} className='checkout-item-container'>                
        <div className='image-container'>
            <img src={imageUrl} alt={`${name}`} />
            </div>
        
        <span className='name'> {name}</span>      
        
        <span className='quantity'>  
        
        <div className= 'arrow' onClick={decrementQuantity}> &#10094; </div>

        <span className='value'> {quantity} </span>
        
        <div className = 'arrow' onClick={incrementQuantity}> &#10095; </div>

        </span>
        
        <span className='price'> {price}</span>
        
        <div onClick={productFromCart} className='remove-button'> &#10005; </div>
        
        </div>
    )
}

export default CheckoutList;