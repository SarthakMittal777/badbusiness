import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import JobType from "../static/JobType.json";
import JobCard from "../components/JobCards";
import { countries } from "countries-list";
import { IoIosArrowUp } from "react-icons/io";
import { useState, useEffect } from "react";
import { IoIosArrowDown } from "react-icons/io";
import JobCategories from "../static/JobCategories.json";
import { getCareerData } from "../api/career";
import { Footer } from "../components/Footer";

const Careers = () => {
  const [click, setClick] = useState(null);
  const [query, setQuery] = useState("");
  const [filteredCategories, setFilteredCategories] = useState(JobCategories);
  const [filteredLocation, setFilteredLocation] = useState(countries);
  const [careerData, setCareerData] = useState();

  const handleLocation = (id) => {
    if (click === id) setClick(null);
    else setClick(id);
  };

  const filterJobData = (data, click, query) => {
    const lowerQuery = query.toLowerCase();
    const filtered = data.filter((job) => {
      if (click === "Category") {
        return job.category.toLowerCase().includes(lowerQuery);
      } else if (click === "Location") {
        return job.jobLocation.toLowerCase().includes(lowerQuery);
      } else if (click === "Type") {
        return job.jobType.some((type) =>
          type.toLowerCase().includes(lowerQuery)
        );
      } else {
        return true;
      }
    });

    setCareerData(filtered);
  };

  useEffect(() => {
    getCareerData()
      .then((data) => {
        setCareerData(data.careers);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  useEffect(() => {
    const handleKeyPress = (event) => {
      let value = query;
      if (event.key === "Backspace") {
        value = value.slice(0, -1);
      } else if (event.key.length === 1) {
        value += event.key;
      }
      setQuery(value);
      if (click === "Category") {
        const filtered = JobCategories.filter((type) =>
          type.category.toLowerCase().includes(value.toLowerCase())
        );
        setFilteredCategories(filtered);
      }
    };
    if (click == "Location") {
      const filtered = Object.keys(countries).filter((type) =>
        countries[type].name.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredLocation(filtered);
    }
    if (click === "Category" || click === "Location") {
      document.addEventListener("keydown", handleKeyPress);
    } else {
      document.removeEventListener("keydown", handleKeyPress);
      setQuery("");
      setFilteredCategories(JobCategories);
    }

    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, [click, query]);

  return (
    <div className="animate-fade-in ">
      <Navbar />

      <div className="bg-black px-4 py-12 md:p-24 flex flex-col w-full">
        <h1 className="text-3xl text-white mb-4"> Careers</h1>
        <p className="text-white text-sm">At badbusiness we&apos;re your areer catalysts,specializing in HR consultancy and seemless connections with top-tier companies</p>
        <div className="w-full py-4 flex gap-3 flex-wrap h-fit">
          <div
            className=" px-6  flex cursor-default justify-center items-center gap-2 py-2 border relative rounded-3xl border-gray-600  text-white"
            onClick={() => handleLocation("Location")}
          >
            <p>Location</p>
            {click === "Location" ? (
              <IoIosArrowUp className="text-white" />
            ) : (
              <IoIosArrowDown className="text-white" />
            )}

            {click === "Location" && (
              <div className="absolute top-10 left-0 bg-black w-full z-10 h-[400px] overflow-y-scroll border rounded-2xl border-gray-500">
                {filteredLocation &&
                  Object.keys(filteredLocation).map(
                    (country) =>
                      countries[filteredLocation[country]] && (
                        <div
                          className="text-white hover:bg-slate-600 p-2 border-b border-gray-500 "
                          key={country}
                          onClick={() =>
                            filterJobData(
                              careerData,
                              "Location",
                              countries[filteredLocation[country]].name
                            )
                          }
                        >
                          {countries[filteredLocation[country]].name}
                        </div>
                      )
                  )}
              </div>
            )}
          </div>
          <div
            className=" px-6  flex cursor-default justify-center items-center gap-2 py-2 border relative rounded-3xl border-gray-600  text-white"
            onClick={() => handleLocation("Category")}
          >
            <p>Category</p>
            {click === "Category" ? (
              <IoIosArrowUp className="text-white" />
            ) : (
              <IoIosArrowDown className="text-white" />
            )}

            {click === "Category" && (
              <div className="absolute top-10 left-0 bg-black w-full z-10 h-[400px] overflow-y-scroll border rounded-2xl border-gray-500">
                {filteredCategories.map((category) => (
                  <div
                    className="text-white hover:bg-slate-600 p-2 border-b border-gray-500 "
                    key={category}
                    onClick={() =>
                      filterJobData(careerData, "Category", category.category)
                    }
                  >
                    {category.category}
                  </div>
                ))}
              </div>
            )}
          </div>
          <div
            className=" px-6  flex cursor-default justify-center items-center gap-2 py-2 border relative rounded-3xl border-gray-600  text-white"
            onClick={() => handleLocation("Type")}
          >
            <p>Job Type</p>
            {click === "Type" ? (
              <IoIosArrowUp className="text-white" />
            ) : (
              <IoIosArrowDown className="text-white" />
            )}

            {click === "Type" && (
              <div className="absolute top-10 left-0 bg-black w-full z-10 h-fit overflow-y-scroll border rounded-2xl border-gray-500">
                {JobType.map((type) => (
                  <div
                    className="text-white hover:bg-slate-600 p-2 border-b border-gray-500 "
                    key={type}
                    onClick={() =>
                      filterJobData(careerData, "Type", type.jobType)
                    }
                  >
                    {type.jobType}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
        <div className="flex justify-center items-center w-full">
          <div className="flex flex-wrap gap-6 my-8 items-start w-full ">
            {careerData &&
              careerData.map((job) => (
                <JobCard
                  key={job._id}
                  job_id={job._id}
                  jobTitle={job.jobTitle}
                  logo={job.logo}
                  jobLocation={job.jobLocation}
                  jobType={job.jobType}
                  website={job.link}
                  posted={new Date(job.datePosted)
                    .toLocaleDateString("en-GB")
                    .split("/")
                    .join("-")}
                  stipend={job.stipend}
                />
              ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Careers;
