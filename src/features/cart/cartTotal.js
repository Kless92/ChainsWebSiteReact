import { Table } from "reactstrap";

const CartTotal = (props) => {
    const {name, price} = props.data

    return(
        <Table >
            <tr>
                <td align="left">
                    {name}
                </td>
                <td align="right">
                    {price}
                </td>
            </tr>
        </Table>
    )
}

export default CartTotal;