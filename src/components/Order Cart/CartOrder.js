import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { Table, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const CartOrder = (props) => {
    const cart = props.cart;
    let total = cart.reduce((total, pd) => total + pd.price * pd.quantity,0);
    total = Math.round(total);
    let shipping = 0;
    if (total > 50) {
        shipping = 10.00;
    }
    else if (total > 0) {
        shipping = 5.00;
    }
    const vat = Math.round(total / 10);
    let grandTotal = Math.round(total + shipping + vat);
    return (
        <div className = 'cart'>
            <h3>Order Summery</h3>
            <h4>{cart.length}              <FontAwesomeIcon icon={faShoppingCart} /></h4>

            <Table striped bordered hover variant="dark">
                <thead>
                    <tr>
                        <th>Items cost</th>
                        <td>${total}</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <   th>Shipping cost</th>
                        <td>${shipping}</td>
                    </tr>
                    <tr>
                        <th>VAT</th>
                        <td>${vat}</td>
                    </tr>
                    <tr>
                        <td colSpan="1">TOTAL PRICE</td>
                        <td>${grandTotal}</td>
                    </tr>
                </tbody>
            </Table>
                <Link to='/place'><Button variant="info" size="lg" block><FontAwesomeIcon icon={faShoppingCart} />   Place your order</Button></Link>
        </div>
    );
};

export default CartOrder;