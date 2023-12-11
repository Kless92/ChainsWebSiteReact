import {useContext} from 'react';
import { Container, Nav, NavItem } from "reactstrap";
import { PRODUCTS } from '../app/assets/shared/PRODUCTS';
import { ShopContext } from '../app/context/shop-context';
import { NavLink } from 'react-router-dom'
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
                <div>
                    <tbody>
                        <tr>
                            <p>TEST</p>
                        </tr>
                        <tr>
                            <p> Subtotal: ${totalAmount}</p>
                        </tr>
                    </tbody>

                    <Nav className="justify-content-center">
                        <NavItem className='link-box'>
                            <NavLink className='nav-link' to='/checkout'>
                                Checkout
                            </NavLink>
                        </NavItem>
                    </Nav>
                </div>
            ): (<h1> Cart is Empty </h1>)}
        </Container>
    )
};

export default Cart;