import { Table } from "reactstrap";
import ProudctsList from "./productList";

const Products = () => {
    return (
        <>
            {`Shipping & taxes NOT included in the above pricing.\n
              Please contact us if you are interested in pricing on 
              gift baskets for any occasion.\nThe information is 
              located on th econtact page.`}

            <Table class='price-border' cellspacing='10'>

                <thead>
                    <tr>
                        <th>Prouducts</th>
                        <th>Pricing</th>
                        <th>Cart</th>
                    </tr>
                </thead>
                <ProudctsList />
                <h3>For a customize gift box, please contact the number or email below or on contact page.</h3>
            </Table>
        </>
    )
}

export default Products;