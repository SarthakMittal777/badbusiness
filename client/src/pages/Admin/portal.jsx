import { useEffect, useState } from "react";
import { MdDelete, MdEdit, MdOutlineMenu } from "react-icons/md";
import { Link } from "react-router-dom";
import Button from "../../components/Button";
import SidebarPortal from "../../components/SidebarPortal";
import { deleteAdminData, getAdminData } from "../../api/admin";

const AdminPortal = () => {
  const [menu, setMenu] = useState(false);
  const [adminData, setAdminData] = useState({ admins: [] });
  const [functionality, setFunctionality] = useState(null);

  const deleteAdmin = async (email) => {
    const confirmation = window.confirm(
      "Are you sure you want to delete this admin?"
    );

    if (confirmation) {
      const userEmail = prompt("Enter your email:");
      const password = prompt("Enter your password:");

      if (userEmail && password) {
        try {
          const res = await deleteAdminData(email, { userEmail, password });
          window.alert(res.data.message);
          window.location.reload();
        } catch (error) {
          console.log(error);
        }
      } else {
        console.log("Email and password are required.");
      }
    } else {
      console.log("Deletion canceled by user.");
    }
  };

  useEffect(() => {
    async function fetchData() {
      const res = await getAdminData();
      setAdminData(res);
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
              <Link to={`/portal/admin/add`}>
                <Button
                  type=""
                  className="bg-[#5BBB7B] w-52 my-4 hover:bg-green-800 py-3 text-white font-semibold mx-2 "
                >
                  Add Admin
                </Button>
              </Link>
            </div>
            <div className="h-[33rem] overflow-y-scroll relative ">
              <table className="table-auto min-w-full">
                <thead className="relative">
                  <tr className="bg-gray-200  sticky top-0 z-[100]">
                    <th className="px-4 py-2  sticky top-0 z-[100]">#</th>
                    <th className="px-4 py-2  sticky top-0 z-[100]">Email</th>
                    <th className="px-4 py-2  sticky top-0 z-[100]">
                      Username
                    </th>
                    <th className="px-4 py-2  sticky top-0 z-[100]">Edit</th>
                    <th className="px-4 py-2  sticky top-0 z-[100]">Delete</th>
                  </tr>
                </thead>
                <tbody>
                  {adminData &&
                  adminData.admins &&
                  adminData.admins.length > 0 ? (
                    adminData.admins.map((admin, index) => (
                      <tr key={index} className="hover:bg-gray-100">
                        <td className="border px-4 py-1 mx-auto text-center hover:underline">
                          {index + 1}
                        </td>
                        <td className="border px-4 py-1 mx-auto text-center hover:underline">
                          {admin.email}
                        </td>
                        <td className="border px-4 py-1 mx-auto text-center hover:underline">
                          {admin.username}
                        </td>
                        <td className="border px-4 py-1 ">
                          <Link to={`/portal/admin/edit/${admin._id}`}>
                            <MdEdit size={25} className="mx-auto" />
                          </Link>
                        </td>
                        <td className="border px-4 py-1">
                          <MdDelete
                            size={25}
                            className="mx-auto"
                            onClick={() => deleteAdmin(admin.email)}
                          />
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td
                        colSpan="5"
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

export default AdminPortal;
