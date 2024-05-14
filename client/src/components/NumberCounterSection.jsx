import React, { useState, useEffect, useRef } from "react";

export const NumberCounter = ({ finalNumber, duration }) => {
  const [currentNumber, setCurrentNumber] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          let startNumber = 0;
          const interval = duration / finalNumber;

          const timer = setInterval(() => {
            startNumber++;
            setCurrentNumber(startNumber);

            if (startNumber === finalNumber) {
              clearInterval(timer);
            }
          }, interval);

          return () => clearInterval(timer);
        }
      });
    });

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [finalNumber, duration]);

  return <div ref={ref}>{currentNumber}</div>;
};

const NumberCounterSection = () => {
  return (
    <div className="container mx-auto mt-8">
      <div className="flex flex-wrap justify-around mt-12 lg:justify-evenly mb-8 ">
        <div className="text-center w-full sm:w-auto mb-8">
          <div className="flex items-center justify-center">
            <div className="font-semibold text-4xl">
              <NumberCounter finalNumber={10} duration={2000} />
            </div>
            <div className="text-4xl">+</div>
          </div>
          <p className="text">Total Communities</p>
        </div>

        <div className="text-center w-full sm:w-auto mb-8">
          <div className="flex items-center justify-center">
            <div className="font-semibold text-4xl">
              <NumberCounter finalNumber={20} duration={2000} />
            </div>
            <div className="text-4xl">+</div>
          </div>
          <p className="text">Total Companies</p>
        </div>

        <div className="text-center w-full sm:w-auto mb-8">
          <div className="flex items-center justify-center">
            <div className="font-semibold text-4xl">
              <NumberCounter finalNumber={30} duration={2000} />
            </div>
            <div className="text-4xl">+</div>
          </div>
          <p className="text">Total Startups</p>
        </div>

        <div className="text-center w-full sm:w-auto">
          <div className="flex items-center justify-center">
            <div className="font-semibold text-4xl">
              <NumberCounter finalNumber={35} duration={2000} />
            </div>
            <div className="text-4xl">+</div>
          </div>
          <p className="text">Total Consultants</p>
        </div>
      </div>
    </div>
  );
};

export default NumberCounterSection;
