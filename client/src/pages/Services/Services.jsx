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
    <div className="w-full flex flex-col  items-center justify-center bg-gray-300">
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
        className="w-full h-[60vh] flex items-center justify-center relative"
        style={{
          background:
            "url(/images/hero/serviceHero.jpg) no-repeat center center fixed",
          backgroundSize: "cover",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>{" "}
        <div className="relative text-center text-white mx-24">
          {" "}
          <h1 className="text-4xl py-8 font-bold">Expertise and Solutions</h1>
          <p>
            Unlock the extraordinary with our unparalleled services. At the
            intersection of innovation and excellence, we deliver solutions that
            transform visions into reality. Dive into our curated suite of
            offerings, each crafted to power your success and set you apart from
            the rest. Experience the difference with us – where your ambitions
            meet our expertise..
          </p>
        </div>
      </div>

      <div className="w-full  text-base flex items-center justify-between mt-8 flex-col md:flex-row ">
        <p className=" text-center mx-12">
          {" "}
          Showing results for {Object.keys(categorizedData).length} categories
        </p>
      </div>
      <div className="flex w-full xl:justify-normal gap-12 mb-32 flex-wrap justify-center sm:justify-normal ">
        {Object.keys(categorizedData).map((category, index) => (
          <div key={index} className="flex flex-wrap justify-center sm:justify-normal ">
            <Card
              image={categorizedData[category][0].image}
              category={categorizedData[category][0].category}
              title={categorizedData[category][0].title}
              profile={categorizedData[category][0].profile}
              amount=""
            />
            {categorizedData[category].length > 1 ? (
              <Card
                image={categorizedData[category][1].image}
                category={categorizedData[category][1].category}
                title={categorizedData[category][1].title}
                profile={categorizedData[category][1].profile}
                amount=""
              />
            ) : (
              ""
            )}
            {categorizedData[category].length > 2 ? (
              <Card
                image={categorizedData[category][2].image}
                category={categorizedData[category][2].category}
                title={categorizedData[category][2].title}
                profile={categorizedData[category][2].profile}
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
