import { Table } from "reactstrap";

const CartTotal = (props) => {
    const {name, price} = props.data

    return(
        <Table class='price-border' cellspacing='10'>
            <tr>
                <td className='cartItem'>
                    {name}
                </td>
                <td>
                    {price}
                </td>
            </tr>
        </Table>
    )
}

export default CartTotal;