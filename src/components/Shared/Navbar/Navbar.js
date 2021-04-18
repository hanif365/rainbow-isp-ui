import React, { useContext } from 'react';
import './Navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBroadcastTower } from '@fortawesome/free-solid-svg-icons'

import logo from '../../../images/logo.png'
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';

const Navbar = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    return (
        <nav class="navbar navbar-expand-lg navbar-light  fixed-top">
            <div class="container">
                <div className="d-flex">
                    <img className="navbar-logo" src={logo} alt="logo" />
                    <Link to="/" class="navbar-brand align-self-center ms-1">Rainbow ISP</Link>
                </div>

                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div class="navbar-nav ms-auto">
                        <Link to="/home" class="nav-link active" aria-current="page">HOME</Link>
                        <Link to="/about" class="nav-link">ABOUT</Link>
                        <Link to="/order" class="nav-link">ORDER</Link>
                        <Link to="/admin" class="nav-link">ADMIN</Link>
                        <Link to="/contact" class="nav-link">CONTACT</Link>
                        {/* <Link to="/login" class="nav-link">LOGIN</Link> */}
                        {
                            loggedInUser.email ? <Link className="nav-link" id="user-name">{loggedInUser.name}</Link> : <Link to="/login" className="nav-link btn btn-info px-5">LOG IN</Link>
                        }

                        {
                            loggedInUser.email ? <Link className="sign-out-btn btn-lg" onClick={() => setLoggedInUser({})}>SIGN OUT</Link> : ''
                        }
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;