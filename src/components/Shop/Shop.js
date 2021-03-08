import React from 'react';
import FakeData from '../../fakeData';
import { useState } from 'react';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import { addToDatabaseCart } from '../../utilities/databaseManager';
import './Shop.css';
const Shop = () => {
    const first20 = FakeData.slice(0, 20);
    const [products, setProducts] = useState(first20);
    const [cart, setCart] = useState([]);
    debugger;
    const handleAddProduct = (products) => {
        // const addedKey = products.key;
        // const sameProduct = cart.find(pd => pd.key === addedKey);
        // let count = 1;
        // let newCart;
        // if(sameProduct){
        //     count = sameProduct.quantity + 1;
        //     sameProduct.quantity = count;
        //     const others = cart.filter(pd => pd.key !== addedKey);
        //     newCart = [...others, sameProduct];
        // }
        // else{
        //     products.quantity = 1;
        //     newCart = [...cart, sameProduct];
        // }
        const newCart = [...cart, products];
        setCart(newCart);
        const sameProduct = newCart.filter(pd => pd.key === products.key)
        const count = sameProduct.length;
        addToDatabaseCart(products.key, count);
    };
    return (
        <div className='shop-div'>
            <div className='products'>
                {
                    products.map(items => <Product Key={items.key} showAddToCart={true} handleAddProduct={handleAddProduct} product={items}></Product>)
                }
            </div>
            <div>
                <Cart cart = {cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;