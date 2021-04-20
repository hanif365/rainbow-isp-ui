import React from 'react';
import { useHistory } from 'react-router';
import './ServiceCard.css'

const ServiceCard = (props) => {
    const { _id, Service_Name, imageURL, Service_Description, Price} = props.service;

    const history = useHistory();

    const handleService = (serviceId) =>{
        history.push(`/service/${serviceId}`);
    }

    return (
        <div className="px-2">
            <div class="card mb-3 service-card">
                <div class="row g-0">
                    <div class="col-md-4">
                        <img src={imageURL} className="service-card-img" alt="service-image" />
                    </div>
                    <div class="col-md-8 text-center service-info">
                        <div class="card-body">
                            <h5 class="card-title">{Service_Name}</h5>
                            <p class="card-text">{Service_Description}</p>
                            <p>${Price} / month</p>
                            {/* <a href="#" class="btn btn-info w-50">ORDER NOW</a> */}
                            <button onClick={() => handleService(_id)} className="btn  btn-colorful px-5">ORDER NOW</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;