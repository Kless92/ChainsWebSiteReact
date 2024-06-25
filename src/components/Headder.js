import { useState } from 'react';
import { Navbar, NavbarBrand, Collapse, NavbarToggler, Nav, NavItem, Row, Col} from 'reactstrap';
import { NavLink } from 'react-router-dom';
import Logo from '../app/assets/imag/image2.png';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    return (
        <Navbar dark color='primary'  expand='md' >
            <Row className='headBaner'>
                <Col xs={12} sm={12} md={11} lg={10} xl={7}>
                    <NavbarBrand href='/' >
                        <img src={Logo} alt='logo not found'  className = 'headerImage'/>
                    </NavbarBrand>
                </Col>
            

                <NavbarToggler onClick={() => setMenuOpen(!menuOpen)} />
            
                <Collapse isOpen={menuOpen} navbar>
                    <Nav navbar className='headBaner'>
                    
                        
                        <Col xs={12} sm={12} md={2} lg={2} xl={2} >
                            <NavItem className='link-box'>
                                <NavLink className='nav-link' to='/'>
                                    <i className='fa fa-home fa-lg' /> Home
                                </NavLink>
                            </NavItem>
                        </Col>
                        <Col xs={12} sm={12} md={2} lg={2} xl={2}>
                            <NavItem className='link-box'>
                                <NavLink className='nav-link' to='/program'>
                                    <i className='fa fa-th-list fa-lg' /> Program
                                </NavLink>
                            </NavItem>
                        </Col>
                        <Col xs={12} sm={12} md={2} lg={2} xl={2}>
                            <NavItem className='link-box'>
                                <NavLink className='nav-link' to='/story'>
                                    <i className='fa fa-book fa-lg' /> Story
                                </NavLink>
                            </NavItem>
                        </Col>
                        <Col xs={12} sm={12} md={2} lg={2} xl={2}>
                            <NavItem className='link-box'>
                                <NavLink className='nav-link' to='/store'>
                                    <i className='fa  fa-shopping-bag' /> Store
                                </NavLink>
                            </NavItem>
                        </Col>
                        <Col xs={12} sm={12} md={2} lg={2} xl={2}>
                            <NavItem className='link-box'>
                                <NavLink className='nav-link' to='/contact'>
                                    <i className='fa fa-address-card fa-lg' /> Contact
                                </NavLink>
                            </NavItem>
                        </Col>
                        <Col  xs={12} sm={12} md={2} lg={2} xl={2}>   
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