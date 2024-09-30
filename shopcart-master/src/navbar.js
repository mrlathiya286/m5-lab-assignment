import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import FacebookLogin from 'react-facebook-login';

const Navbar = ({ cartTotal }) => {
  const responseFacebook = (response) => {
    console.log(response); // Handle response
  };

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
        <FacebookLogin
          appId="YOUR_APP_ID"
          autoLoad={false}
          fields="name,email,picture"
          callback={responseFacebook}
          icon="fa-facebook"
          cssClass="btn btn-primary ml-2"
        />
      </div>
    </div>
  );
};

export default Navbar;
