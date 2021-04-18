import React, { useContext, useEffect, useState } from 'react';
import './Admin.css'
import { useForm } from "react-hook-form";
import axios from 'axios';
import { Link } from 'react-router-dom';
import Navbar from '../../Shared/Navbar/Navbar';
import { UserContext } from '../../../App';
import Footer from '../../Shared/Footer/Footer';

const Admin = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    const { register, handleSubmit, watch, errors } = useForm();

    const [orders, setOrders] = useState([])

    const [imageURL, setImageURL] = useState(null);

    const [showOrder, setShowOrder] = useState(true);
    const [showAddService, setShowAddService] = useState(false);
    const [showManageService, setShowManageService] = useState(false);
    const [showMakeAdmin, setShowMakeAdmin] = useState(false);

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
                window.location.reload(false)
            })

    };

    // new code

    const onSubmitAdmin = (datalist) => {
        const adminData = {
            Admin_Name: datalist.Admin_Name,
            email: datalist.email,
            Admin_Added_Date: (new Date().getUTCDate()) + "-" + (new Date().getMonth() + 1) + "-" + (new Date().getUTCFullYear())
        };

        const adminURL = `https://polar-bastion-39307.herokuapp.com/addAdmin`

        // console.log(adminData);

        fetch(adminURL, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(adminData)
        })
            .then(res => {
                // console.log('server side response', res)
                // window.location.reload(false)
            })

    }

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



    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('https://polar-bastion-39307.herokuapp.com/services')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setServices(data)
            })
    }, [])

    useEffect(() => {
        fetch(`https://polar-bastion-39307.herokuapp.com/orders?email=` + loggedInUser.email)
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [])



    // New 

    const deleteService = (id) => {
        // console.log(id);
        fetch(`https://polar-bastion-39307.herokuapp.com/delete/${id}`, {
            method: 'DELETE',
        })
            .then(res => {
                res.json();
                window.location.reload();
            })
            .then(result => {
                console.log('Deleted successfully')
            })
    }

    return (
        <div>
            <Navbar></Navbar>
            <div className="container-fluid py-5 my-5 admin-container">
                <div className="row">

                    <div className="col-md-3 bg-order">
                        <div className=" d-flex flex-column p-3">
                            <button className="btn btn-info py-3" onClick={() => { setShowOrder(true); setShowAddService(false); setShowManageService(false); setShowMakeAdmin(false) }} >Order List</button>
                            <button className="btn btn-info py-3  my-4" onClick={() => { setShowOrder(false); setShowAddService(true); setShowManageService(false); setShowMakeAdmin(false) }}>Add Service</button>
                            <button className="btn btn-info py-3 mb-4" onClick={() => { setShowOrder(false); setShowAddService(false); setShowManageService(false); setShowMakeAdmin(true) }}>Make Admin</button>
                            <button className="btn btn-info py-3" onClick={() => { setShowOrder(false); setShowAddService(false); setShowManageService(true); setShowMakeAdmin(false) }}>Manage Services</button>
                        </div>
                    </div>

                    <div className="col-md-9">
                        {showOrder && <div className="">

                            <table className="table table-borderless table-striped table-hover table-success">
                                <thead>
                                    <tr>
                                        <th className="text-secondary text-left" scope="col">SLNo</th>
                                        <th className="text-secondary" scope="col">Name</th>
                                        <th className="text-secondary" scope="col">EmailID</th>
                                        <th className="text-secondary" scope="col">ServiceName</th>
                                        {/* <th className="text-secondary" scope="col">PayWith</th> */}
                                        {/* <th className="text-secondary" scope="col">Validation</th> */}
                                        <th className="text-secondary" scope="col">Description</th>
                                        <th className="text-secondary" scope="col">OrderDate</th>
                                        {/* <th className="text-secondary" scope="col">Phone</th> */}
                                        <th className="text-secondary" scope="col">Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        orders.map((order, index) =>

                                            <tr>
                                                <td>{index + 1}</td>
                                                <td>{order.name}</td>
                                                <td>{order.email}</td>
                                                <td>{order.shipment.Service_Name}</td>
                                                {/* <td>{order.payment.card?.funding}card</td> */}
                                                {/* <td>{order.payment.card?.exp_year}</td> */}
                                                <td>{order.shipment.Service_Description}card</td>
                                                <td>{order.orderTime}</td>
                                                {/* <td>{order.shipment.phone}</td> */}
                                                <td>
                                                    <select name="orders" id="orders">
                                                        <option value="pending">Pending</option>
                                                        <option value="done" selected>Done</option>
                                                        <option value="ongoing">Ongoing</option>
                                                    </select>
                                                </td>

                                            </tr>
                                        )
                                    }
                                </tbody>
                            </table>
                        </div>}


                        {showAddService && <div className="order-component">
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
                        }

                        {showMakeAdmin && <div className="my-3 order-component">
                            <form onSubmit={handleSubmit(onSubmitAdmin)}>
                                <div className="row">
                                    <div className="col">
                                        <input name="Admin_Name" className="form-control" placeholder="Add Admin Name" ref={register} />
                                        <input name="email" className="form-control my-5" placeholder="Add Admin Email" ref={register} />
                                    </div>
                                </div>
                                <input className="btn btn-info ps-4 w-25" type="submit" />
                            </form>
                        </div>}


                        {showManageService && <div className="">

                            <table className="table table-borderless table-striped table-hover table-info">
                                <thead>
                                    <tr>
                                        <th className="text-secondary text-left" scope="col">SLNo</th>
                                        <th className="text-secondary" scope="col">Service Name</th>
                                        <th className="text-secondary" scope="col">Price</th>
                                        <th className="text-secondary" scope="col">Description</th>
                                        {/* <th className="text-secondary" scope="col">Weight</th>
                                    <th className="text-secondary" scope="col">Phone</th> */}
                                        <th className="text-secondary" scope="col">Image</th>
                                        <th className="text-secondary" scope="col">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        services.map((service, index) =>

                                            <tr>
                                                <td>{index + 1}</td>
                                                <td>{service.Service_Name}</td>
                                                <td>{service.Price}</td>
                                                <td>{service.Service_Description}</td>
                                                {/* <td>{service.Service_Added_date}</td> */}
                                                {/* <td>{service.phone}</td> */}
                                                <td><img className="service-img" src={service?.imageURL} alt="product-image" /></td>
                                                <td><button className="btn btn-danger" onClick={() => deleteService(service._id)}>Delete</button></td>
                                            </tr>
                                        )
                                    }
                                </tbody>
                            </table>
                        </div>}


                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Admin;