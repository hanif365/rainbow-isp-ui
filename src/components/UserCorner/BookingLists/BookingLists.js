import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../App';
import Sidebar from '../../Sidebar/Sidebar';
import BookingCard from '../BookingCard/BookingCard';
import OrderCard from '../BookingCard/BookingCard';

const BookingLists = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        fetch(`https://polar-bastion-39307.herokuapp.com/booking?email=` + loggedInUser.email)
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [])
    return (
        <section className="container-fluid row">
            <Sidebar></Sidebar>
            <div className="col-9 py-5 my-5 p-4 pr-5" style={{ position: "absolute", right: 0, backgroundColor: "#F4FDFB" }}>
                {loggedInUser.email && <h2 className="text-center">Your Booking List</h2>}
                <div className="d-flex flex-wrap justify-align-center">
                    {
                        // orders.map(order => <OrderCard order={order}></OrderCard>)
                        orders.map(order => <BookingCard order={order}></BookingCard>)
                    }
                </div>

            </div>

        </section>
    );
};

export default BookingLists;