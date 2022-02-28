import React from 'react';
import logo from '../../../images/logo.png'
import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="pt-5 footer-container text-center px-3">
            <div className="container">
                <div className="row">
                    <div className="col-md-3 col-sm-6 text-center">
                        <div className="d-flex justify-content-center">
                            <img src={logo} className="footer-logo" alt=""/>
                            <h2 className="align-self-center ms-2">Rainbow ISP</h2>
                        </div>
                        
                        <h6 className="py-2">We Provide World Class service with reasonable price</h6>
                    </div>
                    <div className="col-md-3 col-sm-6 link d-flex flex-column footer-link">
                        <h2>Quick Links</h2>
                        <Link to="/home">Home</Link>
                        <Link to="/dashboard">Dashboard</Link>
                        <Link to="/orders">Orders</Link>
                        <a href="#contact-section">Contact</a>
                        
                    </div>
                    <div className="col-md-3 col-sm-6 link d-flex flex-column">
                        <h2>Useful Links</h2>
                        <a href="#about-section">About Us</a>
                        <a href="#service-section">Services</a>
                        {/* <a href="#">Our Plans</a> */}
                        <a href="#faq-section">FAQ's</a>
                        <a href="#contact-section">Contact</a>
                    </div>
                    <div className="col-md-3 col-sm-6 link d-flex flex-column">
                        <h2>Service</h2>
                        {/* <a href="#">About Us</a> */}
                        <a href="#feature-section">Features</a>
                        <a href="#service-section">Our Plans</a>
                        {/* <a href="#">Discount</a> */}
                        <a href="#contact-section">Contact</a>
                        <a href="#review">Testimonial</a>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <hr/>
                        <p>&copy; {(new Date()).getFullYear()} <span className="text-light">Rainbow ISP</span> - All rights reserved</p>
                    </div>
                </div>
            </div>

            <div>
                <a href="#" className="bottom-to-top"><FontAwesomeIcon icon={faArrowUp} size="2x" /></a>
            </div>
        </footer>
    );
};

export default Footer;