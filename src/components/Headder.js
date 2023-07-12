import { useState } from 'react';
import { Navbar, NavbarBrand, Collapse, NavbarToggler, Nav, NavItem, Row, Col } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import Logo from '../app/assets/imag/image2.png';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    return (
        <Navbar dark color='primary' sticky='top' expand='md'>
            <Row className="centerImag">
                <NavbarBrand href='/'>
                    <img src={Logo} alt='logo not found' className='float-start' class="img-fluid"/>
                </NavbarBrand>
                <NavbarToggler onClick={() => setMenuOpen(!menuOpen)} />
                
                <Collapse isOpen={menuOpen} navbar>
                    <Nav className='centerImag' navbar>
                        <NavItem className='link-box'>
                            <NavLink className='nav-link' to='/'>
                                <i className='fa fa-home fa-lg' /> Home
                            </NavLink>
                        </NavItem>
                        <NavItem className='link-box'>
                            <NavLink className='nav-link' to='/program'>
                                <i className='fa fa-th-list fa-lg' /> Program
                            </NavLink>
                        </NavItem>
                        <NavItem className='link-box'>
                            <NavLink className='nav-link' to='/story'>
                                <i className='fa fa-book fa-lg' /> Story
                            </NavLink>
                        </NavItem>
                        <NavItem className='link-box'>
                            <NavLink className='nav-link' to='/store'>
                                <i className='fa fa-shopping-cart fa-lg' /> Store
                            </NavLink>
                        </NavItem>
                        <NavItem className='link-box'>
                            <NavLink className='nav-link' to='/contact'>
                                <i className='fa fa-address-card fa-lg' /> Contact
                            </NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Row>
        </Navbar>
    );
}

export default Header;