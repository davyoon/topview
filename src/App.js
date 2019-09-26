import React from 'react';
import './App.css';
import { Row, Col, Container } from 'react-bootstrap';
import Dropdown from './components/dropdown.js';
import Products from './components/products.js';
import Nav from './components/nav.js';
import OrderSummary from './components/ordersummary.js';
import Summary from './components/summary.js';
import CheckoutForm from './components/checkoutform.js';

let data = require('./bikerentals.json');
console.log(data)

class App extends React.Component{

  state = {
    category: "view all",
    total: 0,
    cart: [],
    page: "home"
  };

  onDropdownChange = e => {
    this.setState({category: e.target.value})
  }

  onAddToCart = props => {
    let total = parseFloat(Number(this.state.total + props.price).toFixed(2));
    console.log(total);
    this.setState(prevState => {
      console.log("added to cart " + this.state.cart)
      return {cart: [...prevState.cart, props], total: total};
    })
  }

  onCartClick = props => {
    this.setState({page: "summary"});
  }

  onHomeClick = props => {
    this.setState({page: "home"});
  }

  onRemoveClick = props => {
    let cart = this.state.cart;
    let total = this.state.total;
    for(let i = 0; i < cart.length; i++){
      if(cart[i].id === props.id){
        total -= cart[i].price;
        cart.splice(i, 1);
        break;
      }
    }
    this.setState({cart: cart, total: parseFloat(Number(total).toFixed(2))});
  }

  onCheckout = props => {
    this.setState({page: "checkout"});
  }

  currency = num => {
    let string = num.toString();
    let split = string.split(".");
    let cost;
    if(split.length === 1){
      cost = string.toString().concat(".00")
    }else{
      if(split[1].length === 1){
        cost = string.concat("0");
      }else{
        cost = string;
      }
    }
    return cost;
  }

  render(){
    let main;

    if(this.state.page === "home"){
      main = 
      <div>
        <Container>
         <Row>
           <Col md="12">
             <Dropdown handler={this.onDropdownChange} data={data} />
             <Products handler={this.onAddToCart} selected={this.state.category} data={data} currency={this.currency} />
           </Col>
         </Row>
       </Container>
      </div>
    }else if(this.state.page === "summary"){
      main =
      <div>
        <Container>
         <Row>
           <Col md="8">
             <Summary cart={this.state.cart} handler={this.onRemoveClick} currency={this.currency} />
           </Col>
           <Col md="4">
              <OrderSummary cart={this.state.cart} total={this.state.total} currency={this.currency} onCheckout={this.onCheckout} page={this.state.page} />
           </Col>
          </Row>
        </Container>  
      </div>
    }else if(this.state.page === "checkout"){
      main =
      <div>
        <Container>
         <Row>
           <Col md="8">
             <CheckoutForm />
           </Col>
           <Col md="4">
              <OrderSummary cart={this.state.cart} total={this.state.total} currency={this.currency} onCheckout={this.onCheckout} page={this.state.page} />
           </Col>
          </Row>
        </Container>  
      </div>
    }
      

    return(
      <div>
       <Nav quantity={this.state.cart.length} onCartClick={this.onCartClick} onHomeClick={this.onHomeClick} />
        {main}
      </div>  
    )



  }
}

export default App;
