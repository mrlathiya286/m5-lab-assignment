import React from "react";
import { ListGroup, ListGroupItem, Button } from "reactstrap";

const CartPage = ({ items }) => {
  const cartItems = Object.values(items).filter(item => item.quantity > 0);

  return (
    <div className="container mt-4">
      <h2>Your Cart</h2>
      {cartItems.length > 0 ? (
        <>
          <ListGroup>
            {cartItems.map((item, index) => (
              <ListGroupItem key={index} className="d-flex justify-content-between align-items-center">
                <div className="d-flex align-items-center">
                  <img
                    src={item.image}
                    alt={item.name}
                    style={{ width: "50px", marginRight: "15px" }}
                  />
                  <div>
                    <h5>{item.name}</h5>
                    <p>Quantity: {item.quantity}</p>
                  </div>
                </div>
              </ListGroupItem>
            ))}
          </ListGroup>
          <Button color="primary" className="mt-3">Checkout</Button>
        </>
      ) : (
        <p>Your cart is empty.</p>
      )}
    </div>
  );
};

export default CartPage;
