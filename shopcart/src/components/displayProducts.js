import React, { useState, useContext, createContext } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Navbar";

// Context for managing product quantities
const ProductsContext = createContext();

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

  React.useEffect(() => {
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

// Inline styles for the modal
const modalStyles = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.8)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1000,
  },
  content: {
    backgroundColor: "white",
    padding: "20px",
    borderRadius: "8px",
    width: "400px", // Fixed width
    height: "400px", // Fixed height
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    overflow: "auto",
    position: "relative",
  },
  image: {
    width: "100%",
    height: "auto",
    borderRadius: "8px",
  },
  close: {
    position: "absolute",
    top: "10px",
    right: "10px",
    fontSize: "24px",
    cursor: "pointer",
  },
};

// Modal Component
const Modal = ({ product, onClose }) => {
  if (!product) return null;

  return (
    <div style={modalStyles.overlay} onClick={onClose}>
      <div style={modalStyles.content} onClick={(e) => e.stopPropagation()}>
        <span style={modalStyles.close} onClick={onClose}>
          &times;
        </span>
        <div>
          <img
            src={product.imgSrc}
            alt={product.name}
            style={modalStyles.image}
          />
          <h2>{product.name}</h2>
          <p>{product.description}</p>
        </div>
      </div>
    </div>
  );
};

// Header Component

// Display Products Component
const DisplayProductsWithModal = () => {
  const { quantities, handleQuantityChange } = useContext(ProductsContext);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const products = [
    {
      id: "cologne",
      name: "Unisex Cologne",
      imgSrc: "/assets/images/cologne.jpg",
      description: "A luxurious fragrance that blends floral and citrus notes.",
    },
    {
      id: "iwatch",
      name: "Apple iWatch",
      imgSrc: "/assets/images/iwatch.jpg",
      description: "A smart watch with fitness tracking and notifications.",
    },
    {
      id: "mug",
      name: "Unique Mug",
      imgSrc: "/assets/images/mug.jpg",
      description: "A stylish mug perfect for your favorite beverages.",
    },
    {
      id: "wallet",
      name: "Men's Wallet",
      imgSrc: "/assets/images/wallet.jpg",
      description: "A sleek wallet with multiple compartments for convenience.",
    },
  ];

  const handleIncrement = (item) => () => {
    handleQuantityChange(item)({
      target: { value: (quantities[item] || 0) + 1 },
    });
  };

  const handleDecrement = (item) => () => {
    handleQuantityChange(item)({
      target: { value: Math.max((quantities[item] || 0) - 1, 0) },
    });
  };

  const openModal = (product) => () => {
    setSelectedProduct(product);
  };

  const closeModal = () => {
    setSelectedProduct(null);
  };

  return (
    <div>
      <Navbar />
      <main>
        {products.map((product) => (
          <div className="m-5" key={product.id}>
            <h4>{product.name}</h4>
            <div className="d-flex justify-content-start align-items-center">
              <div
                className="m-2"
                onClick={openModal(product)}
                style={{ cursor: "pointer" }}
              >
                <img src={product.imgSrc} alt={product.name} width={"100"} />
              </div>
              <div className="d-flex align-items-center">
                <button
                  className="btn btn-secondary me-2"
                  onClick={handleDecrement(product.id)}
                >
                  -
                </button>
                <input
                  className="form-control me-2"
                  type="number"
                  value={quantities[product.id]}
                  readOnly
                  size={"1"}
                  min={"0"}
                />
                <button
                  className="btn btn-secondary"
                  onClick={handleIncrement(product.id)}
                >
                  +
                </button>
                <span className="ms-2">Quantity</span>
              </div>
            </div>
            <hr />
          </div>
        ))}
        <Modal product={selectedProduct} onClose={closeModal} />
      </main>
    </div>
  );
};

// Main App Component
const App = () => (
  <ProductsProvider>
    <DisplayProductsWithModal />
  </ProductsProvider>
);

export default App;
