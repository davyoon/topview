import React from 'react';
import { Col, Row, Button } from 'react-bootstrap';

const Summary = (props) => {
	let counter = 0;

	return(
		<Row>
			{props.cart.map(product => {
				counter++;
				return(
				<Col lg="4" md="6" key={counter}>
						<div id="product">
							<img src={product.image} />
							<h4>{product.name}</h4>
							<p>${props.currency(product.price)}</p>
							<Button onClick={props.handler.bind(this, product)} variant="danger" size="lg" block>
								Remove
							</Button>
						</div>
					</Col>
					)
			})}
		</Row>
	)
}

export default Summary;