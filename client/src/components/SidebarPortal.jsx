import { RiTeamFill } from "react-icons/ri";
import { IoCloseSharp } from "react-icons/io5";
import { useAuth } from "../auth/auth";
import { Link } from "react-router-dom";
import Button from "./Button";
const SidebarPortal = ({ menu, setMenu, setFunctionality }) => {
  const user = useAuth();
  return (
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
      <Link to="/portal/teams">
        <div
          className="w-full h-12 hover:bg-[#848d8c] border-t border-[#3c3c3c] rounded flex items-center gap-3 px-2  font-semibold"
          onClick={() => {
            setFunctionality(null);
          }}
        >
          <RiTeamFill /> Team
        </div>
      </Link>
      <Link to="/portal/partners">
        <div
          className="w-full h-12 hover:bg-[#848d8c] border-t border-[#3c3c3c] rounded flex items-center gap-3 px-2  font-semibold"
          onClick={() => {
            setFunctionality(null);
          }}
        >
          <RiTeamFill /> Partners
        </div>
      </Link>
      <Link to="/portal/services">
        <div
          className="w-full h-12 hover:bg-[#848d8c] border-t border-[#3c3c3c] rounded flex items-center gap-3 px-2  font-semibold"
          onClick={() => {
            setFunctionality(null);
          }}
        >
          <RiTeamFill /> Services
        </div>
      </Link>
      <div onClick={() => user.logOutFromPortal()}>
        <Button
          type=""
          className="bg-[#5BBB7B] w-[80%] my-4 hover:bg-green-800 py-3 text-white font-semibold mx-6 absolute bottom-0 "
        >
          Log Out
        </Button>
      </div>
    </div>
  );
};

export default SidebarPortal;
