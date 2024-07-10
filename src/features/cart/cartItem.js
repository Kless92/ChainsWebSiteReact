import { useContext} from "react";
import { ShopContext } from "../../app/context/shop-context";
import {Table, Col, Row} from 'reactstrap'
const CartItem = (props) => {
    const { id, image, name, price } = props.data
    const { cartItems, addToCart, removeFromCart, updateCartItemCount } = useContext(ShopContext);

    return (
        <Table >
            <Row  >
                <Col sm='12' md='4' lg='4'>
                    <img class='reSize' src={image} alt={name} />
                    <br />
                    {name}
                </Col>
                <Col sm='12' md='4' lg='4'>
                    {price}
                </Col>
                <Col sm='12' md='4' lg='4'>
                    <button onClick={() => addToCart(id)}> + </button>
                    <input value={cartItems[id]} onChange={(e) => updateCartItemCount(Number(e.target.value), id)} />
                    <button onClick={() => removeFromCart(id)}> - </button>
                </Col>
            </Row>
        </Table>
    )
}

export default CartItem;