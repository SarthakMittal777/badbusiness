import CareerCard from "../components/CareerCard";
import Navbar from "../components/Navbar";
import CareerData from "../static/Career.json";

export const Careers = () => {
  return (
    <div className="w-full h-full">
      <Navbar />
      <div
        className="w-full h-96  flex justify-center flex-col text-[white] text-left"
        style={{
          background: "url('/images/hero/hero-bg.png')",
          backgroundSize: "cover",
        }}
      >
        <span className="mx-8 flex gap-3 items-center">
          Home
          <span className="w-2 h-2 rounded-full bg-[#cb2525] inline-block"></span>
          Careers
        </span>
        <h1 className="lg:text-4xl sm:text-3xl mbMedSmall:text-xl text-lg font-bold mb-4 mx-8">
          CAREERS
        </h1>
        <p className="mx-8">Inspire and Get Inspired by Professional Experts</p>
      </div>
      <section className="flex flex-col gap-12 p-12 ">
        {CareerData && CareerData.map((career, index) => {
          return <CareerCard career={career} key={index} />;
        })}
      </section>
    </div>
  );
};
