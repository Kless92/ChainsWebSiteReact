import { Table } from "reactstrap";
import ProudctsList from "./productList";

const Products = () => {
    return(
    <Table class='price-border' cellspacing='10'>
        <thead>
            <tr>
                <th>Prouducts</th>
                <th>Pricing</th>
            </tr>
        </thead>
        <ProudctsList/>
    </Table>
    )
}

export default Products;