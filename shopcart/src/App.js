// App.js
import React from "react";
import { ProductsProvider } from "./components/Product";
import Navbar from "./components/Navbar";
import DisplayProducts from "./components/displayProducts";

const App = () => {
  return (
    <ProductsProvider>
      <DisplayProducts />
    </ProductsProvider>
  );
};

export default App;
