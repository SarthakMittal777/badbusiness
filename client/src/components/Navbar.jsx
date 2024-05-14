import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { items } from "../items";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState(null);

  const [scrolling, setScrolling] = useState(false);

  const handleSubmenuClick = (index) => {
    setOpenSubmenu(openSubmenu === index ? null : index);
    console.log(openSubmenu);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    const handleResize = () => {
      if (window.innerWidth > 768) {
        setOpenMenu(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleClick = () => {
    setOpenMenu(!openMenu);
  };

  const handleDropdown = (event) => {
    const dropdown = event.currentTarget.querySelector(".dropdown-menu");
    dropdown.classList.toggle("hidden");
  };

  const [hovered, setHovered] = useState(false);

  return (
    <nav className="w-full h-20 sticky top-0 z-50 mx-auto bg-white">
      <div className="flex justify-between items-center h-full px-5 2xl:px-16 text-white">
        <div className="flex items-center ">
          <a href="/">
            <img src="/images/logo1.png" alt="Logo" className="h-16" />
          </a>
          <a
            href="/signup"
            className="ml-24 md:hidden text-black font-semibold"
          >
            Join
          </a>
        </div>

        <div className="hidden md:flex flex-grow items-center">
          <ul className="flex flex-row ml-auto">
            <li
              className="hover:scale-110 duration-300 text-black hover:text-black capitalize px-3 cursor-pointer font-semibold"
              onClick={() => {
                setOpenMenu(false);
              }}
            >
              <a href="/">Home</a>
            </li>
            {/* <Link
              to="about"
              spy={true}  
              smooth={true}
              offset={-70}
              duration={500}
            >
              <li
                className="hover:scale-110 duration-300text-white hover:text-white capitalize px-3 cursor-pointer font-semibold"
                onClick={() => setOpenMenu(false)}
              >
                About
              </li>
            </Link> */}
            <li
              className="relative group hover:scale-110 duration-300 text-black hover:text-black capitalize px-3 cursor-pointer "
              onMouseEnter={handleDropdown}
              onMouseLeave={handleDropdown}
            >
              <span className="flex items-center font-semibold">
                Pages
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`ml-1 h-4 w-4 transition-transform duration-300 transform pt-1 ${
                    hovered ? "rotate-180" : ""
                  }`}
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 12a1 1 0 0 1-.707-.293l-4-4a1 1 0 1 1 1.414-1.414L10 9.586l3.293-3.293a1 1 0 1 1 1.414 1.414l-4 4A1 1 0 0 1 10 12z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
              <ul className="dropdown-menu hidden absolute top-full left-[10px] bg-white text-black border rounded-md">
                <li className="py-3 px-6 pr-14 hover:bg-gray-200">
                  <a href="/services">Services</a>
                </li>
                <a href="https://events.badbusiness.in/">
                  <li
                    className="flex items-center justify-between py-2 px-6 pr-14 hover:bg-gray-200 relative"
                    onMouseEnter={handleDropdown}
                    onMouseLeave={handleDropdown}
                  >
                    Projects{" "}
                    <img
                      src="/images/right.png"
                      className="w-2 h-2 ml-8"
                      alt="next"
                    />
                    <ul className="dropdown-menu w-30 h-auto hidden absolute top-0 left-[168px] bg-white text-black shadow-md duration-300 border rounded-md">
                      <li className="block py-2 px-6  hover:bg-gray-200">
                        <a href="/">Project V1</a>
                      </li>
                      <li className="block py-2 px-6 pr-14 hover:bg-gray-200">
                        <a href="/">Project</a>
                      </li>
                    </ul>
                  </li>
                </a>
                <li className="block py-2 px-6 pr-14 hover:bg-gray-200">
                  <a href="/">Job List</a>
                </li>
              </ul>
            </li>

            <li
              className="hover:scale-110 duration-300 text-black hover:text-black capitalize px-3 cursor-pointer font-semibold"
              onClick={() => {
                setOpenMenu(false);
              }}
            >
              <a href="https://events.badbusiness.in/" target="_blank">
                BAD Events
              </a>
            </li>

            <li
              className="hover:scale-110 duration-300 text-black hover:text-black capitalize px-3 cursor-pointer font-semibold"
              onClick={() => {
                setOpenMenu(false);
              }}
            >
              <a href="/services">Services</a>
            </li>

            <li
              className="hover:scale-110 duration-300 text-black hover:text-black capitalize px-3 cursor-pointer font-semibold"
              onClick={() => {
                setOpenMenu(false);
              }}
            >
              <a href="/teams">Teams</a>
            </li>

            <li
              className="hover:scale-110 duration-300 text-black hover:text-black capitalize px-3 cursor-pointer font-semibold"
              onClick={() => {
                setOpenMenu(false);
              }}
            >
              <a href="/partners">Partners</a>
            </li>

            <li
              className="hover:scale-110 duration-300 text-black hover:text-black capitalize px-3 cursor-pointer font-semibold"
              onClick={() => {
                setOpenMenu(false);
              }}
            >
              <a href="/signin">Login</a>
            </li>

            <li
              className="hover:scale-110 duration-300 text-black hover:text-black capitalize px-3 cursor-pointer font-semibold"
              onClick={() => {
                setOpenMenu(false);
              }}
            >
              <a href="/signup">SignUp</a>
            </li>
          </ul>
        </div>
        {/* Mobile View  */}
        <div className="relative">
          <div className="flex justify-between items-center h-full w-full px-2 2xl:px-16 text-black overflow-x-hidden">
            {openMenu ? (
              <div onClick={handleClick} className="md:hidden cursor-pointer ">
                <AiOutlineClose size={25} />
              </div>
            ) : (
              <div onClick={handleClick} className="md:hidden cursor-pointer">
                <AiOutlineMenu size={25} />
              </div>
            )}
          </div>

          {openMenu && (
            <div className="fixed top-0 left-0 h-full w-[80%] bg-white z-50 duration-500 ease-in-out">
              <div className="flex flex-col py-6 text-black">
                <div className="bg-green-50">
                  <h1 className="font-semibold flex justify-center bg-green-50 items-center text-lg pt-5">
                    Menu
                  </h1>
                </div>
                <ul>
                  {items.map((item, index) => (
                    <div className="font-semibold text-sm" key={index}>
                      <div className="m-7">
                        <div
                          className="flex justify-between items-center"
                          onClick={() => handleSubmenuClick(index)}
                        >
                          <div className="flex items-start justify-start">
                            {item.to ? (
                              <a href={item.to}>{item.title}</a>
                            ) : (
                              <span>{item.title}</span>
                            )}
                          </div>
                          <img
                            src="/images/right.png"
                            className={`w-3 h-3 transition-transform duration-300 transform ${
                              openSubmenu === index ? "rotate-180" : ""
                            }`}
                            alt=""
                          />
                        </div>
                        {openSubmenu === index && item.menuList && (
                          <div className=" h-full w-full m-5">
                            {item.menuList.map((it, idx) => (
                              <div className=" h-full w-full m-5" key={idx}>
                                {it.to ? (
                                  <a href={it.to}>{it.lable}</a>
                                ) : (
                                  <span>{it.lable}</span>
                                )}
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
