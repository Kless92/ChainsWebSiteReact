import { Container, Nav, NavItem, Row, Col } from "reactstrap";
import Prouducts from "../features/Store/Products";
import { NavLink } from 'react-router-dom';
import BackToTopButton from '../components/BackToTopButton';

const Store = () => {
    return(
        <Container>
            <Prouducts/>
            <BackToTopButton/>
        </Container>
    )
}
export default Store;