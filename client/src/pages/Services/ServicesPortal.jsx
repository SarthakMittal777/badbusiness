import { useEffect, useState } from "react";
import { MdDelete } from "react-icons/md";
import { MdEdit } from "react-icons/md";
import { MdOutlineMenu } from "react-icons/md";
import Button from "../../components/Button";
import { Link } from "react-router-dom";
import SidebarPortal from "../../components/SidebarPortal";
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
        //eslint-disable-next-line
        const res = await deleteServiceData(id);
        window.alert("deleted successfully");

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
  console.log(serviceData);
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
        <section className="w-[95vw] h-screen overflow-y-auto">
          <div className="w-full p-4">
            <div className="w-[96%] flex lg:justify-end mx-12 mb-3">
              <Link to={`/portal/service/add`}>
                <Button
                  type=""
                  className="bg-[#5BBB7B] w-36 my-4 hover:bg-green-800 py-3 text-white font-semibold mx-2 "
                >
                  Add New Service
                </Button>
              </Link>
            </div>
            <div className="h-[33rem] overflow-y-scroll relative portal w-full ">
              <table className="table-auto min-w-full">
                <thead className="relative">
                  <tr className="bg-gray-200 sticky top-0 z-[100] ">
                    <th className="px-4 py-2 sticky top-0 z-[100]">#</th>
                    <th className="px-4 py-2 sticky top-0 z-[100] ">
                      Category
                    </th>
                    <th className="px-4 py-2 sticky top-0 z-[100] ">Title</th>

                    <th className="px-4 py-2 sticky top-0 z-[100] ">Edit</th>
                    <th className="px-4 py-2 sticky top-0 z-[100] ">Delete</th>
                  </tr>
                </thead>
                <tbody className="w-full ">
                  {serviceData &&
                  serviceData.services &&
                  serviceData.services.length > 0 ? (
                    serviceData.services.map((service, index) => (
                      <tr key={index} className="hover:bg-gray-100">
                        <td className=" hover:underline border px-4 py-1 mx-auto text-center">
                          {index + 1}
                        </td>

                        <td className="border  hover:underline  px-4 py-1 mx-auto text-center">
                          {service.category}
                        </td>
                        <td className="border px-4  hover:underline py-1 mx-auto text-center">
                          {service.title}
                        </td>

                        <td className="border px-4 py-1 ">
                          <Link to={`/portal/service/edit/${service._id}`}>
                            <MdEdit size={25} className="mx-auto" />
                          </Link>
                        </td>
                        <td className="border px-4 py-1">
                          <MdDelete
                            size={25}
                            className="mx-auto"
                            onClick={() => deleteService(service._id)}
                          />
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td
                        colSpan="9"
                        className="text-center border py-2 text-gray-700"
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
export default ServicesPortal;
