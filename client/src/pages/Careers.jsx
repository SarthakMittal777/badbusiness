import Navbar from "../components/Navbar";
export const Careers = () => {
  return (
    <div className="w-full h-full">
      <Navbar />
      <div
        className="w-full h-96  items-center flex justify-center flex-col text-[white] text-center"
        style={{
          background: "url('/images/hero/hero-bg.png')",
          backgroundSize: "cover",
        }}
      >
        <h1 className="lg:text-4xl sm:text-3xl mbMedSmall:text-xl text-lg font-bold mb-4 ">
          CAREERS
        </h1>
        <p>Inspire and Get Inspired by Professional Experts</p>
      </div>
    </div>
  );
};
