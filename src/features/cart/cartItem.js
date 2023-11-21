//import { selectAllProudcts } from "./productSlice";


const CartItem = (props) => {
    const {id, image, name, price} = props.data
    return(
        <tr>
            <td className='cartItem'>
                <img class='reSize' src={image} alt={name}/>
                <br/>
                {name}
            </td>
            <td>
                {price}
            </td>
        </tr>
    )
}

export default CartItem;