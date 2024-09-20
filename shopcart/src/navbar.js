import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Navbar = ({ cartTotal }) => {
  return (
    <div className="row align-items-center" style={{ justifyContent: "space-between", padding: "10px 20px" }}>
      <div>
        <h1 style={{ margin: "5px", fontSize: "24px" }}>Shop to React</h1>
      </div>
      <div className="d-flex align-items-center">
        <Link to="/cart" style={{ textDecoration: 'none', color: 'black' }}>
          <FontAwesomeIcon
            icon={faShoppingCart}
            style={{ fontSize: "24px", marginRight: "10px", cursor: "pointer" }}
          />
          <span style={{ fontSize: "16px" }}>
            {cartTotal > 0 ? cartTotal : "0"} items
          </span>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
