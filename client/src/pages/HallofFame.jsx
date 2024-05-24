import { getHofData } from "../api/hof";
import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import HofCard from "../components/HofCard";
import { Footer } from "../components/Footer";

const bgImage = "/images/hero/hero-bg.png";

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
      <div className="bg-center bg-cover bg-no-repeat text-white py-6" style={{ backgroundImage: `url(${bgImage})` }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 lg:py-24">
          <h1 className="text-4xl font-bold text-center">HALL OF FAME</h1>
          <br />
          <h2 className="text-xl font-semibold text-center">Recognizing Achievement, Inspiring Greatness</h2>
        </div>
      </div>
      {/* Card  */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          {Data && Data.hallOfFame && Data.hallOfFame.map((hof) => (
            <HofCard
              key={hof._id}
              businessName={hof.businessName}
              solutionName={hof.solution.solutionName}
              implementation={hof.solution.implementation}
              result={hof.result}
            />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default HallofFame;
