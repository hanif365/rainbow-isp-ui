import React from 'react';
import Navbar from '../../Shared/Navbar/Navbar';
import HeaderContent from '../HeaderContent/HeaderContent';

const Header = () => {
    return (
        <div className='container-fluid'>
            <Navbar></Navbar>
            <HeaderContent></HeaderContent>
        </div>
    );
};

export default Header;