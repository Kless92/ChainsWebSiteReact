//import { selectAllProudcts } from "./productSlice";
import { useContext } from "react";
import { Table } from "reactstrap";
import { ShopContext } from "../../app/context/shop-context";

const CartItem = (props) => {
    const {id, image, name, price} = props.data
    const { cartItems, addToCart, removeFromCart, updateCartItemCount} = useContext(ShopContext);

    return(
        <Table class='price-border' cellspacing='10'>
            <tr>
                <td className='cartItem'>
                    <img class='reSize' src={image} alt={name}/>
                    <br/>
                    {name}
                </td>
                <td>
                    {price}
                </td>
                <td className="countHandler">
                    <button onClick={() => addToCart(id)}> + </button>
                    <input value={cartItems[id]} onChange={(e) => updateCartItemCount(Number(e.target.value), id)}/>
                    <button onClick={() => removeFromCart(id)}> - </button>
                </td>
            </tr>
        </Table>
    )
}

export default CartItem;