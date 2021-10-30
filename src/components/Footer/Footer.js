import React from 'react';
import "./Footer.css"
import { Col, Container, Row } from 'react-bootstrap';
import footerLogo from "./../../images/logo.png"
import contactimg from "./../../images/contact.jpg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMapMarkerAlt, faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons"
import { NavLink } from 'react-router-dom';

const Footer = () => {
    return (
        <div className="text-white">
            <div className="py-4 gradiant">
                <Container>
                    <Row>
                        <Col md={4}>
                            <div className=" my-2">
                                <img width="120px" src={footerLogo} alt="" />
                            </div>
                            <ul className="list-unstyled">
                                <li>
                                    <FontAwesomeIcon icon={faMapMarkerAlt} />
                                    <span className="ms-1 fs-6"> Mirpur,Dhaka,Bangladesh</span>
                                </li>
                                <li>
                                    <FontAwesomeIcon icon={faEnvelope} />
                                    <span className="ms-1 fs-6"> Official: bdtraveller@gmail.com"</span>
                                </li>
                                <li>
                                    <FontAwesomeIcon icon={faPhone} />
                                    <span className="ms-1 fs-6"> Helpline: +8802-566895(Available: 24 hours)</span>
                                </li>
                            </ul>
                        </Col>
                        <Col md={2}>
                            <ul className="list-unstyled">
                                <li>
                                    <NavLink to="/home">Home</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/about">About us</NavLink>
                                </li>

                                <li>
                                    <NavLink to="/services">Services</NavLink>
                                </li>

                            </ul>
                        </Col>
                        <Col md={6}>
                            <Row>
                                <Col md={6}>
                                    <ul className="list-unstyled clist">



                                        <li>Tickets</li>
                                        <li>Blogs</li>
                                        <li>Get an Appointment</li>
                                    </ul>
                                </Col>
                                <Col md={6}>
                                    <img src={contactimg} alt="" />
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>

                <div className="m-0 ">
                    <hr className="m-0 p-0" />
                    <p className="text-center text-warning m-0 py-3">
                        Copyright © All Reserved by Mahfuz Zaman in 2021
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Footer;