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

      // Categorize services
      const categories = services.reduce((acc, service) => {
        const category = service.category.trim();
        if (!acc[category]) {
          acc[category] = [];
        }
        acc[category].push(service);
        return acc;
      }, {});

      setCategorizedData(categories);
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
        <p className="mx-24 text-center"> Showing results for {} categories</p>
      </div>
      <div className="flex w-full xl:justify-around gap-12 mb-32 flex-wrap justify-center sm:justify-normal">
        <Card
          image="https://via.placeholder.com/150"
          category="   Web and App design"
          title=" I will create modern flat design illustration"
          profile="https://via.placeholder.com/50"
          amount="$983"
        />
        <Card
          image="https://via.placeholder.com/150"
          category="   Web and App design"
          title=" I will create modern flat design illustration"
          profile="https://via.placeholder.com/50"
          amount="$983"
        />
        <Card button="View all Tech products" slug="Technology" />
      </div>

      <Footer />
    </div>
  );
};
