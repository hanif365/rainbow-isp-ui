import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import './Review.css'

const Review = () => {
    const { register, handleSubmit, watch, errors } = useForm();

    const [imageURL, setImageURL] = useState(null);

    const onSubmit = data => {
        const reviewData = {
            Name: data.Name,
            Designation: data.Designation,
            JobPlace: data.JobPlace,
            imageURL: imageURL,
            Description: data.Description,
            Date: (new Date().getUTCDate()) + "-" + (new Date().getMonth() + 1) + "-" + (new Date().getUTCFullYear())
        };
        const url = `https://polar-bastion-39307.herokuapp.com/addReview`
        // console.log(data)

        console.log(reviewData);

        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(reviewData)
        })
            .then(res => {
                console.log('server side response', res)
                window.location.reload(false)
            })

    };

    const handleImgUpload = (e) => {
        console.log(e.target.files[0]);
        const imageData = new FormData();
        imageData.set('key', 'eba329da20b6c8d81d975a91b47e61ab');
        imageData.append('image', e.target.files[0])


        axios.post('https://api.imgbb.com/1/upload', imageData)
            .then(function (response) {
                // console.log(response);
                console.log(response.data.data.display_url);
                setImageURL(response.data.data.display_url);
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="row">
                    <div className="col-md-6">
                        <input name="Name" className="my-5 form-control" placeholder="Your Name" ref={register} />

                        <input name="Designation" className="my-5 form-control" placeholder="Your Designation" ref={register} />

                        <input name="JobPlace" className="my-5 form-control" placeholder="Your JobPlace" ref={register} />


                    </div>
                    <div className="col-md-6">
                        <input name="imageURL" className="my-5 form-control" type="file" onChange={handleImgUpload} />

                        <input name="Description" className=" form-control" placeholder="Description" ref={register} />

                    </div>
                </div>


                <input className="my-5  btn btn-info ps-4" type="submit" />
            </form>
        </div>
    );
};

export default Review;