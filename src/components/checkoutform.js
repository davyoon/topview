import React from 'react';
import { Form, Col } from 'react-bootstrap';

const CheckoutForm = (props) => {

	return(
		<div>
		<h2>Shipping</h2>
		<Form>
		  <Form.Row>
		    <Form.Group as={Col}>
		      <Form.Label>First Name</Form.Label>
		      <Form.Control type="first-name" placeholder="First Name" />
		    </Form.Group>

		    <Form.Group as={Col}>
		      <Form.Label>Last Name</Form.Label>
		      <Form.Control type="last-name" placeholder="Last Name" />
		    </Form.Group>
		  </Form.Row>

		  <Form.Group>
		    <Form.Label>Address</Form.Label>
		    <Form.Control placeholder="1234 Main St" />
		  </Form.Group>

		  <Form.Group>
		    <Form.Label>Address 2</Form.Label>
		    <Form.Control placeholder="Apartment, studio, or floor" />
		  </Form.Group>

		  <Form.Row>
		    <Form.Group as={Col}>
		      <Form.Label>City</Form.Label>
		      <Form.Control />
		    </Form.Group>

		    <Form.Group as={Col}>
		      <Form.Label>State</Form.Label>
		      <Form.Control as="select">
		        <option>Choose...</option>
		        <option>...</option>
		      </Form.Control>
		    </Form.Group>

		    <Form.Group as={Col}>
		      <Form.Label>Zip</Form.Label>
		      <Form.Control />
		    </Form.Group>
		  </Form.Row>

		</Form>

		<h2>Payment</h2>

		<Form>
		  <Form.Row>
		    <Form.Group as={Col}>
		      <Form.Label>Card Holder Name</Form.Label>
		      <Form.Control type="name" placeholder="Name" />
		    </Form.Group>

		    <Form.Group as={Col}>
		      <Form.Label>Card Type</Form.Label>
		      <Form.Control as="select">
		        <option>Visa</option>
		        <option>Mastercard</option>
		        <option>American Express</option>
		        <option>Discover</option>
		      </Form.Control>
		    </Form.Group>
		  </Form.Row>

			<Form.Row>
		  	<Form.Group as={Col}>
		    	<Form.Label>Card Number</Form.Label>
		    	<Form.Control />
		  	</Form.Group>

		    <Form.Group as={Col}>
		      <Form.Label>Expiration</Form.Label>
		      <Form.Control type="exp" placeholder="mm/yyyy" />
		    </Form.Group>
			</Form.Row>


		</Form>
		</div>
	)
}


export default CheckoutForm;