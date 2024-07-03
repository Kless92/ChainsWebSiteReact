import { Container, Nav, NavItem, Row, Col } from "reactstrap";
import Prouducts from "../features/Store/Products";
import { NavLink } from 'react-router-dom';
const Store = () => {
    return(
        <Container>
            <Prouducts/>
            <Row >
            <Col md={9}></Col>
            <Col  xs={12} sm={12} md={3} lg={3} xl={3}>
                <Nav fill>
                    <NavItem className='link-box'>
                        <NavLink className='nav-link' to='/cart' style={{color: 'white', textDecoration: 'none'}}>
                            <i className='fa fa-shopping-cart fa-lg' /> Cart
                        </NavLink>
                    </NavItem>
                </Nav>
            </Col>
            </Row>
        </Container>
    )
}
export default Store;