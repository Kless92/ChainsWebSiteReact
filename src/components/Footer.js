import { Container, Row, Col} from 'reactstrap';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className='footer-site'>
            <Container>
                <Row>
                    <Col xs='3' sm='2' lg={{size: 2, offset: 1}}>
                        <h5>Links</h5>
                        <ul>
                            <li>
                                <Link to='/'>Home</Link>
                            </li>
                            <li>
                                <Link to='/program'>Program</Link>
                            </li>
                            <li>
                                <Link to='/story'>Story</Link>
                            </li>
                            <li>
                                <Link to='/store'>Store</Link>
                            </li>
                            <li>
                                <Link to='/contact'>Contact</Link>
                            </li>
                        </ul>
                    </Col>
                    <Col xs='2' sm='3' lg={{size: 2, offset: 2}}>
                        <h5>Socials</h5>
                        <a
                            className='btn btn-social-icon btn-instagram btn-lg fa-lg'
                            href='https://www.instagram.com/autism_at_work/'
                            
                        >
                            <i className='fa-brands fa-instagram' />
                        </a>{' '}
                        <a
                            className='btn btn-social-icon btn-facebook btn-lg fa-lg'
                            href='https://www.facebook.com/groups/393039416283624'
                        >
                            <i className='fa-brands fa-facebook' />
                        </a>{' '}
                        <a
                            className='btn btn-social-icon btn-github btn-lg fa-lg'
                            href='https://www.tiktok.com/@autismatworkllc'
                        >
                            <i className='fa-brands fa-tiktok' />
                        </a>{' '}
                    </Col>
                    <Col xs='7' sm='4' lg={{size: 3, offset: 2}}>
                        <a
                            role='button'
                            className='btn btn-link'
                            href='tel:+9072302234'
                        >
                            <i className='fa fa-phone' /> 907-230-2234
                        </a>
                        <br />
                        <a
                            role='button'
                            className='btn btn-link'
                            href='mailto:autismatworkllc@gmail.com'
                        >
                            <i className='fa fa-envelope-o' /> autismatworkllc@gmail.com
                        </a>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer