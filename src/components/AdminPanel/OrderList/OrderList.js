import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../App';
import Sidebar from '../../Sidebar/Sidebar';
import './OrderList.css'

const OrderList = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        fetch(`https://polar-bastion-39307.herokuapp.com/orders?email=` + loggedInUser.email)
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [])


    // New code
    const statusDone = (id) =>{
        const inputStatus = 'Done';
        const status = {inputStatus};
        fetch(`https://polar-bastion-39307.herokuapp.com/done/${id}`, {
            method: 'PATCH',
            headers:{'Content-Type': 'application/json'},
            body: JSON.stringify(status)

        })
        .then(res => res.json())
        .then(data => {
            console.log('Updated');
        })
    }

    const statusOngoing = (id) =>{
        const inputStatus = 'Ongoing';
        const status = {inputStatus};
        fetch(`https://polar-bastion-39307.herokuapp.com/ongoing/${id}`, {
            method: 'PATCH',
            headers:{'Content-Type': 'application/json'},
            body: JSON.stringify(status)

        })
        .then(res => res.json())
        .then(data => {
            console.log('Updated');
        })
    }

    const statusPending = (id) =>{
        const inputStatus = 'Pending';
        const status = {inputStatus};
        fetch(`https://polar-bastion-39307.herokuapp.com/pending/${id}`, {
            method: 'PATCH',
            headers:{'Content-Type': 'application/json'},
            body: JSON.stringify(status)

        })
        .then(res => res.json())
        .then(data => {
            console.log('Updated');
        })
    }

    return (
        <section className="container-fluid test">
            <Sidebar></Sidebar>
            <div className="col-9 py-5 p-4 pr-5" style={{ position: "absolute", right: 0, backgroundColor: "#F4FDFB" }}>
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
                                    {/* <td>{order._id}</td> */}
                                    <td>{order.name}</td>
                                    <td>{order.email}</td>
                                    <td>{order.shipment.Service_Name}</td>
                                    {/* <td>{order.payment.card?.funding}card</td> */}
                                    {/* <td>{order.payment.card?.exp_year}</td> */}
                                    <td>{order.shipment.Service_Description}card</td>
                                    <td>{order.orderTime}</td>
                                    {/* <td>{order.shipment.phone}</td> */}
                                    <td>
                                        {/* <select name="orders" id="orders">
                                            <option value="pending">Pending</option>
                                            <option value="done" selected>Done</option>
                                            <option value="ongoing">Ongoing</option>
                                        </select> */}
                                        <button onClick={() => statusPending(order._id)} className="btn btn-warning">PENDING</button>
                                        <button onClick={() => statusOngoing(order._id)} className="btn btn-info my-2">ONGOING</button>
                                        <button onClick={() => statusDone(order._id)} className="btn btn-success">DONE</button>

                                    </td>

                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>

        </section>
    );
};

export default OrderList;