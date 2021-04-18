import React from 'react';
import headerImg from '../../../images/header-img2.jpg'
import bgHeader from '../../../images/bg-header.png'
import './HeaderContent.css'

const HeaderContent = () => {
    return (
        <main className="d-flex align-items-center header-container py-5">
            <div className="col-md-5 offset-md-1 main-content">
                <h1>Main Content</h1>
                <p className="">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, ex.</p>
                <a className="btn btn-info" href="#">PICK A SERVICE</a>
            </div>
            <div className="col-md-5">
                <img src={headerImg} className="img-fluid header-img" alt="main-image"/>
            </div>
        </main>
    );
};

export default HeaderContent;