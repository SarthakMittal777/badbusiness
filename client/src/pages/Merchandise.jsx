import React from "react";
import { Footer } from "../components/Footer";
import Navbar from "../components/Navbar";
const bgImage = "/images/hero/hero-bg.png";

export const Merchandise = () => {
  return (
    <div className="w-full h-full">
      <Navbar />
      <div
        className="lg:h-full bg-center lg:bg-cover sm:bg-auto sm:bg-center bg-no-repeat text-white py-6"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 lg:py-24">
          <h1 className="flex items-center justify-center font-bold text-2xl">
            BAD Business Merchandise
          </h1>
          <br />
          <h2 className="flex items-center justify-center font-semibold text-xl">
            Coming Soon
          </h2>
        </div>
      </div>
      <Footer />
    </div>
  );
};
