import Button from "../../components/Button";
import { createHofData, editHofData } from "../../api/hof";
import SidebarPortal from "../../components/SidebarPortal";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { MdOutlineMenu } from "react-icons/md";
const HOfForm = ({ functionality, fetchHofData }) => {
  const navigate = useNavigate();
  const [menu, setMenu] = useState(false);
  const [data, setData] = useState({
    businessName: fetchHofData?.hallOfFame.businessName,
    solution: {
      solutionName: fetchHofData?.hallOfFame.solution.solutionName,
      implementation: fetchHofData?.hallOfFame.solution.implementation,
    },
    result: fetchHofData?.hallOfFame.result,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (functionality === "Add a new Hall of Fame Data") {
      createHofData(data)
        // eslint-disable-next-line no-unused-vars
        .then((res) => {
          window.alert("Data added successfully");
          navigate("/portal/halloffame");
        })
        .catch((error) => {
          console.log(error);
          window.alert("Data Not Added ");
          navigate("/portal/halloffame");
        });
    }
    if (functionality === "Edit Hall of Fame Data") {
      editHofData(fetchHofData.hallOfFame._id, data)
        // eslint-disable-next-line no-unused-vars
        .then((res) => {
          window.alert("Data edited successfully");
          navigate("/portal/halloffame");
        })
        .catch((error) => {
          console.log(error);
          window.alert("Data Not Editted ");
          navigate("/portal/halloffame");
          console.log(error);
        });
    }
  };
  return (
    <div className="w-full h-full  flex  ">
      <MdOutlineMenu
        className="lg:hidden block absolute top-9 right-9"
        size={25}
        onClick={() => setMenu(!menu)}
      />
      <SidebarPortal menu={menu} setMenu={setMenu} />
      <div className=" p-8 flex flex-col w-full justify-center gap-8 items-center md:items-start py-12 h-screen overflow-scroll">
        <p className="text-xl font-semibold mb-3 "> {functionality}</p>
        <form
          method="POST"
          className="w-full overflow-y-auto"
          onSubmit={(e) => handleSubmit(e)}
        >
          <input
            id="name"
            type="text"
            value={data.businessName}
            required
            placeholder="Business Name"
            className="border rounded-xl py-3 w-full px-4 my-2 "
            onChange={(e) => setData({ ...data, businessName: e.target.value })}
          />
          <input
            id="solutionName"
            type="text"
            value={data.solution.solutionName}
            required
            placeholder="Solution Name"
            className="border rounded-xl py-3 w-full px-4 my-2 "
            onChange={(e) =>
              setData({
                ...data,
                solution: { ...data.solution, solutionName: e.target.value },
              })
            }
          />
          <input
            id="solutionName"
            type="text"
            value={data.solution.implementation}
            required
            placeholder="Solution Implementation"
            className="border rounded-xl py-3 w-full px-4 my-2 "
            onChange={(e) =>
              setData({
                ...data,
                solution: { ...data.solution, implementation: e.target.value },
              })
            }
          />

          <div className="border rounded-xl py-3 my-2  w-full px-4 flex items-center justify-between">
            <input
              id="result"
              type="text"
              value={data.result}
              required
              placeholder="Results"
              className="outline-none w-full"
              onChange={(e) => setData({ ...data, result: e.target.value })}
            />
          </div>
          <Button
            type="submit"
            className="bg-[#5BBB7B]  hover:bg-green-800 py-3 text-white font-semibold w-full sticky "
          >
            {functionality}
          </Button>
        </form>
      </div>
    </div>
  );
};

export default HOfForm;
