import React from 'react';
import './About.css'

import featuresImg from '../../../images/features-img.png'

const About = () => {
    return (
        <section className="container py-5">
            <div className="row d-flex">
                <div className="col-md-7 align-self-center">
                    <h2>About Rainbow ISP</h2>
                    <h3>Discover A Wider World Of Recreation</h3>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. At aspernatur voluptate ipsam a vel vero architecto perferendis! Fugiat, praesentium quisquam.</p>
                    <hr/>
                    <div className="row d-flex">
                        <div className="col-md-6">
                            <img src={featuresImg} className="img-fluid" alt=""/>
                        </div>
                        <div className="col-md-6 align-self-center">
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad inventore laborum unde aliquid ullam deleniti.</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-5">
                    <img src={featuresImg} className="img-fluid" alt="features-image"/>
                </div>
            </div>
        </section>
    );
};

export default About;