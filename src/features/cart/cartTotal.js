import { Table } from "reactstrap";

const CartTotal = (props) => {
    const {name, price} = props.data

    return(
        <Table>
            <tr>
                <td>
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