import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { UserContext } from '../../../App';
import { useForm } from "react-hook-form";
import './Order.css'
import ProcessPayment from '../../ProcessPayment/ProcessPayment';
import Navbar from '../../Shared/Navbar/Navbar';
import moment from 'moment';
import OrderList from '../OrderList/OrderList';
import Review from '../Review/Review';

const Order = () => {
    const { register, handleSubmit, watch, errors } = useForm();
    // const onSubmit = data => console.log(data);
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    const [shippingData, setShippingData] = useState(null);

    const [orders, setOrders] = useState([])

    const [showOrderList, setShowOrderList] = useState(false);

    const [showReview, setShowReview] = useState(false);


    // console.log(props)
    console.log(loggedInUser)
    const { serviceId } = useParams();
    console.log(serviceId);
    const [service, setService] = useState([]);



    useEffect(() => {
        fetch(`http://localhost:5000/service/${serviceId}`)
            .then(res => res.json())
            .then(data => {
                console.log(data[0])
                console.log(data)
                console.log(data[0].Price)
                // console.log(data[0].Product_Name)
                setService(data[0])
            })
    }, [])


    // For add Order

    const onSubmit = data => {
        setShippingData(data);

    };

    const handlePaymentSuccess = payment => {
        // const savedCart = getDatabaseCart();
        const orderDetails = {
            ...loggedInUser,
            //   products: savedCart, 
            shipment: shippingData,
            payment,
            orderTime: moment().format('MMMM Do YYYY, h:mm:ss a')
        };

        const url = `http://localhost:5000/addOrder`

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
        // .then(res => res.json())
        // // .then(data => {
        // //     if (data) {
        // //         //   processOrder();
        // //         // alert('your order placed successfully');
        // //     }
        // // })

        // window.location.reload(false)
    }

    // New test code



    const handleReview = () => {
        console.log("order clicked");
        // setShowOrderList(false);
        setShowReview(true);
    }

    const handleOrderList = () => {
        setShowOrderList(true);
        setShowReview(false);
    }

    const handleOrder = () => {
        setShowOrderList(false);
        setShowReview(false);
    }

// test code
    // useEffect(() => {
    //     fetch(`http://localhost:5000/orders`)
    //         .then(res => res.json())
    //         .then(data => setOrders(data))
    // }, [])

    // working code
    // useEffect(() => {
    //     fetch(`http://localhost:5000/orders?email=`+loggedInUser.email)
    //         .then(res => res.json())
    //         .then(data => setOrders(data))
    // }, [])

    // test code
    useEffect(() => {
        fetch(`http://localhost:5000/booking?email=`+loggedInUser.email)
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [])




    // useEffect(() => {
    //     fetch('https://protected-temple-11347.herokuapp.com/products')
    //         .then(res => res.json())
    //         .then(data => setProducts(data))
    // }, [])

    return (
        <div>
            <Navbar></Navbar>
            <div className="container-fluid py-5 my-5">
                {/* <h1>This is order Page</h1>
            <p>Price {service.Price}</p>
            <p>{loggedInUser.name}</p>
            <p>{loggedInUser.email}</p> */}


                <div className="row">
                    <div className="col-md-3">
                        <div className="d-flex flex-column bg-success p-3">
                            <button onClick={handleOrder} className="btn btn-info py-3" >Order</button>
                            <button onClick={handleOrderList} className="btn btn-info my-4 py-3">Order list</button>
                            <button onClick={handleReview} className="btn btn-info py-3" >Add Review</button>
                        </div>
                    </div>
                    <div style={{ display: showReview ? 'none' : 'block' }} className="col-md-9">
                        <div style={{ display: showOrderList ? 'none' : 'block' }} className="col-md-9" >
                            <div style={{ display: shippingData ? 'none' : 'block' }} className="col-md-9">
                                <form className="order-form" onSubmit={handleSubmit(onSubmit)}>
                                    <input name="name" defaultValue={loggedInUser.name} ref={register({ required: true })} placeholder="Your Name" />
                                    {errors.name && <span className="error">Name is required</span>}

                                    <input name="email" defaultValue={loggedInUser.email} ref={register({ required: true })} placeholder="Your Email" />
                                    {errors.email && <span className="error">Email is required</span>}

                                    <input name="Service_Name" defaultValue={service.Service_Name} ref={register({ required: true })} placeholder="Service_Name" />
                                    {errors.Service_Name && <span className="error">Service Name is required</span>}

                                    <input name="ServiceImg" defaultValue={service.imageURL} ref={register({ required: true })} placeholder="Service Image URL" />
                                    {errors.ServiceImg && <span className="error">ServiceImg is required</span>}

                                    <textarea name="Service_Description" defaultValue={service.Service_Description} ref={register({ required: true })} placeholder="Service Description" rows="4" cols="50" className="mt-4" />
                                    {errors.Service_Description && <span className="error">Service Description is required</span>}

                                    <input name="phone" ref={register({ required: true })} placeholder="Your Phone Number" />
                                    {errors.phone && <span className="error">Phone Number is required</span>}

                                    {/* <h6 className="py-3">Your Service Charge will be {service.Price}</h6> */}

                                    <h6 className="pt-5">Your Service Charge will be : </h6>
                                    <input name="Service_Price" defaultValue={service.Price} ref={register({ required: true })} placeholder="Service Price" />
                                    {errors.Service_Price && <span className="error">Service Price is required</span>}

                                    <input type="submit" />
                                </form>

                                {/* <ProcessPayment handlePayment={handlePaymentSuccess}></ProcessPayment> */}
                            </div>

                            <div style={{ display: shippingData ? 'block' : 'none' }} className="col-md-9">
                                <ProcessPayment handlePayment={handlePaymentSuccess}></ProcessPayment>
                            </div>
                        </div>


                        <div style={{ display: showOrderList ? 'block' : 'none' }} className="">
                            <p>Icon add korbo</p>
                            <h2 className="text-center">Your Order List</h2>
                            <div className="d-flex flex-wrap justify-align-center">
                                {
                                    orders.map(order => <OrderList order={order}></OrderList>)
                                }
                            </div>
                        </div>
                    </div>


                    <div style={{ display: showReview ? 'block' : 'none' }} className="col-md-9">
                        <Review></Review>
                    </div>

                </div>
            </div>
        </div>
    );
};


export default Order;