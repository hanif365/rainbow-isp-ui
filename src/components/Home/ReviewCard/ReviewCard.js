import React from 'react';
import './ReviewCard.css'

const ReviewCard = (props) => {
    const { _id, Name, Designation, JobPlace, imageURL, Description, Date } = props.review;
    return (
        <div>
            <div class="card review-card p-3 m-3">

                <div className="d-flex">
                    <img src={imageURL} class="card-img-top review-card-img me-4" alt="review-card-img" />
                    <div>
                        <h5 class="card-title">{Name}</h5>
                        <span class="card-text">{Designation}</span>
                        <p class="card-text">{JobPlace}</p>
                    </div>

                </div>
                <div class="py-3">

                    <p class="card-text">{Description}</p>
                    {/* <p class="card-text">{Date}</p> */}
                </div>
            </div>
        </div>
    );
};

export default ReviewCard;