import React from 'react';
import FakeData from '../../fakeData';
import { useParams } from 'react-router-dom';
import Product from '../Product/Product';
const Details = () => {
    const {productKey} = useParams();
    const product = FakeData.find(pd => pd.key === productKey);
    console.log(product);
    return (
        <div>
            <h1>Product Details</h1>
            <Product showAddToCart={false} product={product}></Product>
        </div>
    );
};

export default Details;