import { getHofData } from "../api/hof";
import { useState, useEffect } from "react";
const bgImage = "/images/hero/hero-bg.png";
import Navbar from "../components/Navbar";
import HofCard from "../components/HofCard";
import { Footer } from "../components/Footer";
const HallofFame = () => {
  const [Data, setData] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const res = await getHofData();
      setData(res);
    }
    fetchData();
  }, []);

  return (
    <div className="w-full h-full">
      <Navbar />
      <div
        className="lg:h-full bg-center lg:bg-cover sm:bg-auto sm:bg-center bg-no-repeat text-white py-6"
        style={{ backgroundImage: `url(${bgImage})`, backgroundSize: "cover" }}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 lg:py-24">
          <h1 className="flex items-center justify-center font-bold text-4xl">
            HALL OF FAME
          </h1>
          <br />
          <h2 className="flex items-center justify-center font-semibold text-xl">
            Recognizing Achievement, Inspiring Greatness
          </h2>
        </div>
      </div>
      {/* Card  */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 m-32">
        {Data &&
          Data.hallOfFame &&
          Data.hallOfFame.map((hof) => (
            <HofCard
              key={hof._id}
              businessName={hof.businessName}
              solutionName={hof.solution.solutionName}
              implementation={hof.solution.implementation}
              result={hof.result}
            />
          ))}
      </div>
      <Footer />
    </div>
  );
};

export default HallofFame;
