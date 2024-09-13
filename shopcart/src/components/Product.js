// products.js
import React, { useState, useEffect } from "react";

const ProductsContext = React.createContext();

const ProductsProvider = ({ children }) => {
  const [quantities, setQuantities] = useState({
    cologne: 0,
    iwatch: 0,
    mug: 0,
    wallet: 0,
  });

  const [totalItems, setTotalItems] = useState(0);

  const handleQuantityChange = (item) => (event) => {
    const value = parseInt(event.target.value) || 0;
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [item]: value,
    }));
  };

  useEffect(() => {
    const total = Object.values(quantities).reduce(
      (sum, quantity) => sum + quantity,
      0
    );
    setTotalItems(total);
  }, [quantities]);

  return (
    <ProductsContext.Provider
      value={{ quantities, totalItems, handleQuantityChange }}
    >
      {children}
    </ProductsContext.Provider>
  );
};

export { ProductsProvider, ProductsContext };
