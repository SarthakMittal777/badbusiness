import Button from "./Button";
import { createData, editTeamData } from "../api/teams";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import SidebarPortal from "./SidebarPortal";
import { MdOutlineMenu } from "react-icons/md";
const TeamForm = ({ functionality, fetchMemberData }) => {
  const [menu, setMenu] = useState(false);
  const navigate = useNavigate();
  const [data, setData] = useState({
    name: fetchMemberData?.team.name,
    url: fetchMemberData?.team.photo,
    headline: fetchMemberData?.team.headline,
    domain: fetchMemberData?.team.domain,
    isMVP: fetchMemberData?.team.isMVP || false,
    github: fetchMemberData?.team.links[0]?.url,
    linkedin: fetchMemberData?.team.links[1]?.url,
    twitter: fetchMemberData?.team.links[2]?.url,
    behance: fetchMemberData?.team.links[3]?.url,
    dribble: fetchMemberData?.team.links[4]?.url,
    others: fetchMemberData?.team.links[5]?.url,
  });
  const handleSubmit = (e) => {
    e.preventDefault();

    const links = [];

    const addLink = (name, url, icon) => {
      if (url) {
        links.push({ name, url, icon });
      }
    };

    addLink("GitHub", data.github, "github");
    addLink("LinkedIn", data.linkedin, "linkedin");
    addLink("Twitter", data.twitter, "twitter");
    addLink("Behance", data.behance, "behance");
    addLink("Dribbble", data.dribble, "dribbble");

    const memberData = {
      name: data.name,
      headline: data.headline,
      domain: data.domain,
      isMVP: data.isMVP,
      photo: data.url,
      links: links,
    };

    if (functionality === "Add a new Team Member") {
      createData(memberData)
        // eslint-disable-next-line no-unused-vars
        .then((res) => {
          window.alert("Data added successfully");
          navigate("/portal/teams");
        })
        .catch((error) => {
          console.log(error);
        });
    }
    if (functionality === "Edit a team member details") {
      editTeamData(fetchMemberData.team._id, memberData)
        // eslint-disable-next-line no-unused-vars
        .then((res) => {
          window.alert("Data edited successfully");
          navigate("/portal/teams");
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };
  return (
    <div className="w-full h-full  flex  ">
      <MdOutlineMenu
        className="lg:hidden block absolute top-9 right-9"
        size={25}
        onClick={() => setMenu(!menu)}
      />
      <SidebarPortal menu={menu} setMenu={setMenu} />

      <div className=" p-8 flex flex-col w-full justify-center gap-8 items-center md:items-start py-12 h-screen overflow-scroll">
         <p className="text-xl font-semibold mb-3 "> {functionality}</p>
        <form
          method="POST"
          className="w-full overflow-y-auto"
          onSubmit={(e) => handleSubmit(e)}
        >
          <div className="w-full flex flex-col gap-4">
            <input
              id="name"
              type="text"
              value={data.name}
              required
              placeholder="Name"
              className="border rounded-xl py-3 w-full px-4"
              onChange={(e) => setData({ ...data, name: e.target.value })}
            />
            <input
              id="imageURL"
              type="url"
              value={data.url}
              required
              placeholder="Image URL"
              className="border rounded-xl py-3 w-full px-4"
              onChange={(e) => setData({ ...data, url: e.target.value })}
            />

            <div className="border rounded-xl py-3 w-full px-4 flex items-center justify-between">
              <input
                id="headline"
                type="text"
                value={data.headline}
                required
                placeholder="Headline"
                className="outline-none w-full"
                onChange={(e) => setData({ ...data, headline: e.target.value })}
              />
            </div>
            {functionality !== "Create a new Team" && (
              <div className="border rounded-xl py-3 w-full px-4 flex items-center justify-between">
                <input
                  id="domain"
                  type="text"
                  value={data.domain}
                  required
                  placeholder="Domain"
                  className="outline-none w-full"
                  onChange={(e) => setData({ ...data, domain: e.target.value })}
                />
              </div>
            )}
            <p className="text-base font-semibold mb-3 ">Socials :</p>
            <div className="border rounded-xl py-3 w-full px-4 flex items-center justify-between">
              <input
                id="github"
                type="url"
                value={data.github}
                placeholder="GitHub"
                className="outline-none w-full"
                onChange={(e) => setData({ ...data, github: e.target.value })}
              />
            </div>
            <div className="border rounded-xl py-3 w-full px-4 flex items-center justify-between">
              <input
                id="linkedin"
                type="url"
                value={data.linkedin}
                className="outline-none w-full"
                placeholder="LinkedIn"
                onChange={(e) => setData({ ...data, linkedin: e.target.value })}
              />
            </div>
            <div className="border rounded-xl py-3 w-full px-4 flex items-center justify-between">
              <input
                id="twitter"
                type="url"
                value={data.twitter}
                placeholder="Twitter"
                className="outline-none w-full"
                onChange={(e) => setData({ ...data, twitter: e.target.value })}
              />
            </div>
            <div className="border rounded-xl py-3 w-full px-4 flex items-center justify-between">
              <input
                id="behance"
                type="url"
                value={data.behance}
                placeholder="Behance"
                className="outline-none w-full"
                onChange={(e) => setData({ ...data, behance: e.target.value })}
              />
            </div>

            <div className="border rounded-xl py-3 w-full px-4 flex items-center justify-between">
              <input
                id="dribble"
                type="url"
                value={data.dribble}
                placeholder="Dribble"
                className="outline-none w-full"
                onChange={(e) => setData({ ...data, dribble: e.target.value })}
              />
            </div>
            <div className="border rounded-xl py-3 w-full px-4 flex items-center justify-between">
              <input
                id="others"
                type="others"
                placeholder="Others"
                value={data.others}
                className="outline-none w-full"
                onChange={(e) => setData({ ...data, others: e.target.value })}
              />
            </div>
            <p className="font-semibold text-sm">Is MVP?</p>
            <div className="border rounded-xl py-3 w-full px-4 flex flex-col items-center justify-between">
              <select
                className="outline-none border-none w-full"
                onChange={(e) =>
                  setData({ ...data, isMVP: e.target.value === "true" })
                }
              >
                <option value="false">Select</option>
                <option value="true">Yes</option>
                <option value="false">No</option>
              </select>
            </div>
            <Button
              type="submit"
              className="bg-[#5BBB7B]  hover:bg-green-800 py-3 text-white font-semibold "
            >
              {functionality}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TeamForm;
