import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import Button from "../../components/Button";
import { createCareerData, editCareerData } from "../../api/career";
import SidebarPortal from "../../components/SidebarPortal";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { MdOutlineMenu } from "react-icons/md";
import JobCategories from "../../static/JobCategories.json";
import JobType from "../../static/JobType.json";
import { countries } from "countries-list";
const CareerForm = ({ functionality, fetchCareerData }) => {
  const navigate = useNavigate();
  const [menu, setMenu] = useState(false);
  const jobLocation = fetchCareerData?.career.jobLocation || "";
  const jobTitle = fetchCareerData?.career.jobTitle || "";
  const jobType = fetchCareerData?.career.jobType || "";
  const category = fetchCareerData?.career.category || "";
  const link = fetchCareerData?.career.link || "";
  const logo = fetchCareerData?.career.logo || "";
  const stipend = fetchCareerData?.career.stipend || "";
  const datePosted = fetchCareerData?.career.datePosted || "";
  const applications = fetchCareerData?.career.applications || [];
  const jobDescription = fetchCareerData?.career.jobDescription || null;
  const [data, setData] = useState({
    jobLocation: jobLocation,
    jobTitle: jobTitle,
    jobType: jobType,
    category: category,
    link: link,
    logo: logo,
    stipend: stipend,
    datePosted: datePosted,
    applications: applications,
    jobDescription: jobDescription,
  });
  console.log(data);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (functionality === "Add a new Job") {
      createCareerData(data)
        .then((res) => {
          window.alert(res.data.message);
          navigate("/portal/careers");
        })
        .catch((error) => {
          console.log(error);
          window.alert("Data not added");
          navigate("/portal/careers");
        });
    }
    if (functionality === "Update Career") {
      editCareerData(fetchCareerData.career._id, data)
        .then((res) => {
          window.alert(res.data.message);
          navigate("/portal/careers");
        })
        .catch((error) => {
          console.log(error);
          window.alert("Data not updated");
          navigate("/portal/careers");
        });
    }
  };

  const handleAddType = () => {
    setData((prevData) => ({
      ...prevData,
      jobType: [...prevData.jobType, ""],
    }));
  };

  const handleContentChange = (index, field, value) => {
    const newContent = [...data.content];
    newContent[index][field] = value;
    setData((prevData) => ({
      ...prevData,
      content: newContent,
    }));
  };

  return (
    <div className="w-full h-full flex">
      <MdOutlineMenu
        className="lg:hidden block absolute top-9 right-9"
        size={25}
        onClick={() => setMenu(!menu)}
      />
      <SidebarPortal menu={menu} setMenu={setMenu} />
      <div className="p-8 flex flex-col w-full justify-center gap-8 items-center md:items-start py-12 h-screen overflow-scroll">
        <p className="text-xl font-semibold mb-3">{functionality}</p>
        <form
          method="POST"
          className="w-full overflow-y-auto"
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            value={data.jobTitle}
            required
            placeholder="Job Title"
            className="border rounded-xl py-3 w-full px-4 my-2"
            onChange={(e) => setData({ ...data, jobTitle: e.target.value })}
          />

          <input
            type="url"
            value={data.jobLocation}
            required
            placeholder="Banner"
            className="border rounded-xl py-3 w-full px-4 my-2"
            onChange={(e) => setData({ ...data, jobLocation: e.target.value })}
          />
          <div className="mx-2 my-4 flex justify-between">
            {data.jobType.length > 0 && (
              <section className="flex gap-4 w-full">
                {data.jobType.map((type, index) => (
                  <div className="px-5 py-2 rounded border shadow h-12 grid place-content-center" key={index}>
                    {type}
                  </div>
                ))}
              </section>
            )}
            {/* <div
              className="bg-[#5BBB7B] hover:bg-green-800 p-3 text-white font-semibold rounded-3xl flex items-center justify-center w-48"
              onClick={handleAddType}
            >
              Add More Job Type
            </div> */}
            <select
              className="border rounded-xl py-3 w-1/2 px-4 my-2"
              onChange={(e) => setData({ ...data, jobType: e.target.value })}
            >
              <option value="" className="disabled">
                Select Job Type
              </option>
              {JobType.map((type, index) => (
                <option key={index} value={type}>
                  {type.jobType}
                </option>
              ))}
            </select>
          </div>

          {/* <div className="w-full flex flex-col gap-4">
            {data.jobType.map((type, index) => (
              <input
                key={index}
                type="text"
                value={type}
                required
                placeholder="Job Type"
                className="border rounded-xl py-3 w-full px-4 my-2"
                onChange={(e) =>
                  handleContentChange(index, "jobType", e.target.value)
                }
              />
            ))}
          </div> */}
          <select
            className="border rounded-xl py-3 w-full px-4 my-2"
            onChange={(e) => setData({ ...data, category: e.target.value })}
          >
            <option value="" className="disabled">
              Select Category
            </option>
            {JobCategories.map((category, index) => (
              <option key={index} value={category}>
                {category.category}
              </option>
            ))}
          </select>
          <Button
            type="submit"
            className="bg-[#5BBB7B] hover:bg-green-800 py-3 text-white font-semibold w-full"
          >
            {functionality}
          </Button>
        </form>
      </div>
    </div>
  );
};

export default CareerForm;
