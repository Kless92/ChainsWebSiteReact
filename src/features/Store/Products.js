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
                    </tr>
                </thead>
                <ProudctsList />
            </Table>
        </>
    )
}

export default Products;