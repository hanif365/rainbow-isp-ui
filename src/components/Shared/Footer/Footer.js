import React from 'react';
import logo from '../../../images/logo.png'
import './Footer.css'

const Footer = () => {
    return (
        <footer className="pt-5 footer-container text-center">
            <div className="container">
                <div className="row">
                    <div className="col-md-3 col-sm-6 text-center">
                        <div className="d-flex justify-content-center">
                            <img src={logo} className="footer-logo" alt=""/>
                            <h2 className="align-self-center ms-2">Rainbow ISP</h2>
                        </div>
                        
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt, nobis.</p>
                    </div>
                    <div className="col-md-3 col-sm-6 link d-flex flex-column">
                        <h2>Quick Links</h2>
                        <a href="#">About Us</a>
                        <a href="#">Services</a>
                        <a href="#">Our Plans</a>
                        <a href="#">Discount</a>
                        <a href="#">Contact</a>
                    </div>
                    <div className="col-md-3 col-sm-6 link d-flex flex-column">
                        <h2>Useful Links</h2>
                        <a href="#">About Us</a>
                        <a href="#">Services</a>
                        <a href="#">Our Plans</a>
                        <a href="#">Discount</a>
                        <a href="#">Contact</a>
                    </div>
                    <div className="col-md-3 col-sm-6 link d-flex flex-column">
                        <h2>Service</h2>
                        <a href="#">About Us</a>
                        <a href="#">Services</a>
                        <a href="#">Our Plans</a>
                        <a href="#">Discount</a>
                        <a href="#">Contact</a>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <hr/>
                        <p>Copyright @ {(new Date()).getFullYear()} Rainbow ISP - All rights reserved</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;