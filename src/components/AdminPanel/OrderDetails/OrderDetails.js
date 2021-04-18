// import React from 'react';
// import './OrderDetails.css'

// const OrderDetails = (props) => {
//     console.log(props.order);
//     const { _id, name, email, photo, orderTime, shipment, payment } = props.order;
//     return (
//         <div>
//             <h1>Order Details</h1>
//             <p>{name}</p>
//             <p>{email}</p>
//             <img src={photo} alt=""/>
//             <p>{orderTime}</p>
//             <p>{payment.card?.funding}</p>
//             <p>{payment.card?.exp_year}</p>
//             <p>{payment.card?.last4}</p>
//             <p>{shipment.Service_Name}</p>
//             <p>{shipment.Service_Price}</p>
//             <p>{shipment.Service_Description}</p>
//             <p>{shipment.phone}</p>
//             <img src={shipment.ServiceImg} alt=""/>
//         </div>
//     );
// };

// export default OrderDetails;