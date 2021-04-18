import React from 'react';
import FeaturesCard from '../FeaturesCard/FeaturesCard';
import './Features.css'

import internetSpeed from '../../../images/internet-speed.png'
import ftp from '../../../images/ftp.png'
import bdix from '../../../images/bdixService.png'
import featurelogo from '../../../images/feature.png'

const Features = () => {
    const featuresData = [
        {
            featureIcon: internetSpeed,
            featureTitle: 'Rocket Speed Internet',
            featureDescription: 'No matter where you’re located, High-Speed Internet has your back with fast speeds and reliable service.'
        },
        {
            featureIcon: ftp,
            featureTitle: 'FTP Web Service',
            featureDescription: 'Powerful SFTP file Server with NEW Web Interface. You can access all Files using a web browser & feel free to request your files.'
        },
        {
            featureIcon: bdix,
            featureTitle: 'BDIX Service',
            featureDescription: 'No matter where you’re located, High-Speed Internet has your back with fast speeds and reliable service.'
        }
    ]
    return (
        <div className="py-5 feature-container">
            <div className="container">
                <div className="row col-12 text-center">
                    <img src={featurelogo} className="feature-logo m-auto" alt=""/>
                    <h4>Rainbow ISP <span className="text-colorful">Features</span></h4>
                    <h2 className="pb-3">We Are Internet Service Provider Company</h2>
                </div>
            </div>
            <div className="row d-flex justify-content-center">
                {
                    featuresData.map(features => <FeaturesCard features={features}></FeaturesCard>)
                }
            </div>
        </div>
    );
};

export default Features;