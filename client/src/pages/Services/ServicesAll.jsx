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
  console.log(categorizedData[slug]);
  return (
    <div className="w-full flex flex-col items-center justify-center  ">
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
        className="w-full h-44  items-center flex mb-12"
        style={{
          background: "url('/images/header.webp')",
          backgroundSize: "cover",
        }}
      >
        <div className="mx-24">
          <h1 className="text-4xl font-bold">{slug} </h1>
          <p className="my-2">This is the content with {slug} services.</p>
        </div>
      </div>
      <div className="flex flex-wrap gap-4  mx-4 w-full items-center justify-center">
        <div className="flex justify-center md:justify-start w-full flex-wrap max-w-[80%]">
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
            <p>No services found</p>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};
