import {createContext, useState} from 'react';
import { PRODUCTS } from '../assets/shared/PRODUCTS'
export const ShopContext = createContext(null);

const getDefaultCart = () => {
    let cart = {}
    for (let i = 0; i<PRODUCTS.length + 1; i++) {
        cart[i] = 0
    }
    return cart;
}

export const ShopContextProvider = (props) => {
    const [cartItems, setCartItems] = useState(getDefaultCart())

    const getTotalCartAmount = () => {
        let totalAmount = 0;
        let sTax = 0.0825;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                //This to adject price if the user buys 5 of the same proudect
                //Right now "cartItems[item] == 5" only efft "book marks" subject to change later
                /*Foot scrubs, bath sailts, body scrubs, bath bombs & soaps deals can mix together */
                if(cartItems[item] == 5){
                    let itemInfo = PRODUCTS.find((products) => products.id === Number(item));
                    totalAmount += (cartItems[item] * itemInfo.bunOne)-1;
                    console.log("5: "+totalAmount)
                }
                //This to adject price for buying 3 proudects
                else if(cartItems[item] == 3){
                    let itemInfo = PRODUCTS.find((products) => products.id === Number(item));
                    totalAmount += itemInfo.bunTwo;
                    console.log("3: "+totalAmount)
                }
                //This to adject price for buying 2 proudects
                else if(cartItems[item] == 2){
                    let itemInfo = PRODUCTS.find((products) => products.id === Number(item));
                    totalAmount += itemInfo.bunOne;
                    console.log("2: "+totalAmount+"   "+itemInfo.id)
                }
                else {
                    let itemInfo = PRODUCTS.find((products) => products.id === Number(item));
                    totalAmount += cartItems[item] * itemInfo.priceNum;
                }
            }
            //console.log(cartItems[item] + " "+item)
        }
        console.log(cartItems[0]);
        totalAmount =(totalAmount*sTax)+totalAmount
        return totalAmount.toFixed(2);
    };

    const addToCart = (itemId) => {
        setCartItems((prev) => ({...prev, [itemId]: prev[itemId] + 1}))
    };

    const removeFromCart = (itemId) => {
        setCartItems((prev) => ({...prev, [itemId]: prev[itemId] - 1}))
    };
    
    const updateCartItemCount = (newAmount, itemId) => {
        setCartItems((prev) => ({...prev, [itemId]: newAmount}))
    } 

    const contextValue = {cartItems, addToCart, removeFromCart, updateCartItemCount, getTotalCartAmount};
    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    );
};