import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import { Footer } from "../components/Footer";
// import { FacebookProvider, EmbeddedPost } from "react-facebook";
import { YouTubeEmbed, XEmbed, InstagramEmbed } from "react-social-media-embed";
import { getStoriesData } from "../api/ss";

const bgImage = "/images/hero/hero-bg.png";

// New Component to render based on the type
const SocialMediaEmbed = ({ story }) => {
  switch (story.type.toLowerCase()) {
    case "youtube":
      return <YouTubeEmbed url={story.url} width={240} height={426} />;
    case "instagram":
      return <InstagramEmbed url={story.url} width={325} height={570} />;
    // case "facebook":
    //   return (
    //     <FacebookProvider appId="YOUR_FACEBOOK_APP_ID">
    //       <EmbeddedPost href={story.url} width={240} height={426} />
    //     </FacebookProvider>
    //   );
    case "twitter":
    case "x":
      return <XEmbed url={story.url} width={240} height={426} />;
    // case "linkedin":
    //   return <LinkedInEmbed url={story.url} width={240} height={426} />;
    default:
      return null;
  }
};

export const Success = () => {
  const [stories, setStories] = useState([]);

  useEffect(() => {
    const fetchStories = async () => {
      try {
        const data = await getStoriesData();
        setStories(data.stories);
      } catch (error) {
        console.error("Error fetching stories data:", error);
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
      <div className="flex flex-wrap justify-center mt-4 mb-4">
        {stories.map((story) => (
          <div
            key={story._id}
            className="flex flex-col items-center w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 p-4"
          >
            <SocialMediaEmbed story={story} />
            <p className="text-center mt-2 font-medium">{story.headline}</p>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Success;
