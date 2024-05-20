import { YouTubeEmbed, XEmbed, InstagramEmbed } from "react-social-media-embed";

const SocialMediaEmbed = ({ story }) => {
  const textNode = (
    <p className="text-center mt-2 font-medium">{story?.headline}</p>
  );

  switch (story?.type.toLowerCase()) {
    case "youtube":
      return (
        <div className="flex flex-col items-center w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5">
          <YouTubeEmbed url={story?.url} width={240} height={426} />
          {textNode}
        </div>
      );

    // case "instagram":
    //   return (
    //     <>
    //       <InstagramEmbed url={story?.url} width={325} height={426} />
    //       {textNode}
    //     </>
    //   );

    // case "twitter" || "x":
    //   return (
    //     <>
    //       <XEmbed url={story?.url} width={240} height={426} />
    //       {textNode}
    //     </>
    //   );

    default:
      return null;
  }
};

export default SocialMediaEmbed;
