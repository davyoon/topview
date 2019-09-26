import React from 'react';
import { Table, Button } from 'react-bootstrap';
import './nav.css';

const Nav = (props) => {
	let numStyle = {
		position: "absolute",
		right: 63,
		top: 13
	}

	if(props.quantity > 9){
		numStyle = {
			position: "absolute",
			right: 58,
			top: 13
		}
	}

	return(
		<nav>
			<span id="logo" onClick={props.onHomeClick}>Bike Rentals</span>
			<span id="shopping" onClick={props.onCartClick}>
				<img src={require("./shopping.png")} />
				<span style={numStyle} id="quantity">{props.quantity}</span>
				<span id="text">Cart</span>
			</span>
		</nav>

	)
}

export default Nav;