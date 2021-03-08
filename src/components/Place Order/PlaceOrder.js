import React from 'react';
import { Spinner } from 'react-bootstrap';
import './PlaceOrder.css';
const PlaceOrder = () => {
    return (
        <div className='place'>
            <h1>Thanks for choice ema-Jhon</h1>
            <h3>The order is processing <Spinner animation="border" variant="light" /></h3>
            <h3>After confirmation you will recive email</h3>
            <p>Developed by Mazed Mohammed.</p> <p>@ All rights reserved by ema-jhon 2020</p>
        </div>
    );
};

export default PlaceOrder;