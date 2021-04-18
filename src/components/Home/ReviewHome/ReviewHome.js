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
        <div className="container py-5">
            <h1 className="text-center pb-5">Testimonial</h1>
            <div className="d-flex justify-content-center flex-wrap pt-2">
                {
                    reviews.map(review => <ReviewCard review={review}></ReviewCard>)
                }
            </div>
        </div>
    );
};

export default ReviewHome;