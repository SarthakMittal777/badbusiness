import { RiTeamFill } from "react-icons/ri";
import { IoCloseSharp } from "react-icons/io5";
import { useAuth } from "../auth/auth";
import { Link } from "react-router-dom";
import { FaHandshake } from "react-icons/fa";
import { MdHomeRepairService } from "react-icons/md";
import Button from "./Button";
const SidebarPortal = ({ menu, setMenu, setFunctionality }) => {
  const user = useAuth();
  return (
    <div
      className={` min-w-[15rem] md:flex relative  flex-col gap-2 py-12 bg-gray-300 cursor-pointer min-h-screen ${
        menu
          ? "block w-[70vw] absolute top-0 right-0 md:min-w-[15rem] md:relative"
          : "hidden"
      }  border shadow h-full `}
    >
      {menu && (
        <IoCloseSharp
          className="absolute top-3 md:hidden"
          size={25}
          onClick={() => setMenu(false)}
        />
      )}

      <Link to="/portal/teams">
        <div
          className="w-full h-8 hover:bg-[#848d8c]  border-[#3c3c3c] rounded flex items-center gap-3 px-2  font-semibold"
          onClick={() => {
            setFunctionality(null);
          }}
        >
          <RiTeamFill /> Team
        </div>
      </Link>
      <Link to="/portal/partners">
        <div
          className="w-full h-8 hover:bg-[#848d8c]  border-[#3c3c3c] rounded flex items-center gap-3 px-2  font-semibold"
          onClick={() => {
            setFunctionality(null);
          }}
        >
          <FaHandshake/> Partners
        </div>
      </Link>
      <Link to="/portal/services">
        <div
          className="w-full h-8 hover:bg-[#848d8c]  border-[#3c3c3c] rounded flex items-center gap-3 px-2  font-semibold"
          onClick={() => {
            setFunctionality(null);
          }}
        >
         <MdHomeRepairService/>Services
        </div>
      </Link>
      <div onClick={() => user.logOutFromPortal()}>
        <Button
          type=""
          className="bg-[#5BBB7B] w-[80%] my-4 hover:bg-green-800 py-3 text-white font-semibold mx-6 absolute bottom-0"
        >
          Log Out
        </Button>
      </div>
    </div>
  );
};

export default SidebarPortal;
