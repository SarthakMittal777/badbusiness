import Button from "../../components/Button";
import { createCareerData, editCareerData } from "../../api/career";
import SidebarPortal from "../../components/SidebarPortal";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { MdOutlineMenu } from "react-icons/md";
import { MdDeleteOutline } from "react-icons/md";
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
    jobDescription: {
      description: jobDescription?.description || "",
      key_responsibilities: jobDescription?.key_responsibilities || "",
      req_qualifications: jobDescription?.req_qualifications || "",
      preferred_qualifications: jobDescription?.preferred_qualifications || "",
    },
  });

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

  const formatDate = (isoDate) => {
    const date = new Date(isoDate);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0"); // Add leading zero
    const day = String(date.getDate()).padStart(2, "0"); // Add leading zero
    return `${year}-${month}-${day}`;
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
            value={data.link}
            required
            placeholder="Application Link"
            className="border rounded-xl py-3 w-full px-4 my-2"
            onChange={(e) => setData({ ...data, link: e.target.value })}
          />
          <input
            type="url"
            value={data.logo}
            required
            placeholder="Company Logo"
            className="border rounded-xl py-3 w-full px-4 my-2"
            onChange={(e) => setData({ ...data, logo: e.target.value })}
          />
          <input
            type="test"
            value={data.jobLocation}
            placeholder="Location"
            className="border rounded-xl py-3 w-full px-4 my-2"
            onChange={(e) => setData({ ...data, jobLocation: e.target.value })}
          />
          <select
            className="border rounded-xl py-3 w-full px-4 my-2"
            onChange={(e) => {
              const newCountry = e.target.value;
              const updatedJobLocation = data.jobLocation + " " + newCountry;
              setData({ ...data, jobLocation: updatedJobLocation });
            }}
          >
            {data.jobLocation.split(" ").slice(0, -1).join(" ") !== "" ? (
              <option value="" className="disabled">
                {data.jobLocation.trim().split(" ").pop()}
              </option>
            ) : (
              <option value="" className="disabled">
                Select Country
              </option>
            )}
            {countries &&
              Object.keys(countries).map((country, index) => (
                <option key={index} value={countries[country].name}>
                  {countries[country].name}
                </option>
              ))}
          </select>
          <p className="mx-2 font-semibold">Description :</p>

          <input
            type="text"
            value={data.jobDescription.description}
            required
            placeholder="Job Description"
            className="border rounded-xl py-3 w-full px-4 my-2"
            onChange={(e) =>
              setData({
                ...data,
                jobDescription: {
                  ...data.jobDescription,
                  description: e.target.value,
                },
              })
            }
          />

          <input
            type="text"
            value={data.jobDescription.key_responsibilities}
            required
            placeholder="Key Responsibilities"
            className="border rounded-xl py-3 w-full px-4 my-2"
            onChange={(e) =>
              setData({
                ...data,
                jobDescription: {
                  ...data.jobDescription,
                  key_responsibilities: e.target.value,
                },
              })
            }
          />
          <input
            type="text"
            value={data.jobDescription.req_qualifications}
            required
            placeholder="Required Qualifications"
            className="border rounded-xl py-3 w-full px-4 my-2"
            onChange={(e) =>
              setData({
                ...data,
                jobDescription: {
                  ...data.jobDescription,
                  req_qualifications: e.target.value,
                },
              })
            }
          />
          <input
            type="text"
            value={data.jobDescription.preferred_qualifications}
            required
            placeholder="Preferred Qualifications"
            className="border rounded-xl py-3 w-full px-4 my-2"
            onChange={(e) =>
              setData({
                ...data,
                jobDescription: {
                  ...data.jobDescription,
                  preferred_qualifications: e.target.value,
                },
              })
            }
          />

          <input
            type="date"
            value={formatDate(data.datePosted)}
            required
            placeholder="Date Posted"
            className="border rounded-xl py-3 w-full px-4 my-2"
            onChange={(e) => setData({ ...data, datePosted: e.target.value })}
          />

          <div className="mx-2 my-4 flex justify-between">
            {data.jobType.length > 0 && (
              <section className="flex gap-4 w-full">
                {data.jobType.map((type, index) => (
                  <div
                    className="px-5 py-2 rounded border shadow h-12 grid place-content-center relative"
                    key={index}
                  >
                    <p>{type}</p>
                    <MdDeleteOutline
                      className="absolute -top-2 -right-3 cursor-pointer hover:text-red-600"
                      size={25}
                      onClick={() =>
                        setData({
                          ...data,
                          jobType: data.jobType.filter((job) => job !== type),
                        })
                      }
                    />
                  </div>
                ))}
              </section>
            )}
            <select
              className="border rounded-xl py-3 w-1/2 px-4 my-2"
              onChange={(e) => {
                const selectedValue = e.target.value;
                const updatedJobType = data.jobType.includes(selectedValue)
                  ? data.jobType.filter((job) => job !== selectedValue)
                  : [...data.jobType, selectedValue];
                setData({ ...data, jobType: updatedJobType });
              }}
            >
              <option value="" className="disabled">
                Select Job Type
              </option>
              {JobType.map((type, index) => (
                <option key={index} value={type.jobType}>
                  {type.jobType}
                </option>
              ))}
            </select>
          </div>

          <input
            type="text"
            value={data.stipend}
            required
            placeholder="Stipend"
            className="border rounded-xl py-3 w-full px-4 my-2"
            onChange={(e) => setData({ ...data, stipend: e.target.value })}
          />
          <select
            className="border rounded-xl py-3 w-full px-4 my-2"
            onChange={(e) => setData({ ...data, category: e.target.value })}
          >
            {data.category ? (
              <option value="" className="disabled">
                {data.category}
              </option>
            ) : (
              <option value="" className="disabled">
                Select Job Category
              </option>
            )}
            {JobCategories.map((category, index) => (
              <option key={index} value={category.category}>
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
