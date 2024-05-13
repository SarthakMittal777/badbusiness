import Navbar from "../components/Navbar";
import NumberCounterSection from "../components/NumberCounterSection";
import ServiceSection from "../components/ServiceSection";
import Tabs from "../components/Tabs";
const bgImage = "/images/hero/hero-bg.png";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export const Homepage = () => {
  const [activeTab, setActiveTab] = useState("Development");

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

  const teamMembers = [
    { name: "Sarthak Mittal", position: "CEO", image: "/images/team/ceo.jpg" },
    { name: "Pratham Sahu", position: "COO", image: "/images/team/coo.jpg" },
    { name: "Baqer Ali", position: "CMO", image: "/images/team/cmo.jpg" },
    { name: "Shuvam Raj", position: "MD", image: "/images/team/md.jpg" },
  ];

  const [isMobileView, setIsMobileView] = useState(false);

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

  return (
    <div className="contain-content mx-auto animate-fade-in">
      {/* Whole Section*/}
      <div className="sticky top-0 z-50 shadow-md">
        <Navbar />
      </div>
      <div
        className="lg:h-dvh bg-center lg:bg-cover sm:bg-auto sm:bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        {/* Hero Section*/}
        <section className="">
          <div className="container mx-auto px-4 lg:max-w-screen-smDesktop max-w-screen-2xl flex flex-col lg:flex-row items-center relative">
            <div className="flex-1 lg:p-16 lg:px-48 lg:pt-12 animate-fade-in">
              <h1 className="text-2xl lg:text-5xl font-bold mb-6 text-white text-start lg:text-balance mt-8 lg:leading-snug">
                Full Solution for Your Business Development
              </h1>

              <p className="mb-8 text-mb text-white text-justify font-normal sm:block hidden">
                Find talented people to work with at the most affordable price
                to get the most
                <br /> out of your time and cost
              </p>
              <p className="mb-8 text-white text-justify font-normal leading-7 md:hidden tracking-tighter">
                Find talented people to work with at the most affordable price
                to get the most out of your time and cost
              </p>
              <div className="space-x-4 mb-6 ">
                <button className="relative bg-teal-900 text-emerald-300 font-bold py-4 px-8 rounded-full transition-all duration-300 ease-in-out hover:text-white hover:bg-green-600">
                  Get Started
                </button>

                <button className="relative bg-emerald-200 text-black font-medium py-4 px-8 rounded-full ml-4 border border-transparent transition-all duration-300 ease-in-out hover:bg-green-600 hover:border-green-600 hover:text-white">
                  Book a Meeting
                </button>
              </div>
            </div>

            {/* Hero Images*/}
            <div className="flex-1 p-8 relative animate-fade-in">
              <div className="flex mb-4 gap-6">
                <img
                  src="/images/hero/hero-1.png"
                  alt="Image 1"
                  className="w-1/3 sm:block hidden"
                />
                <img
                  src="/images/hero/client.png"
                  alt="Image 1"
                  className="w-auto absolute top-[40%] left-10 animate-moveLeftRight sm:block hidden"
                />
                <img
                  src="/images/hero/hero-2.png"
                  alt="Image 2"
                  className="w-1/3 sm:block hidden"
                />
              </div>
              <img
                src="/images/hero/hero-3.png"
                alt="Image 3"
                className="w-2/3 mb-4 sm:block hidden"
              />
              <div className="sm:block hidden">
                <div className="text-start flex shadow-lg animate-bounce bg-blue-600 p-4 rounded-full absolute left-4 lg:left-auto">
                  <span className="rounded-full p-3 bg-blue-500 hover:bg-green-900 duration-300">
                    <img
                      src="/images/hero/medal.png"
                      className="w-6 h-6 invert "
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
      </div>
      {/* Service Section  */}
      <ServiceSection services={services} />;{/* Tabs Section  */}
      <Tabs activeTab={activeTab} handleTabClick={handleTabClick} />
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
          {/* Swiper */}
          <div className="flex justify-center items-center">
            {isMobileView ? (
              <Swiper spaceBetween={50} slidesPerView={1} loop={true}>
                {teamMembers.map((member, index) => (
                  <SwiperSlide key={index}>
                    <div className="rounded-md transition-transform duration-300 hover:scale-105 px-10">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-50 h-full rounded-xl"
                      />
                      <div className="absolute top-8 left-8 px-5 py-1 rounded-md z-10">
                        <p className="text-sm">{member.name}</p>
                        <p className="text-sm">{member.position}</p>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            ) : (
              <Swiper spaceBetween={50} slidesPerView={4} loop={true}>
                {teamMembers.map((member, index) => (
                  <SwiperSlide key={index}>
                    <div className="rounded-md transition-transform duration-300 hover:scale-105">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full rounded-xl"
                      />
                      <div className="absolute top-7 left-7 px-2 py-1 rounded-md z-10">
                        <p className="text-sm">{member.name}</p>
                        <p className="text-sm">{member.position}</p>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
                {teamMembers.map((member, index) => (
                  <SwiperSlide key={index}>
                    <div className="rounded-md transition-transform duration-300 hover:scale-105">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full rounded-xl"
                      />
                      <div className="absolute top-7 left-7 px-2 py-1 rounded-md z-10">
                        <p className="text-sm">{member.name}</p>
                        <p className="text-sm">{member.position}</p>
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
    </div>
  );
};
