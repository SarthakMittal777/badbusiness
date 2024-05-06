import TeamData from "../static/Team.json";
import { FaGithub } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

const TeamMembers = ({ team }) => {
  const headerColor = [
    "#AED6F1",
    "#ABEBC6",
    "#D1F2EB",
    "#85C1E9",
    "#82E0AA",
    "#A9DFBF",
    "#A2D9CE",
    "#7FB3D5",
    "#7FB3D5",
    "#85C1E9",
  ];
  return (
    <div className="h-full w-full">
      <p className="text-3xl mt-12 font-bold grid place-content-center">
        Team Members
      </p>
      <div className="flex flex-wrap gap-6 p-12 justify-center sm:justify-normal w-full">
        {TeamData.teams
          .filter((item) => item.teamName === team)
          .map((teamItem) =>
            teamItem.members.map((member, memberIndex) => (
              <div
                key={memberIndex}
                className="rounded-xl sm:w-80 w-[90%]  min-h-[12rem] shadow hover:shadow-[#1d1d1f] hover:shadow-lg"
              >
                <div
                  className={`w-full h-12 rounded-tl-xl rounded-tr-xl`}
                  style={{ backgroundColor: headerColor[memberIndex % 9] }}
                ></div>
                <div className="min-h-36 flex flex-col p-5 justify-around">
                  <div className="font-bold text-lg pb-2 border-b-2 flex justify-between sm:flex-row flex-col items-center sm:items-start">
                    <div className="order-2 sm:order-1"> {member.name}</div>
                    <img
                      src={member.profile}
                      alt="member profile photo"
                      width={25}
                      height={15}
                      className="order-1 sm:order-2"
                    />{" "}
                  </div>
                  <p className="italic">{member.headline}</p>

                  <section className="flex gap-4 w-full flex-wrap">
                    <Link to={member.github}>
                      <FaGithub />
                    </Link>
                    <Link to={member.twitter}>
                      <FaTwitter />
                    </Link>
                    <Link to={member.linkedin}>
                      <FaLinkedin />
                    </Link>
                  </section>
                </div>
              </div>
            ))
          )}
      </div>
    </div>
  );
};

export default TeamMembers;
