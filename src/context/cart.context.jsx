import { createContext,useEffect,useState } from "react";

export const CartContext = createContext({
    isCartOpen : false,
    setisCartOpen :  () => {},
    cartItems: [],
    addItemtoCart: () => {},
    cartCount: 0,
    removeItemfromCart: () => {},
    removeProductfromCart:() => {},
    cartTotal: 0
})



export const addCartItem = (cartItems,productToAdd) => {
    const itemFound = cartItems.find( (cartItem) => {
       return( cartItem.id === productToAdd.id)
    }
    ) ;
if (itemFound) {
    return cartItems.map((cartItem) =>
      cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }
        return [...cartItems, {...productToAdd, quantity : 1}];
}

export const removeCartItem = (cartItems,productToRemove) => {
    const itemFound = cartItems.find( (cartItem) => {
       return( cartItem.id === productToRemove.id)
    }
    ) ;
if (itemFound) {
    if(itemFound.quantity ===1)
    {
        return cartItems.filter((cartItem) => (cartItem.id !== itemFound.id))
    }
        return cartItems.map((cartItem) =>
          cartItem.id === productToRemove.id
            ? { ...cartItem, quantity: cartItem.quantity -1 }
            : cartItem
        );
      }
    }

    export const removeProduct= (cartItems,productToRemove) => {
     
        return cartItems.filter((cartItem) => (cartItem.id !== productToRemove.id))
          
        }

export const CartProvider = ({children}) => {
    const [isCartOpen,setisCartOpen] = useState(false);
    const [cartItems,setCartItems] = useState([]);
    const [cartCount,setCartCount] = useState(0);
    const [cartTotal,setCartTotal] = useState(0);
    
    //each useEffect should have a singular responsibility(only one variable processing)
    useEffect(() => {
        const newCartTotal = cartItems.reduce(
            (total,cartItem) => total + (cartItem.quantity *cartItem.price),
            0            
        );
        setCartTotal(newCartTotal);
    },[cartItems]);

    const addItemtoCart = (productToAdd) => {
        setCartCount(cartCount + 1);
        setCartItems(addCartItem(cartItems,productToAdd));
    }

    const removeItemfromCart = (productToRemove) => {
        setCartCount(cartCount - 1);
        setCartItems(removeCartItem(cartItems,productToRemove));
    }

    const removeProductfromCart = (productToRemove) => {
        setCartCount(cartCount - productToRemove.quantity);
        setCartItems(removeProduct(cartItems,productToRemove));
    }

      const value = {isCartOpen,setisCartOpen, cartItems,addItemtoCart,cartCount,removeItemfromCart,removeProductfromCart,cartTotal};

    return <CartContext.Provider value = {value}>{children}</CartContext.Provider>
}

