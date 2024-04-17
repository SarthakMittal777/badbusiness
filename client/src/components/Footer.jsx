import React, { useState, useEffect, useRef } from "react";

export const Footer = () => {
  const [showUsdDropdown, setShowUsdDropdown] = useState(false);
  const [showLanguageDropdown, setShowLanguageDropdown] = useState(false);
  const usdDropdownRef = useRef(null);
  const languageDropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        usdDropdownRef.current &&
        !usdDropdownRef.current.contains(event.target) &&
        languageDropdownRef.current &&
        !languageDropdownRef.current.contains(event.target)
      ) {
        setShowUsdDropdown(false);
        setShowLanguageDropdown(false);
      }
    };

    window.addEventListener("click", handleClickOutside);
    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <footer className="bg-zinc-800 text-gray-300 py-8">
      <div className="container mx-auto">
        <div className="mb-8 flex flex-col md:flex-row items-center justify-between">
          <ul className="flex flex-wrap space-x-4 font-bold mb-4 md:mb-0">
            <li>
              <a href="#">Terms of Service</a>
            </li>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
            <li>
              <a href="#">Site Map</a>
            </li>
          </ul>
          <div className="flex items-center space-x-4">
            <h4 className="font-bold mr-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="#">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#">
                <i className="fab fa-linkedin"></i>
              </a>
            </div>
          </div>
        </div>
        <hr className="my-8" />
        <div className="flex flex-wrap justify-between my-12">
          <div className="w-full md:w-auto mb-8 md:mb-0 md:mr-8">
            <div className="mb-4 space-y-3">
              <h4 className="font-bold">About</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#">Careers</a>
                </li>
                <li>
                  <a href="#">Press & News</a>
                </li>
                <li>
                  <a href="#">Partnerships</a>
                </li>
                <li>
                  <a href="#">Privacy Policy</a>
                </li>
                <li>
                  <a href="#">Terms of Service</a>
                </li>
                <li>
                  <a href="#">Investor Relations</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-full md:w-auto mb-8 md:mb-0 md:mr-8">
            <div className="mb-4 space-y-3">
              <h4 className="font-bold">Categories</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#">Graphics & Design</a>
                </li>
                <li>
                  <a href="#">Digital Marketing</a>
                </li>
                <li>
                  <a href="#">Writing & Translation</a>
                </li>
                <li>
                  <a href="#">Video & Animation</a>
                </li>
                <li>
                  <a href="#">Music & Audio</a>
                </li>
                <li>
                  <a href="#">Programming & Tech</a>
                </li>
                <li>
                  <a href="#">Data</a>
                </li>
                <li>
                  <a href="#">Business</a>
                </li>
                <li>
                  <a href="#">Lifestyle</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-full md:w-auto mb-8 md:mb-0 md:mr-8">
            <div className="mb-4 space-y-3">
              <h4 className="font-bold">Support</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#">Help & Support</a>
                </li>
                <li>
                  <a href="#">Trust & Safety</a>
                </li>
                <li>
                  <a href="#">Selling on Bad Business</a>
                </li>
                <li>
                  <a href="#">Buying on Bad Business</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-full md:w-auto">
            <div className="flex flex-col">
              <div className="mb-4 space-y-3">
                <h4 className="font-bold">Subscribe</h4>
                <input
                  type="email"
                  placeholder="Your email address"
                  className="border py-2 px-3 mb-2"
                />
                <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">
                  Send
                </button>
              </div>
              <div className="mb-4 space-y-3">
                <h4 className="font-bold">Apps</h4>
                <div className="flex flex-col">
                  <div className="mr-4 flex">
                    <img
                      src="../images/ios.png"
                      alt="iOS App"
                      className="w-8 h-8"
                    />
                    <p>iOS App</p>
                  </div>
                  <div className="mr-4 flex">
                    <img
                      src="../images/ios.png"
                      alt="Android App"
                      className="w-8 h-8"
                    />
                    <p>Android App</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr className="my-8" />
      </div>

      <div className="container mx-auto flex flex-col items-center md:flex-row md:justify-between">
        <p className="mb-4 md:mb-0">
          © Bad Business. 2024 MentorMenti. All rights reserved.
        </p>
        <div className="flex md:flex-row md:items-center justify-evenly">
          <div className="relative" ref={usdDropdownRef}>
            <button
              className="bg-gray-700 text-white border border-gray-700 px-4 py-2 rounded-md focus:outline-none"
              onClick={() => {
                setShowUsdDropdown(!showUsdDropdown);
                setShowLanguageDropdown(false);
              }}
            >
              US$ USD ↑
            </button>
            {showUsdDropdown && (
              <div
                className="dropdown-content bg-gray-700 border border-gray-700 rounded-md absolute bottom-full left-0 mb-1 md:bottom-auto md:top-full md:left-auto md:right-0 md:mt-1 w-24"
                ref={usdDropdownRef}
              >
                <a
                  href="#"
                  className="block text-white px-4 py-2 border-b border-white hover:bg-gray-600"
                >
                  USD
                </a>
                <a
                  href="#"
                  className="block text-white px-4 py-2 border-b border-white hover:bg-gray-600"
                >
                  Euro
                </a>
                <a
                  href="#"
                  className="block text-white px-4 py-2 hover:bg-gray-600"
                >
                  Pound
                </a>
              </div>
            )}
          </div>
          <div className="relative ml-4" ref={languageDropdownRef}>
            <button
              className="bg-gray-700 text-white border border-gray-700 px-4 py-2 rounded-md focus:outline-none"
              onClick={() => {
                setShowLanguageDropdown(!showLanguageDropdown);
                setShowUsdDropdown(false);
              }}
            >
              English ↑
            </button>
            {showLanguageDropdown && (
              <div
                className="dropdown-content bg-gray-700 border border-gray-700 rounded-md absolute bottom-full left-0 mb-1 md:bottom-auto md:top-full md:left-auto md:right-0 md:mt-1 w-24"
                ref={languageDropdownRef}
              >
                <a
                  href="#"
                  className="block text-white px-4 py-2 border-b border-white hover:bg-gray-600"
                >
                  English
                </a>
                <a
                  href="#"
                  className="block text-white px-4 py-2 border-b border-white hover:bg-gray-600"
                >
                  Spanish
                </a>
                <a
                  href="#"
                  className="block text-white px-4 py-2 hover:bg-gray-600"
                >
                  French
                </a>
                <a
                  href="#"
                  className="block text-white px-4 py-2 border-b border-white hover:bg-gray-600"
                >
                  Italian
                </a>
                <a
                  href="#"
                  className="block text-white px-4 py-2 border-b border-white hover:bg-gray-600"
                >
                  Turkey
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </footer>
  );
};
