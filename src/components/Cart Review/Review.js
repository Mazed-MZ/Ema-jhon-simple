import React from 'react';
import { useEffect, useState } from 'react';
import { getDatabaseCart } from '../../utilities/databaseManager';
import fakeData from '../../fakeData';
import OrderReview from '../Order Review/OrderReview';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Review.css';

const Review = () => {
    const [cart, setCart] = useState([]);
    useEffect(() => {
        const savedCart = getDatabaseCart();
        const productKeys = Object.keys(savedCart);
        const cartProducts = productKeys.map(key => {
            const product = fakeData.find(pd => pd.key === key);
            product.quantity = savedCart[key];
            return product;
        })
        setCart(cartProducts);
    });
    return (
        <div>
            <div className='cart-review'>
                <h1><FontAwesomeIcon icon={faShoppingCart} /> {cart.length} products are added in your carts</h1>
            </div>
            {
                cart.map(pd => <OrderReview product={pd}></OrderReview>)
            }
        </div>
    );
};

export default Review;