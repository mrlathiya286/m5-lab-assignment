import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const App = () => {
  const CartIcon = <FontAwesomeIcon icon={faShoppingCart} />;

  // Initialize state for quantities of each item and total items
  const [quantities, setQuantities] = useState({
    cologne: 0,
    iwatch: 0,
    mug: 0,
    wallet: 0,
  });

  const [totalItems, setTotalItems] = useState(0);

  // Function to handle quantity change
  const handleQuantityChange = (item) => (event) => {
    const value = parseInt(event.target.value) || 0;
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [item]: value,
    }));
  };

  // useEffect to update the total items whenever quantities change
  useEffect(() => {
    const total = Object.values(quantities).reduce(
      (sum, quantity) => sum + quantity,
      0
    );
    setTotalItems(total);
  }, [quantities]);

  return (
    <div>
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
      <main>
        <hr />
        <div className="m-5">
          <h4>Unisex Cologne</h4>
          <div className="d-flex justify-content-start align-items-center">
            <div className="m-2">
              <img
                src="/assets/images/cologne.jpg"
                alt="Cologne"
                width={"100"}
              />
            </div>
            <div className="d-flex align-items-center">
              <input
                className="form-control me-2"
                type="number"
                value={quantities.cologne}
                onChange={handleQuantityChange("cologne")}
                size={"1"}
              />
              <span>Quantity</span>
            </div>
          </div>
        </div>
        <hr />
        <div className="m-5">
          <h4>Apple iWatch</h4>
          <div className="d-flex justify-content-start align-items-center">
            <div className="m-2">
              <img src="/assets/images/iwatch.jpg" alt="iWatch" width={"100"} />
            </div>
            <div className="d-flex align-items-center">
              <input
                className="form-control me-2"
                type="number"
                value={quantities.iwatch}
                onChange={handleQuantityChange("iwatch")}
                size={"1"}
              />
              <span>Quantity</span>
            </div>
          </div>
        </div>
        <hr />
        <div className="m-5">
          <h4>Unique Mug</h4>
          <div className="d-flex justify-content-start align-items-center">
            <div className="m-2">
              <img src="/assets/images/mug.jpg" alt="Mug" width={"100"} />
            </div>
            <div className="d-flex align-items-center">
              <input
                className="form-control me-2"
                type="number"
                value={quantities.mug}
                onChange={handleQuantityChange("mug")}
                size={"1"}
              />
              <span>Quantity</span>
            </div>
          </div>
        </div>
        <hr />
        <div className="m-5">
          <h4>Men's Wallet</h4>
          <div className="d-flex justify-content-start align-items-center">
            <div className="m-2">
              <img src="/assets/images/wallet.jpg" alt="Wallet" width={"100"} />
            </div>
            <div className="d-flex align-items-center">
              <input
                className="form-control me-2"
                type="number"
                value={quantities.wallet}
                onChange={handleQuantityChange("wallet")}
                size={"1"}
              />
              <span>Quantity</span>
            </div>
          </div>
        </div>
        <hr />
      </main>
    </div>
  );
};

export default App;
