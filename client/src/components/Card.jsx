import { Link } from "react-router-dom";
//eslint-disable-next-line
const Card = ({ image, title, category, profile, amount, button, slug }) => {
  return (
    <div className="flex flex-col w-80 shadow-xl gap-5 justify-center items-center h-96 hover:shadow-[#393948] hover:shadow-lg m-8 ">
      {!button && (
        <div className="h-[50%] w-full">
          <img src={image} alt="placeholder" className="h-full w-full" />
        </div>
      )}
      {!button && (
        <div className="flex flex-col gap-3 w-full p-5 justify-center">
          <p className="text-gray-400  text-sm font-semibold">{category}</p>
          <div className="text-wrap font-semibold">{title}</div>
          <div className="flex border-b pb-4">
            ⭐ 4.82
            <div className="mx-4 text-gray-400 ">94 reviews</div>
          </div>
          {/* <div className="flex  justify-between items-center max-w-full mb-5">
            <img
              src={profile}
              alt="placeholder"
              className="h-6 w-6 rounded-full"
            />
            <div className="text-gray-400 ">
              Starting at <span className="text-black">{amount}</span>
            </div>
          </div> */}
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
