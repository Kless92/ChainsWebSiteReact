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
                let itemInfo = PRODUCTS.find((products) => products.id === Number(item));
                totalAmount += cartItems[item] * itemInfo.priceNum;
            }
        }
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