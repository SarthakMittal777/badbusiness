import { useState } from "react";
import { Link } from "react-router-dom";
import { IoMdCopy } from "react-icons/io";
import { GoArrowUpRight } from "react-icons/go";
import { CiShare2 } from "react-icons/ci";
import toast from "react-hot-toast";
function JobCards({
  jobTitle,
  job_id,
  jobLocation,
  jobType,
  website,
  stipend,
  logo,
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
      .writeText(job_id)
      .then(() => {
        toast.success("Job ID copied!");
      })
      .catch((err) => {
        console.error("Failed to copy text: ", err);
      });
  };

  const handleShare = () => {
    navigator.clipboard
      .writeText(
        `{We are excited to announce a new job opportunity at Bad Business. If you are a driven professional seeking a dynamic and challenging role, we encourage you to explore the position and consider applying.
  
      For more details and to submit your application, please visit: https://badbusiness.in/careers/${job_id}.
      
      We look forward to potentially welcoming you to our team.
      
      #JobOpening #CareerOpportunity #ProfessionalGrowth}`
      )
      .then(() => {
        toast.success("Job details copied!");
      })
      .catch((err) => {
        console.error("Failed to copy text: ", err);
      });
  };
  console.log(website);
  return (
    <div className="border bg-transparent border-gray-600  flex flex-col justify-between rounded-3xl gap-4 text-white min-h-54 p-8 w-full lg:min-w-[400px] lg:min-h-[370px] lg:max-w-[400px] transform transition-transform duration-300 hover:scale-105">
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
        <section className="flex gap-2">
          {jobType.map((job) => (
            <div
              key={job}
              className="text-sm border px-4 py-2 mb-3 w-fit rounded-xl"
            >
              {job}
            </div>
          ))}
        </section>
        <div className="text-sm flex w-full justify-between">
          <p>{stipend}</p>
          <p
            className="text-gray-300  px-2 py-1 w-fit flex gap-2 justify-center items-center border border-gray-600 rounded-xl cursor-pointer hover:bg-gray-600 hover:text-white transition-colors duration-300 ease-in-out"
            onClick={() => handleCopy()}
          >
            <IoMdCopy />
            {job_id.slice(0, 10)}
          </p>
        </div>
      </div>
      <div className="flex w-full justify-between text-sm mt-auto">
        <div className="text-gray-400">{jobLocation}</div>

        <div className="flex gap-2" target="_blank">
          <CiShare2
            size={20}
            onClick={(e) => {
              e.stopPropagation();
              handleShare();
            }}
          />
          <Link to={website} className="flex gap-2" target="_blank">
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
    </div>
  );
}

export default JobCards;
