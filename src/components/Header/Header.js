import React from 'react';
import logo from '../../images/logo.png'
import { Container, Nav, Navbar, Stack, Button } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import { useHistory, useLocation } from 'react-router';
import useFirebase from '../../hooks/useFirebase';

const Header = () => {
    const { user, logout } = useAuth();
    const {
        signInUsingGoogle,

    } = useFirebase();


    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/home'

    const handleGoogleLogin = () => {
        signInUsingGoogle()
            .then(result => {
                history.push(redirect_uri)
            })
    }

    return (
        <div>
            <Navbar collapseOnSelect navbar-collapse expand="lg" bg="dark" variant="light">
                <Container>
                    <Link to='/'> <Navbar.Brand><img src={logo} alt="" /><h1 className="text-white">BD Travel</h1></Navbar.Brand></Link>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto">
                            <Stack direction="horizontal" gap={5}>
                                <NavLink
                                    className='text-decoration-none fs-5 text-danger ms-3'
                                    to="/home"

                                >
                                    Home
                                </NavLink>
                                <NavLink
                                    className='text-decoration-none fs-5 text-danger'
                                    to="/about"

                                >
                                    About
                                </NavLink>
                                <NavLink
                                    className='text-decoration-none fs-5 text-danger'
                                    to="/services"

                                >
                                    Services
                                </NavLink>
                                <NavLink
                                    className='text-decoration-none fs-5 text-danger ms-2'
                                    to="/customer"

                                >
                                    Customer
                                </NavLink>
                                {
                                    user.email &&
                                    <div className='ms-2'>
                                        <NavLink
                                            className='text-decoration-none fs-5 text-danger ms-3'
                                            to="/myOrders"

                                        >
                                            MyOrders
                                        </NavLink>
                                        <NavLink
                                            className='text-decoration-none fs-5 text-danger ms-3'
                                            to="/manageOrders"

                                        >
                                            ManageOrders
                                        </NavLink>
                                        <NavLink
                                            className='text-decoration-none fs-5 text-danger ms-3'
                                            to="/addServices"

                                        >
                                            AddServices
                                        </NavLink>
                                    </div>
                                }


                                <div className='container'>

                                    <img className='details-header  mt-2 ms-3' src={user.photoURL} alt="" />
                                    <br />
                                    <span className='text-dark fw-bold ms-2'>{user.displayName}</span>


                                    {
                                        user.email ?
                                            <Button onClick={logout} className='menu-btn' variant="danger"> SignOut</Button>
                                            :
                                            <Button onClick={handleGoogleLogin} className='menu-btn' variant="danger">SingIn</Button>
                                    }

                                </div>

                            </Stack>
                        </Nav>

                    </Navbar.Collapse>
                </Container>

            </Navbar>
        </div>
    );
};

export default Header;