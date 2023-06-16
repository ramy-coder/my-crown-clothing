import { createContext,useState } from "react";

export const CartContext = createContext({
    isCartOpen : false,
    setisCartOpen :  () => {},
    cartItems: [],
    addItemtoCart: () => {},
    cartCount: 0
})

export const addCartItem = (cartItems,productToAdd) => {
    const itemFound = cartItems.find( (cartItem) => {
       return( cartItem.id === productToAdd.id)
    }
    ) ;
if (itemFound) {
    console.log(itemFound);
    return cartItems.map((cartItem) =>
      cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }
        return [...cartItems, {...productToAdd, quantity : 1}];
}


export const CartProvider = ({children}) => {
    const [isCartOpen,setisCartOpen] = useState(false);
    const [cartItems,setCartItems] = useState([]);
    const [cartCount,setCartCount] = useState(0);
    

    const addItemtoCart = (productToAdd) => {
        setCartCount(cartCount + 1);
        setCartItems(addCartItem(cartItems,productToAdd));
    }

    const value = {isCartOpen,setisCartOpen, cartItems,addItemtoCart,cartCount};

    return <CartContext.Provider value = {value}>{children}</CartContext.Provider>
}

