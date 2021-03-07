import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import {Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';
const Product = (props) => {
    const { name, img, seller, price, stock, key } = props.product;
    return (
        <div className='items'>
            <div>
                <img src={img} alt="" />
            </div>
            <div className='items-info'>
                <h5><Link to={'/product/'+key}>{name}</Link></h5>
                <p>By: {seller}</p>
                <h6>$ {price}</h6>
                <p>Only {stock} left in stock -Order soon</p>
                { props.showAddToCart && <Button onClick={() =>props.handleAddProduct(props.product)} variant="warning"><FontAwesomeIcon icon={faShoppingCart} />   Add to cart</Button>}
            </div>
        </div>
    );
};

export default Product;