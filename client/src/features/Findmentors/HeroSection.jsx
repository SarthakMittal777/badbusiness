import { useContext } from "react";
import { Link } from "react-router-dom";
import { auth } from "../../config/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { mentorsContext } from "./context";

const HeroSection = ({ mentors }) => {
  const [user] = useAuthState(auth);
  const [sorting, setSorting] = useContext(mentorsContext);

  return (
    <div className="2xl:mx-40 xl:mx-24 lg:mx-16 md:mx-16 sm:mx-16 mx-4 pt-20 text-center">
      <div className="space-y-5 text-center text-black"></div>
      <div className="flex flex-row justify-between mt-8 ">
        <div>Sort by</div>
        <div className="flex flex-row gap-4">
          <button
            onClick={() => {
              setSorting({ type: "insert", mentors: mentors });
              setSorting({ type: "rating" });
            }}
          >
            Rating
          </button>
          <button
            onClick={() => {
              setSorting({ type: "insert", mentors: mentors });
              setSorting({ type: "exp" });
            }}
          >
            Experience
          </button>
          <button
            onClick={() => {
              setSorting({ type: "insert", mentors: mentors });
              setSorting({ type: "sessions" });
            }}
          >
            No of sessions
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
