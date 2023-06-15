import CustomButton from '../button/button.component';
import './product-list.styles.scss'

const ProductList = () => {

    return (
        <div classname = 'product-card-container'>
            <img/>
            <div className='footer'>
                <span className = 'name'></span>
                <span className='price'></span>
            </div>
            <CustomButton buttonType='inverted'/>
        </div>
    );
}

export default ProductList;