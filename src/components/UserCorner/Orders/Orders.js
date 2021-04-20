import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../App';
import ProcessPayment from '../../ProcessPayment/ProcessPayment';
import { useForm } from "react-hook-form";
import Sidebar from '../../Sidebar/Sidebar';
import moment from 'moment';
import { useParams } from 'react-router';

const Orders = () => {
    const { register, handleSubmit, watch, errors } = useForm();
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [shippingData, setShippingData] = useState(null);
    const [service, setService] = useState([]);

    const { serviceId } = useParams();

    useEffect(() => {
        fetch(`https://polar-bastion-39307.herokuapp.com/service/${serviceId}`)
            .then(res => res.json())
            .then(data => {
                setService(data[0])
            })
    }, [])

    const onSubmit = data => {
        setShippingData(data);

    };

    const handlePaymentSuccess = payment => {
        const orderDetails = {
            ...loggedInUser,
            shipment: shippingData,
            payment,
            orderTime: moment().format('MMMM Do YYYY, h:mm:ss a')
        };

        const url = `https://polar-bastion-39307.herokuapp.com/addOrder`

        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(orderDetails)
        })
            .then(res => {
                console.log('server side response', res)
                // window.location.reload(false)
            })


        // window.location.reload(false)
    }
    return (
        <section className="container-fluid row">
            <Sidebar></Sidebar>
            <div className="col-9 py-5 my-5 p-4 pr-5" style={{ position: "absolute", right: 0, backgroundColor: "#F4FDFB" }}>
                <div style={{ display: shippingData ? 'none' : 'block' }}>
                    <form className="" onSubmit={handleSubmit(onSubmit)}>
                        <input name="name" defaultValue={loggedInUser.name} class="form-control" ref={register({ required: true })} placeholder="Your Name" />
                        {errors.name && <span className="error">Name is required</span>}

                        <input name="email" defaultValue={loggedInUser.email} class="form-control my-4" ref={register({ required: true })} placeholder="Your Email" />
                        {errors.email && <span className="error">Email is required</span>}

                        <input name="Service_Name" defaultValue={service.Service_Name} class="form-control" ref={register({ required: true })} placeholder="Service_Name" />
                        {errors.Service_Name && <span className="error">Service Name is required</span>}

                        <input name="ServiceImg" defaultValue={service.imageURL} class="form-control my-4" ref={register({ required: true })} placeholder="Service Image URL" />
                        {errors.ServiceImg && <span className="error">ServiceImg is required</span>}

                        <textarea name="Service_Description" defaultValue={service.Service_Description} ref={register({ required: true })} placeholder="Service Description" rows="4" className="mt-4 w-100 mb-4 p-3" />
                        {errors.Service_Description && <span className="error">Service Description is required</span>}

                        <input name="phone" ref={register({ required: true })} class="form-control" placeholder="Your Phone Number" />
                        {errors.phone && <span className="error">Phone Number is required</span>}

                        {/* <h6 className="py-3">Your Service Charge will be {service.Price}</h6> */}

                        <h6 className="pt-5">Your Service Charge will be : </h6>
                        <input name="Service_Price" defaultValue={service.Price} class="form-control my-4" ref={register({ required: true })} placeholder="Service Price" />
                        {errors.Service_Price && <span className="error">Service Price is required</span>}

                        <input name="Status" defaultValue="pending" class="form-control my-4" ref={register({ required: true })} placeholder="Order Status" />

                        <input type="submit" class="btn btn-info w-50" />
                    </form>

                </div>

                <div style={{ display: shippingData ? 'block' : 'none' }}>
                    <ProcessPayment handlePayment={handlePaymentSuccess}></ProcessPayment>
                </div>

            </div>

        </section>
    );
};

export default Orders;