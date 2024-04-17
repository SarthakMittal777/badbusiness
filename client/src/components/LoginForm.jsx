import { useState } from "react";
import Button from "./Button";
import { MdArrowOutward } from "react-icons/md";
import { FaEye } from "react-icons/fa6";
import { FaEyeSlash } from "react-icons/fa6";
// eslint-disable-next-line react/prop-types
const LoginForm = ({ type }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const handleShowPassword = (type) => {
    if (type === 1) setShowPassword(!showPassword);
    else setShowConfirmPassword(!showConfirmPassword);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // const name = e.target.elements.name.value;
    // const email = e.target.elements.email.value;
    const password = e.target.elements.password.value;
    const confirmPassword = e.target.elements.confirmPassword.value;
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }
  };

  return (
    <form method="POST" className="w-full" onSubmit={(e) => handleSubmit(e)}>
      <div className="w-full flex flex-col gap-4 mt-6">
        <label htmlFor="name">
          {type === "company" ? "Company Name" : "Full Name"}
          <span className="text-[#ff4242] px-2">*</span>
        </label>
        <input
          type="text"
          placeholder={type === "company" ? "Company Name" : "Full Name"}
          required
          id="name"
          className="border rounded-xl py-3 w-full px-4 outline-none"
        />
        <label htmlFor="name">
          {type === "company" ? "Company Email" : "Email"}
          <span className="text-[#ff4242] px-2">*</span>
        </label>
        <input
          type="email"
          placeholder="Email"
          required
          id="email"
          autoComplete="email"
          className="border rounded-xl py-3 w-full px-4 outline-none"
        />
        <label htmlFor="name">
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
            <FaEye size={20} onClick={() => handleShowPassword(1)} />
          ) : (
            <FaEyeSlash size={20} onClick={() => handleShowPassword(1)} />
          )}
        </div>
        <label htmlFor="name">
          Confirm Password
          <span className="text-[#ff4242] px-2">*</span>
        </label>
        <div className="border rounded-xl py-3 w-full px-4 flex items-center justify-between">
          <input
            id="confirmPassword"
            type={showConfirmPassword ? "text" : "password"}
            placeholder="Password"
            required
            autoComplete="new-password"
            className="outline-none w-full"
          />
          {showConfirmPassword ? (
            <FaEye size={20} onClick={() => handleShowPassword(0)} />
          ) : (
            <FaEyeSlash size={20} onClick={() => handleShowPassword(0)} />
          )}
        </div>
        <div className="w-full">
          <input
            type="checkbox"
            className="agreement mx-3 accent-green-500"
            required
          />
          You accept our Terms and Conditions and Privacy Policy
        </div>
        <Button
          type="submit"
          className="bg-green-600 hover:bg-green-800 py-3 text-white font-semibold "
        >
          SignUp Now
          <MdArrowOutward />
        </Button>
      </div>
    </form>
  );
};

export default LoginForm;
