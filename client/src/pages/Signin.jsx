import { useState } from "react";
import Button from "../components/Button";
import { IoPerson } from "react-icons/io5";
import { FaBuilding } from "react-icons/fa";
import { MdArrowOutward } from "react-icons/md";
import LoginVia from "../components/LoginVia";
import { Link } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa6";
import { useAuth } from "../auth/auth";
import Navbar from "../components/Navbar";
import { Footer } from "../components/Footer";

export const Signin = () => {
  const { login } = useAuth();
  const [showPassword, setShowPassword] = useState(false);
  const [type, setType] = useState("company");

  const accountChange = (account) => {
    setType(account);
  };

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.elements.email.value;
    const password = e.target.elements.password.value;
    login({ email, password });
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-grow w-full flex flex-col items-center justify-center py-12 bg-[#fff0e9] overflow-x-hidden">
        <h3 className="text-center text-3xl font-bold">SignIn</h3>
        <h6 className="text-center mb-12">
          Join our community and embark on a journey of endless opportunities!
        </h6>
        <div className="xsSmall:w-[45%] flex flex-col shadow-xl p-12 bg-white w-[90%] max-w-[45rem] xsSmall:min-w-[18rem] justify-center gap-8 items-center md:items-start">
          <section className="w-full items-center flex px-28 my-6 cursor-pointer xsSmall:h-[2.5em] justify-center xsSmall:gap-12 flex-col mbXSmall:flex-row">
            <div
              className={`${
                type === "individual" ? "border text-green-600" : "border-none "
              } flex justify-center items-center h-[3em] w-[10rem] gap-2 px-6 rounded-full font-semibold`}
              onClick={() => accountChange("individual")}
            >
              <IoPerson
                className={`${type === "individual" ? "text-green-600" : ""}`}
              />
              Individual
            </div>
            <div
              className={`${
                type === "company" ? "border-2 text-green-600" : "border-none "
              } flex justify-center items-center h-[3em] py-3 w-[10rem] px-6 rounded-full gap-2 font-semibold`}
              onClick={() => accountChange("company")}
            >
              <FaBuilding
                className={`${type === "company" ? "text-green-600" : ""}`}
              />
              Company
            </div>
          </section>
          <section>
            <p className="text-xl font-semibold mb-3">
              We&apos;re glad to see you again!
            </p>
            <p>
              Don&apos;t have an account?
              <Link to="/signup" className="text-green-600 m-0 px-2">
                Sign Up!
              </Link>
            </p>
          </section>

          <form method="POST" className="w-full" onSubmit={handleSubmit}>
            <div className="w-full flex flex-col gap-4">
              <label htmlFor="email">
                Email
                <span className="text-[#ff4242] px-2">*</span>
              </label>
              <input
                id="email"
                type="email"
                placeholder="Email"
                required
                className="border rounded-xl py-3 w-full px-4"
              />
              <label htmlFor="password">
                Password
                <span className="text-[#ff4242] px-2">*</span>
              </label>
              <div className="border rounded-xl py-3 w-full px-4 flex items-center justify-between">
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  required
                  autoComplete="new-password"
                  className="outline-none w-full"
                />
                {showPassword ? (
                  <FaEye size={20} onClick={handleShowPassword} />
                ) : (
                  <FaEyeSlash size={20} onClick={handleShowPassword} />
                )}
              </div>
              <div className="full flex justify-between items-center text-sm px-1 flex-col lg:flex-row">
                <div>
                  <input type="checkbox" className="accent-green-500" />{" "}
                  Remember me
                </div>
                <div className="hover:text-green-600 cursor-pointer">
                  Lost your password?
                </div>
              </div>
              <Button
                type="submit"
                className="bg-[#5BBB7B] hover:bg-green-800 py-3 text-white font-semibold"
              >
                SignIn Now
                <MdArrowOutward />
              </Button>

              <p className="text-center">OR</p>
              <LoginVia />
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Signin;
