import Button from "./Button";
import { FaFacebookF } from "react-icons/fa";
import { FaApple } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
const LoginVia = () => {
  return (
    <div className="flex flex-wrap w-full gap-3 justify-center ">
      <Button className="border border-[#3A77EA] w-[14em]  py-3  gap-2 text-[#3A77EA]">
        <FaFacebookF />
        Continue FaceBook
      </Button>
      <Button className="border border-[#D93025] w-[14em]  py-3 gap-2 text-[#D93025]">
        <FaGoogle />
        Continue Google
      </Button>
      <Button className="border border-[black] w-[14em]  py-3 gap-2 text-[black]">
        <FaApple />
        Continue Apple
      </Button>
    </div>
  );
};

export default LoginVia;
