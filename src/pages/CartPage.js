import {useContext} from 'react';
import { Container } from "reactstrap";
import { PRODUCTS } from '../app/assets/shared/PRODUCTS';
import { ShopContext } from '../app/context/shop-context';
import CartItem from "../features/cart/cartItem";

const Cart = () => {
    const {cartItems, getTotalCartAmount} = useContext(ShopContext)
    const totalAmount = getTotalCartAmount()

    return (
        <Container>
            <div className='cart'>
                <h1> Cart Items </h1>
            </div>
            <div className='cartItems'>
                {PRODUCTS.map((product) =>{
                    if (cartItems[product.id] !== 0){
                        return <CartItem data={product}/>
                    }
                })}
            </div>
            {totalAmount > 0 ? ( 
                <div className="checkout">
                    <p> Subtotal: ${totalAmount}</p>
                    <button> Checkout </button>
                </div>
            ): (<h1> Cart is Empty </h1>)}
        </Container>
    )
};

export default Cart;