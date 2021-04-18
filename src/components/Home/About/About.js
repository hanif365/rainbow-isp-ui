import React from 'react';
import './About.css'

import featuresImg from '../../../images/features-img.png'
import featuresImgFtp from '../../../images/ftp.png'

const About = () => {
    return (
        <section className="container py-5">
            <div className="row d-flex">
                <div className="col-md-7 align-self-center">
                    <h2><span className="text-colorful">About</span> Rainbow ISP</h2>
                    <h3>Discover A Wider World Of Recreation</h3>
                    <h6 className="text-secondary">Powerful SFTP file Server with NEW Web Interface. You can access all Files using a web browser & feel free to request your files.</h6>
                    <hr />
                    <div className="row d-flex">
                        <div className="col-md-6">
                            <img src={featuresImg} className="img-fluid" alt="" />
                        </div>
                        <div className="col-md-6 align-self-center">
                            <h6 className="text-secondary">No matter where you’re located, High-Speed Internet has your back with fast speeds and reliable service.</h6>
                        </div>
                    </div>
                </div>
                <div className="col-md-5">
                    <img src={featuresImgFtp} className="img-fluid" alt="features-image" />
                </div>
            </div>
        </section>
    );
};

export default About;