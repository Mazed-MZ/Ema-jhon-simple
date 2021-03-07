import React from 'react';
import './OrderReview.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { Button } from 'react-bootstrap';
const Order = (props) => {
    const { name, quantity, img, price, stock, seller } = props.product
    return (
        <div className='review-item'>
            <div className='review-img'>
                <img src={img} alt="" />
            </div>
            <div className='review-info'>
                <h3>Name:  {name}</h3>
                <h4>Quantity:  {quantity}</h4>
                <h4>Price:  {price}</h4>
                <h4>By:  {seller}</h4>
                <h4>Available in stock:  {stock}</h4>

                <Button variant="warning"><h5><FontAwesomeIcon icon={faShoppingCart} />   Remove to cart</h5></Button>
            </div>
        </div>
    );
};

export default Order;