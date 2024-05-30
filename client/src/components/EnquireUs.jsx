import { IoPersonOutline } from "react-icons/io5";
import "../styles/enquiry.css"
const EnquireUs = () => {
  const isPortalRoute = window.location.pathname.startsWith("/portal");

  if (isPortalRoute) return null;
  return (
    <a href="/">
      <div className="enquire-us-container bg-[#892424] min-w-48 rounded-xl w-fit  py-2 flex gap-3 items-center justify-center text-white fixed shadow right-10 bottom-4 animate-bounce ">
        <IoPersonOutline />
        <p> Enquire Us </p>
      
      </div>
    </a>
  );
};

export default EnquireUs;
