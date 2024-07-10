import { useContext } from 'react';
import { Nav, NavItem, Table } from "reactstrap";
import { PRODUCTS } from '../../app/assets/shared/PRODUCTS';
import { ShopContext } from '../../app/context/shop-context';
import { NavLink } from 'react-router-dom';
import CartItem from './cartItem';

const CartList = () => {
    const { cartItems, getTotalCartAmount } = useContext(ShopContext);
    const totalAmount = getTotalCartAmount();

    return (
        <>
            <h1 className='adjustCartText'>
                Cart Items
            </h1>
            <Table>
                <div className='price-border'>
                {PRODUCTS.map((product) => {
                    if (cartItems[product.id] !== 0) {
                        return <CartItem data={product} />
                    }
                })}
                </div>
            </Table>
            <h3 className='adjustCartText'>
                Total: ${totalAmount}
            </h3>
            {totalAmount > 0 ? (
                <div>
                    <Nav className="justify-content-center">
                        <NavItem className='link-box'>
                            <NavLink className='nav-link' to='/checkout' style={{ color: 'white', textDecoration: 'none' }}>
                                Checkout
                            </NavLink>
                        </NavItem>
                    </Nav>
                </div>
            ) : (<h1> Cart is Empty </h1>)}
        </>
    );
};
export default CartList;