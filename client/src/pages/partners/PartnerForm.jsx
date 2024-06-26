import Button from "../../components/Button";
import { createPartnerData, editPartnerData } from "../../api/partner";
import SidebarPortal from "../../components/SidebarPortal";
import { MdOutlineMenu } from "react-icons/md";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const PartnerForm = ({ functionality, fetchPartnerData }) => {
  const navigate = useNavigate();
  const [menu, setMenu] = useState(false);
  const [data, setData] = useState({
    name: fetchPartnerData?.partner.name,
    url: fetchPartnerData?.partner.photo,
    headline: fetchPartnerData?.partner.headline,
    domain: fetchPartnerData?.partner.domain,
    type: fetchPartnerData?.partner.type,
    isMVP: fetchPartnerData?.partner.isMVP || false,
    github: fetchPartnerData?.partner.links[0]?.url,
    linkedin: fetchPartnerData?.partner.links[1]?.url,
    twitter: fetchPartnerData?.partner.links[2]?.url,
    behance: fetchPartnerData?.partner.links[3]?.url,
    dribble: fetchPartnerData?.partner.links[4]?.url,
    others: fetchPartnerData?.partner.links[5]?.url,
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

    const partnerData = {
      name: data.name,
      headline: data.headline,
      isMVP: data.isMVP,
      photo: data.url,
      links: links,
      type: data.type,
    };
    if (functionality === "Add a new Partner") {
      createPartnerData(partnerData)
        // eslint-disable-next-line no-unused-vars
        .then((res) => {
          window.alert("Data added successfully");
          navigate("/portal/partners");
        })
        .catch((error) => {
          window.alert("Data Not Added ");
          navigate("/portal/partners");
          console.log(error);
        });
    }
    if (functionality === "Edit a partner's details") {
      editPartnerData(fetchPartnerData.partner._id, partnerData)
        // eslint-disable-next-line no-unused-vars
        .then((res) => {
          window.alert("Data edited successfully");
          navigate("/portal/partners");
        })
        .catch((error) => {
          window.alert("Data Not Editted ");
          navigate("/portal/partners");
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
          <input
            id="name"
            type="text"
            value={data.name}
            required
            placeholder="Name"
            className="border rounded-xl py-3 w-full px-4 my-2 "
            onChange={(e) => setData({ ...data, name: e.target.value })}
          />
          <input
            id="imageURL"
            type="url"
            value={data.url}
            required
            placeholder="Image URL"
            className="border rounded-xl py-3 w-full px-4 my-2 "
            onChange={(e) => setData({ ...data, url: e.target.value })}
          />

          <div className="border rounded-xl py-3 my-2  w-full px-4 flex items-center justify-between">
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
          <p className="text-base font-semibold my-4 mx-2">Socials :</p>
          <div className="border my-2 rounded-xl py-3 w-full px-4 flex items-center justify-between">
            <input
              id="github"
              type="url"
              value={data.github}
              placeholder="GitHub"
              className="outline-none w-full"
              onChange={(e) => setData({ ...data, github: e.target.value })}
            />
          </div>
          <div className="border my-2 rounded-xl py-3 w-full px-4 flex items-center justify-between">
            <input
              id="linkedin"
              type="url"
              value={data.linkedin}
              className="outline-none w-full"
              placeholder="LinkedIn"
              onChange={(e) => setData({ ...data, linkedin: e.target.value })}
            />
          </div>
          <div className="border my-2  rounded-xl py-3 w-full px-4 flex items-center justify-between">
            <input
              id="twitter"
              type="url"
              value={data.twitter}
              placeholder="Twitter"
              className="outline-none w-full"
              onChange={(e) => setData({ ...data, twitter: e.target.value })}
            />
          </div>
          <div className="border my-2  rounded-xl py-3 w-full px-4 flex items-center justify-between">
            <input
              id="behance"
              type="text"
              value={data.behance}
              placeholder="Behance"
              className="outline-none w-full"
              onChange={(e) => setData({ ...data, behance: e.target.value })}
            />
          </div>

          <div className="border rounded-xl py-3 my-2  w-full px-4 flex items-center justify-between">
            <input
              id="dribble"
              type="url"
              value={data.dribble}
              placeholder="Dribble"
              className="outline-none w-full"
              onChange={(e) => setData({ ...data, dribble: e.target.value })}
            />
          </div>
          <div className="border rounded-xl py-3 my-2 w-full px-4 flex items-center justify-between">
            <input
              id="others"
              type="others"
              placeholder="Others"
              value={data.others}
              className="outline-none w-full"
              onChange={(e) => setData({ ...data, others: e.target.value })}
            />
          </div>
          <p className="font-semibold text-sm my-4 mx-2">Startup / Partner</p>
          <div className="border rounded-xl py-3 w-full px-4 flex my-2  flex-col items-center justify-between">
            <select
              className="outline-none border-none w-full"
              onChange={(e) =>
                setData({ ...data, isMVP: e.target.value === "true" })
              }
            >
              <option value="false">Select</option>
              <option value="true">Partner</option>
              <option value="false">Startups</option>
            </select>
          </div>
          <p className="font-semibold text-sm my-4 mx-2">Type</p>
          <div className="border rounded-xl py-3 w-full px-4 flex my-2  flex-col items-center justify-between">
            <select
              className="outline-none border-none w-full"
              onChange={(e) => setData({ ...data, type: e.target.value })}
            >
              <option value="false">Select</option>
              <option value="commercial">Commercial</option>
              <option value="educational">Educational</option>
            </select>
          </div>
          <Button
            type="submit"
            className="bg-[#5BBB7B]  hover:bg-green-800 py-3 text-white font-semibold w-full sticky "
          >
            {functionality}
          </Button>
        </form>
      </div>
    </div>
  );
};

export default PartnerForm;
