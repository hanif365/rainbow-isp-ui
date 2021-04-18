import React from 'react';
import headerImg from '../../../images/header-img2.jpg'
import bgHeader from '../../../images/bg-header.png'
import './HeaderContent.css'
import { Link } from 'react-router-dom';

const HeaderContent = () => {
    return (
        <main className="d-flex align-items-center header-container py-5 my-5">
            <div className="col-md-5 offset-md-1 main-content">
                <h1>Connect the world with RainbowISP</h1>
                <h5 className="py-3">We Provide WorldClass Internet Service With Reasonable Price</h5>
                <a className="btn btn-info" href="/service">PICK A SERVICE</a>
            </div>
            <div className="col-md-5">
                <img src={headerImg} className="img-fluid header-img" alt="main-image"/>
            </div>
        </main>
    );
};

export default HeaderContent;