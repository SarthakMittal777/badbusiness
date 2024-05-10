import React from "react";

const ServiceSection = ({ services }) => {
  return (
    <div className="container mx-auto">
      <div className="flex flex-col items-center mt-24">
        <h1 className="lg:text-3xl text-xl font-bold mb-2 text-neutral-800">
          Need something done?
        </h1>
        <div className="text-center mt-2">
          <p className="text-md">Learn about BAD</p>
        </div>
      </div>
      <div className="flex flex-wrap justify-evenly gap-2 py-4">
        {services.map((service, index) => (
          <div
            key={index}
            className="rounded-lg flex flex-col items-center text-center w-72"
          >
            <div className="rounded-full p-8 mb-3 border border-gray-300 transition-colors hover:bg-gray-200 hover:invert">
              <img
                src={service.icon}
                alt={`${service.title} icon`}
                className="h-10 w-10"
              />
            </div>
            <h4 className="text-lg font-semibold mb-3">{service.title}</h4>
            <p className="text-gray-600 items-center">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceSection;
