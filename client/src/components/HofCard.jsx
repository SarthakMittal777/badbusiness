const HofCard = ({ businessName, result, solutionName, implementation }) => {
  return (
    <div className="shadow-xl p-12 min-h-16 min-4-24 flex flex-col gap-6 hover:shadow-[#962b2b]">
      <h1 className="text-2xl font-semibold text-[#962b2b] hover:underline">{businessName}</h1>
      <h2 className="text-sm font-semibold text-gray-600">{solutionName}</h2>

      <p className="text-lg font-semibold">
        <p className="text-bold text-sm ">Implementation</p>
        {implementation}
      </p>
      <p className="text-base font-semibold text-gray-600">
        {" "}
        <p className="text-bold text-sm text-black">Outcomes Achieved: </p>
        {result}
      </p>
    </div>
  );
};

export default HofCard;
