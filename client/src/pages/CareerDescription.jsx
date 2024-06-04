import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { GoArrowUpRight } from "react-icons/go";
import { useParams } from "react-router-dom";
import { getCareerDataById } from "../api/career";
import toast from "react-hot-toast";
const CareerDescription = () => {
  const { id } = useParams();
  const [JobData, setJobData] = useState();

  useEffect(() => {
    getCareerDataById(id)
      .then((data) => {
        setJobData(data.career);
      })
      .catch((error) => {
        toast.error(
          "Job doesn't exist . Redirecting to the main career page..."
        );
        console.log(error);
      });
  }, [id]);
  const [isHovered, setIsHovered] = useState(false);

  const handleHover = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  return (
    <div className="animate-fade-in ">
      <Navbar />
      <Hero banner="JOBS" />
      {JobData && (
        <div className="bg-black px-4 py-12 md:p-12 flex flex-col w-full text-white gap-6">
          <div className="rounded-full w-32 h-32">
            <img
              src={JobData.logo}
              alt="Company Logo"
              className="rounded-full"
            />
          </div>
          <h1 className="text-3xl text-white font-semibold font-custom">
            {JobData.jobTitle}
            <p className="text-sm font-normal my-3 text-gray-400">
              {JobData.location}
            </p>
          </h1>

          <hr></hr>

          <p className="border bold px-3 py-1 w-fit rounded">
            Stipend:{JobData.stipend}
          </p>
          <p>{JobData.jobDescription.description}</p>
          <section className="flex gap-3">
            {JobData.jobType.map((type, index) => (
              <p key={index} className="border bold px-3 py-1 w-fit rounded">
                {type}
              </p>
            ))}
          </section>

          <h1 className="text-xl text-white font-semibold font-custom">
            Responsibilities
          </h1>
          <p>{JobData.jobDescription.key_responsibilities}</p>

          <h1 className="text-xl text-white font-semibold font-custom">
            Required Qualifications
          </h1>
          <p>{JobData.jobDescription.req_qualifications}</p>
          <h1 className="text-xl text-white font-semibold font-custom">
            Preferred Qualifications
          </h1>
          <p>{JobData.jobDescription.preferred_qualifications}</p>

          <Link to={JobData.link} target="_blank">
            <div
              className="flex gap-3 items-center border w-fit px-6 py-2 rounded"
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
      )}
    </div>
  );
};

export default CareerDescription;
