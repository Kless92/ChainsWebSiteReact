import {useContext} from 'react';
import { Container } from "reactstrap";
import { PRODUCTS } from '../app/assets/shared/PRODUCTS';
import { ShopContext } from '../app/context/shop-context';
import CartItem from "../features/cart/cartItem";

const Cart = () => {
    const {cartItems, removeFromCart} = useContext(ShopContext)
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
        </Container>
    )
};

export default Cart;