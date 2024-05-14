import { useState } from "react";
import { IoPerson } from "react-icons/io5";
import { FaBuilding } from "react-icons/fa";
import { Link } from "react-router-dom";
import LoginForm from "../components/LoginForm";
import LoginVia from "../components/LoginVia";

export const Signup = () => {
  
  const [type, setType] = useState("company");

  const accountChange = (account) => {
    console.log(account);
    setType(account);
  };


  return (
    <div className="w-full flex flex-col items-center justify-center py-24 min-h-screen overflow-x-hidden bg-[#fff0e9] ">
      <h3 className="text-center text-3xl font-bold mt-12">SignUp</h3>
      <h6 className="text-center mb-12">
        Join our community and embark on a journey of endless opportunities!
      </h6>
      <div className="xsSmall:w-[45%] flex flex-col shadow-xl p-8 bg-white w-[90%] max-w-[45rem] xsSmall:min-w-[18rem] justify-center items-center md:items-start ">
        <section className="w-full items-center flex px-28 my-6 cursor-pointer xsSmall:h-[2.5em] justify-center xsSmall:gap-12  flex-col mbXSmall:flex-row">
          <div
            className={`${
              type == "individual"
                ? " text-green-600 shadow-lg"
                : "border-none "
            }  transition-all duration-300 ease-in-out flex justify-center   items-center h-[3em] w-[10rem] gap-2 px-6 rounded-full font-semibold`}
            onClick={() => accountChange("individual")}
          >
            <IoPerson
              className={`${type == "individual" ? "text-green-600" : ""}`}
            />
            Individual
          </div>
          <div
            className={`${
              type == "company"
                ? "border-2 text-green-600 shadow-lg"
                : "border-none "
            }   flex justify-center items-center h-[3em]  py-3 w-[10rem] px-6 rounded-full gap-2 font-semibold`}
            onClick={() => accountChange("company")}
          >
            <FaBuilding
              className={`${type == "company" ? "text-green-600" : ""}`}
            />
            Company
          </div>
        </section>
        <section className="my-6 ">
          <p className="text-xl font-semibold mb-3 ">
            We&apos;re glad to see you again!
          </p>
          <p>
            Let&apos; create your account!
            <Link to="/signin" className="text-green-600 m-0 px-2 ">
              Sign In!
            </Link>
          </p>
        </section>
        {type == "company" ? (
          <LoginForm type="company" />
        ) : (
          <LoginForm type="individual" />
        )}
        <p className="text-center w-full my-5">OR</p>
        <LoginVia />
      </div>
    </div>
  );
};
