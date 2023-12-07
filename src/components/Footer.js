import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className='footer-site'>
        <Container color='primary'>
            <Row>
                <Col xs={{ size: 4, offset: 1 }} sm='2'>
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
                <Col xs='6' sm='3'>
                    <h5>Socials</h5>
                    <a
                        className='btn btn-social-icon btn-instagram'
                        href='https://www.instagram.com/autism_at_work/'
                    >
                        <i className='fa-brands fa-instagram' />
                    </a>{' '}
                    <a
                        className='btn btn-social-icon btn-facebook'
                        href='https://www.facebook.com/groups/393039416283624'
                    >
                        <i className='fa-brands fa-facebook' />
                    </a>{' '}
                    <a
                        className='btn btn-social-icon btn-github'
                        href='https://www.youtube.com'
                    >
                        <i className='fa-brands fa-tiktok' />
                    </a>{' '}
                </Col>
                <Col sm='4'>
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