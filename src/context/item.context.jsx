import { createContext,useState} from 'react';

import PRODUCTS from '../shop-data.json'

export const ItemContext = createContext( {
    //initial values of the use state hook
    Items : [],
    setcurrentItem :  () => null 
}) ;

export const ItemProvider = ({children}) => {

    const [Items,setcurrentItem] = useState(PRODUCTS);
    const value = {Items};


    return <ItemContext.Provider value = {value}>{children}</ItemContext.Provider>
}