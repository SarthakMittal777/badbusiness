import Navbar from "../components/Navbar";
const bgImage = "/images/hero/hero-bg.png";
import { useEffect, useState } from "react";

export const Homepage = () => {
  const [currentNumber, setCurrentNumber] = useState(1);
  const finalNumber = 10;
  const duration = 2000;

  useEffect(() => {
    const interval = duration / finalNumber;

    const increaseNumber = () => {
      if (currentNumber < finalNumber) {
        setCurrentNumber((prevNumber) => prevNumber + 1);
      }
    };

    const timeout = setTimeout(increaseNumber, interval);

    return () => clearTimeout(timeout);
  }, [currentNumber, finalNumber, duration]);

  return (
    <div className="contain-content mx-auto animate-fade-in">
      {/* Whole Section*/}
      <div
        className="space bg-scroll"
        style={{ backgroundImage: `url(${bgImage})`, backgroundSize: "101%" }}
      >
        <Navbar />
        {/* Hero Section*/}
        <section className="mt-8 lg:mt-12">
          <div className="container mx-auto px-4 lg:max-w-screen-smDesktop max-w-screen-2xl flex flex-col lg:flex-row items-center relative">
            <div className="flex-1 lg:p-16 lg:px-48 lg:pt-12">
              <h1 className="text-2xl lg:text-5xl font-semibold mb-6 text-white text-start lg:text-balance mt-4">
                Full Solution for Your Business Development
              </h1>
              <p className="mb-8 text-mb text-white text-justify">
                Find talented people to work with at the most affordable price
                to get the most out of your time and cost
              </p>
              <div className="space-x-4 mb-6 ">
                <button className="bg-teal-900 hover:bg-green-600 hover:text-white text-emerald-300 font-bold py-4 px-8 rounded-full">
                  Get Started
                </button>
                <button className="bg-emerald-200 hover:bg-green-600 text-black font-medium py-4 px-8 rounded-full ml-4 border">
                  Book a Meeting
                </button>
              </div>
            </div>

            {/* Hero Images*/}
            <div className="flex-1 p-8 relative">
              <div className="flex mb-4">
                <img
                  src="/images/hero/hero-1.png"
                  alt="Image 1"
                  className="w-1/3 mr-6"
                />
                <img
                  src="/images/hero/client.png"
                  alt="Image 1"
                  className="w-auto absolute top-64 left-10 animate-moveLeftRight"
                />

                <img
                  src="/images/hero/hero-2.png"
                  alt="Image 2"
                  className="w-1/3"
                />
              </div>
              <img
                src="/images/hero/hero-3.png"
                alt="Image 3"
                className="w-2/3 mb-4"
              />
              <div className="text-start flex shadow-lg animate-bounce bg-blue-600 p-4 rounded-full absolute left-4 lg:left-auto">
                <span className="rounded-full p-3 bg-blue-500 hover:bg-green-900 duration-300">
                  <img
                    src="/images/hero/medal.png"
                    className="w-6 h-6 invert "
                    alt=""
                  />
                </span>
                <div className="pl-2">
                  <h6 className="mb-1 text-white">Bad Business offers</h6>
                  <p className="text-sm mb-0 text-white">
                    One Stop Solution to all business Problems
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Partners */}
      <div className="container mx-auto lg:mt-72">
        <div className="flex justify-center items-center mt-8">
          <h1 className="text-md lg:mr-4 mb-8">
            Trusted by the world's best Corporations
          </h1>
        </div>
        <div className="flex flex-wrap justify-around mt-6 lg:justify-evenly">
          <div className="flex justify-center items-center mx-4 mb-4 ">
            <img src="/images/partners/1.png" alt="1" className="h-30 w-30" />
          </div>
          <div className="flex justify-center items-center mx-4 mb-4">
            <img src="/images/partners/2.png" alt="2" className="h-30 w-30" />
          </div>
          <div className="flex justify-center items-center mx-4 mb-4">
            <img src="/images/partners/3.png" alt="3" className="h-30 w-30" />
          </div>
          <div className="flex justify-center items-center mx-4 mb-4">
            <img src="/images/partners/4.png" alt="4" className="h-30 w-30" />
          </div>
        </div>
      </div>

      {/* Learn About BAD */}
      <div className="container mx-auto">
        <div className="flex flex-col items-center mt-24">
          <h1 className="lg:text-3xl text-xl font-bold mb-2 text-neutral-800">
            Need something done?
          </h1>
          <div className="text-center mt-2">
            <p className="text-md">Learn about BAD</p>
          </div>
        </div>
        <div class="flex flex-wrap justify-evenly mt-6">
          <div class="p-6 flex flex-col items-center text-center mr-4 mb-4">
            <div class="rounded-full p-8 mb-3 border border-gray-300 transition-colors hover:bg-gray-200 hover:invert">
              <img
                src="/images/bad/cv.png"
                alt="Breakdown icon"
                class="h-10 w-10"
              />
            </div>
            <h4 class="text-lg font-semibold mb-3">Breakdown</h4>
            <p class="text-gray-600 text-balance">
              Identifying and analyzing the root causes of a problem or <br />
              inefficiency within a business process or system.
            </p>
          </div>

          <div class="p-6 rounded-lg flex flex-col items-center text-center mr-4 mb-4 border-gray-300">
            <div class="rounded-full p-8 mb-3 border border-gray-300 transition-colors hover:bg-gray-200 hover:invert">
              <img
                src="/images/bad/web-design.png"
                alt="Analysis icon"
                class="h-10 w-10"
              />
            </div>
            <h4 class="text-lg font-semibold mb-3">Analysis</h4>
            <p class="text-gray-600 items-center">
              Thoroughly examine the problem, gather data,
              <br /> and identify potential solutions of companies.
            </p>
          </div>

          <div class="p-6 rounded-lg flex flex-col items-center text-center mb-4">
            <div class="rounded-full p-8 mb-3 border border-gray-300 transition-colors hover:bg-gray-200 hover:invert">
              <img
                src="/images/bad/secure-payment.png"
                alt="Decision icon"
                class="h-10 w-10"
              />
            </div>
            <h4 class="text-lg font-semibold mb-3">Decision</h4>
            <p class="text-gray-600 items-center">
              Selecting the most suitable solution based on analysis and
              <br /> criteria such as feasibility,
              <br /> cost-effectiveness, and alignment with organizational
              goals.
            </p>
          </div>
        </div>
      </div>

      {/* Why Choose Bad? */}
      <div className="container mx-auto">
        <section className="pt-24">
          <div className="container mx-auto">
            <div className="flex justify-start items-start md:text-start text-center mb-8 lg:ml-48">
              <div>
                <h2 className="lg:text-3xl text-xl font-bold">
                  Why choose BAD?
                </h2>
                <p className="text-gray-600 mt-4">
                  Most viewed and all-time top-selling services
                </p>
              </div>
            </div>
            {/* Tab Content */}
            <ul className="flex justify-center mb-4" role="tablist">
              <li className="mr-6 rounded-3xl p-3 bg-sky-200 text-blue-700  hover:bg-blue-700 hover:text-white">
                <a className="" href="#tab-2-1" role="tab" aria-selected="true">
                  Development
                </a>
              </li>
              <li className="mr-6 border rounded-3xl p-3 bg-sky-200 text-blue-700  hover:bg-blue-700 hover:text-white">
                <a
                  className=""
                  href="#tab-2-2"
                  role="tab"
                  aria-selected="false"
                >
                  Marketing
                </a>
              </li>
              <li className="border rounded-3xl p-3 bg-sky-200 text-blue-700  hover:bg-blue-700 hover:text-white">
                <a
                  className=""
                  href="#tab-2-3"
                  role="tab"
                  aria-selected="false"
                >
                  Designing
                </a>
              </li>
            </ul>
            <div className="tab-content lg:mt-16 md:mt-4">
              {/* <!-- Development service items here --> */}
              <div
                className="tab-pane fade show active"
                id="tab-2-1"
                role="tabpanel"
              >
                <div className="lg:grid grid-cols-3 gap-50 row-gap-50 col-gap-50 lg:px-96 justify-center lg:my-50 mt-6">
                  <div
                    className="hover:shadow-lg hover-box-shadow rounded-2xl overflow-hidden border mr-8 lg:mb-16 mb-8"
                    style={{ gridColumn: "span 1" }}
                  >
                    <img
                      src="/images/services/g-1.jpg"
                      alt="Analysis icon"
                      className="w-96"
                    />
                    <div className="p-4">
                      <h5 className="font-semibold mb-2">
                        <a href="page-services-single.html">
                          Website Development
                        </a>
                      </h5>
                    </div>
                  </div>
                  <div
                    className="hover:shadow-lg hover-box-shadow rounded-2xl overflow-hidden border mr-8 lg:mb-16 mb-8"
                    style={{ gridColumn: "span 1" }}
                  >
                    <img
                      src="/images/services/g-2.jpg"
                      alt="Analysis icon"
                      className="w-96"
                    />
                    <div className="p-4">
                      <h5 className="font-semibold mb-2">
                        <a href="page-services-single.html">
                          Android Development
                        </a>
                      </h5>
                    </div>
                  </div>
                  <div
                    className="hover:shadow-lg hover-box-shadow rounded-2xl overflow-hidden border mr-8 lg:mb-16 mb-8"
                    style={{ gridColumn: "span 1" }}
                  >
                    <img
                      src="/images/services/g-3.jpg"
                      alt="Analysis icon"
                      className="w-96"
                    />
                    <div className="p-4">
                      <h5 className="font-semibold mb-2">
                        <a href="page-services-single.html">iOS Development</a>
                      </h5>
                    </div>
                  </div>
                  <div
                    className="hover:shadow-lg hover-box-shadow rounded-2xl overflow-hidden border mr-8 lg:mb-16 mb-8"
                    style={{ gridColumn: "span 1" }}
                  >
                    <img
                      src="/images/services/g-4.jpg"
                      alt="Analysis icon"
                      className="w-96"
                    />
                    <div className="p-4">
                      <h5 className="font-semibold mb-2">
                        <a href="page-services-single.html">
                          Software Development
                        </a>
                      </h5>
                    </div>
                  </div>
                  <div
                    className="hover:shadow-lg hover-box-shadow rounded-2xl overflow-hidden border mr-8 lg:mb-16 mb-8"
                    style={{ gridColumn: "span 1" }}
                  >
                    <img
                      src="/images/services/g-5.jpg"
                      alt="Analysis icon"
                      className="w-96"
                    />
                    <div className="p-4">
                      <h5 className="font-semibold mb-2">
                        <a href="page-services-single.html">
                          Wordpress Development
                        </a>
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- Marketing service items here --> */}
              <div
                className="tab-pane fade show active"
                id="tab-2-2"
                role="tabpanel"
              >
                <div className="lg:grid grid-cols-3 gap-50 row-gap-50 col-gap-50 lg:px-96 justify-center lg:my-50 mt-6">
                  <div
                    className="hover:shadow-lg hover-box-shadow rounded-2xl overflow-hidden border mr-8 lg:mb-16 mb-8"
                    style={{ gridColumn: "span 1" }}
                  >
                    <img
                      src="/images/services/g-2.jpg"
                      alt="Analysis icon"
                      className="w-96"
                    />
                    <div className="p-4">
                      <h5 className="font-semibold mb-2">
                        <a href="page-services-single.html">
                          SEO ( Search Engine Optimization )
                        </a>
                      </h5>
                    </div>
                  </div>

                  <div
                    className="hover:shadow-lg hover-box-shadow rounded-2xl overflow-hidden border mr-8 lg:mb-16 mb-8"
                    style={{ gridColumn: "span 1" }}
                  >
                    <img
                      src="/images/services/g-2.jpg"
                      alt="Analysis icon"
                      className="w-96"
                    />
                    <div className="p-4">
                      <h5 className="font-semibold mb-2">
                        <a href="page-services-single.html">
                          Social Media Management and Marketing
                        </a>
                      </h5>
                    </div>
                  </div>

                  <div
                    className="hover:shadow-lg hover-box-shadow rounded-2xl overflow-hidden border mr-8 lg:mb-16 mb-8"
                    style={{ gridColumn: "span 1" }}
                  >
                    <img
                      src="/images/services/g-2.jpg"
                      alt="Analysis icon"
                      className="w-96"
                    />
                    <div className="p-4">
                      <h5 className="font-semibold mb-2">
                        <a href="page-services-single.html">
                          Google Ads Words & Ad Campaigning
                        </a>
                      </h5>
                    </div>
                  </div>

                  <div
                    className="hover:shadow-lg hover-box-shadow rounded-2xl overflow-hidden border mr-8 lg:mb-16 mb-8"
                    style={{ gridColumn: "span 1" }}
                  >
                    <img
                      src="/images/services/g-2.jpg"
                      alt="Analysis icon"
                      className="w-96"
                    />
                    <div className="p-4">
                      <h5 className="font-semibold mb-2">
                        <a href="page-services-single.html">Video Marketing</a>
                      </h5>
                    </div>
                  </div>

                  <div
                    className="hover:shadow-lg hover-box-shadow rounded-2xl overflow-hidden border mr-8 lg:mb-16 mb-8"
                    style={{ gridColumn: "span 1" }}
                  >
                    <img
                      src="/images/services/g-2.jpg"
                      alt="Analysis icon"
                      className="w-96"
                    />
                    <div className="p-4">
                      <h5 className="font-semibold mb-2">
                        <a href="page-services-single.html">
                          Search Engine Marketing (SEM)
                          <br /> and Pay-Per-Click (PPC) Advertising
                        </a>
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- Designing service items here --> */}
              <div
                className="tab-pane fade show active"
                id="tab-2-3"
                role="tabpanel"
              >
                <div className="lg:grid grid-cols-3 gap-50 row-gap-50 col-gap-50 lg:px-96 justify-center lg:my-50 mt-6">
                  <div
                    className="hover:shadow-lg hover-box-shadow rounded-2xl overflow-hidden border mr-8 lg:mb-16 mb-8"
                    style={{ gridColumn: "span 1" }}
                  >
                    <img
                      src="/images/services/g-3.jpg"
                      alt="Analysis icon"
                      className="w-96"
                    />
                    <div className="p-4">
                      <h5 className="font-semibold mb-2">
                        <a href="page-services-single.html">
                          Website Designing
                        </a>
                      </h5>
                    </div>
                  </div>

                  <div
                    className="hover:shadow-lg hover-box-shadow rounded-2xl overflow-hidden border mr-8 lg:mb-16 mb-8"
                    style={{ gridColumn: "span 1" }}
                  >
                    <img
                      src="/images/services/g-3.jpg"
                      alt="Analysis icon"
                      className="w-96"
                    />
                    <div className="p-4">
                      <h5 className="font-semibold mb-2">
                        <a href="page-services-single.html">Network Design</a>
                      </h5>
                    </div>
                  </div>

                  <div
                    className="hover:shadow-lg hover-box-shadow rounded-2xl overflow-hidden border mr-8 lg:mb-16 mb-8"
                    style={{ gridColumn: "span 1" }}
                  >
                    <img
                      src="/images/services/g-3.jpg"
                      alt="Analysis icon"
                      className="w-96"
                    />
                    <div className="p-4">
                      <h5 className="font-semibold mb-2">
                        <a href="page-services-single.html">
                          Graphic Design and Branding Services
                        </a>
                      </h5>
                    </div>
                  </div>

                  <div
                    className="hover:shadow-lg hover-box-shadow rounded-2xl overflow-hidden border mr-8 lg:mb-16 mb-8"
                    style={{ gridColumn: "span 1" }}
                  >
                    <img
                      src="/images/services/g-3.jpg"
                      alt="Analysis icon"
                      className="w-96"
                    />
                    <div className="p-4">
                      <h5 className="font-semibold mb-2">
                        <a href="page-services-single.html">
                          Video Production and Animation
                        </a>
                      </h5>
                    </div>
                  </div>

                  <div
                    className="hover:shadow-lg hover-box-shadow rounded-2xl overflow-hidden border mr-8 lg:mb-16 mb-8"
                    style={{ gridColumn: "span 1" }}
                  >
                    <img
                      src="/images/services/g-3.jpg"
                      alt="Analysis icon"
                      className="w-96"
                    />
                    <div className="p-4">
                      <h5 className="font-semibold mb-2">
                        <a href="page-services-single.html">BAD Placements</a>
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Experience */}
      <div className="container row mt-24 flex justify-center items-center w-full mb-24 mx-auto">
        <div className="w-full sm:w-1/2 md:w-1/4 px-4 mb-8">
          <div className="text-center">
            <ul className="ps-0 flex justify-center">
              <li>
                <div className="font-semibold text-4xl mb-1">
                  {currentNumber}
                </div>
              </li>
            </ul>
            <p className="text">Total Communites</p>
          </div>
        </div>
        <div className="w-full sm:w-1/2 md:w-1/4 px-4 mb-8">
          <div className="text-center">
            <ul className="ps-0 flex justify-center">
              <li>
                <div className="font-semibold text-4xl mb-1">20</div>
              </li>
            </ul>
            <p className="text">Total Companies</p>
          </div>
        </div>
        <div className="w-full sm:w-1/2 md:w-1/4 px-4 mb-8">
          <div className="text-center">
            <ul className="ps-0 flex justify-center">
              <li>
                <div className="font-semibold text-4xl mb-1">30</div>
              </li>
            </ul>
            <p className="text">Total Startups</p>
          </div>
        </div>
        <div className="w-full sm:w-1/2 md:w-1/4 px-4 mb-8">
          <div className="text-center">
            <ul className="ps-0 flex justify-center">
              <li>
                <div className="font-semibold text-4xl mb-1">35</div>
              </li>
            </ul>
            <p className="text">Total Consultants</p>
          </div>
        </div>
      </div>

      {/* Team */}
      <div className="bg-zinc-800 text-white py-8">
        <div className="container mx-auto max-w-screen-xl ">
          <div className="mb-8 flex flex-col md:flex-row items-center justify-between">
            <div className="">
              <h4 className="font-bold mr-4 text-3xl mb-3">Team</h4>
              <div className="space-x-4">
                <h1>
                  We are the team of investors, founders, consultants and
                  counsellors
                </h1>
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center my-12">
            <div className="w-full md:w-1/4 mb-8 md:mb-0 mr-4 relative">
              <div className="absolute top-7 left-7 px-2 py-1 rounded-md z-10 transition-transform duration-300 hover:scale-105">
                <p className="font-semibold">Sarthak Mittal</p>
                <p className="text-sm">CEO</p>
              </div>
              <img
                src="/images/team/ceo.jpg"
                className="w-full rounded-xl transition-transform duration-300 hover:scale-105"
                alt="Sarthak Mittal"
              />
            </div>
            <div className="w-full md:w-1/4 mb-8 md:mb-0 mr-4 relative">
              <div className="absolute top-7 left-7 px-2 py-1 rounded-md z-10 transition-transform duration-300 hover:scale-105">
                <p className="font-semibold">Pratham Sahu</p>
                <p className="text-sm">COO</p>
              </div>
              <img
                src="/images/team/coo.jpg"
                className="w-full rounded-xl transition-transform duration-300 hover:scale-105"
                alt="Pratham Sahu"
              />
            </div>
            <div className="w-full md:w-1/4 mb-8 md:mb-0 mr-4 relative">
              <div className="absolute top-7 left-7 px-2 py-1 rounded-md z-10 transition-transform duration-300 hover:scale-105">
                <p className="font-semibold">Baqer Ali</p>
                <p className="text-sm">CMO</p>
              </div>
              <img
                src="/images/team/cmo.jpg"
                className="w-full rounded-xl transition-transform duration-300 hover:scale-105"
                alt="Baqer Ali"
              />
            </div>
            <div className="w-full md:w-1/4 mr-4 relative">
              <div className="absolute top-7 left-7 px-2 py-1 rounded-md z-10 transition-transform duration-300 hover:scale-105">
                <p className="font-semibold">Shuvam Raj</p>
                <p className="text-sm">MD</p>
              </div>
              <img
                src="/images/team/md.jpg"
                className="w-full rounded-xl transition-transform duration-300 hover:scale-105"
                alt="Shuvam Raj"
              />
            </div>
          </div>

          <hr className="my-8" />
        </div>
        <div className="container mx-auto max-w-screen-xl w-full flex flex-col items-center md:flex-row md:justify-between">
          <p className="mb-4 md:mb-0 text-gray-300 whitespace-nowrap">
            © Bad Business. 2024 MentorMenti. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};
