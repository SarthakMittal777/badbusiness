import Card from "../../components/Card";
import { useEffect, useState } from "react";
import { getServiceData } from "../../api/service";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar";
import { Footer } from "../../components/Footer";
export const Services = () => {
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
    <div className="w-full flex flex-col  items-center justify-center bg-gray-200">
      <Navbar />
      <div className="w-full h-20 text-base flex items-center ">
        <p className="mx-24">
          <Link to="/" className="text-gray-500">
            Home
          </Link>{" "}
          / Categories
        </p>
      </div>
      <div
        className="w-full h-44  items-center flex"
        style={{
          background: "url('/images/header.webp')",
          backgroundSize: "cover",
        }}
      >
        <div className="mx-24">
          <h1 className="text-4xl font-bold">Categories</h1>
          <p>This is the content for categories.</p>
        </div>
      </div>
      <div className="w-full  text-base flex items-center justify-between my-16 md:mb-24 flex-col md:flex-row ">
        <p className="mx-24 text-center">
          {" "}
          Showing results for {Object.keys(categorizedData).length} categories
        </p>
      </div>
      <div className="flex w-full xl:justify-normal gap-12 mb-32 flex-wrap justify-center sm:justify-normal">
        {Object.keys(categorizedData).map((category, index) => (
          <div key={index} className="flex">
            {console.log("category", categorizedData[category][0])}
            <Card
              image={categorizedData[category][0].image}
              category={categorizedData[category][0].category}
              title={categorizedData[category][0].title}
              profile={categorizedData[category][0].profile}
              amount=""
            />
            {categorizedData[category].length > 1 ? (
              <Card
                image={category[1].image}
                category={category[1].category}
                title={category[1].title}
                profile={category[1].profile}
                amount=""
              />
            ) : (
              ""
            )}
            <Card button={`View all ${category} services`} slug={category} />
          </div>
        ))}
      </div>

      <Footer />
    </div>
  );
};
