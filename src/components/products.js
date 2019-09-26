import React from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import './products.css';



const Products = (props) => {
	const { selected, data, handler, currency } = props;
	const productsToShow = data.products.filter(product => {
		return product.product_type === selected;
	})
	let iterator;

	if(selected === "view all"){
		iterator = data.products;
	}else{
		iterator = productsToShow;
	}

	return(
		<Row>
			{iterator.map(product => {
				return(
					<Col lg="4" md="6" key={product.id}>
						<div id="product">
							<img src={product.image} />
							<h4>{product.name}</h4>
							<p>${currency(product.price)}</p>
							<Button onClick={handler.bind(this, product)} variant="primary" size="lg" block>
								Add to cart
							</Button>
						</div>
					</Col>
				)
			})}
		</Row>
	)
}


export default Products;