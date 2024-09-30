import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { products } from "./products";
import Navbar from './navbar';
import DisplayProducts from './displayProducts';
import CartPage from './CartPage';
import Checkout from './Checkout'; 
import { Modal } from 'react-bootstrap';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: products,
      cartTotal: 0,
      show: false,
      showImge: {},
    };
  }

  handleQuantityChange = (itemName, quantity) => {
    const updatedItems = { ...this.state.items };
    updatedItems[itemName].quantity = quantity;

    this.setState({ items: updatedItems }, () => {
      this.calculateCartTotal();
    });
  };

  calculateCartTotal = () => {
    const cartTotal = Object.values(this.state.items).reduce(
      (total, item) => total + item.quantity,
      0
    );
    this.setState({ cartTotal });
  };

  handleClose = () => {
    this.setState({ show: false, showImge: {} });
  };

  handleShow = (product) => {
    this.setState({ show: true, showImge: product });
  };

  render() {
    return (
      <Router>
        <div className="container mt-5" style={{ backgroundColor: "lightblue" }}>
          <Navbar cartTotal={this.state.cartTotal} />

          <Routes>
            <Route path="/" element={
              <DisplayProducts
                items={this.state.items}
                handleQuantityChange={this.handleQuantityChange}
                handleShow={this.handleShow}
              />
            } />
            <Route path="/cart" element={<CartPage items={this.state.items} />} />
            <Route path="/checkout" element={<Checkout />} /> 

            <Route path="/cart" element={<CartPage items={this.state.items} />} />
          </Routes>

          <Modal show={this.state.show} onHide={this.handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>{this.state.showImge && this.state.showImge.name}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              {this.state.showImge && (
                <>
                  <img
                    src={this.state.showImge.image}
                    width="200px"
                    alt={this.state.showImge.name}
                    className="mx-2"
                  />
                  <p><span className="text-dark">Ratings: </span>{this.state.showImge.ratings}/5</p>
                  <p><span className="text-dark">Description: </span>{this.state.showImge.desc}</p>
                </>
              )}
            </Modal.Body>
          </Modal>
        </div>
      </Router>
    );
  }
}

export default App;
