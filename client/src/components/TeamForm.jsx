import Button from "./Button";

const TeamForm = ({ functionality }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="w-full h-full  flex justify-center items-center">
      <div className="w-[60vw] p-8 flex flex-col shadow-xl  justify-center gap-8 items-center md:items-start ">
        <p className="text-xl font-semibold mb-3 "> {functionality}</p>

        <form
          method="POST"
          className="w-full"
          onSubmit={(e) => handleSubmit(e)}
        >
          <div className="w-full flex flex-col gap-4">
          <input
              id="name"
              type="text"
              placeholder="Unique ID"
              required
              className="border rounded-xl py-3 w-full px-4"
            />
            <input
              id="name"
              type="text"
              placeholder="Name"
              required
              className="border rounded-xl py-3 w-full px-4"
            />

            <div className="border rounded-xl py-3 w-full px-4 flex items-center justify-between">
              <input
                id="text"
                type="text"
                placeholder="Headline"
                required
                className="outline-none w-full"
              />
            </div>
            {functionality !== "Create a new Team" && (
              <div className="border rounded-xl py-3 w-full px-4 flex items-center justify-between">
                <input
                  id="text"
                  type="text"
                  placeholder="Team Name"
                  required
                  className="outline-none w-full"
                />
              </div>
            )}
            <p className="text-base font-semibold mb-3 ">Socials :</p>
            <div className="border rounded-xl py-3 w-full px-4 flex items-center justify-between">
              <input
                id="text"
                type="text"
                placeholder="Github"
                className="outline-none w-full"
              />
            </div>
            <div className="border rounded-xl py-3 w-full px-4 flex items-center justify-between">
              <input
                id="text"
                type="text"
                placeholder="LinkedIn"
                className="outline-none w-full"
              />
            </div>
            <div className="border rounded-xl py-3 w-full px-4 flex items-center justify-between">
              <input
                id="text"
                type="text"
                placeholder="Twitter"
                className="outline-none w-full"
              />
            </div>

            <Button
              type="submit"
              className="bg-[#5BBB7B]  hover:bg-green-800 py-3 text-white font-semibold "
            >
              {functionality}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TeamForm;
