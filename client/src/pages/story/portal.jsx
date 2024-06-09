import { useEffect, useState } from "react";
import { MdDelete } from "react-icons/md";
import { MdEdit } from "react-icons/md";
import { MdOutlineMenu } from "react-icons/md";
import Button from "../../components/Button";
import { Link } from "react-router-dom";
import SidebarPortal from "../../components/SidebarPortal";
import { getStoryData, deleteStoryData } from "../../api/story";

const StoryPortal = () => {
  const [menu, setMenu] = useState(false);
  const [storyData, setStoryData] = useState({});
  const [functionality, setFunctionality] = useState(null);

  const deleteStory = async (id) => {
    const confirmation = window.confirm(
      "Are you sure you want to delete this story?"
    );

    if (confirmation) {
      try {
        const res = await deleteStoryData(id);
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
      const res = await getStoryData();
      setStoryData(res);
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
        <section className="w-[95vw] h-screen overflow-y-auto">
          <div className="w-full p-4">
            <div className="w-[96%] flex lg:justify-end mx-12 mb-3">
              <Link to={`/portal/story/add`}>
                <Button
                  type=""
                  className="bg-[#5BBB7B] w-36 my-4 hover:bg-green-800 py-3 text-white font-semibold mx-2 "
                >
                  Add New Story
                </Button>
              </Link>
            </div>
            <div className="h-[33rem] overflow-y-scroll relative portal w-full ">
              <table className="table-auto min-w-full">
                <thead className="relative">
                  <tr className="bg-gray-200 sticky top-0 z-[100] ">
                    <th className="px-4 py-2 sticky top-0 z-[100]">#</th>
                    <th className="px-4 py-2 sticky top-0 z-[100] ">
                      Headline
                    </th>
                    <th className="px-4 py-2 sticky top-0 z-[100] ">URL</th>
                    <th className="px-4 py-2 sticky top-0 z-[100] ">Type</th>

                    <th className="px-4 py-2 sticky top-0 z-[100] ">Edit</th>
                    <th className="px-4 py-2 sticky top-0 z-[100] ">Delete</th>
                  </tr>
                </thead>
                <tbody className="w-full ">
                  {storyData &&
                  storyData.stories &&
                  storyData.stories.length > 0 ? (
                    storyData.stories.map((story, index) => (
                      <tr key={index} className="hover:bg-gray-100">
                        <td className=" hover:underline border px-4 py-1 mx-auto text-center">
                          {index + 1}
                        </td>

                        <td className="border  hover:underline  px-4 py-1 mx-auto text-center">
                          {story.headline}
                        </td>
                        <td className="border px-4  hover:underline py-1 mx-auto text-center">
                          <Link to={story.url} target="_blank">
                            {" "}
                            {story.url}
                          </Link>
                        </td>
                        <td className="border px-4  hover:underline py-1 mx-auto text-center">
                          {story.type}
                        </td>

                        <td className="border px-4 py-1 ">
                          <Link to={`/portal/story/edit/${story._id}`}>
                            <MdEdit size={25} className="mx-auto" />
                          </Link>
                        </td>
                        <td className="border px-4 py-1">
                          <MdDelete
                            size={25}
                            className="mx-auto"
                            onClick={() => deleteStory(story._id)}
                          />
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td
                        colSpan="9"
                        className="text-center border py-2 text-gray-700"
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
export default StoryPortal;
