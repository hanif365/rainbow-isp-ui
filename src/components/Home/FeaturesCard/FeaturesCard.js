import React from 'react';
import './FeaturesCard.css'

const FeaturesCard = (props) => {
    const {featureIcon, featureTitle, featureDescription} = props.features
    return (
        
            <div class="card features-card mx-3">
                <img src={featureIcon} class="card-img-top features-img" alt="..." />
                <div class="card-body">
                    <h5 class="card-title">{featureTitle}</h5>
                    <p class="card-text">{featureDescription}</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
            </div>
       
    );
};

export default FeaturesCard;