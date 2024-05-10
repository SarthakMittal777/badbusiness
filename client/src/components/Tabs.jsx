import React from "react";

const Tabs = ({ activeTab, handleTabClick }) => {
  return (
    <section className="pt-24">
      <div className="container mx-auto">
        <div className="flex justify-center text-center gap-2">
          <div>
            <h2 className="lg:text-3xl text-xl font-bold">Why choose BAD?</h2>
            <p className="text-gray-600 mt-4">
              Most viewed and all-time top-selling services
            </p>
          </div>
        </div>
        {/* Tab Content */}
        <ul
          className="flex justify-center gap-4 md:gap-6 lg:gap-8 mt-4 lg:mt-6 xl:mt-8"
          role="tablist"
        >
          <li
            className={`rounded-3xl px-4 py-2 cursor-pointer ${
              activeTab === "Development"
                ? "bg-[#212A32] text-white border-black border"
                : "text-black border-black border hover:bg-gray-200"
            }`}
            onClick={() => handleTabClick("Development")}
          >
            Development
          </li>
          <li
            className={`border rounded-3xl px-4 py-2 cursor-pointer ${
              activeTab === "Marketing"
                ? "bg-[#212A32] text-white border-black border"
                : "text-black border-black border hover:bg-gray-200"
            }`}
            onClick={() => handleTabClick("Marketing")}
          >
            Marketing
          </li>
          <li
            className={`border rounded-3xl px-4 py-2 cursor-pointer ${
              activeTab === "Designing"
                ? "bg-[#212A32] text-white border-black border"
                : "text-black border-black border hover:bg-gray-200"
            }`}
            onClick={() => handleTabClick("Designing")}
          >
            Designing
          </li>
        </ul>

        <div className="tab-content lg:mt-16 md:mt-4 mx-auto w-4/5">
          {/* Tab content for Development */}
          {activeTab === "Development" && (
            <div
              className="tab-pane fade show active"
              id="tab-2-1"
              role="tabpanel"
            >
              <div className="flex flex-col flex-wrap md:flex-row gap-16 md:gap-8 justify-center lg:my-50 mt-6">
                <div className="hover:shadow-lg hover-box-shadow rounded-lg overflow-hidden border md:w-80 lg:w-96">
                  <img
                    src="/images/services/g-1.jpg"
                    alt="Analysis icon"
                    className="w-full hover:scale-110 duration-300"
                  />
                  <div className="p-4">
                    <h5 className="font-semibold mb-2">
                      <a href="page-services-single.html">
                        Website Development
                      </a>
                    </h5>
                  </div>
                </div>
                <div className="hover:shadow-lg hover-box-shadow rounded-lg overflow-hidden border md:w-80 lg:w-96">
                  <img
                    src="/images/services/g-2.jpg"
                    alt="Analysis icon"
                    className="w-full hover:scale-110 duration-300"
                  />
                  <div className="p-4">
                    <h5 className="font-semibold mb-2">
                      <a href="page-services-single.html">
                        Android Development
                      </a>
                    </h5>
                  </div>
                </div>
                <div className="hover:shadow-lg hover-box-shadow rounded-lg overflow-hidden border md:w-80 lg:w-96">
                  <img
                    src="/images/services/g-3.jpg"
                    alt="Analysis icon"
                    className="w-full hover:scale-110 duration-300"
                  />
                  <div className="p-4">
                    <h5 className="font-semibold mb-2">
                      <a href="page-services-single.html">iOS Development</a>
                    </h5>
                  </div>
                </div>
                <div className="hover:shadow-lg hover-box-shadow rounded-lg overflow-hidden border md:w-80 lg:w-96">
                  <img
                    src="/images/services/g-4.jpg"
                    alt="Analysis icon"
                    className="w-full hover:scale-110 duration-300"
                  />
                  <div className="p-4">
                    <h5 className="font-semibold mb-2">
                      <a href="page-services-single.html">
                        Software Development
                      </a>
                    </h5>
                  </div>
                </div>
                <div className="hover:shadow-lg hover-box-shadow rounded-lg overflow-hidden border md:w-80 lg:w-96">
                  <img
                    src="/images/services/g-5.jpg"
                    alt="Analysis icon"
                    className="w-full hover:scale-110 duration-300"
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
          )}

          {/* Tab content for Marketing */}
          {activeTab === "Marketing" && (
            <div className="flex flex-col flex-wrap md:flex-row gap-16 md:gap-8 justify-center lg:my-50 mt-6">
              <div className="hover:shadow-lg hover-box-shadow rounded-lg overflow-hidden border md:w-80 lg:w-96">
                <img
                  src="/images/services/g-2.jpg"
                  alt="Analysis icon"
                  className="w-full hover:scale-110 duration-300"
                />
                <div className="p-4">
                  <h5 className="font-semibold mb-2">
                    <a href="page-services-single.html">
                      SEO ( Search Engine Optimization )
                    </a>
                  </h5>
                </div>
              </div>

              <div className="hover:shadow-lg hover-box-shadow rounded-lg overflow-hidden border md:w-80 lg:w-96">
                <img
                  src="/images/services/g-2.jpg"
                  alt="Analysis icon"
                  className="w-full hover:scale-110 duration-300"
                />
                <div className="p-4">
                  <h5 className="font-semibold mb-2">
                    <a href="page-services-single.html">
                      Social Media Management and Marketing
                    </a>
                  </h5>
                </div>
              </div>

              <div className="hover:shadow-lg hover-box-shadow rounded-lg overflow-hidden border md:w-80 lg:w-96">
                <img
                  src="/images/services/g-2.jpg"
                  alt="Analysis icon"
                  className="w-full hover:scale-110 duration-300"
                />
                <div className="p-4">
                  <h5 className="font-semibold mb-2">
                    <a href="page-services-single.html">
                      Google Ads Words & Ad Campaigning
                    </a>
                  </h5>
                </div>
              </div>

              <div className="hover:shadow-lg hover-box-shadow rounded-lg overflow-hidden border md:w-80 lg:w-96">
                <img
                  src="/images/services/g-2.jpg"
                  alt="Analysis icon"
                  className="w-full hover:scale-110 duration-300"
                />
                <div className="p-4">
                  <h5 className="font-semibold mb-2">
                    <a href="page-services-single.html">Video Marketing</a>
                  </h5>
                </div>
              </div>

              <div className="hover:shadow-lg hover-box-shadow rounded-lg overflow-hidden border md:w-80 lg:w-96">
                <img
                  src="/images/services/g-2.jpg"
                  alt="Analysis icon"
                  className="w-full hover:scale-110 duration-300"
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
          )}

          {/* Tab content for Designing */}
          {activeTab === "Designing" && (
            <div
              className="tab-pane fade show active"
              id="tab-2-3"
              role="tabpanel"
            >
              <div className="flex flex-col flex-wrap md:flex-row gap-16 md:gap-8 justify-center lg:my-50 mt-6">
                <div className="hover:shadow-lg hover-box-shadow rounded-lg overflow-hidden border md:w-80 lg:w-96">
                  <img
                    src="/images/services/g-3.jpg"
                    alt="Analysis icon"
                    className="w-full hover:scale-110 duration-300"
                  />
                  <div className="p-4">
                    <h5 className="font-semibold mb-2">
                      <a href="page-services-single.html">Website Designing</a>
                    </h5>
                  </div>
                </div>

                <div className="hover:shadow-lg hover-box-shadow rounded-lg overflow-hidden border md:w-80 lg:w-96">
                  <img
                    src="/images/services/g-3.jpg"
                    alt="Analysis icon"
                    className="w-full hover:scale-110 duration-300"
                  />
                  <div className="p-4">
                    <h5 className="font-semibold mb-2">
                      <a href="page-services-single.html">Network Design</a>
                    </h5>
                  </div>
                </div>

                <div className="hover:shadow-lg hover-box-shadow rounded-lg overflow-hidden border md:w-80 lg:w-96">
                  <img
                    src="/images/services/g-3.jpg"
                    alt="Analysis icon"
                    className="w-full hover:scale-110 duration-300"
                  />
                  <div className="p-4">
                    <h5 className="font-semibold mb-2">
                      <a href="page-services-single.html">
                        Graphic Design and Branding Services
                      </a>
                    </h5>
                  </div>
                </div>

                <div className="hover:shadow-lg hover-box-shadow rounded-lg overflow-hidden border md:w-80 lg:w-96">
                  <img
                    src="/images/services/g-3.jpg"
                    alt="Analysis icon"
                    className="w-full hover:scale-110 duration-300"
                  />
                  <div className="p-4">
                    <h5 className="font-semibold mb-2">
                      <a href="page-services-single.html">
                        Video Production and Animation
                      </a>
                    </h5>
                  </div>
                </div>

                <div className="hover:shadow-lg hover-box-shadow rounded-lg overflow-hidden border md:w-80 lg:w-96">
                  <img
                    src="/images/services/g-3.jpg"
                    alt="Analysis icon"
                    className="w-full hover:scale-110 duration-300"
                  />
                  <div className="p-4">
                    <h5 className="font-semibold mb-2">
                      <a href="page-services-single.html">BAD Placements</a>
                    </h5>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Tabs;
