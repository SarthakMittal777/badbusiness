import Button from "../../components/Button";
import { createStoryData, editStoryData } from "../../api/story";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import SidebarPortal from "../../components/SidebarPortal";
import { MdOutlineMenu } from "react-icons/md";
const StoryForm = ({ functionality, fetchStoryData }) => {
  const navigate = useNavigate();
  const [menu, setMenu] = useState(false);
  const [data, setData] = useState({
    headline: fetchStoryData?.headline,
    url: fetchStoryData?.url,
    type: fetchStoryData ? fetchStoryData.type : "select",
  });
  useEffect(() => {
    setData({
      headline: fetchStoryData?.headline,
      url: fetchStoryData?.url,
      type: fetchStoryData?.type,
    });
  }, [fetchStoryData]);
  const handleSubmit = (e) => {
    e.preventDefault();
    const storyData = {
      headline: data.headline,
      url: data.url,
      type: data.type,
    };
    if (functionality === "Add a new Story") {
      createStoryData(storyData)
        // eslint-disable-next-line no-unused-vars
        .then((res) => {
          window.alert("Data added successfully");
          navigate("/portal/story");
        })
        .catch((error) => {
          console.log(error);
        });
    }
    if (functionality === "Edit a story's details") {
      editStoryData(fetchStoryData._id, storyData)
        // eslint-disable-next-line no-unused-vars
        .then((res) => {
          window.alert("Data edited successfully");
          navigate("/portal/story");
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };
  return (
    <div className="w-full h-full  flex ">
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
          className="w-full"
          onSubmit={(e) => handleSubmit(e)}
        >
          <div className="w-full flex flex-col gap-4">
            <p className="text-base font-semibold mb-3 ">Headline :</p>
            <input
              id="category"
              type="text"
              value={data.headline}
              placeholder="Name"
              className="border rounded-xl py-3 w-full px-4"
              onChange={(e) => setData({ ...data, headline: e.target.value })}
            />
            <p className="text-base font-semibold mb-3 ">URL :</p>
            <input
              id="imageURL"
              type="text"
              value={data.url}
              placeholder="URL"
              className="border rounded-xl py-3 w-full px-4"
              onChange={(e) => setData({ ...data, url: e.target.value })}
            />
            <p>type:</p>
            <div className="border rounded-xl">
              <select
                className="outline-none my-4 border-none w-full"
                onChange={(e) => setData({ ...data, type: e.target.value })}
              >
                <option value={data.type}>{data.type}</option>
                <option value="instagram">instagram</option>
                <option value="facebook">facebook</option>
                <option value="youtube">youtube</option>
              </select>
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

export default StoryForm;
