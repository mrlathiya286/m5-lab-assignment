import React, { useState } from "react";
import { ListGroup, ListGroupItem } from "reactstrap";

const DisplayProducts = ({ items, handleQuantityChange, handleShow }) => {
  const [sortOption, setSortOption] = useState("normal");

  const sortedItems = () => {
    const itemsArray = Object.entries(items);
    switch (sortOption) {
      case "lowest":
        return itemsArray.sort((a, b) => a[1].price - b[1].price);
      case "highest":
        return itemsArray.sort((a, b) => b[1].price - a[1].price);
      default:
        return itemsArray.sort((a, b) => a[0].localeCompare(b[0]));
    }
  };

  return (
    <div>
      <div className="mb-3">
        <label htmlFor="sortOptions" className="mr-2">Sort By:</label>
        <select
          id="sortOptions"
          value={sortOption}
          onChange={(e) => setSortOption(e.target.value)}
          className="form-control"
          style={{ width: "200px" }}
        >
          <option value="normal">Normal</option>
          <option value="lowest">Price: Low to High</option>
          <option value="highest">Price: High to Low</option>
        </select>
      </div>

      {sortedItems().map(([key, item]) => (
        <div key={key}>
          <ListGroup>
            <ListGroupItem>
              <h5 className="img" style={{ padding: "10px" }}>
                {item.name}
              </h5>
              <p>Price: ${item.price.toFixed(2)}</p>
              <div>
                <img
                  src={item.image}
                  alt={item.name}
                  style={{ width: "100px" }}
                  onClick={() => handleShow(item)}
                />
                <input
                  type="number"
                  className="form-control"
                  min="0"
                  style={{ padding: "2px", width: "50px", marginLeft: "15px" }}
                  value={item.quantity}
                  onChange={(e) =>
                    handleQuantityChange(key, parseInt(e.target.value))
                  }
                />
                <div className="input-group mt-3">
                  <div className="input-group-prepend">
                    <span className="input-group-text" style={{ width: "100px" }}>
                      Quantity
                    </span>
                  </div>
                </div>
              </div>
            </ListGroupItem>
          </ListGroup>
        </div>
      ))}
    </div>
  );
};

export default DisplayProducts;
