import React from 'react';
import './App.css';
import { Row, Col, Container } from 'react-bootstrap';
import Dropdown from './components/dropdown.js';
import Products from './components/products.js';
import Cart from './components/cart.js';


let data = require('./bikerentals.json');

class App extends React.Component{

  state = {
    category: "view all",
    total: 0,
    cart: []
  };

  onDropdownChange = e => {
    this.setState({category: e.target.value})
  }

  onAddToCart = props => {
    this.setState(prevState => {
      console.log("added to cart " + this.state.cart)
      return {cart: [...prevState.cart, props]};
    })
  }

  render(){
// const categories = [...new Set(data.products.map(product => product.product_type))];
//   let counter = 0;


//   return(
//     <select onChange={this.onDropdownChange} value={this.state.value} >
//       <option value="all">All</option>
//       {categories.map(category => {
//         counter++;
//         return(
//           <option key={counter} value={category}>{category}</option>
//         )
//       })};
//     </select>
//   )
    return(
      <Container>
        <Row>
          <Col md="9">
            <Dropdown handler={this.onDropdownChange} data={data} />
            <Products handler={this.onAddToCart} selected={this.state.category} data={data} />
          </Col>
          <Col md="3">
            <Cart cart={this.state.cart} />
          </Col>
        </Row>
      </Container>
    )



  }
}

export default App;
