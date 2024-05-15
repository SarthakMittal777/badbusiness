import React, { useState, useEffect } from "react";
import { server } from "../../api";
import { Footer } from "../../components/Footer";
import Navbar from "../../components/Navbar";
const bgImage = "/images/hero/hero-bg.png";

export const Partners = () => {
  const [partners, setPartners] = useState([]);

  useEffect(() => {
    const fetchPartners = async () => {
      try {
        const response = await server.get("/partner");
        setPartners(response.data.partners);
      } catch (error) {
        console.error("Error fetching partners:", error);
      }
    };
    fetchPartners();
  }, []);

  return (
    <div className="w-full h-full">
      <Navbar />
      <div
        className="lg:h-full bg-center lg:bg-cover sm:bg-auto sm:bg-center bg-no-repeat text-white py-6"
        style={{ backgroundImage: `url(${bgImage})`, backgroundSize: "cover" }}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 lg:py-24">
          <h1 className="flex items-center justify-center font-bold text-2xl">
            PARTNERS
          </h1>
          <br />
          <h2 className="flex items-center justify-center font-semibold text-xl">
            Joint Venture Companies
          </h2>
        </div>
      </div>
      {/* Card  */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {partners
          .filter((partner) => partner.isMVP)
          .map((partner) => (
            <div
              key={partner._id}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <img
                src={partner.photo}
                alt={partner.name}
                className="w-full h-40 object-cover object-center"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{partner.name}</h3>
                <p className="text-gray-600 mb-4">{partner.headline}</p>
                <div className="flex items-center space-x-4">
                  {partner.links.map((link) => (
                    <a
                      key={link._id}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src={link.icon}
                        alt={link.name}
                        className="w-6 h-6"
                      />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          ))}
      </div>
      <Footer />
    </div>
  );
};
