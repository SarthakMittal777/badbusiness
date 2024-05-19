import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { useState, useEffect } from "react";
import { items } from "../items";
import { Link } from "react-router-dom";

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
        <div className="flex items-center">
          <Link to="/">
            <img src="/images/logo1.png" alt="Logo" className="md:h-16" />
          </Link>
          <Link
            to="/signup"
            className="ml-24 md:hidden text-gray-800 font-semibold"
          >
            Join
          </Link>
        </div>

        <div className="hidden md:flex flex-grow items-center">
          <ul className="flex flex-row ml-auto">
            <li
              className="duration-300 text-gray-700 hover:text-black capitalize px-3 cursor-pointer font-semibold"
              onClick={() => {
                setOpenMenu(false);
              }}
            >
              <Link to="/">Home</Link>
            </li>
            {/* <Link
              to="about"
              spy={true}  
              smooth={true}
              offset={-70}
              duration={500}
            >
              <li
                className="duration-300text-white hover:text-white capitalize px-3 cursor-pointer font-semibold"
                onClick={() => setOpenMenu(false)}
              >
                About
              </li>
            </Link> */}

            {/* <li
              className="duration-300 text-black hover:text-black capitalize px-3 cursor-pointer font-semibold"
              onClick={() => {
                setOpenMenu(false);
              }}
            >
              <Link to="https://events.badbusiness.in/" target="_blank">
                BAD Events
              </Link>
            </li> */}

            <li
              className="relative group duration-300 text-gray-700 hover:text-black capitalize px-3 cursor-pointer"
              onMouseEnter={handleDropdown}
              onMouseLeave={handleDropdown}
            >
              <span className="flex items-center font-semibold">
                More
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
                <Link to="https://events.badbusiness.in/">
                  <li className="py-3 px-6 pr-14 hover:bg-gray-200 font-medium">
                    BAD Events
                  </li>
                </Link>

                <Link to="/courses">
                  <li className="py-3 px-6 pr-14 hover:bg-gray-200 font-medium">
                    BAD Courses
                  </li>
                </Link>

                {/* <Link to="https://events.badbusiness.in/">
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
                        <Link to="/">Project V1</Link>
                      </li>
                      <li className="block py-2 px-6 pr-14 hover:bg-gray-200">
                        <Link to="/">Project</Link>
                      </li>
                    </ul>
                  </li>
                </Link> */}

                <Link to="/merchandise">
                  <li className="block py-2 px-6 pr-14 hover:bg-gray-200 font-medium">
                    BAD Merchandise
                  </li>
                </Link>

                {/* <li className="block py-2 px-6 pr-14 hover:bg-gray-200">
                  <Link to="/">Job List</Link>
                </li> */}
              </ul>
            </li>

            <li
              className="duration-300 text-gray-700 hover:text-black capitalize px-3 cursor-pointer font-semibold"
              onClick={() => {
                setOpenMenu(false);
              }}
            >
              <Link to="/services">Services</Link>
            </li>

            <li
              className="duration-300 text-gray-700 hover:text-black capitalize px-3 cursor-pointer font-semibold"
              onClick={() => {
                setOpenMenu(false);
              }}
            >
              <Link to="/teams">Teams</Link>
            </li>

            <li
              className="duration-300 text-gray-700 hover:text-black capitalize px-3 cursor-pointer font-semibold"
              onClick={() => {
                setOpenMenu(false);
              }}
            >
              <Link to="/partners">Partners</Link>
            </li>

            {/* <li
              className="duration-300 text-gray-700 hover:text-black capitalize px-3 cursor-pointer font-semibold"
              onClick={() => {
                setOpenMenu(false);
              }}
            >
              <Link to="/success">Success Stories</Link>
            </li> */}

            {/* <li
              className="duration-300 text-black hover:text-black capitalize px-3 cursor-pointer font-semibold"
              onClick={() => {
                setOpenMenu(false);
              }}
            >
              <Link to="/signin">Login</Link>
            </li>

            <li
              className="duration-300 text-black hover:text-black capitalize px-3 cursor-pointer font-semibold"
              onClick={() => {
                setOpenMenu(false);
              }}
            >
              <Link to="/signup">SignUp</Link>
            </li> */}
          </ul>
        </div>
        {/* Mobile View  */}
        <div className="relative">
          <div className="flex justify-between items-center h-full w-full px-2 2xl:px-16 text-black overflow-x-hidden">
            {openMenu ? (
              <div onClick={handleClick} className="md:hidden cursor-pointer">
                <AiOutlineClose size={25} />
              </div>
            ) : (
              <div onClick={handleClick} className="md:hidden cursor-pointer">
                <AiOutlineMenu size={25} />
              </div>
            )}
          </div>

          {openMenu && (
            <div className="fixed top-0 left-0 h-full w-[80%] bg-white z-50 duration-500 ease-in-out overflow-y-auto">
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
                              <Link to={item.to}>{item.title}</Link>
                            ) : (
                              <span>{item.title}</span>
                            )}
                          </div>
                          {item.menuList && ( // Only render arrow if menuList is present
                            <img
                              src="/images/right.png"
                              className={`w-3 h-3 transition-transform duration-300 transform ${
                                openSubmenu === index ? "rotate-180" : ""
                              }`}
                              alt=""
                            />
                          )}
                        </div>
                        {openSubmenu === index &&
                          item.menuList && ( // Only render submenu if menuList is present
                            <div className=" h-full w-full m-5">
                              {item.menuList.map((it, idx) => (
                                <div className=" h-full w-full m-5" key={idx}>
                                  {it.to ? (
                                    <Link to={it.to}>{it.lable}</Link>
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
