import React, { useEffect, useState } from 'react';
import ServiceCard from '../ServiceCard/ServiceCard';
import './Service.css'

const Service = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('https://polar-bastion-39307.herokuapp.com/services')
        .then(res => res.json())
        .then(data => {
            console.log(data)
            setServices(data)
        })
    },[])
    return (
        <div className="service-container">
            <div className="container py-5">
            <h4 className="text-center pb-2">Rainbow ISP <span className="text-colorful">Service</span></h4>
            <h2 className="text-center">We Provide World Class service with reasonable price</h2>
            <div className="d-flex justify-content-center flex-wrap pt-2">
                {
                    services.map(service => <ServiceCard service={service}></ServiceCard>)
                }
            </div>
        </div>
        </div>
    );
};

export default Service;