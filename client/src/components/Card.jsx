import { Link } from "react-router-dom";
//eslint-disable-next-line
const Card = ({ image, title, category, profile, amount, button, slug }) => {
  return (
    <div className="flex flex-col w-80 shadow-xl gap-2 justify-center hover:scale-105 transition-all duration-300 items-center h-54 hover:shadow-[#393948] hover:shadow-lg m-8 ">
      {!button && (
        <div className="h-full max-h-[15rem] w-full">
          <img src={image} alt="placeholder" className="h-full w-full object-center"  />
        </div>
      )}
      {!button && (
        <div className="flex flex-col gap-3 w-full px-5 py-2 justify-center">
          <p className="text-black text-sm font-semibold">{category}</p>
          <div className="text-wrap font-semibold text-red-800 text-xl pb-4">{title}</div>
        </div>
      )}
      {button && (
        <div className="bg-[#0f0f43] text-white hover:bg-blue-800 cursor-pointer  rounded-lg px-6 py-3 text-center">
          <Link to={`/services/${slug}/all`} className="flex items-center ">
            {" "}
            {button}
            <div className="w-2 h-[0.04rem] ml-3 bg-white"></div>
            <p>&#62;</p>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Card;
