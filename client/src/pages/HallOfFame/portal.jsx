import { useEffect, useState } from "react";
import { MdDelete } from "react-icons/md";
import { MdEdit } from "react-icons/md";
import { MdOutlineMenu } from "react-icons/md";
import Button from "../../components/Button";
import { Link } from "react-router-dom";
import SidebarPortal from "../../components/SidebarPortal";
import { deleteHofData, getHofData } from "../../api/hof";
const HofPortal = () => {
  const [menu, setMenu] = useState(false);
  const [hofData, setHofData] = useState({ hallOfFame: [] });
  const [functionality, setFunctionality] = useState(null);

  const deletePartner = async (id) => {
    const confirmation = window.confirm(
      "Are you sure you want to delete this Hall of Fame data?"
    );

    if (confirmation) {
      try {
        const res = await deleteHofData(id);
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
      const res = await getHofData();
      setHofData(res);
    }
    fetchData();
  }, []);

  return (
    <div className="flex w-full h-full ">
      <MdOutlineMenu
        className="lg:hidden block absolute top-9 right-9"
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
              <Link to={`/portal/halloffame/add`}>
                <Button
                  type=""
                  className="bg-[#5BBB7B] w-52 my-4 hover:bg-green-800 py-3 text-white font-semibold mx-2 "
                >
                  Add Hall of Fame Data
                </Button>
              </Link>
            </div>
            <div className="h-[33rem] overflow-y-scroll relative ">
              <table className="table-auto min-w-full">
                <thead className="relative">
                  <tr className="bg-gray-200  sticky top-0 z-[100]">
                    <th className="px-4 py-2  sticky top-0 z-[100]">#</th>
                    <th className="px-4 py-2  sticky top-0 z-[100]">
                      Business Name
                    </th>
                    <th className="px-4 py-2  sticky top-0 z-[100]">
                      Solution Name
                    </th>
                    <th className="px-4 py-2  sticky top-0 z-[100]">
                      Implementation
                    </th>
                    <th className="px-4 py-2  sticky top-0 z-[100]">Result</th>
                    <th className="px-4 py-2  sticky top-0 z-[100]">Edit</th>
                    <th className="px-4 py-2  sticky top-0 z-[100]">Delete</th>
                  </tr>
                </thead>
                <tbody>
                  {hofData &&
                  hofData.hallOfFame &&
                  hofData.hallOfFame.length > 0 ? (
                    hofData.hallOfFame.map((hof, index) => (
                      <tr key={index} className="hover:bg-gray-100">
                        <td className="border px-4 py-1 mx-auto text-center hover:underline">
                          {index + 1}
                        </td>
                        <td className="border px-4 py-1 mx-auto text-center hover:underline">
                          {hof.businessName}
                        </td>
                        <td className="border px-4 py-1 mx-auto text-center hover:underline">
                          {hof.solution.solutionName}
                        </td>
                        <td className="border px-4 py-1 mx-auto text-center hover:underline">
                          {hof.solution.implementation}
                        </td>
                        <td className="border px-4 py-1 text-center hover:underline">
                          {hof.result}
                        </td>

                        <td className="border px-4 py-1 ">
                          <Link to={`/portal/halloffame/edit/${hof._id}`}>
                            <MdEdit size={25} className="mx-auto" />
                          </Link>
                        </td>
                        <td className="border px-4 py-1">
                          <MdDelete
                            size={25}
                            className="mx-auto"
                            onClick={() => deletePartner(hof._id)}
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

export default HofPortal;
