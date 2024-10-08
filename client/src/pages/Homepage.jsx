import Navbar from "../components/Navbar";
import NumberCounterSection from "../components/NumberCounterSection";
const bgImage = "/images/hero/hero-bg.png";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Button from "../components/Button";
import { Link } from "react-router-dom";
import { getTeamData } from "../api/team";
import { FaArrowUp } from "react-icons/fa";
import loadable from "@loadable/component";

const ServiceSection = loadable(() => import("../components/ServiceSection"));
const Tabs = loadable(() => import("../components/Tabs"));

export const Homepage = () => {
  const [activeTab, setActiveTab] = useState("Development");

  const [isVisible, setIsVisible] = useState(false);

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  const services = [
    {
      title: "Breakdown",
      icon: "/images/bad/cv.png",
      description:
        "Identifying and analyzing the root causes of a problem or inefficiency within a business process or system.",
    },
    {
      title: "Analysis",
      icon: "/images/bad/web-design.png",
      description:
        "Thoroughly examine the problem, gather data, and identify potential solutions of companies.",
    },
    {
      title: "Decision",
      icon: "/images/bad/secure-payment.png",
      description:
        "Selecting the most suitable solution based on analysis and criteria such as feasibility, cost-effectiveness, and alignment with organizational goals.",
    },
  ];

  const [teamMembers, setTeamMembers] = useState([]);
  const [isMobileView, setIsMobileView] = useState(false);

  useEffect(() => {
    const fetchTeamData = async () => {
      const data = await getTeamData();
      if (data.success) {
        const filteredMembers = data.teams.filter((member) => member.isMVP);
        setTeamMembers(filteredMembers);
      }
    };

    fetchTeamData();

    const handleResize = () => {
      setIsMobileView(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="contain-content mx-auto animate-fade-in overflow-y-auto">
      {/* Whole Section*/}
      <div className="sticky top-0 z-50 shadow-md">
        <Navbar />
      </div>
      <div
        className="lg:h-dvh bg-center lg:bg-cover sm:bg-auto sm:bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        {/* Hero Section*/}
        <section className="w-full lg:pt-32 py-3">
          <div className="container mx-auto px-4 lg:max-w-screen-smDesktop max-w-screen-2xl flex flex-col lg:flex-row items-center relative">
            <div className="flex-1 lg:p-16 lg:px-48 lg:pt-12 animate-fade-in">
              <h1 className="text-2xl lg:text-5xl font-bold mb-6 text-white text-start lg:text-balance mt-8 lg:leading-snug">
                Business Ruined?
              </h1>
              <p className="mb-8 text-mb text-white text-justify font-normal">
                We Solve Your Business Problem Using BAD Framework
              </p>
              <div className="flex gap-4">
                <Button className="relative bg-teal-900 hover:bg-green-800 text-green-200 font-bold lg:px-5 lg:py-4 px-2 py-3 rounded-full">
                  <Link to="/share-your-business-problem">
                    Share Your Business Problem
                  </Link>
                </Button>
                <Button className="relative bg-emerald-200 hover:bg-green-800 text-black font-medium lg:px-5 lg:py-4 px-2 py-3 rounded-full">
                  <Link to="https://calendly.com/infobadbusiness">
                    Partner With Us
                  </Link>
                </Button>
              </div>
            </div>

            {/* Hero Images*/}
            <div className="flex-1 p-8 relative animate-fade-in lg:block hidden">
              <div className="flex mb-4 gap-6">
                <img
                  src="/images/hero/hero-1.png"
                  alt="Image 1"
                  className="w-1/3"
                />
                <img
                  src="/images/hero/client.png"
                  alt="Image 1"
                  className="w-auto absolute top-[40%] left-10 animate-moveLeftRight"
                />
                <img
                  src="/images/hero/hero-2.png"
                  alt="Image 2"
                  className="w-1/3"
                />
              </div>
              <img
                src="/images/hero/hero-3.png"
                alt="Image 3"
                className="w-2/3 mb-4"
              />
              <div className="">
                <div className="text-start flex shadow-lg animate-bounce bg-blue-600 p-4 rounded-full absolute left-4 lg:left-auto">
                  <span className="rounded-full p-3 bg-blue-500 hover:bg-green-900 duration-300">
                    <img
                      src="/images/hero/medal.png"
                      className="w-6 h-6 invert"
                      alt="Medal"
                    />
                  </span>
                  <div className="pl-2">
                    <h6 className="mb-1 text-white">Bad Business offers</h6>
                    <p className="text-sm mb-0 text-white">
                      One Stop Solution to all business Problems
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      {/* Partners */}
      <div className="container mx-auto mt-8">
        <div className="flex justify-center items-center">
          <h1 className="text-md lg:mr-4">
            Trusted by the world&apos; best Corporations
          </h1>
        </div>
        <div className="flex flex-wrap justify-around mt-6 lg:justify-evenly gap-x-6 lg:gap-x-8 gap-y-6 lg:gap-y-8">
          <div className="flex justify-center items-center">
            <img src="/images/partners/1.png" alt="1" className="h-24" />
          </div>
          <div className="flex justify-center items-center">
            <img src="/images/partners/2.png" alt="2" className="h-24" />
          </div>
          <div className="flex justify-center items-center">
            <img src="/images/partners/3.png" alt="3" className="h-24" />
          </div>
          <div className="flex justify-center items-center">
            <img src="/images/partners/4.png" alt="4" className="h-24" />
          </div>
        </div>
        <div className="flex justify-center items-center text-center underline text-[#212A32] mt-6 italic">
          <Link to="/partners">View all of our JVC</Link>
        </div>
      </div>
      {/* Service Section  */}
      <ServiceSection services={services} />
      {/* Tabs Section  */}
      <Tabs activeTab={activeTab} handleTabClick={handleTabClick} />
      {/* Careers Section  */}
      <div className="container mx-auto mt-16 text-wrap">
        <h1 className="text-3xl font-bold mb-4 text-center">Careers at BAD</h1>
        <div className="flex flex-col md:flex-row justify-center items-center">
          <div className="w-full md:w-1/2 md:pr-4 mb-4 md:mb-0">
            <p className="mb-4 text-center md:text-lg font-normal text-gray-600 my-4">
              At BAD Careers, we are committed to creating a vibrant and
              inclusive work environment where every team member can excel.
            </p>
            <div className="flex justify-center">
              <button className="relative bg-black text-white font-bold py-4 px-5 rounded-full border border-red-500 transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg hover:shadow-red-500/50">
                <Link to="/careers">Explore Opportunities</Link>
              </button>
            </div>
          </div>
        </div>

        {/* Events Section */}
        <div className="mt-12 text-wrap">
          <h1 className="text-3xl font-bold mb-4 text-center">Events at BAD</h1>
          <div className="flex flex-col md:flex-row justify-center items-center">
            <div className="w-full md:w-1/2">
              <p className="mb-4 text-center md:text-lg font-normal text-gray-600 my-4">
                BAD Events bring together industry leaders, innovators, and
                professionals to share insights, network, and collaborate.
              </p>
              <div className="flex justify-center">
                <button className="relative bg-black text-white font-bold py-4 px-5 rounded-full border border-red-500 transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg hover:shadow-red-500/50">
                  <Link to="https://events.badbusiness.in/">View Events</Link>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Success Stories Section */}
        <div className="mt-12 text-wrap">
          <h1 className="text-3xl font-bold mb-4 text-center">
            Success Stories
          </h1>
          <div className="flex flex-col md:flex-row justify-center items-center">
            <div className="w-full md:w-1/2 md:pr-4 mb-4 md:mb-0">
              <p className="mb-4 text-center md:text-lg font-normal text-gray-600 my-4">
                Discover the inspiring success stories of our employees and how
                they have grown their careers with BAD.
              </p>
              <div className="flex justify-center">
                <button className="relative bg-black text-white font-bold py-4 px-5 rounded-full border border-red-500 transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg hover:shadow-red-500/50">
                  <Link to="/success-stories">Read Stories</Link>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Blogs Section */}
        <div className="mt-12 text-wrap">
          <h1 className="text-3xl font-bold mb-4 text-center">BAD Blogs</h1>
          <div className="flex flex-col md:flex-row justify-center items-center">
            <div className="w-full md:w-1/2">
              <p className="mb-4 text-center md:text-lg font-normal text-gray-600 my-4">
                Stay updated with the latest industry trends, insights, and
                stories through the BAD Blogs.
              </p>
              <div className="flex justify-center">
                <button className="relative bg-black text-white font-bold py-4 px-5 rounded-full border border-red-500 transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg hover:shadow-red-500/50">
                  <Link to="/blogs">Read Blogs</Link>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* NumberCounter Section  */}
      <NumberCounterSection />
      {/* Team */}
      <div className="bg-zinc-800 text-white py-8">
        <div className="container mx-auto max-w-screen-xl">
          <div
            className="mb-8 flex flex-col md:flex-row items-center justify-between"
            style={{ marginLeft: "10px" }}
          >
            <div>
              <h4 className="font-bold mr-4 lg:text-3xl text-xl mb-3">Team</h4>
              <div className="space-x-4">
                <h1>
                  We are the team of investors, founders, consultants and
                  counsellors
                </h1>
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center">
            {isMobileView ? (
              <Swiper
                spaceBetween={50}
                slidesPerView={1}
                loop={teamMembers.length > 1}
              >
                {teamMembers.map((member, index) => (
                  <SwiperSlide key={index}>
                    <div className="rounded-md transition-transform duration-300 hover:scale-105 px-10">
                      <img
                        src={member.photo}
                        alt={member.name}
                        className="w-full h-64 object-cover rounded-xl"
                      />
                      <div className="absolute top-8 left-8 px-5 py-1 rounded-md z-10">
                        <p className="text-sm">{member.name}</p>
                        <p className="text-sm">{member.headline}</p>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            ) : (
              <Swiper
                spaceBetween={50}
                slidesPerView={Math.min(teamMembers.length, 4)}
                loop={teamMembers.length > 4}
              >
                {teamMembers.map((member, index) => (
                  <SwiperSlide key={index}>
                    <div className="rounded-md transition-transform duration-300 hover:scale-105">
                      <img
                        src={member.photo}
                        alt={member.name}
                        className="w-full h-64 object-cover rounded-xl"
                      />
                      <div className="absolute top-7 left-7 px-2 py-1 rounded-md z-10">
                        <p className="text-sm">{member.name}</p>
                        <p className="text-sm">{member.headline}</p>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            )}
          </div>
          <hr className="my-8" />
        </div>
        <div className="container mx-auto max-w-screen-xl w-full flex flex-col items-center md:flex-row md:justify-between">
          <p className="mb-4 md:mb-0 text-gray-300 whitespace-nowrap">
            © Bad Business. 2024 MentorMenti. All rights reserved.
          </p>
        </div>
      </div>
      <div className="fixed bottom-16 right-10">
        {isVisible && (
          <button
            onClick={scrollToTop}
            className="bg-black text-white p-3 rounded-full shadow-lg transition-all duration-300 ease-in-out transform hover:scale-110 hover:shadow-red-500/50"
          >
            <FaArrowUp />
          </button>
        )}
      </div>
    </div>
  );
};
