import React from 'react';
import { Button } from 'react-bootstrap';
import './ordersummary.css';

const OrderSummary = (props) => {

	const { cart, total, currency, onCheckout, page } = props;
	let button = <Button variant="secondary" size="lg" block>Please add a bike</Button>

	for(let i = 0; i < cart.length; i++){
		if(cart[i].product_type === "bike" && page === "summary"){
			button = <Button onClick={onCheckout} variant="primary" size="lg" block>Checkout</Button>;
			break;
		}else if(page === "checkout"){
			button = <Button variant="primary" size="lg" block>Place Order</Button>;
		}
	}

	return(
		<div id="order-summary">
			<div id="order-text">
				<span>ORDER SUMMARY</span>
			</div>
			<ul id="fl">
				<li>Subtotal</li>
				<li>Shipping</li>
				<li>Total</li>
			</ul>
			<ul id="fr">
				<li>${currency(total)}</li>
				<li>$3.99</li>
				<li>${cart.length > 0 ? parseFloat(Number(total + 3.99).toFixed(2)) : 0.00}</li>
			</ul>
			{button}
		</div>
	)
}


export default OrderSummary;