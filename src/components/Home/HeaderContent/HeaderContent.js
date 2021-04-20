import React from 'react';
import headerImg from '../../../images/bg-header-new.png'
import bgHeader from '../../../images/bg-header.png'
import './HeaderContent.css'
import { Link } from 'react-router-dom';

const HeaderContent = () => {
    return (
        <main className="row header-container px-5 d-flex">
            <div className="col-md-5 offset-md-1 main-content align-self-center">
                <h1 className="text-light">Connect the world with <span className="text-warning">RainbowISP</span></h1>
                <h5 className="py-3 text-light">We Provide WorldClass Internet Service With Reasonable Price</h5>
                <a className="btn btn-primary" href="#service-section">PICK A SERVICE</a>
            </div>
            <div className="col-md-5">
                <img src={headerImg} className="header-img img-fluid" alt="main-image" />
            </div>
        </main>
    );
};

export default HeaderContent;