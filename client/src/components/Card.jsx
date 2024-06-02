import { Link } from "react-router-dom";
//eslint-disable-next-line
const Card = ({ image, title, category, profile, amount, button, slug }) => {
  return (
    <div className="flex flex-col w-80 shadow-xl mx-auto gap-2 justify-center bg-gray-100 min-h-[25rem] bg-opacity-40 hover:scale-105 transition-all duration-300 items-center h-54 hover:shadow-[#393948] hover:shadow-lg m-8 rounded-3xl">
      {!button && (
        <div className="relative h-[90%] max-h-[15rem] w-[90%] mt-4 rounded-3xl overflow-hidden">
          <img
            src={image}
            alt="placeholder"
            className="h-full w-full object-cover rounded-3xl"
          />
          <div className="absolute inset-0 bg-black opacity-25 hover:opacity-0 transition-opacity duration-300"></div>
        </div>
      )}
      {!button && (
        <div className="flex flex-col gap-3 w-full px-5 py-2 justify-center">
          <div className="text-wrap font-semibold text-red-800 text-xl">
            {title}
          </div>
          <div className="text-sm text-gray-500 pb-4">
            Elevate strategies with our {title}, ensuring future-ready solutions
            and transformative results.
          </div>
        </div>
      )}
      {button && (
        <div className="bg-[#0f0f43] text-white hover:bg-blue-900 cursor-pointer  rounded-lg px-6 py-3 text-center ">
          <Link to={`/services/${slug}/all`} className="flex items-center ">
            {" "}
            {button}
          </Link>
        </div>
      )}
    </div>
  );
};

export default Card;
