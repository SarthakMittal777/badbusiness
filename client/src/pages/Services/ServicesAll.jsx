import { useParams } from "react-router-dom";
import Card from "../../components/Card";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar";
import { getServiceData } from "../../api/service";
import { useState, useEffect } from "react";
import { Footer } from "../../components/Footer";
export const ServicesAll = () => {
  const { slug } = useParams();
  // eslint-disable-next-line
  const [categorizedData, setCategorizedData] = useState({});

  useEffect(() => {
    async function fetchData() {
      const res = await getServiceData();
      const services = res.services;

      const categorized = services.reduce((acc, service) => {
        const { category, ...rest } = service;
        if (!acc[category]) {
          acc[category] = [];
        }
        acc[category].push(rest);
        return acc;
      }, {});

      setCategorizedData(categorized);
    }

    fetchData();
  }, []);
  return (
    <div className="w-full flex flex-col items-center justify-center  bg-gray-300">
      <Navbar />
      <div className="w-full h-20 text-base flex items-center ">
        <p className="mx-24">
          <Link to="/" className="text-gray-500">
            {" "}
            Home
          </Link>{" "}
          /
          <Link to="/Services" className="text-gray-500">
            {" "}
            Services
          </Link>{" "}
          /{slug}{" "}
        </p>
      </div>
      <div
        className="w-full h-[60vh] flex items-center justify-center relative"
        style={{
          background:
            "url(/images/hero/servicesAll.jpg) no-repeat center center fixed",
          backgroundSize: "cover",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>{" "}
        <div className="relative text-center text-white mx-24">
          {" "}
          <h1 className="text-4xl py-8 font-bold">{slug}</h1>
          <p>
            Discover exceptional solutions with our unrivaled expertise. Merging
            innovation with excellence, we turn your visions into reality.
            Whether you need consultancy, or specialized support, our curated
            offerings are designed to fuel your success and distinguish you from
            the competition. Partner with us and experience the synergy of your
            ambitions and our expertise.
          </p>
        </div>
      </div>
      <div className="flex flex-wrap gap-4  mx-4 w-full items-center justify-center">
        <div className="flex justify-center lg:justify-start w-full flex-wrap max-w-[80%]">
          {categorizedData && categorizedData[slug] ? (
            categorizedData[slug].map((item, index) => (
              // <Link key={index} to={`/services/${item.title}`}>

              <Card
                key={index}
                image={item.image}
                category={item.category}
                title={item.title}
                profile={item.profile}
                amount={item.amount}
              />
              // </Link>
            ))
          ) : (
            <p></p>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};
