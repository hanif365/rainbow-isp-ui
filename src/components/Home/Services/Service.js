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
        <div className="container py-5" id="service">
            <h1 className="text-center pb-5">Service</h1>
            <div className="d-flex justify-content-center flex-wrap pt-2">
                {
                    services.map(service => <ServiceCard service={service}></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default Service;