import {useContext} from 'react';
import { Container } from "reactstrap";
import { PRODUCTS } from '../app/assets/shared/PRODUCTS';
import { ShopContext } from '../app/context/shop-context';
import CartTotal from '../features/cart/cartTotal';

const Checkout = () => {
    const {cartItems, getTotalCartAmount, saleTax, afterTax} = useContext(ShopContext)
    const totalAmount = getTotalCartAmount()
    const tax = saleTax()
    const secondTotal = afterTax()
    return (
        <Container  className='checkoutBox'>
            <h3> Billing Address</h3>
            <table>
                {/*Col One Full name and billing address*/}
                <td >
                    <tr>
                        {/*First Name Input*/}
                        <label for="fname"><i class="fa fa-user"></i> First Name:<input name="myInput" placeholder="First Name"/></label>
                    </tr>
                    <tr>
                        {/*Last Name Input*/}
                        <label for="fname"><i class="fa-regular fa-user"></i> Last Name:<input name="myInput" placeholder="Last Name"/></label>                   
                    </tr>
                    <tr>
                        {/*Billing Address Input*/}
                        <label for="fname"><i class="fa fa-address-book"></i> Billing Address:<input name="myInput" placeholder="Billing Address"/></label>
                    </tr>
                </td>
                {/*Col Two Shipping, phon # and Venmo*/}
                <td>
                    <tr>
                        {/*Shipping Address Input*/}
                        <label for="fname"><i class="fa-regular fa-address-book"></i> Shipping Address:<input name="myInput" placeholder="Shipping Address"/></label>
                    </tr>
                    <tr>
                        {/*Phone Number Input*/}
                        <label for="fname"><i class="fa fa-phone"></i> Phone Number:<input name="myInput" placeholder="Phone Number"/></label>
                    </tr>
                    <tr>
                        <h4>Venmo:  </h4>
                        <a
                            className='btn btn-social-icon btn-info'
                            href=''
                        >
                            <i className='fa-brands fa-square-vimeo' style={{color: 'white'}}/>
                        </a>
                    </tr>
                </td>
                {/*Col Three Total cost; including tax and shipping*/}
                <td>
                    <tr>
                        <div className='cartItems'>
                            {PRODUCTS.map((product) =>{
                                if (cartItems[product.id] !== 0){
                                    return <CartTotal data={product}/>
                                }
                            })}
                        </div>
                    </tr>
                    <tr>
                        <p>Total: {totalAmount}$</p>
                    </tr>
                    <tr>
                        <p>Tax: ${tax}</p>
                    </tr>
                    <tr>
                        <p> Subtotal: ${secondTotal}</p>
                    </tr>
                    {/*<tr>
                        <p>Shipping: $</p>
                        </tr>*/}
                    <tr>
                        <p>Total: ${secondTotal}</p>
                    </tr>
                </td>
            </table>
        </Container>
    )
}
export default Checkout;