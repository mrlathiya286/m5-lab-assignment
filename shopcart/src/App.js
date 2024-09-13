// App.js
import React from "react";
import { ProductsProvider } from "./components/Product";
import Navbar from "./components/Navbar";
import DisplayProducts from "./components/displayProducts";

const App = () => {
  return (
    <ProductsProvider>
      <div>
        <Navbar />
        <DisplayProducts />
      </div>
    </ProductsProvider>
  );
};

export default App;
