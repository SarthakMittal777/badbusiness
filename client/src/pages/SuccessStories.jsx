import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import { Footer } from "../components/Footer";
import SocialMediaEmbed from "../components/SocialMediaEmbed";
import { getStoriesData } from "../api/ss";
const bgImage = "/images/hero/hero-bg.png";

const Success = () => {
  const [stories, setStories] = useState([]);

  useEffect(() => {
    const fetchStories = async () => {
      try {
        const data = await getStoriesData();
        setStories(data.stories);
      } catch (error) {
        console.error("Error fetching stories data: ", error);
      }
    };

    fetchStories();
  }, []);

  return (
    <div className="w-full h-full">
      <Navbar />
      <div
        className="lg:h-full bg-center lg:bg-cover sm:bg-auto sm:bg-center bg-no-repeat text-white py-6"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-4 lg:py-8">
          <h1 className="flex items-center justify-center font-bold text-3xl">
            Success Stories
          </h1>
        </div>
      </div>
      <div className="flex flex-wrap gap-2 justify-center my-4 lg:my-8">
        {stories.map((story) => (
          <SocialMediaEmbed key={story?._id} story={story} />
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Success;
