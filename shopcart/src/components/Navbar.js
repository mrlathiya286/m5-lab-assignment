// navbar.js
import React, { useContext } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ProductsContext } from "./Product";

const Navbar = () => {
  const { totalItems } = useContext(ProductsContext);
  const CartIcon = <FontAwesomeIcon icon={faShoppingCart} />;

  return (
    <header>
      <div
        style={{
          backgroundColor: "cyan",
          color: "black",
          padding: "16px",
          marginBottom: "16px",
        }}
      >
        <div className="d-flex justify-content-between align-items-center">
          <div>
            <h1>Shop With React</h1>
          </div>
          <div className="p-1">
            <span className="me-2">{CartIcon}</span>
            {totalItems} items
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
