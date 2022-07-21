import React from "react";
import "./index.css";

import {
  Button,
  Category,
  Description,
  Price,
  ProductImage,
} from "./components";

function App() {
  return (
    <div className="max-w-screen-mobile mx-auto mt-10 bg-primary-cream p-6">
      <div className="bg-neutral-white rounded-lg">
        <ProductImage src="../images/product-mobile.jpg" alt="Perfume Bottle" />
        <div className="p-5 space-y-4">
          <Category>Perfume</Category>
          <h2 className="text-neutral-dark-blue text-3xl font-bold font-body">
            Gabrielle Essence Eau De Parfum
          </h2>
          <Description>
            A floral, solar and voluptuous interpretation composed by Olivier
            Polge, Perfumer-Creator for the House of CHANEL.
          </Description>
          <div className="flex space-x-3">
            <Price className="text-primary-dark-cyan text-3xl font-body font-bold">
              $149.99
            </Price>
            <Price className="text-neutral-dark-grayish-blue text-sm line-through self-center">
              $169.99
            </Price>
          </div>
          <div className="flex justify-center py-2 px-3 bg-primary-dark-cyan text-neutral-white font-body font-medium rounded-lg space-x-2">
            <img
              src="../images/icon-cart.svg"
              alt="Cart Icon"
              className="flex self-center w-4 h-4"
            />
            <Button>Add to Cart</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
