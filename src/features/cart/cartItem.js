//import { selectAllProudcts } from "./productSlice";
import { useContext } from "react";
import { ShopContext } from "../../app/context/shop-context";

const CartItem = (props) => {
    const { id, image, name, price } = props.data
    const { cartItems, addToCart, removeFromCart, updateCartItemCount } = useContext(ShopContext);

    return (
        <tbody className='price-border'>
            <tr>
                <td>
                    <img class='reSize' src={image} alt={name} />
                    <br />
                    {name}
                </td>
                <td>
                    {price}
                </td>
                <td>
                    <button onClick={() => addToCart(id)}> + </button>
                    <input value={cartItems[id]} onChange={(e) => updateCartItemCount(Number(e.target.value), id)} />
                    <button onClick={() => removeFromCart(id)}> - </button>
                </td>
            </tr>
        </tbody>
    )
}

export default CartItem;