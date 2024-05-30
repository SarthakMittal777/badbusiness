import MemberCard from "../components/MemberCard";
import { useEffect, useState } from "react";
import { getTeamData } from "../api/team";
import Navbar from "../components/Navbar";
import { Footer } from "../components/Footer";
export const Team = () => {
  const [teamData, setTeamData] = useState({ teams: [] });
  useEffect(() => {
    async function fetchData() {
      const res = await getTeamData();
      setTeamData(res);
    }
    fetchData();
  }, []);
  return (
    <div className="w-full h-full animate-fade-in">
      <Navbar />
      <div
        className="w-full h-[60vh] flex items-center justify-center relative"
        style={{
          background:
            "url(/images/hero/team.jpg) no-repeat center center fixed",
          backgroundSize: "cover",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>{" "}
        <div className="relative text-center text-white mx-24">
          {" "}
          <h1 className="text-4xl py-8 font-bold">Meet Our Dynamic Team</h1>
          <p>
            Our diverse and talented team is dedicated to excellence and
            innovation. With a wealth of expertise and a passion for impactful
            solutions, we work collaboratively to achieve outstanding results
            and set new standards of excellence.
          </p>
        </div>
      </div>
      <p className="w-screen text-center font-semibold italic my-12 text-lg">
        ~ Core Team ~
      </p>
      <div className="flex flex-wrap justify-center">
        {teamData &&
          teamData.teams.map((member) =>
            member.isMVP ? <MemberCard member={member} key={member.id} /> : null
          )}
      </div>
      <p className="w-screen text-center font-semibold italic my-12 text-lg">
        ~ Extended Team ~
      </p>
      <div className="w-full flex flex-wrap justify-center items-center">
        <div className="flex flex-wrap mx-auto w-[90%] ">
          {teamData &&
            teamData.teams.map((member) =>
              !member.isMVP ? (
                <MemberCard member={member} key={member.id} />
              ) : null
            )}
        </div>
      </div>
      <div className="flex flex-wrap justify-center gap-6"></div>
      <Footer />
    </div>
  );
};

{
  /* <div key={member.id} className="w-[20rem] h-120 p-4">
<div className="aspect-w-9 aspect-h-16 relative">
  <img
    src={member.profile}
    alt="team"
    className="w-full h-full object-cover"
  />
  <section className="flex gap-4 w-full absolute bottom-3 justify-center text-white">
    {member.Social.GitHub != undefined &&
      member.Social.Github !== "" && (
        <Link to={member.Social.GitHub} target="_blank">
          <FaGithub
            size={25}
            className="hover:text-[#9c9ce6]"
          />
        </Link>
      )}
    {member.Social.Twitter != undefined &&
      member.Social.Twitter !== "" && (
        <Link to={member.Social.Twitter}>
          <FaTwitter
            size={25}
            className="hover:text-[#9c9ce6]"
          />
        </Link>
      )}

    {member.Social.LinkedIn != undefined &&
      member.Social.LinkedIn !== "" && (
        <Link to={member.LinkedIn}>
          <FaLinkedin
            size={25}
            className="hover:text-[#9c9ce6]"
          />
        </Link>
      )}
  </section>
</div>

<div className="w-full h-1/4">
  <h1 className="font-bold text-xl">{member.name}</h1>
  <p>{member.headline}</p>
</div>
</div> */
}
