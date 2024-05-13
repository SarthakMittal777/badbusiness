import { useEffect, useState } from "react";
import { RiTeamFill } from "react-icons/ri";
import { MdDelete } from "react-icons/md";
import { MdEdit } from "react-icons/md";
import { MdOutlineMenu } from "react-icons/md";
import { IoCloseSharp } from "react-icons/io5";
import Button from "../../components/Button";
import { Link } from "react-router-dom";
import { getServiceData, deleteServiceData } from "../../api/service";
export const ServicesPortal = () => {
  const [menu, setMenu] = useState(false);
  const [serviceData, setServiceData] = useState({});
  const [functionality, setFunctionality] = useState(null);

  const deleteService = async (id) => {
    const confirmation = window.confirm(
      "Are you sure you want to delete this service?"
    );

    if (confirmation) {
      try {
        const res = await deleteServiceData(id);
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
      const res = await getServiceData();
      setServiceData(res);
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
          <RiTeamFill /> Services
        </div>

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
              <Link to={`/portal/service/add`}>
                <Button
                  type=""
                  className="bg-[#5BBB7B] w-36 my-4 hover:bg-green-800 py-3 text-white font-semibold mx-2 "
                >
                  Add New Service
                </Button>
              </Link>
            </div>
            <table className="table-auto min-w-full">
              <thead>
                <tr className="bg-gray-200">
                  <th className="px-4 py-2">Profile</th>
                  <th className="px-4 py-2">Image</th>
                  <th className="px-4 py-2">Category</th>
                  <th className="px-4 py-2">Title</th>

                  <th className="px-4 py-2">Edit</th>
                  <th className="px-4 py-2">Delete</th>
                </tr>
              </thead>
              <tbody>
                {serviceData &&
                  serviceData.services &&
                  serviceData.services.length > 0 &&
                  serviceData.services.map((service, index) => (
                    <tr key={index}>
                      <td className="border px-4 py-2 rounded-full">
                        {service.profile === "" ? (
                          <div className="w-16 h-16 rounded-full flex items-center justify-center bg-[#c7b0ff] mx-auto"></div>
                        ) : (
                          <img
                            src={service.profile}
                            alt={service.category}
                            className="w-16 h-16 rounded-full mx-auto"
                          />
                        )}
                      </td>
                      <td className="border px-4 py-2 rounded-full">
                        {service.image === "" ? (
                          <div className="w-16 h-16 rounded-full flex items-center justify-center bg-[#c7b0ff] mx-auto"></div>
                        ) : (
                          <img
                            src={service.image}
                            alt={service.category}
                            className="w-16 h-16 rounded-full mx-auto"
                          />
                        )}
                      </td>
                      <td className="border px-4 py-2 mx-auto text-center">
                        {service.category}
                      </td>
                      <td className="border px-4 py-2 mx-auto text-center">
                        {service.title}
                      </td>

                      <td className="border px-4 py-2 ">
                        <Link to={`/portal/service/edit/${service._id}`}>
                          <MdEdit size={25} className="mx-auto" />
                        </Link>
                      </td>
                      <td className="border px-4 py-2">
                        <MdDelete
                          size={25}
                          className="mx-auto"
                          onClick={() => deleteService(service._id)}
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
export default ServicesPortal;
