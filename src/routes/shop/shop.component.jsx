
import { useContext } from "react";
import { ItemContext } from "../../context/item.context";

import ProductList from "../../components/product-list/product-list.component";
import './shop.styles.scss';

const Shop = () => {

    const { Items }= useContext(ItemContext);
    return(
        <div className="products-container">
            {Items.map((item)=> (
                <ProductList key={item.id} product={item}/>
            )        ) }
        </div>
    );
}

export default Shop;
