import { useContext } from "react";
import { selectAllProudcts } from "./productSlice";
import { ShopContext } from "../../app/context/shop-context";
import {Col, Row, Table} from 'reactstrap'

const ProudctsList = () => {
    const products = selectAllProudcts();
    const { addToCart, cartItems } = useContext(ShopContext);

    return (
        <>
            {products.map((product) => {
                const { id, image, name, price, bundle} = product;
                const cartItemAmount = cartItems[id]
                return (
                    <Table >
                    <Row >
                        <Col sm='12' md='4' lg='4'>
                            <img class='reSize' src={image} alt={name}/>
                            <br/>
                            {name}
                        </Col>
                        <Col sm='12' md='4' lg='4'>
                            {price}
                            <br/>
                            {bundle}
                        </Col>
                        <Col sm='12' md='4' lg='4'>
                            <button className="addToCartButton" onClick={() => addToCart(id)}>
                                <i className='fa fa-shopping-cart fa-lg'/>
                                Add To Cart {cartItemAmount > 0 && <>({cartItemAmount})</>}
                            </button>
                        </Col>
                    </Row>
                    </Table>
                )
            })}
        </>
    );
};

export default ProudctsList;