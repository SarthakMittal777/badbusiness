import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import { getServiceData } from "../api/service";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Tabs = () => {
  const [services, setServices] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchServiceData = async () => {
      try {
        const data = await getServiceData();
        setServices(data.services);
        const uniqueCategories = [
          ...new Set(data.services.map((service) => service.category.trim())),
        ];
        setCategories(uniqueCategories);
      } catch (error) {
        console.error("Error fetching services data:", error);
      }
    };

    fetchServiceData();
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 10000,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="pt-24">
      <div className="container mx-auto px-4">
        <div className="flex justify-center text-center gap-2">
          <div>
            <h2 className="lg:text-3xl text-xl font-bold">Why choose BAD?</h2>
            <p className="text-gray-600 mt-4">
              Most viewed and all-time top-selling services
            </p>
          </div>
        </div>

        <div className="lg:mt-16 md:mt-4 mx-auto w-full md:w-4/5 mt-8">
          <Slider {...settings}>
            {services.map((service) => (
              <div
                key={service._id}
                className="hover:shadow-lg hover-box-shadow rounded-full overflow-hidden border w-full sm:w-80 lg:w-96 p-4"
              >
                <div className="flex justify-center">
                  <h5 className="font-semibold mb-2">
                    <h2>{service.title}</h2>
                  </h5>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Tabs;
