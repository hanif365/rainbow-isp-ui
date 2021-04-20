import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { useForm } from "react-hook-form";

import { UserContext } from '../../../App';
import Sidebar from '../../Sidebar/Sidebar';

const AddService = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    const { register, handleSubmit, watch, errors } = useForm();
    const [imageURL, setImageURL] = useState(null);

    const onSubmit = data => {
        const serviceData = {
            Service_Name: data.Service_Name,
            imageURL: imageURL,
            Price: data.Price,
            Service_Description: data.Service_Description,
            Service_Added_date: (new Date().getUTCDate()) + "-" + (new Date().getMonth() + 1) + "-" + (new Date().getUTCFullYear())
        };
        const url = `https://polar-bastion-39307.herokuapp.com/addService`
        // console.log(data)

        console.log(serviceData);

        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(serviceData)
        })
            .then(res => {
                console.log('server side response', res)
                // window.location.reload(false)
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
        <section className="container-fluid row">
            <Sidebar></Sidebar>
            <div className="col-9 py-5 my-5 p-4 pr-5" style={{ position: "absolute", right: 0, backgroundColor: "#F4FDFB" }}>
                <div className="order-component">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="row">
                            <div className="col-md-6">
                                <input name="Service_Name" className="form-control" placeholder="Add Service Name" ref={register} />

                                <input name="exampleRequired" className="my-5 form-control" type="file" onChange={handleImgUpload} />
                            </div>
                            <div className="col-md-6">
                                <input name="Price" className="form-control" placeholder="Add Price" ref={register} />

                                <input name="Service_Description" className="my-5 form-control" placeholder="Add Service Description" ref={register} />

                            </div>
                        </div>


                        <input className="btn btn-info ps-4 w-25" type="submit" />
                    </form>
                </div>
            </div>
        </section>
    );
};

export default AddService;