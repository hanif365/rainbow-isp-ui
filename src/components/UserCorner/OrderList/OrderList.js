import React, { useEffect, useState } from 'react';
import './OrderList.css'

const OrderList = (props) => {


    console.log(props.order);

    return (
        <div>
            <div class="card orderlist-card m-3">
                <img src={props.order?.shipment?.ServiceImg} class="card-img-top orderlist-img" alt="orderImg" />
                <div class="card-body">
                    <h5 class="card-title">{props.order?.shipment?.Service_Name}</h5>
                    <p class="card-text">{props.order?.shipment?.Service_Description}</p>
                    <p class="card-text">TrxID : {props.order?._id}</p>
                    <p class="card-text">Package Price : $ {props.order?.shipment?.Service_Price} / month</p>
                    <p class="card-text">Country : {props.order?.payment?.card?.country}</p>
                    <p class="card-text">Order Time : {props.order?.orderTime}</p>
                    <p class="card-text">Email : {props.order?.email}</p>
                    {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
                </div>
            </div>
        </div>
    );
};

export default OrderList;