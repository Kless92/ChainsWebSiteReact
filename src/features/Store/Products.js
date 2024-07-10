import { Table, Row, Col } from "reactstrap";
import ProudctsList from "./productList";

const Products = () => {
    return (
        <>
            <h3>
                Shipping & taxes NOT included in the above pricing.<br />
                Please contact us if you are interested in pricing on
                gift baskets for any occasion.<br />The information is
                located on the contact page.<br />For a customize gift box,
                please contact the number or email below or on contact page.
            </h3>
            <Row className='adjustCartText'>
                <Col><h1>Prouducts</h1></Col>
                <Col><h1>Pricing</h1></Col>
                <Col><h1>Cart</h1></Col>
            </Row>
            <div className='price-border'>
                <ProudctsList />
            </div>
            <div className='adjustCartText'/>
        </>
    )
}

export default Products;