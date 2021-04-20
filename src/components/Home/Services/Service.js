import React, { useEffect, useState } from 'react';
import ServiceCard from '../ServiceCard/ServiceCard';
import './Service.css'
import serviceLogo from '../../../images/service.png'

const Service = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('https://polar-bastion-39307.herokuapp.com/services')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setServices(data)
            })
    }, [])
    return (
        <div className="service-container px-3" id="service-section">
            <div className="container py-5">
                <img src={serviceLogo} className="serviceLogo" alt="serviceLogo" />
                <h4 className="text-center pb-2">Rainbow ISP <span className="text-colorful">Service</span></h4>
                <h2 className="text-center">We Provide World Class service with reasonable price</h2>
                <div className="d-flex justify-content-center flex-wrap pt-4">
                    {
                        services.map(service => <ServiceCard service={service}></ServiceCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Service;