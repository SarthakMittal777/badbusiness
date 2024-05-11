import { useEffect, useState } from "react";
import { RiTeamFill } from "react-icons/ri";
import { MdDelete } from "react-icons/md";
import { MdEdit } from "react-icons/md";
import { MdOutlineMenu } from "react-icons/md";
import { IoCloseSharp } from "react-icons/io5";
import Button from "../components/Button";
import { Link } from "react-router-dom";
import { deleteTeamData, getTeamData } from "../api/teams";
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
    <div className="flex w-full h-full ">
      <MdOutlineMenu
        className="md:hidden block absolute top-9 right-9"
        size={25}
        onClick={() => setMenu(!menu)}
      />
      <div
        className={` w-[20rem] h-screen z-10 md:relative sm:flex flex-col gap-2 py-12 bg-gray-300 cursor-pointer ${
          menu ? "block w-[70vw] absolute top-0 right-0 " : "hidden"
        }  border h-screen shadow`}
      >
        {menu && (
          <IoCloseSharp
            className="absolute top-3 "
            size={25}
            onClick={() => setMenu(false)}
          />
        )}
        <div
          className="w-full h-12 hover:bg-[#848d8c] border-t border-[#3c3c3c] rounded flex items-center gap-3 px-2  font-semibold"
          onClick={() => setFunctionality(null)}
        >
          <RiTeamFill /> Team
        </div>

        {/* <div
          className="w-full h-12 hover:bg-[#848d8c] border-t  border-[#3c3c3c] rounded flex items-center gap-3 px-2 font-semibold"
          onClick={() => setFunctionality("Add a new Team Member ")}
        >
          <IoIosAddCircle /> Add New Team
        </div> */}

        <Button
          type=""
          className="bg-[#5BBB7B] w-[80%] my-4 hover:bg-green-800 py-3 text-white font-semibold mx-6 absolute bottom-0 "
        >
          Log Out
        </Button>
      </div>
      {functionality == null && (
        <section className="w-[95vw] h-screen overflow-y-auto">
          <div className="w-full p-12">
            <div className="w-[96%] flex justify-end mx-12 mb-3">
              <Link to={`/portal/team/add`}>
                <Button
                  type=""
                  className="bg-[#5BBB7B] w-36 my-4 hover:bg-green-800 py-3 text-white font-semibold mx-2 "
                >
                  Add New Member
                </Button>
              </Link>
            </div>
            <table className="table-auto min-w-full">
              <thead>
                <tr className="bg-gray-200">
                  <th className="px-4 py-2">Image</th>
                  <th className="px-4 py-2">Name</th>
                  <th className="px-4 py-2">Headline</th>
                  <th className="px-4 py-2">Domain</th>
                  <th className="px-4 py-2">Is MVP</th>
                  <th className="px-4 py-2">Links</th>
                  <th className="px-4 py-2">Edit</th>
                  <th className="px-4 py-2">Delete</th>
                </tr>
              </thead>
              <tbody>
                {TeamData && TeamData.teams.map((team, index) => (
                  <tr key={index}>
                    <td className="border px-4 py-2 rounded-full">
                      {team.photo === "" ? (
                        <div className="w-16 h-16 rounded-full flex items-center justify-center bg-[#c7b0ff] mx-auto"></div>
                      ) : (
                        <img
                          src={team.photo}
                          alt={team.name}
                          className="w-16 h-16 rounded-full mx-auto"
                        />
                      )}
                    </td>
                    <td className="border px-4 py-2 mx-auto text-center">
                      {team.name}
                    </td>
                    <td className="border px-4 py-2 mx-auto text-center">
                      {team.headline}
                    </td>
                    <td className="border px-4 py-2 mx-auto text-center">
                      {team.domain}
                    </td>
                    <td className="border px-4 py-2 text-center">
                      {team.isMVP ? "Yes" : "No"}
                    </td>
                    <td className="border px-4 py-2 relative">
                      <button
                        onClick={() => toggleLinks(team._id)}
                        className="inline-flex justify-center w-full rounded-md border border-gray-300 bg-white px-4 py-2 shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100"
                      >
                        Links
                      </button>
                      {showLinks === team._id && (
                        <div className="origin-top-right z-10 absolute left-10 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                          <div
                            className="py-1"
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
                          </div>
                        </div>
                      )}
                    </td>
                    <td className="border px-4 py-2 ">
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
                ))}
              </tbody>
            </table>
          </div>
        </section>
      )}
    </div>
  );
};
