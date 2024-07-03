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
            <div className='adjustCartText'>
                <h1> Cart Items </h1>
            </div>
            <div className='adjustCartText'>
                {PRODUCTS.map((product) =>{
                    if (cartItems[product.id] !== 0){
                        return <CartItem data={product}/>
                    }
                })}
            </div>
            <div className='adjustCartText'>
                <p>Total: ${totalAmount}</p>
            </div>
            {totalAmount > 0 ? ( 
                <div>
                    <Nav className="justify-content-center">
                        <NavItem className='link-box'>
                            <NavLink className='nav-link' to='/checkout' style={{color: 'white', textDecoration: 'none'}}>
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