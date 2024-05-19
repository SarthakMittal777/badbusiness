import React, { useState } from "react";
import { Footer } from "../components/Footer";
import Navbar from "../components/Navbar";
import { YouTubeEmbed } from "react-social-media-embed";
const bgImage = "/images/hero/hero-bg.png";

export const Success = () => {
  const [stories, setStories] = useState([
    {
      id: 1,
      url: "https://www.youtube.com/watch?v=HpVOs5imUN0",
      description: "Headline 1",
    },
    {
      id: 2,
      url: "https://www.youtube.com/watch?v=HpVOs5imUN0",
      description: "Headline 2",
    },
    {
      id: 3,
      url: "https://www.youtube.com/watch?v=HpVOs5imUN0",
      description: "Headline 3",
    },
  ]);

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
      <div className="flex flex-col lg:flex-row justify-evenly mt-4 mb-4">
        {stories.map((story) => (
          <div
            key={story.id}
            className="flex flex-col items-center mb-4 lg:mb-0"
          >
            <YouTubeEmbed url={story.url} width={240} height={426} />
            <p className="text-center mt-2">{story.description}</p>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};
