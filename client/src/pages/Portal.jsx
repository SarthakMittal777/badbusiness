import { useEffect, useState } from "react";

import { MdDelete } from "react-icons/md";
import { MdEdit } from "react-icons/md";
import { MdOutlineMenu } from "react-icons/md";
import SidebarPortal from "../components/SidebarPortal";
import Button from "../components/Button";
import { Link } from "react-router-dom";
import { deleteTeamData, getTeamData } from "../api/team";

export const Portal = () => {
  const [showLinks, setShowLinks] = useState(null);
  const [menu, setMenu] = useState(false);
  const [TeamData, setTeamData] = useState({ teams: [] });
  const [functionality, setFunctionality] = useState(null);
  const toggleLinks = (teamId) => {
    if (showLinks === teamId) {
      setShowLinks(null);
    } else {
      setShowLinks(teamId);
    }
  };
  
  const deleteTeamMember = async (id) => {
    const confirmation = window.confirm(
      "Are you sure you want to delete this team member?"
    );

    if (confirmation) {
      try {
        const res = await deleteTeamData(id);
        window.alert(res.data.message);
        window.location.reload();
      } catch (error) {
        console.log(error);
      }
    } else {
      console.log("Deletion canceled by user.");
    }
  };

  useEffect(() => {
    async function fetchData() {
      const res = await getTeamData();
      setTeamData(res);
    }
    fetchData();
  }, []);
  return (
    <div className="flex w-full min-h-screen ">
      <MdOutlineMenu
        className="md:hidden block absolute top-9 right-9"
        size={25}
        onClick={() => setMenu(!menu)}
      />
      <SidebarPortal
        menu={menu}
        setMenu={setMenu}
        setFunctionality={setFunctionality}
      />
      {functionality == null && (
        <section className="w-[95vw] h-screen ">
          <div className="w-full p-4">
            <div className="w-[96%] flex lg:justify-end mx-12 mb-3">
              <Link to={`/portal/team/add`}>
                <Button
                  type=""
                  className="bg-[#5BBB7B] w-36 my-4 hover:bg-green-800 py-3 text-white font-semibold mx-2"
                >
                  Add New Member
                </Button>
              </Link>
            </div>
            <div className="h-[33rem] overflow-y-scroll relative portal">
              <table className="table-auto min-w-full">
                <thead className="relative">
                  <tr className="bg-gray-200 sticky top-0 z-[100]  ">
                    <th className="px-4 py-2 sticky top-0 z-[100]">#</th>
                    <th className="px-4 py-2 sticky top-0 z-[100]">Image</th>
                    <th className="px-4 py-2 sticky top-0 z-[100]">Name</th>
                    <th className="px-4 py-2 sticky top-0 z-[100]">Headline</th>
                    <th className="px-4 py-2 sticky top-0 z-[100]">Domain</th>
                    <th className="px-4 py-2 sticky top-0 z-[100]">MVP</th>
                    <th className="px-4 py-2 sticky top-0 z-[100]">Links</th>
                    <th className="px-4 py-2 sticky top-0 z-[100]">Edit</th>
                    <th className="px-4 py-2 sticky top-0 z-[100]">Delete</th>
                  </tr>
                </thead>
                <tbody>
                  {TeamData &&
                  TeamData.teams !== "undefined" &&
                  TeamData.teams.length > 0 ? (
                    TeamData.teams.map((team, index) => (
                      <tr key={index} className="hover:bg-gray-100">
                        <td className="border px-4 hover:underline py-1 mx-auto text-center">
                          {index + 1}
                        </td>
                        <td className="border px-4 py-2 rounded-full">
                          {team.photo === "" ? (
                            <div className="w-8 h-8 rounded-full flex items-center justify-center bg-[#c7b0ff] mx-auto"></div>
                          ) : (
                            <img
                              src={team.photo}
                              alt={team.name}
                              className="w-8 h-8 rounded-full mx-auto object-cover object-center"
                            />
                          )}
                        </td>
                        <td className="border hover:underline px-4 py-1 mx-auto text-center">
                          {team.name}
                        </td>
                        <td className="border px-4 hover:underline py-1 mx-auto text-center">
                          {team.headline}
                        </td>
                        <td className="border px-4 hover:underline py-1 mx-auto text-center">
                          {team.domain}
                        </td>
                        <td className="border px-4 py-1 hover:underline text-center">
                          {team.isMVP ? "Yes" : "No"}
                        </td>
                        <td className="border px-4 relative">
                          <button
                            onClick={() => toggleLinks(team._id)}
                            className="justify-center w-full relative z-0 rounded-md border border-gray-900 px-4 py-2 shadow-sm text-sm font-medium text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100"
                          >
                            Links
                          </button>
                          {showLinks === team._id && (
                            <div className="origin-top-right z-[10] absolute left-10 mt-2 w-fit rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                              <div
                                className="py-1 text-center"
                                role="menu"
                                aria-orientation="vertical"
                                aria-labelledby="options-menu"
                              >
                                {team.links.map((link) => (
                                  <Link
                                    key={link._id}
                                    to={link.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                    role="menuitem"
                                  >
                                    {link.name} : {link.url}
                                  </Link>
                                ))}
                                {team.links.length === 0 ? "No Links" : ""}
                              </div>
                            </div>
                          )}
                        </td>
                        <td className="border px-4 py-2">
                          <Link to={`/portal/team/edit/${team._id}`}>
                            <MdEdit size={25} className="mx-auto" />
                          </Link>
                        </td>
                        <td className="border px-4 py-2">
                          <MdDelete
                            size={25}
                            className="mx-auto"
                            onClick={() => deleteTeamMember(team._id)}
                          />
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td
                        colSpan="9"
                        className="text-center border py-4 text-gray-700"
                      >
                        No data available
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};
