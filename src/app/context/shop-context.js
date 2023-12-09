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
        let bathItemsCount = 0;
        let test

        for (const item in cartItems) {
            let itemInfo = PRODUCTS.find((products) => products.id === Number(item));
            let cartLength = Object.keys(cartItems).length
            
            console.log(item+'  aa '+cartLength+'  '+cartItems[item]+' ')
            //When at the end of the for loop, if there are any 'bath' proudect
            //they will be total for the bundle or not.
            if (Number(item)+1 == cartLength && test != null) {
                console.log(test+' esfasdf  '+bathItemsCount)
                totalAmount += test;
            }
            if (cartItems[item] > 0) {
                //This to adject price if the user buys 5 of the same proudect
                /*Foot scrubs, bath sailts, body scrubs, bath bombs & soaps deals can mix together */
                if(itemInfo.id > 10) {
                    bathItemsCount += cartItems[item]
                    console.log(cartItems[item]);
                    if(bathItemsCount == 1){
                        test = itemInfo.priceNum;
                    }
                    else if(bathItemsCount == 2){
                        test = itemInfo.bunOne;
                    }
                    else if(bathItemsCount == 3){
                        test = itemInfo.bunTwo;
                    }
                    else{
                        test = bathItemsCount * itemInfo.priceNum
                    }
                    console.log(test+'   '+itemInfo.id+' '+cartLength+"   "+itemInfo.id)
                    continue
                }
                //Right now "cartItems[item] == 5" only efft "book marks" subject to change later
                if(cartItems[item] == 5 && itemInfo.id==0){
                    //let itemInfo = PRODUCTS.find((products) => products.id === Number(item));
                    totalAmount += (cartItems[item] * itemInfo.priceNum)-1;
                    console.log("5: "+totalAmount);
                    continue
                }
                //This to adject price for buying 3 proudects
                else if(cartItems[item] == 3){
                    //let itemInfo = PRODUCTS.find((products) => products.id === Number(item));
                    totalAmount += itemInfo.bunTwo;
                    console.log("3: "+totalAmount);
                    continue
                }
                //This to adject price for buying 2 proudects
                else if(cartItems[item] == 2){
                    //let itemInfo = PRODUCTS.find((products) => products.id === Number(item));
                    totalAmount += itemInfo.bunOne;
                    console.log("2: "+totalAmount+"   "+itemInfo.id);
                    continue
                }
                else {
                    //let itemInfo = PRODUCTS.find((products) => products.id === Number(item));
                    console.log("aaa"+itemInfo.id)
                    totalAmount += cartItems[item] * itemInfo.priceNum;
                    continue
                }
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