import { Table } from "reactstrap";
import ProudctsList from "./productList";

const Products = () => {
    return (
        <>
           <h3>
                Shipping & taxes NOT included in the above pricing.<br />
                Please contact us if you are interested in pricing on 
                gift baskets for any occasion.<br />The information is 
                located on th econtact page.<br/>For a customize gift box, 
                please contact the number or email below or on contact page.
            </h3>
            <Table class='price-border' cellspacing='10'>
                <thead>
                    <tr>
                        <th>Prouducts</th>
                        <th>Pricing</th>
                        <th>Cart</th>
                    </tr>
                </thead>
                <ProudctsList />
                
            </Table> 
        </>
    )
}

export default Products;