import { useEffect, useState } from "react";
import { MdDelete } from "react-icons/md";
import { MdEdit } from "react-icons/md";
import { MdOutlineMenu } from "react-icons/md";
import Button from "../../components/Button";
import { Link } from "react-router-dom";
import SidebarPortal from "../../components/SidebarPortal";
import { getCareerData, deleteCareerData } from "../../api/career";
const JobPortal = () => {
  const [menu, setMenu] = useState(false);
  const [jobData, setJobData] = useState({ careers: [] });
  const [functionality, setFunctionality] = useState(null);

  const deletePartner = async (id) => {
    const confirmation = window.confirm(
      "Are you sure you want to delete this blog data?"
    );

    if (confirmation) {
      try {
        const res = await deleteCareerData(id);
        window.alert(res.data.message);
        window.location.reload();
      } catch (error) {
        console.log(error);
      }
    } else {
      console.log("Deletion canceled by user.");
    }
  };

  useEffect(() => {
    async function fetchData() {
      const res = await getCareerData();
      setJobData(res);
    }
    fetchData();
  }, []);
  return (
    <div className="flex w-full h-full ">
      <MdOutlineMenu
        className="lg:hidden block absolute top-9 right-9"
        size={25}
        onClick={() => setMenu(!menu)}
      />
      <SidebarPortal
        menu={menu}
        setMenu={setMenu}
        setFunctionality={setFunctionality}
      />
      {functionality == null && (
        <section className="w-[95vw] h-screen ">
          <div className="w-full p-4">
            <div className="w-[96%] flex lg:justify-end mx-12 mb-3">
              <Link to={`/portal/careers/add`}>
                <Button
                  type=""
                  className="bg-[#5BBB7B] w-52 my-4 hover:bg-green-800 py-3 text-white font-semibold mx-2 "
                >
                  Add New Job
                </Button>
              </Link>
            </div>
            <div className="h-[33rem] overflow-y-scroll relative">
              <table className="table-auto min-w-full">
                <thead className="relative">
                  <tr className="bg-gray-200 sticky top-0 z-[100]">
                    <th className="px-4 py-2 sticky top-0 z-[100]">#</th>
                    <th className="px-4 py-2 sticky top-0 z-[100]">
                      Company Logo
                    </th>
                    <th className="px-4 py-2 sticky top-0 z-[100]">Category</th>

                    <th className="px-4 py-2 sticky top-0 z-[100]">
                      Date posted
                    </th>

                    <th className="px-4 py-2 sticky top-0 z-[100]">Location</th>
                    <th className="px-4 py-2 sticky top-0 z-[100]">Title</th>

                    <th className="px-4 py-2 sticky top-0 z-[100]">
                      Description
                    </th>
                    <th className="px-4 py-2 sticky top-0 z-[100]">Job type</th>
                    <th className="px-4 py-2 sticky top-0 z-[100]">Stipend</th>
                    <th className="px-4 py-2 sticky top-0 z-[100]">
                      Apply link
                    </th>
                    <th className="px-4 py-2 sticky top-0 z-[100]">Edit</th>
                    <th className="px-4 py-2 sticky top-0 z-[100]">Delete</th>
                  </tr>
                </thead>
                <tbody>
                  {jobData && jobData.careers && jobData.careers.length > 0 ? (
                    jobData.careers.map((job, index) => (
                      <tr key={index} className="hover:bg-gray-100">
                        <td className="border px-4 py-1 text-center">
                          {index + 1}
                        </td>
                        <td className="border px-4 py-1 text-center">
                          {job.logo === "" ? (
                            <div className="w-8 h-8 rounded-full flex items-center justify-center bg-[#c7b0ff] mx-auto"></div>
                          ) : (
                            <img
                              src={job.logo}
                              alt="banner"
                              className="w-8 h-8 rounded-full mx-auto object-cover object-center"
                            />
                          )}
                        </td>
                        <td className="border px-4 py-1 text-center">
                          {job.category}
                        </td>
                        <td className="border px-4 py-1 text-center">
                          {job.datePosted}
                        </td>
                        <td className="border px-4 py-1 text-center">
                          {job.jobLocation}
                        </td>
                        <td className="border px-4 py-1 text-center">
                          {job.jobTitle}
                        </td>
                        <td className="border px-4 py-1 text-center">
                          {job.jobDescription
                            ? job.jobDescription.description
                            : "No description available"}
                        </td>
                        <td className="border px-4 py-1">
                          <ul className="list-disc list-inside">
                            {job.jobType.map((content, index) => (
                              <div key={index}>{content}</div>
                            ))}
                          </ul>
                        </td>
                        <td className="border px-4 py-1 text-center">
                          {job.stipend}
                        </td>
                        <td className="border px-4 py-1 text-center">
                          {job.link}
                        </td>
                        <td className="border px-4 py-1 text-center">
                          <Link to={`/portal/careers/edit/${job._id}`}>
                            <MdEdit size={25} className="mx-auto" />
                          </Link>
                        </td>
                        <td className="border px-4 py-1 text-center">
                          <MdDelete
                            size={25}
                            className="mx-auto cursor-pointer"
                            onClick={() => deletePartner(job._id)}
                          />
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td
                        colSpan="7"
                        className="text-center border py-4 text-gray-700"
                      >
                        No data available
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default JobPortal;
