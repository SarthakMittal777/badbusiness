import React from "react";
import { Footer } from "../components/Footer";
import Navbar from "../components/Navbar";
import Button from "../components/Button";
const bgImage = "/images/hero/hero-bg.png";

export const Form = () => {
  return (
    <div className="w-full h-full">
      <Navbar />
      <div
        className="lg:h-full bg-center lg:bg-cover sm:bg-auto sm:bg-center bg-no-repeat text-white py-6"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 lg:py-12">
          <h1 className="flex items-center justify-center font-bold text-2xl text-center">
            Share your Business Problem with Us!
          </h1>
        </div>
      </div>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-black bg-opacity-75 p-8 rounded-lg shadow-lg">
          <form>
            <div className="mb-4">
              <label
                className="block text-white text-sm font-bold mb-2"
                htmlFor="name"
              >
                Name
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-900 leading-tight focus:outline-none focus:shadow-outline"
                id="name"
                type="text"
                placeholder="Your Name"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-white text-sm font-bold mb-2"
                htmlFor="email"
              >
                E-Mail
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-900 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="email"
                placeholder="Your E-Mail"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-white text-sm font-bold mb-2"
                htmlFor="company"
              >
                Company Name
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-900 leading-tight focus:outline-none focus:shadow-outline"
                id="company"
                type="text"
                placeholder="Your Company Name"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-white text-sm font-bold mb-2"
                htmlFor="problem"
              >
                What problem you are facing
              </label>
              <textarea
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-900 leading-tight focus:outline-none focus:shadow-outline"
                id="problem"
                placeholder="Describe the problem you are facing"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-white text-sm font-bold mb-2"
                htmlFor="domain"
              >
                What Selection Domain (Tech, Marketing, and Design)
              </label>
              <textarea
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-900 leading-tight focus:outline-none focus:shadow-outline"
                id="domain"
                placeholder="Specify your selection domain"
              />
            </div>
            <div className="flex gap-6 justify-center items-center flex-col">
              <Button
                type="submit"
                className="bg-[#5BBB7B] hover:bg-green-800 py-3 px-6 text-white font-semibold"
              >
                Submit
              </Button>

              <div className="flex items-center justify-center">
                <a
                  href="https://calendly.com/infobadbusiness"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-full focus:outline-none focus:shadow-outline text-center"
                >
                  Book Free Consultation with us
                </a>
              </div>
            </div>
          </form>
          <div className="text-white mt-6">
            <p>Phone (US Timing): +1 93156 73513</p>
            <p>Phone (IST): +91 99999 9999</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
