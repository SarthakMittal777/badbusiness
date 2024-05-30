import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import JobData from "../static/JobData.json";
import JobCard from "../components/JobCards";
const Careers = () => {
  return (
    <div className="animate-fade-in">
      <Navbar />
      <Hero banner="JOBS" />
      <div className="bg-black px-4 py-12 md:p-24 flex flex-col w-full">
        <div className="w-full py-4 flex gap-3 flex-wrap h-fit">
          <div className="grid place-content-center px-6 py-2 border rounded-3xl border-gray-600  text-white">
            Location
          </div>
          <div className="grid place-content-center px-6 py-2 border rounded-3xl border-gray-600    text-white">
            Category
          </div>
          <div className="grid place-content-center px-6 py-2 border rounded-3xl border-gray-600   text-white">
            Type
          </div>
        </div>
        <div className="flex justify-center items-center w-full">
          <div className="flex flex-wrap gap-12 my-8 items-center">
            {JobData.map((job) => (
              <JobCard
                key={job.id}
                jobTitle={job.jobTitle}
                logo={job.logo}
                jobLocation={job.location}
                jobType={job.jobType}
                website={job.websiteURL}
                posted={job.posted}
                stipend={job.stipend}
                id={job.id}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Careers;
