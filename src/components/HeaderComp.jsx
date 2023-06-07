import { useEffect, useState } from 'react'
import PropTypes from "prop-types";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import grocerycart64 from '../assets/grocery-cart64.png';
import { useDispatch, useSelector } from 'react-redux';
import { userLogout } from "../redux/userAuthSlice";
import { CartFill } from 'react-bootstrap-icons';

function HeaderComp(props) {
    const dispatch = useDispatch();
    const { themeColor } = props;
    console.log('themeColor', themeColor);
    const { userAuth, userCart } = useSelector((state) => state);

    const isAuthenticated = userAuth.isLoggedIn;
    const userName = userAuth.userProfile.userName;
    const [netStatus, setNetStatus] = useState(true);

    useEffect(() => {
        window.addEventListener('online', () => setNetStatus(true))
        window.addEventListener('offline', () => setNetStatus(false))
    }, [])

    return (
        <>
            {!netStatus ? <>
                <div className="notification-top-bar">
                    <p>Please check your internet connection, <small> Reload after connection back</small></p>
                </div>
            </> : ''}
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Link className='navbar-brand' to="/">
                        <img className='img-fluid mr-3' src={grocerycart64} style={{ height: "40px", marginRight: "6px" }} alt="Yum Yum Grocery" />Yum Yum Grocery
                    </Link>

                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Link className='nav-link' to="/about-us">About Us</Link>
                            <Link className='nav-link' to="/contact-us">Contact Us</Link>
                        </Nav>
                        <Nav>

                            {isAuthenticated ?
                                <>
                                    <NavDropdown title={userName} id="collasible-nav-dropdown">
                                        <Link className='dropdown-item' to="/user/dashboard">User Dashboard</Link>
                                        <Link className='dropdown-item' to="/user/favourite">Favourite Items</Link>
                                        <Link className='dropdown-item' to="/user/orders">User Orders</Link>
                                        <NavDropdown.Divider />
                                        <Link className='dropdown-item' onClick={() => dispatch(userLogout())} to="/">Logout</Link>
                                    </NavDropdown>
                                </> :
                                <>
                                    <Link className='nav-link' to="/sign-up">Sign Up</Link>
                                    <Link className='nav-link' to="/sign-in">Sign In</Link>
                                </>}

                            <Link className='nav-link' to="/cart">
                                <CartFill color="white" size={18} />
                                <span className="cartText">{userCart.cartCount}</span>
                            </Link>

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}

HeaderComp.propTypes = {
    themeColor: PropTypes.string.isRequired
}


export default HeaderComp;