import {useContext} from 'react';
import { Container, Row, Col, Table } from "reactstrap";
import { PRODUCTS } from '../app/assets/shared/PRODUCTS';
import { ShopContext } from '../app/context/shop-context';
import CartTotal from '../features/cart/cartTotal';

const Checkout = () => {
    const {cartItems, getTotalCartAmount, saleTax, afterTax} = useContext(ShopContext)
    const totalAmount = getTotalCartAmount()
    const tax = saleTax()
    const secondTotal = afterTax()
    return (
        <Container>
            <h3> Billing Address</h3>
            <h4>**Postage will be determined once the order is assembled.  The cost of postage will be added to the invoice** </h4>
                {/*Col One Full name and billing address*/}
                <Row>
                    <Col className='billingAllign' sm='4' md ='4' lg='4'>
                        {/*First Name Input*/}
                        <label for="fname"><i class="fa fa-user"></i> First Name:<input name="myInput" placeholder="First Name"/></label>
                    </Col>
                    <Col  className='billingAllign' sm='4' md ='4'  lg='4'>
                        {/*Billing Address Input*/}
                        <label for="fname"><i class="fa fa-address-book"></i> Billing Address:<input name="myInput" placeholder="Billing Address"/></label>          
                    </Col>
                    <Col  className='billingAllign' sm='4' md ='4'  lg='4'>
                        {/*Phone Number Input*/}
                        <label for="fname"><i class="fa fa-phone"></i> Phone Number:<input name="myInput" placeholder="Phone Number"/></label>
                    </Col>
                </Row>
                {/*Col Two Shipping, phon # and Venmo*/}
                <Row>
                    <Col className='billingAllign'sm='4' md ='4' lg='4'>
                        {/*Last Name Input*/}
                        <label for="fname"><i class="fa-regular fa-user"></i> Last Name:<input name="myInput" placeholder="Last Name"/></label>
                    </Col>
                    <Col className='billingAllign'sm='4' md ='4' lg='4'>
                        {/*Shipping Address Input*/}
                        <label for="fname"><i class="fa-regular fa-address-book"></i> Shipping Address:<input name="myInput" placeholder="Shipping Address"/></label>
                    </Col>
                    <Col className='billingAllign'sm='4' md ='4' lg='4'>
                        <h4>Venmo: 
                            <a
                                className='btn btn-social-icon btn-info'
                                href=''
                            >
                                <i className='fa-brands fa-square-vimeo' style={{color: 'white'}}/>
                            </a>
                        </h4>
                    </Col>
                </Row>
                {/*Col Three Total cost; including tax and shipping*/}
                <Row>
                    <Col lg='3'></Col>
                    <Col className='billingAllign' sm='6' md ='6' lg='3'>
                        <div className='cartItems'>
                            {PRODUCTS.map((product) =>{
                                if (cartItems[product.id] !== 0){
                                    return <CartTotal data={product}/>
                                }
                            })}
                        </div>
                    </Col>
                    <Col className='billingAllign'sm='6' md ='6' lg='3'>
                        <Table>
                            <tr>
                                <td align='left'>
                                    Total: 
                                </td>
                                <td align='right'>
                                    ${totalAmount}
                                </td>
                            </tr>
                        </Table>  
                        <Table>
                            <tr>
                                <td align='left'>
                                    Tax:
                                </td>
                                <td align='right'>
                                    ${tax}
                                </td>
                            </tr>
                        </Table>
                        <Table>
                            <tr>
                                <td align='left'>
                                    Subtotal:
                                </td>
                                <td align='right'>
                                    ${secondTotal}
                                </td>
                            </tr>
                        </Table>
                        {/*<tr>
                        <p>Shipping: $</p>
                        </tr>*/}
                        <Table>
                            <tr>
                                <td align='left'>
                                    Total:
                                </td>
                                <td align='right'>
                                    ${secondTotal}
                                </td>
                            </tr>
                        </Table>
                    </Col>
                </Row>    
        </Container>
    )
}
export default Checkout;