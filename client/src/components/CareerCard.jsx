import { IoMdCopy } from "react-icons/io";
const CareerCard = ({ career }) => {
  const handleCopy = () => {
    navigator.clipboard
      .writeText(career._id)
      .then(() => {
        alert("Job ID copied to clipboard!");
      })
      .catch((err) => {
        console.error("Failed to copy text: ", err);
      });
  };
  return (
    <div className="w-full h-fit py-12 border-b border-gray-200 flex gap-4 min-h-[20rem] flex-col md:flex-row">
      <section className="flex  flex-col md:w-[33%] gap-3 w-full">
        <div className=" bg-gray-400 grid rounded-lg place-content-center py-1 px-2 text-white w-fit">
          {career.type}
        </div>
        <p className="text-2xl font-bold">{career.job}</p>
        <p
          className="bg-gray-300 rounded px-2 py-1 w-fit flex gap-2 justify-center items-center"
          onClick={() => handleCopy()}
        >
          {" "}
          <IoMdCopy />
          {career._id}
        </p>
      </section>
      <section className="md:max-w-[33%] text-wrap text-gray-500 w-full ">
        {" "}
        {career.description}
      </section>
      <section className="grid md:place-content-center md:w-[33%] w-full">
        <button className="px-3 py-2 grid place-content-center fomt-bold rounded border-[#e72c2c] border font-bold hover:bg-[#e76c6c] hover:text-[#ffeac9]">
          Apply Now
        </button>
      </section>
    </div>
  );
};

export default CareerCard;
