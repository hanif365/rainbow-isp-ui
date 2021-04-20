import React from 'react';
import Sidebar from '../../Sidebar/Sidebar';
import './Dashboard.css'

const containerStyle = {
    backgroundColor: "#F4FDFB",
    border: '1px solid red'
}

const Dashboard = () => {
    return (
        <div style={containerStyle} className="row">
            <div className="col-md-2 col-sm-6 col-12">
                <Sidebar></Sidebar>
            </div>
        </div>
    );
};

export default Dashboard;