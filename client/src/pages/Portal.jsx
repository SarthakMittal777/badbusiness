import TeamData from "../static/Team.json";
import { useState } from "react";
import { RiTeamFill } from "react-icons/ri";
import { IoPersonAddSharp } from "react-icons/io5";
import { IoPersonRemoveSharp } from "react-icons/io5";
import { FaUserEdit } from "react-icons/fa";
import { IoIosAddCircle } from "react-icons/io";
import TeamForm from "../components/TeamForm";
import TeamMembers from "../components/TeamMembers";
import { MdOutlineMenu } from "react-icons/md";
import { IoCloseSharp } from "react-icons/io5";
import Button from "../components/Button";
export const Portal = () => {
  const [functionality, setfunctionality] = useState(null);
  const [team, setTeam] = useState("dashboard");
  const [menu, setMenu] = useState(false);
  const headerColor = [
    "#ADD8E6",
    "#98FB98",
    "#FFB6C1",
    "#87CEEB",
    "#FFDAB9",
    "#FFA07A",
    "#F08080",
    "#FF69B4",
  ];

  return (
    <div className="flex w-full h-full ">
      <MdOutlineMenu
        className="md:hidden block absolute top-9 right-9"
        onClick={() => setMenu(true)}
        size={25}
      />
      <div
        className={` w-[20rem] h-full z-10 md:relative sm:flex flex-col gap-2 py-12 bg-gray-300 cursor-pointer ${
          menu ? "block w-[70vw] absolute top-0 right-0 " : "hidden"
        }  border h-screen shadow`}
      >
        {menu && (
          <IoCloseSharp
            onClick={() => setMenu(false)}
            className="absolute top-3 "
            size={25}
          />
        )}
        <div
          className="w-full h-12 hover:bg-[#848d8c] border-t border-[#3c3c3c] rounded flex items-center gap-3 px-2  font-semibold"
          onClick={() => {
            setfunctionality(null);
            setTeam("dashboard");
          }}
        >
          <RiTeamFill /> Teams
        </div>

        <div
          className="w-full h-12 hover:bg-[#848d8c] border-t  border-[#3c3c3c] rounded flex items-center gap-3 px-2 font-semibold"
          onClick={() => setfunctionality("Create a new Team")}
        >
          <IoIosAddCircle /> Add New Team
        </div>

        <div
          className="w-full h-12 hover:bg-[#848d8c] border-t  border-[#3c3c3c] rounded flex items-center gap-3 px-2  font-semibold"
          onClick={() => setfunctionality("Add a new Team Member ")}
        >
          <IoPersonAddSharp />
          Add Team Member
        </div>
        <div
          className="w-full h-12 hover:bg-[#848d8c] border-t  border-[#3c3c3c] rounded flex items-center gap-3 px-2  font-semibold"
          onClick={() => setfunctionality("Remove a new Team Member")}
        >
          <IoPersonRemoveSharp /> Remove Team Member
        </div>
        <div
          className="w-full h-12 hover:bg-[#848d8c] border-t border-b border-[#3c3c3c] rounded flex items-center gap-3 px-2  font-semibold "
          onClick={() => setfunctionality("Edit a Team Member Details")}
        >
          <FaUserEdit /> Edit Team Member Details
        </div>
        <Button
          type=""
          className="bg-[#5BBB7B] w-[80%] my-4 hover:bg-green-800 py-3 text-white font-semibold mx-2"
        >
          Log Out
        </Button>
      </div>
      <section className="w-[95vw] h-screen overflow-y-auto">
        {" "}
        {functionality == null && team === "dashboard" && (
          <div className="flex flex-wrap gap-6 p-12 justify-center sm:justify-normal">
            <p className="text-3xl h-48 font-bold grid place-content-center">Teams</p>
            {TeamData.teams.map((item, index) => (
              <div
                key={index}
                className="rounded-xl lg:w-80 sm:w-60 w-[80%] h-48 shadow hover:shadow-[#232323] hover:shadow-lg"
                onClick={() => setTeam(item.teamName)}
              >
                <div
                  className=" w-full h-32 rounded-tl-xl rounded-tr-xl"
                  style={{ backgroundColor: headerColor[index % 9] }}
                ></div>
                <div className="px-4 text-right flex items-center justify-end h-16 font-bold ">
                  {item.teamName}
                </div>
              </div>
            ))}
          </div>
        )}
        {functionality !== null && <TeamForm functionality={functionality} />}
        {team !== "dashboard" && functionality==null && <TeamMembers team={team} />}
      </section>
    </div>
  );
};
