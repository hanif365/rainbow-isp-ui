import React, { useEffect, useState } from 'react';
import ReviewCard from '../ReviewCard/ReviewCard';
import './ReviewHome.css'

const ReviewHome = () => {
    const [reviews, setReviews] = useState([])

    useEffect(() => {
        fetch(`https://polar-bastion-39307.herokuapp.com/review`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setReviews(data);
            })
    }, [])
    return (
        <div className="review-container">
            <div className="container py-5 ">
                <h4 className="text-center pb-2">Rainbow ISP <span className="text-colorful">Testimonial</span></h4>
                <h2 className="text-center">What Our Clients Say</h2>
                <div className="d-flex  flex-wrap pt-2">
                    {
                        reviews.map(review => <ReviewCard review={review}></ReviewCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default ReviewHome;