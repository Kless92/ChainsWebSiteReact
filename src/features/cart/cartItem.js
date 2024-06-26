//import { selectAllProudcts } from "./productSlice";
import { useContext } from "react";
import { Row, Col } from "reactstrap";
import { ShopContext } from "../../app/context/shop-context";

const CartItem = (props) => {
    const {id, image, name, price} = props.data
    const { cartItems, addToCart, removeFromCart, updateCartItemCount} = useContext(ShopContext);

    return(
        <Row >
            <Col className='adjustCartText'  sm='12' md='4' lg='4'>
                <img class='reSize' src={image} alt={name}/>
                <br/>
                {name}
            </Col>
            <Col className='adjustCartText' sm='12' md='2' lg='4'>
                {price}
            </Col>
            <Col className='adjustCartText' sm='12' md='6' lg='4'>
                <button onClick={() => addToCart(id)}> + </button>
                <input value={cartItems[id]} onChange={(e) => updateCartItemCount(Number(e.target.value), id)}/>
                <button onClick={() => removeFromCart(id)}> - </button>
            </Col>
            
        </Row>        
    )
}

export default CartItem;