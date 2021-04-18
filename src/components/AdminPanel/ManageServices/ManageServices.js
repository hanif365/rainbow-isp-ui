// import React from 'react';
// import './ManageServices.css'

// const ManageServices = (props) => {
//     const { _id, Service_Name, imageURL, Service_Description, Price, Service_Added_date} = props.service;

//     const deleteService = (id) => {
//         // console.log(id);
//         fetch(`http://localhost:5000/delete/${id}`, {
//             method: 'DELETE',
//         })
//             .then(res => {
//                 res.json();
//                 window.location.reload();
//             })
//             .then(result => {
//                 console.log('Deleted successfully')
//             })
//     }
//     return (
//         <div className="manage-service">
//             <div className="row">
//                 <div className="col-md-4">
//                     <h3 className="service-content">{Service_Name}</h3>
//                 </div>
//                 <div className="col-md-2">
//                     <img className="service-content" src={imageURL} alt="product-image" />
//                 </div>
//                 <div className="col-md-1">
//                     <h4 className="service-content">${Price}</h4>
//                 </div>
//                 <div className="col-md-3">
//                     <p className="service-content">{Service_Description}</p>
//                 </div>
//                 <div className="col-md-3">
//                     <p className="service-content">{Service_Added_date}</p>
//                 </div>
//                 <div className="col-md-2">
//                     <button className="service-content btn btn-danger" onClick={() => deleteService(_id)}>Delete</button>
//                 </div>
//             </div>


//         </div>
//     );
// };

// export default ManageServices;