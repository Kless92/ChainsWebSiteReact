import { useState } from 'react';
import { Navbar, NavbarBrand, Collapse, NavbarToggler, Nav, NavItem, Row, Col} from 'reactstrap';
import { NavLink } from 'react-router-dom';
import Logo from '../app/assets/imag/image2.png';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    return (
        <Navbar dark color='primary' sticky='top' expand='md'>
            <Row xs={12} sm={12} md={12} lg={1} lx={6}>
                <Col xs={12} sm={12} md={12} lg={{offset: 4, size: 7}} lx={{offset: 2, size: 12}} >
                <NavbarBrand href='/' >
                    <img src={Logo} alt='logo not found'  className = 'headerImage'/>
                </NavbarBrand>
                </Col>
                <NavbarToggler onClick={() => setMenuOpen(!menuOpen)} />
            
                <Collapse isOpen={menuOpen} navbar>
                    <Nav navbar>
                    <Col md={2} lg={{offset: 10, size: 3}} lx={{offset: 2, size: 3}} >
                        <NavItem className='link-box'>
                            <NavLink className='nav-link' to='/'>
                                <i className='fa fa-home fa-lg' /> Home
                            </NavLink>
                        </NavItem>
                    </Col>
                    <Col md={3} lg={3} lx={{offset: 2, size: 3}} >
                        <NavItem className='link-box'>
                            <NavLink className='nav-link' to='/program'>
                                <i className='fa fa-th-list fa-lg' /> Program
                            </NavLink>
                        </NavItem>
                    </Col>
                    <Col md={3} lg={3} lx={{offset: 2, size: 3}} >
                        <NavItem className='link-box'>
                            <NavLink className='nav-link' to='/story'>
                                <i className='fa fa-book fa-lg' /> Story
                            </NavLink>
                        </NavItem>
                    </Col>
                    <Col md={3} lg={3} lx={{offset: 2, size: 3}} >
                        <NavItem className='link-box'>
                            <NavLink className='nav-link' to='/store'>
                                <i className='fa  fa-shopping-bag' /> Store
                            </NavLink>
                        </NavItem>
                    </Col>
                    <Col md={3} lg={3} lx={{offset: 2, size: 3}} >
                        <NavItem className='link-box'>
                            <NavLink className='nav-link' to='/contact'>
                                <i className='fa fa-address-card fa-lg' /> Contact
                            </NavLink>
                        </NavItem>
                    </Col>
                    <Col md={3} lg={3} lx={{offset: 2, size: 3}} >   
                        <NavItem className='link-box'>
                            <NavLink className='nav-link' to='/cart'>
                                <i className='fa fa-shopping-cart fa-lg' /> Cart
                            </NavLink>
                        </NavItem>
                    </Col>  
                    </Nav>
                </Collapse>
            </Row>
        </Navbar>
    );
}

export default Header;