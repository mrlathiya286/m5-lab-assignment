import React from "react";
import { ListGroup, ListGroupItem } from "reactstrap";

const DisplayProducts = ({ items, handleQuantityChange, handleShow }) => {
  return (
    <div>
      {Object.keys(items).map((item) => (
        <div key={item}>
          <div>
            <div>
              <ListGroup>
                <ListGroupItem>
                  <h5 className="img" style={{ padding: "10px" }}>
                    {items[item].name}
                  </h5>
                  <div>
                    <img
                      src={items[item].image}
                      alt={items[item].name}
                      style={{ width: "100px" }}
                      onClick={() => handleShow(items[item])}  
                    />
                    <input
                      type="number"
                      className="form-control"
                      min="0"
                      style={{ padding: "2px", width: "30px" }}
                      value={items[item].quantity}
                      onChange={(e) =>
                        handleQuantityChange(item, parseInt(e.target.value))
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
          </div>
        </div>
      ))}
    </div>
  );
};

export default DisplayProducts;
