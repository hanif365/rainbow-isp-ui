import React, { useEffect, useState } from 'react';
import Sidebar from '../../Sidebar/Sidebar';

const ManageService = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('https://polar-bastion-39307.herokuapp.com/services')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setServices(data)
            })
    }, [])

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
        <section className="container-fluid row">
            <Sidebar></Sidebar>
            <div className="col-9 py-5 my-5 p-4 pr-5" style={{ position: "absolute", right: 0, backgroundColor: "#F4FDFB" }}>
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
            </div>
        </section>
    );
};

export default ManageService;