import React from 'react';
import './dropdown.css';



const Dropdown = (props) => {

	const{ handler, data } = props;
	const categories = [...new Set(data.products.map(product => product.product_type))];
	let counter = 0;

	return(
  	<select onChange={(event) => handler(event)}>
  		<option value="view all">view All</option>
  		{categories.map(category => {
  			counter++;
  			return(
  				<option key={counter} value={category}>{category}</option>
  			)
  		})};
  	</select>
	)
}


export default Dropdown;