import { useState } from "react";
import { Link } from "react-router-dom";
import { IoMdCopy } from "react-icons/io";
import { GoArrowUpRight } from "react-icons/go";

function JobCards({
  jobTitle,
  jobLocation,
  jobType,
  website,
  stipend,
  logo,
  id,
  posted,
}) {
  const [isHovered, setIsHovered] = useState(false);

  const handleHover = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  const handleCopy = () => {
    navigator.clipboard
      .writeText(id)
      .then(() => {
        alert("Job ID copied!");
      })
      .catch((err) => {
        console.error("Failed to copy text: ", err);
      });
  };

  return (
    <div className="border bg-transparent border-gray-600 mx-auto flex flex-col justify-between rounded-3xl gap-4 text-white min-h-54 p-8 w-full lg:min-w-[400px] lg:min-h-[370px] lg:max-w-[400px] transform transition-transform duration-300 hover:scale-105">
      <div className="w-full flex items-start">
        <img
          src={logo}
          alt="logo"
          className="w-24 h-24 rounded-full object-cover"
        />
      </div>
      <div className="flex justify-between items-center">
        <p className="font-custom max-w-[70%] break-words text-lg items-center">
          {jobTitle}
        </p>
        <div className="text-sm text-gray-400">Date posted: {posted}</div>
      </div>
      <div className="flex flex-col text-sm text-gray-300">
        <div className="text-sm border px-4 py-2 mb-3 w-fit rounded-xl">
          {jobType}
        </div>
        <div className="text-sm flex w-full justify-between">
          <p>{stipend}</p>
          <p
            className="text-gray-300 rounded px-2 py-1 w-fit flex gap-2 justify-center items-center border border-gray-600 rounded-xl cursor-pointer hover:bg-gray-600 hover:text-white transition-colors duration-300 ease-in-out"
            onClick={() => handleCopy()}
          >
            <IoMdCopy />
            {id}
          </p>
        </div>
      </div>
      <div className="flex w-full justify-between text-sm mt-auto">
        <div className="text-gray-400">{jobLocation}</div>
        <Link to={website}>
          <div
            className="flex gap-3 items-center"
            onMouseEnter={handleHover}
            onMouseLeave={handleMouseLeave}
          >
            <div>Apply Now</div>
            <div
              style={{
                position: "relative",
                bottom: isHovered ? "3px" : "0",
                left: isHovered ? "3px" : "0",
                transition: "0.3s ease",
              }}
            >
              <GoArrowUpRight className="inline-block" />
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default JobCards;
