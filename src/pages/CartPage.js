import { Container} from "reactstrap";
import BackToTopButton from '../components/BackToTopButton';
import CartList from '../features/cart/cartList';

const Cart = () => {
    return (
        <Container>
            <CartList/>
            <BackToTopButton/>
        </Container>
    )
};
export default Cart;