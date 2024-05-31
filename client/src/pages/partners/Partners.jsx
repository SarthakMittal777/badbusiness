import { useState, useEffect } from "react";
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
        className="bg-center lg:bg-cover sm:bg-auto sm:bg-center bg-no-repeat text-white py-6"
        style={{ backgroundImage: `url(${bgImage})`, backgroundSize: "cover" }}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 lg:py-24">
          <h1 className="text-center font-bold text-4xl lg:text-5xl">
            PARTNERS
          </h1>
          <br />
          <h2 className="text-center font-semibold text-xl">
            Joint Venture Companies
          </h2>
        </div>
      </div>
      {/* Card Grid with Margin */}
      <p className="w-screen text-center font-semibold italic my-12 text-lg">
        ~ Partners ~
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-4 md:mx-auto max-w-6xl mt-8 mb-8">
        {partners
          .filter((partner) => partner.isMVP)
          .map((partner) => (
            <div
              key={partner._id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg"
            >
              <img
                src={partner.photo}
                alt={partner.name}
                className="w-full h-40 object-cover object-center hover:scale-105 duration-300"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{partner.name}</h3>
                <p className="text-gray-600">{partner.headline}</p>
              </div>
            </div>
          ))}
      </div>
      <p className="w-screen text-center font-semibold italic my-12 text-lg">
        ~ Startups ~
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-4 md:mx-auto max-w-6xl mt-8 mb-8">
        {partners
          .filter((partner) => !partner.isMVP)
          .map((partner) => (
            <div
              key={partner._id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg"
            >
              <img
                src={partner.photo}
                alt={partner.name}
                className="w-full h-40 object-cover object-center hover:scale-105 duration-300"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{partner.name}</h3>
                <p className="text-gray-600">{partner.headline}</p>
              </div>
            </div>
          ))}
      </div>
      <Footer />
    </div>
  );
};
