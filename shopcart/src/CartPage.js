import React from "react";
import { ListGroup, ListGroupItem } from "reactstrap";

const CartPage = ({ items }) => {
  // Filter out products with a quantity greater than 0 (items that are in the cart)
  const cartItems = Object.values(items).filter(item => item.quantity > 0);

  return (
    <div className="container mt-4">
      <h2>Your Cart</h2>
      {cartItems.length > 0 ? (
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
              {/* <div>
                <p><span className="text-dark">Price: </span>{item.price}$</p>
              </div> */}
            </ListGroupItem>
          ))}
        </ListGroup>
      ) : (
        <p>Your cart is empty.</p>
      )}
    </div>
  );
};

export default CartPage;
