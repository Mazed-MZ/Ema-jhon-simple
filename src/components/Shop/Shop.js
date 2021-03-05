import React from 'react';
import FakeData from '../../fakeData';
import { useState } from 'react';
const Shop = () => {
const first20 = FakeData.slice(0,20);
const [products, setProducts] = useState(first20);
    return (
        <div>
            <h1>Products: {products.length}</h1>
            <ul>
                {
                    products.map(products => <li>{products.name}</li>)
                }
            </ul>
        </div>
    );
};

export default Shop;