import CustomButton from '../button/button.component';
import { useContext } from 'react';
import { CartContext } from '../../context/cart.context';
import './product-list.styles.scss'

const ProductList = ({product}) => {
    const {name,price,imageUrl} = product;
    const {addItemtoCart} = useContext(CartContext);
    const productToCart = () => {
            addItemtoCart(product);
    }
    return (
        <div className='product-card-container'>
            <img src={imageUrl} alt={`${name}`}/>

            <div className='footer'>
                <span className = 'name'>{name}</span>
                <span className='price'>{price}</span>
            </div>
            <CustomButton buttonType='inverted' onClick = {productToCart}> Add to cart </CustomButton>
        </div>
    );
}

export default ProductList;