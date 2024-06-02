import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";

export const Footer = () => {
  const [showUsdDropdown, setShowUsdDropdown] = useState(false);
  const [showLanguageDropdown, setShowLanguageDropdown] = useState(false);
  const [selectedUsd, setSelectedUsd] = useState("USD");
  const [selectedLanguage, setSelectedLanguage] = useState("English");
  const usdDropdownRef = useRef(null);
  const languageDropdownRef = useRef(null);

  return (
    <footer className="bg-zinc-800 text-gray-300 py-8 w-full">
      <div className="container mx-auto max-w-screen-xl">
        <div className="mb-8 flex flex-col md:flex-row items-center justify-between">
          <div className="flex flex-wrap space-x-4 font-bold mb-4 md:mb-0 md:ml-4">
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
          </div>
          <div className="flex items-center space-x-4 md:ml-4">
            <h4 className="font-bold mr-4">Follow us</h4>
            <div className="flex items-center space-x-4">
              <Link to="">
                <img
                  src="/images/twitter.png"
                  alt="Twitter"
                  className="w-4 h-4 filter invert hover:bg-gray-100 rounded-full"
                />
              </Link>
              <Link to="">
                <img
                  src="/images/instagram.png"
                  alt="Instagram"
                  className="w-4 h-4 filter invert hover:bg-gray-100"
                />
              </Link>
              <Link to="https://www.linkedin.com/company/badbusiness/">
                <img
                  src="/images/linkedin.png"
                  alt="LinkedIn"
                  className="w-4 h-4 filter invert hover:bg-gray-100 rounded-full"
                />
              </Link>
            </div>
          </div>
        </div>
        <hr className="my-8" />
        <div className="flex flex-wrap justify-between my-12">
          <div className="w-full md:w-auto mb-8 md:mb-0 md:mr-8">
            <div className="mb-4 space-y-3 ml-3">
              <h4 className="font-bold text-white">About</h4>
              <ul className="space-y-2">
                <li className="hover:text-white hover:underline">
                  <a href="#">Careers</a>
                </li>
                <li className="hover:text-white hover:underline">
                  <a href="#">Press & News</a>
                </li>
                <li className="hover:text-white hover:underline">
                  <a href="#">Partnerships</a>
                </li>
                <li className="hover:text-white hover:underline">
                  <a href="#">Privacy Policy</a>
                </li>
                <li className="hover:text-white hover:underline">
                  <a href="#">Terms of Service</a>
                </li>
                <li className="hover:text-white hover:underline">
                  <a href="#">Investor Relations</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-full md:w-auto mb-8 md:mb-0 md:mr-8">
            <div className="mb-4 space-y-3 ml-3">
              <h4 className="font-bold text-white">Categories</h4>
              <ul className="space-y-2">
                <li className="hover:text-white hover:underline">
                  <a href="#">Graphics & Design</a>
                </li>
                <li className="hover:text-white hover:underline">
                  <a href="#">Digital Marketing</a>
                </li>
                <li className="hover:text-white hover:underline">
                  <a href="#">Writing & Translation</a>
                </li>
                <li className="hover:text-white hover:underline">
                  <a href="#">Video & Animation</a>
                </li>
                <li className="hover:text-white hover:underline">
                  <a href="#">Music & Audio</a>
                </li>
                <li className="hover:text-white hover:underline">
                  <a href="#">Programming & Tech</a>
                </li>
                <li className="hover:text-white hover:underline">
                  <a href="#">Data</a>
                </li>
                <li className="hover:text-white hover:underline">
                  <a href="#">Business</a>
                </li>
                <li className="hover:text-white hover:underline">
                  <a href="#">Lifestyle</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-full md:w-auto mb-8 md:mb-0 md:mr-8">
            <div className="mb-4 space-y-3 ml-3">
              <h4 className="font-bold text-white">Support</h4>
              <ul className="space-y-2">
                <li className="hover:text-white hover:underline">
                  <a href="#">Help & Support</a>
                </li>
                <li className="hover:text-white hover:underline">
                  <a href="#">Trust & Safety</a>
                </li>
                <li className="hover:text-white hover:underline">
                  <a href="#">Selling on Bad Business</a>
                </li>
                <li className="hover:text-white hover:underline">
                  <a href="#">Buying on Bad Business</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-full md:w-auto">
            <div className="flex flex-col">
              <div className="mb-4 space-y-3 ml-3 md:ml-0">
                <h4 className="font-bold text-white">Subscribe</h4>
                <div className="relative flex items-center">
                  <input
                    type="email"
                    placeholder="Your email address"
                    className="border border-transparent py-3 px-6 placeholder-gray-400 bg-zinc-700 text-white outline-none"
                  />
                  <button className="bg-zinc-700 hover:bg-zinc-600 text-white py-3 px-5 border border-transparent">
                    Send
                  </button>
                </div>
              </div>

              {/* <div className="flex flex-col space-y-4 ml-3 md:ml-0">
                <h4 className="font-bold text-white">Apps</h4>
                <div className="mr-4 flex items-center">
                  <img
                    src="/images/apple-logo.png"
                    alt="iOS App"
                    className="w-4 h-4 invert filter"
                  />
                  <p className="ml-2 hover:text-white">iOS App</p>
                </div>
                <div className="mr-4 flex items-center">
                  <img
                    src="../images/play-store.png"
                    alt="Android App"
                    className="w-4 h-4 invert filter"
                  />
                  <p className="ml-2 hover:text-white">Android App</p>
                </div>
              </div> */}
            </div>
          </div>
        </div>
        <hr className="my-8" />
      </div>

      <div className="container mx-auto max-w-screen-xl w-full flex flex-col items-center md:flex-row md:justify-between">
        <p className="mb-4 md:mb-0 text-white whitespace-nowrap">
          © Bad Business. 2024 MentorMenti. All rights reserved.
        </p>
        <div className="flex md:flex-row md:items-center justify-evenly">
          {/* <div className="relative" ref={usdDropdownRef}>
            <button
              className="bg-zinc-700 text-white border border-zinc-700 px-4 py-2 rounded-md focus:outline-none"
              onClick={() => {
                setShowUsdDropdown(!showUsdDropdown);
                setShowLanguageDropdown(false);
              }}
            >
              {selectedUsd} ↑
            </button>
            {showUsdDropdown && (
              <div
                className="dropdown-content bg-white border border-zinc-700 rounded-md absolute bottom-full left-0 mb-1 md:bottom-auto md:top-full md:left-auto md:right-0 md:mt-1 w-24"
                ref={usdDropdownRef}
              >
                {["USD", "Euro", "Pound"].map((option) => (
                  <a
                    key={option}
                    href="#"
                    className={`block text-black px-4 py-2 border-b border-gray hover:bg-zinc-200 ${
                      selectedUsd === option ? "font-bold" : ""
                    }`}
                    onClick={() => {
                      setSelectedUsd(option);
                      setShowUsdDropdown(false);
                    }}
                  >
                    {option} {selectedUsd === option && "✔"}
                  </a>
                ))}
              </div>
            )}
          </div> */}
          <div className="relative ml-4" ref={languageDropdownRef}>
            <button
              className="bg-zinc-700 text-white border border-zinc-700 px-4 py-2 rounded-md focus:outline-none"
              onClick={() => {
                setShowLanguageDropdown(!showLanguageDropdown);
                setShowUsdDropdown(false);
              }}
            >
              {selectedLanguage} ↑
            </button>
            {showLanguageDropdown && (
              <div
                className="dropdown-content bg-white border border-zinc-700 rounded-md absolute bottom-full left-0 mb-1 md:bottom-auto md:top-full md:left-auto md:right-0 md:mt-1 w-24"
                ref={languageDropdownRef}
              >
                {["English", "Spanish", "French", "Italian", "Turkish"].map(
                  (option) => (
                    <a
                      key={option}
                      href="#"
                      className={`block text-black px-4 py-2 border-b border-gray hover:bg-zinc-200 ${
                        selectedLanguage === option ? "font-bold" : ""
                      }`}
                      onClick={() => {
                        setSelectedLanguage(option);
                        setShowLanguageDropdown(false);
                      }}
                    >
                      {option} {selectedLanguage === option && "✔"}
                    </a>
                  )
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </footer>
  );
};
