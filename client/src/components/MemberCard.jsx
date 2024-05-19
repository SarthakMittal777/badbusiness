import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaBehanceSquare } from "react-icons/fa";
import { FaDribbble } from "react-icons/fa";
import { useState } from "react";
const MemberCard = ({ member }) => {
  const [hover, setHover] = useState(false);
  return (
    <div
      className="w-[20rem]  h-[28rem] p-4 relative rounded-lg"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div className="relative ">
        <img
          src={member.photo}
          alt="team"
          className="object-cover w-full h-full inset-0 rounded-lg"
          style={{ width: "20rem", height: "26rem" }}
        />
        {hover && <div className="absolute inset-0 bg-black opacity-50"></div>}

        {hover && (
          <section className="flex flex-col gap-4 w-full absolute bottom-3 justify-center text-white px-3">
            <div className="w-full h-1/4">
              <h1 className="font-bold text-xl">{member.name}</h1>
              <p>{member.headline}</p>
              <p>{member.domain}</p>
            </div>
            <div className="flex gap-2">
              {member.links.map((link) => {
                if (link.name === "GitHub") {
                  return (
                    <Link to={link.url} target="_blank" key={link._id}>
                      <FaGithub size={20} className="hover:text-[#9c9ce6]" />
                    </Link>
                  );
                } else if (link.name === "Twitter") {
                  return (
                    <Link to={link.url} key={link._id}>
                      <FaTwitter size={20} className="hover:text-[#9c9ce6]" />
                    </Link>
                  );
                } else if (link.name === "LinkedIn") {
                  return (
                    <Link to={link.url} key={link._id}>
                      <FaLinkedin size={20} className="hover:text-[#9c9ce6]" />
                    </Link>
                  );
                } else if (link.name === "Behance") {
                  return (
                    <Link to={link.url} key={link._id}>
                      <FaBehanceSquare
                        size={20}
                        className="hover:text-[#9c9ce6]"
                      />
                    </Link>
                  );
                } else if (link.name === "Dribbble") {
                  return (
                    <Link to={link.url} key={link._id}>
                      <FaDribbble size={20} className="hover:text-[#9c9ce6]" />
                    </Link>
                  );
                }
              })}
            </div>
          </section>
        )}
      </div>
    </div>
  );
};

export default MemberCard;
