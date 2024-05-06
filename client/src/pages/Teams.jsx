import TeamData from "../static/Team.json";
import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
export const Teams = () => {
  return (
    <div className="w-full h-full">
      <div
        className="w-full h-96  items-center flex justify-center flex-col text-[white] text-center"
        style={{
          background: "url('/images/hero/hero-bg.png')",
          backgroundSize: "cover",
        }}
      >
        <p className="font-bold">OUR TEAM</p>
        <h1 className="lg:text-4xl sm:text-3xl mbMedSmall:text-xl text-lg font-bold mb-4 ">Meet the Badbusiness Team</h1>
        <p>Emphasizing a commitment to excellence and empowermen</p>
      </div>

      <div className="flex flex-wrap justify-center">
        {TeamData.coreTeam.map((Cmember, index) => (
          <div key={index} className="w-[20rem] h-120 p-4">
            <div className="aspect-w-9 aspect-h-16 relative">
              <img
                src={Cmember.profile}
                alt="team"
                className="w-full h-full object-cover"
              />
              <section className="flex gap-4 w-full absolute bottom-3 justify-center text-white">
                <Link to={Cmember.github}>
                  <FaGithub size={25} />
                </Link>
                <Link to={Cmember.twitter}>
                  <FaTwitter size={25} />
                </Link>
                <Link to={Cmember.linkedin}>
                  <FaLinkedin size={25} />
                </Link>
              </section>
            </div>

            <div className="w-full h-1/4">
              <h1 className="font-bold text-xl">{Cmember.name}</h1>
              <p>{Cmember.headline}</p>
            </div>
          </div>
        ))}
        
      </div>

      <div className="flex flex-wrap justify-center gap-6">
        {TeamData.teams.map((team) => (
          <div key={team.teamName}>
            <div>
              {team.members.map((member) => (
                <div key={member.id} className="flex mbXSmall:flex-row flex-col  flex-box border shadow-lg m-7 items-center mbXSmall:w-56 hover:shadow-[black] p-4 justify-between">
                  <section>
                    <h2 className="font-bold">{team.teamName}</h2>
                    <p>{member.name}</p>
                    <p>{member.headline}</p>
                  </section>
                  <div className="w-12 h-12">
                    <img
                      src={member.profile}
                      alt={member.name}
                      width="100%"
                      height="100%"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
