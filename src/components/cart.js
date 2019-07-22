import React from 'react';
import { Table, Button } from 'react-bootstrap';
import './cart.css';


const Cart = (props) => {
	let total = 0;
	let counter = 0;

	return(
		<div id="cart-container">
			<Table responsive>
				<tbody>
					{props.cart.map(product => {
						total += product.price;
						counter++;
						return(
							<tr key={counter}>
								<td>{product.name}</td>
								<td>{product.price}</td>
							</tr>
						)
					})}
					<tr>
						<td><b>Total</b></td>
						<td>{total}</td>
					</tr>
				</tbody>
			</Table>
			<Button variant="primary" size="lg" block>Checkout</Button>
		</div>
	)

}


export default Cart;