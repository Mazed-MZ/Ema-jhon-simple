import React from 'react';
import { useEffect, useState } from 'react';
import { getDatabaseCart, removeFromDatabaseCart } from '../../utilities/databaseManager';
import fakeData from '../../fakeData';
import OrderReview from '../Order Review/OrderReview';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import CartOrder from '../Order Cart/CartOrder';
import './Review.css';

const Review = () => {
    const [cart, setCart] = useState([]);
    const removeProduct = (productKey) => {
        console.log('products remove', productKey);
        const newReview = cart.filter(pd => pd.key !== productKey);
        setCart(newReview);
        removeFromDatabaseCart(productKey);
    };
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
            <div className='review'>
                <div className='cart-review'>
                    <h1><FontAwesomeIcon icon={faShoppingCart} /> {cart.length} products are added in your carts</h1>
                </div>
                <div className = 'order-cart'>
                    <CartOrder cart = {cart}></CartOrder>
                </div>
            </div>
            {
                cart.map(pd => <OrderReview removeProduct={removeProduct} product={pd}></OrderReview>)
            }
        </div>
    );
};

export default Review;