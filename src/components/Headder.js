import { useState } from 'react';
import { Navbar, NavbarBrand, Collapse, NavbarToggler, Nav, NavItem, Row, Col} from 'reactstrap';
import { NavLink } from 'react-router-dom';
import Logo from '../app/assets/imag/image2.png';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    return (
        <Navbar dark color='primary'  expand='md'>
            <Row xs={12} sm={12} md={8} lg={12} lx={12} >
                <Col lg={4} lx={4}></Col>
                <Col xs={12} sm={12} md={12} lg={8} lx={8}>
                    <NavbarBrand href='/' >
                        <img src={Logo} alt='logo not found'  className = 'headerImage'/>
                    </NavbarBrand>
                </Col>
                <Col lg={4} lx={4}></Col>
            
                <NavbarToggler onClick={() => setMenuOpen(!menuOpen)} />
            
                <Collapse isOpen={menuOpen} navbar>
                    <Nav navbar>
                    <Col lg='10'></Col>
                    <Col md={3} lg={3} lx={3} >
                        <NavItem className='link-box'>
                            <NavLink className='nav-link' to='/'>
                                <i className='fa fa-home fa-lg' /> Home
                            </NavLink>
                        </NavItem>
                    </Col>
                    <Col md={3} lg={3} lx={3}>
                        <NavItem className='link-box'>
                            <NavLink className='nav-link' to='/program'>
                                <i className='fa fa-th-list fa-lg' /> Program
                            </NavLink>
                        </NavItem>
                    </Col>
                    <Col md={3} lg={3} lx={3} >
                        <NavItem className='link-box'>
                            <NavLink className='nav-link' to='/story'>
                                <i className='fa fa-book fa-lg' /> Story
                            </NavLink>
                        </NavItem>
                    </Col>
                    <Col md={3} lg={3} lx={3} >
                        <NavItem className='link-box'>
                            <NavLink className='nav-link' to='/store'>
                                <i className='fa  fa-shopping-bag' /> Store
                            </NavLink>
                        </NavItem>
                    </Col>
                    <Col md={3} lg={3} lx={3} >
                        <NavItem className='link-box'>
                            <NavLink className='nav-link' to='/contact'>
                                <i className='fa fa-address-card fa-lg' /> Contact
                            </NavLink>
                        </NavItem>
                    </Col>
                    <Col md={3} lg={3} lx={3} >   
                        <NavItem className='link-box'>
                            <NavLink className='nav-link' to='/cart'>
                                <i className='fa fa-shopping-cart fa-lg' /> Cart
                            </NavLink>
                        </NavItem>
                    </Col>
                    <Col lg='11'></Col>
                    </Nav>
                </Collapse>
            </Row>
        </Navbar>
    );
}

export default Header;