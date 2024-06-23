import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import mentor from "/static/assets/mentor.jpg";
import { Link } from "react-router-dom";

const Mentor = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div>
      <NavBar />

      <div className="flex flex-col items-center p-8 pt-24 space-y-8 text-center md:flex-row md:justify-around ">
        <div>
          <img
            src={mentor}
            className="max-w-sm md:max-w-md lg:max-w-lg"
            alt=""
          />
        </div>
        <div className="md:max-w-lg">
          <div className="space-y-4">
            <h1 className="text-2xl">
              Join our{" "}
              <span className=" text-transparent bg-gradient-to-l from-[#4a7999] via-[#5b99c3] to-[#4c8db8] bg-clip-text">
                community
              </span>{" "}
              of world-className mentors
            </h1>
            <p className="text-[#8ca1b3]">
              As a MentorHeal mentor, you'll get to provide mentorship to
              mentees in your own style and on your own schedule (and get paid
              for it!).
            </p>
          </div>
          <div className="flex flex-col justify-center gap-6 mt-8 lg:flex-row">
            <div className="space-y-2.5 max-w-xs mx-auto">
              <h1 className="text-xl ">Learn</h1>
              <p className="text-[#8ca1b3]">
                Route among the safe roads. Find whats waiting for you.
              </p>
            </div>

            <div className="space-y-2.5 max-w-xs mx-auto">
              <h1 className="text-xl ">Share</h1>
              <p className="text-[#8ca1b3]">
                Your caring gets its way. Let your people know.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="p-8 my-4 text-center space-y-14">
        <div>
          <h1 className="text-2xl lg:text-3xl">
            Here's why mentor's around the world love{" "}
            <span className=" text-transparent bg-gradient-to-l from-[#4a7999] via-[#5b99c3] to-[#4c8db8] bg-clip-text">
              mentoring
            </span>{" "}
            on MentorHeal
          </h1>
        </div>

        <div className="flex flex-wrap items-center justify-center place-items-center gap-4">
          {data.map((item, index) => {
            return (
              <div
                key={index}
                className="flex flex-col hover:shadow-sm ease-in-out duration-300 items-center px-8 space-y-4 border-[1px] border-slate-300 p-4 w-full md:w-1/3 h-72 rounded-lg"
              >
                <div className="mx-auto mt-7">
                  <img src={item.image} className="w-16 h-16 " />
                </div>
                <h1 className="text-xl">
                  {index + 1}. {item.title}
                </h1>
                <p className="text-[#8ca1b3]">{item.line}</p>
              </div>
            );
          })}
        </div>
      </div>
      <div className="flex justify-center">
        <Link
          to="/join-as-mentor/apply"
          className="bg-[#4a7999] text-white px-4 py-2 rounded-full mx-auto "
        >
          Apply as a Mentor
        </Link>
      </div>
      <Appointment />
      <Footer />
    </div>
  );
};

export default Mentor;
