import React, { useContext, useEffect, useState } from 'react';
import './Sidebar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faCartArrowDown, faCommentAlt, faGripHorizontal, faHome, faPlus, faShoppingBag, faSignOutAlt, faThList, faUserPlus } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
import Navbar from '../Shared/Navbar/Navbar';
import { UserContext } from '../../App';
import Footer from '../Shared/Footer/Footer';

const Sidebar = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [isAdmin, setIsAdmin] = useState(false);

    useEffect(() => {
        fetch('https://polar-bastion-39307.herokuapp.com/isAdmin', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ email: loggedInUser.email })
        })
            .then(res => res.json())
            .then(data => setIsAdmin(data));
    }, [])
    return (
        <div className="sidebar-container">
            <Navbar></Navbar>
            <div className="sidebar d-flex flex-column justify-content-between col-3 py-5 px-4" style={{ height: "100vh" }}>
                <ul className="list-unstyled">
                    {isAdmin && <div>
                        <li>
                            <Link to="/orderlist" className="text-white">
                                <FontAwesomeIcon icon={faGripHorizontal} /> <span>Dashboard</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/orderlist" className="text-white">
                                <FontAwesomeIcon icon={faShoppingBag} /> <span>Order List</span>
                            </Link>
                        </li>

                        <li>
                            <Link to="/addservice" className="text-white">
                                <FontAwesomeIcon icon={faPlus} /> <span>Add Service</span>
                            </Link>
                        </li>

                        <li>
                            <Link to="/makeadmin" className="text-white">
                                <FontAwesomeIcon icon={faUserPlus} /> <span>Make Admin</span>
                            </Link>
                        </li>

                        <li>
                            <Link to="/manageservices" className="text-white">
                                <FontAwesomeIcon icon={faThList} /> <span>Manage Services</span>
                            </Link>
                        </li>
                    </div>}

                    <li>
                        <Link to="/orders" className="text-white">
                            <FontAwesomeIcon icon={faCartArrowDown} /> <span>Orders</span>
                        </Link>
                    </li>

                    <li>
                        <Link to="/bookinglists" className="text-white">
                            <FontAwesomeIcon icon={faThList} /> <span>Booking Lists</span>
                        </Link>
                    </li>

                    <li>
                        <Link to="/addreview" className="text-white">
                            <FontAwesomeIcon icon={faCommentAlt} /> <span>Add Review</span>
                        </Link>
                    </li>
                </ul>
                <div>
                    <Link to="/" onClick={() => setLoggedInUser({})} className="text-white"><FontAwesomeIcon icon={faSignOutAlt} /> <span>Logout</span></Link>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;