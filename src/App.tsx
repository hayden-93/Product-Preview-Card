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
    <div className="bg-primary-cream flex h-screen justify-center items-center">
      <div className="max-w-screen-mobile mx-auto p-6 md:max-w-screen-md">
        <div className="bg-neutral-white rounded-lg md:grid md:grid-cols-2">
          <ProductImage
            src="../images/product-mobile.jpg"
            alt="Perfume Bottle"
            className="md:hidden"
          />
          <ProductImage
            src="../images/product-desktop.jpg"
            alt="Perfume Bottle"
            className="hidden md:block h-full"
          />
          <div className="p-5 space-y-4 md:space-y-10">
            <Category>Perfume</Category>
            <h2 className="text-neutral-dark-blue text-3xl font-bold font-body md:text-5xl md:px-4">
              Gabrielle Essence Eau De Parfum
            </h2>
            <Description>
              A floral, solar and voluptuous interpretation composed by Olivier
              Polge, Perfumer-Creator for the House of CHANEL.
            </Description>
            <div className="flex space-x-3 md:px-4 md:space-x-6">
              <Price className="text-primary-dark-cyan text-3xl font-body font-bold md:text-4xl">
                $149.99
              </Price>
              <Price className="text-neutral-dark-grayish-blue text-sm line-through self-center">
                $169.99
              </Price>
            </div>
            <div className="flex justify-center py-2 bg-primary-dark-cyan text-neutral-white font-body font-medium rounded-lg space-x-2 md:px-4">
              <img
                src="../images/icon-cart.svg"
                alt="Cart Icon"
                className="self-center w-6 h-6"
              />
              <Button>Add to Cart</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
