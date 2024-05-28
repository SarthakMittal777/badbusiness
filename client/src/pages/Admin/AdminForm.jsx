import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addAdminData, updateAdminData } from "../../api/admin";
import SidebarPortal from "../../components/SidebarPortal";
import Button from "../../components/Button";
import { MdOutlineMenu } from "react-icons/md";

const AdminForm = ({ functionality, fetchAdminData }) => {
  const navigate = useNavigate();
  const [menu, setMenu] = useState(false);

  const [data, setData] = useState({
    email: fetchAdminData?.admin?.email || "",
    username: fetchAdminData?.admin?.username || "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (functionality === "Add a new Admin") {
      addAdminData(data)
        .then((res) => {
          window.alert(res.data.message);
          navigate("/portal/admin");
        })
        .catch((error) => {
          console.log(error);
        });
    } else if (functionality === "Update Admin") {
      updateAdminData(fetchAdminData.admin.email, data)
        .then((res) => {
          window.alert(res.data.message);
          navigate("/portal/admin");
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  return (
    <div className="w-full h-full flex">
      <MdOutlineMenu
        className="lg:hidden block absolute top-9 right-9"
        size={25}
        onClick={() => setMenu(!menu)}
      />
      <SidebarPortal menu={menu} setMenu={setMenu} />
      <div className="p-8 flex flex-col w-full justify-center gap-8 items-center md:items-start py-12 h-screen overflow-scroll">
        <p className="text-xl font-semibold mb-3">{functionality}</p>
        <form
          method="POST"
          className="w-full overflow-y-auto"
          onSubmit={handleSubmit}
        >
          <input
            type="email"
            value={data.email}
            required
            placeholder="Email"
            className="border rounded-xl py-3 w-full px-4 my-2"
            onChange={(e) => setData({ ...data, email: e.target.value })}
          />
          <input
            type="text"
            value={data.username}
            required
            placeholder="Username"
            className="border rounded-xl py-3 w-full px-4 my-2"
            onChange={(e) => setData({ ...data, username: e.target.value })}
          />
          <input
            type="password"
            value={data.password}
            required
            placeholder="Password"
            className="border rounded-xl py-3 w-full px-4 my-2"
            onChange={(e) => setData({ ...data, password: e.target.value })}
          />
          <Button
            type="submit"
            className="bg-[#5BBB7B] hover:bg-green-800 py-3 text-white font-semibold w-full"
          >
            {functionality}
          </Button>
        </form>
      </div>
    </div>
  );
};

export default AdminForm;
