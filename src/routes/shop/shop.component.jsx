
import { useContext } from "react";
import { ItemContext } from "../../context/item.context";

const Shop = () => {

    const { Items }= useContext(ItemContext);
    return(
        <div>
            {Items.map(({id,name})=> (
                <div key = {id}>
                    <h1>{name}</h1>
                </div>
            )        ) }
        </div>
    );
}

export default Shop;
