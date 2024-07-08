import { Container} from "reactstrap";
import Prouducts from "../features/Store/Products";
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