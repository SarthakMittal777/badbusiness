import { RiTeamFill } from "react-icons/ri";
import { IoCloseSharp } from "react-icons/io5";
import { useAuth } from "../auth/auth";
import { Link } from "react-router-dom";
import { FaHandshake } from "react-icons/fa";
import { MdHomeRepairService } from "react-icons/md";
import { RiAdminFill } from "react-icons/ri";
import Button from "./Button";

const SidebarPortal = ({ menu, setMenu, setFunctionality }) => {
  const user = useAuth();

  return (
    <div
      className={`lg:flex lg:relative fixed top-0 right-0 z-[200] flex-col gap-2 py-12 bg-gray-300 min-h-screen w-[15rem] lg:w-[15rem] shadow ${
        menu ? "block w-[40vw] fixed lg:w-[15rem]" : "hidden lg:block"
      }`}
    >
      {menu && (
        <IoCloseSharp
          className="absolute top-3 right-3 lg:hidden"
          size={25}
          onClick={() => setMenu(false)}
        />
      )}

      <Link to="/portal/teams">
        <div
          className="w-full h-8 hover:bg-[#848d8c] cursor-pointer border-[#3c3c3c] rounded flex items-center gap-3 px-2 font-semibold"
          onClick={() => {
            setFunctionality(null);
          }}
        >
          <RiTeamFill /> Team
        </div>
      </Link>
      <Link to="/portal/partners">
        <div
          className="w-full h-8 hover:bg-[#848d8c] cursor-pointer border-[#3c3c3c] rounded flex items-center gap-3 px-2 font-semibold"
          onClick={() => {
            setFunctionality(null);
          }}
        >
          <FaHandshake /> Partners
        </div>
      </Link>
      <Link to="/portal/services">
        <div
          className="w-full h-8 hover:bg-[#848d8c] cursor-pointer border-[#3c3c3c] rounded flex items-center gap-3 px-2 font-semibold"
          onClick={() => {
            setFunctionality(null);
          }}
        >
          <MdHomeRepairService /> Services
        </div>
      </Link>
      <Link to="/portal/story">
        <div
          className="w-full h-8 hover:bg-[#848d8c] cursor-pointer border-[#3c3c3c] rounded flex items-center gap-3 px-2 font-semibold"
          onClick={() => {
            setFunctionality(null);
          }}
        >
          <FaHandshake /> Success Stories
        </div>
      </Link>
      <Link to="/portal/halloffame">
        <div
          className="w-full h-8 hover:bg-[#848d8c] cursor-pointer border-[#3c3c3c] rounded flex items-center gap-3 px-2 font-semibold"
          onClick={() => {
            setFunctionality(null);
          }}
        >
          <FaHandshake /> Hall of Fame
        </div>
      </Link>
      <Link to="/portal/blogs">
        <div
          className="w-full h-8 hover:bg-[#848d8c] cursor-pointer border-[#3c3c3c] rounded flex items-center gap-3 px-2 font-semibold"
          onClick={() => {
            setFunctionality(null);
          }}
        >
          <FaHandshake /> Blogs
        </div>
      </Link>
      <Link to="/portal/admin">
        <div
          className="w-full h-8 hover:bg-[#848d8c] cursor-pointer border-[#3c3c3c] rounded flex items-center gap-3 px-2 font-semibold"
          onClick={() => {
            setFunctionality(null);
          }}
        >
          <RiAdminFill /> Admin
        </div>
      </Link>
      {/* <Link to="/portal/careers">
        <div
          className="w-full h-8 hover:bg-[#848d8c] cursor-pointer border-[#3c3c3c] rounded flex items-center gap-3 px-2 font-semibold"
          onClick={() => {
            setFunctionality(null);
          }}
        >
          <RiTeamFill /> Careers
        </div>
      </Link> */}
      <div onClick={() => user.logOutFromPortal()}>
        <Button
          type=""
          className="bg-[#5BBB7B] w-[80%] my-4 hover:bg-green-800 py-3 text-white font-semibold mx-6 absolute bottom-4"
        >
          Log Out
        </Button>
      </div>
    </div>
  );
};

export default SidebarPortal;
