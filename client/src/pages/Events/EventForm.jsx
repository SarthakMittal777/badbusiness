import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import Button from "../../components/Button";
import { createEventData, editEventData } from "../../api/events";
import SidebarPortal from "../../components/SidebarPortal";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { MdOutlineMenu } from "react-icons/md";

const EventForm = ({ functionality, fetchEventData }) => {
  const navigate = useNavigate();
  const [menu, setMenu] = useState(false);

  const [data, setData] = useState({
    title: fetchEventData?.event.title || "",
    banner: fetchEventData?.event.banner || "",
    time: fetchEventData?.event.time || "",
    date: fetchEventData?.event.date || "",
    type: fetchEventData?.event.type || "",
    listedBy: fetchEventData?.event.listedBy || "",
    description: fetchEventData?.event.description || "",
    status: fetchEventData?.event.status || "",
    hosts: fetchEventData?.event.hosts || [
      { name: "", avatar: "", description: "", profile: "", type: "" },
    ],
    speakers: fetchEventData?.event.speakers || [
      { name: "", avatar: "", description: "", profile: "", type: "" },
    ],
    sponsors: fetchEventData?.event.sponsors || [],
    venue: fetchEventData?.event.venue || "",
    platform: fetchEventData?.event.platform || "",

    createdBy: fetchEventData?.event.createdBy || [{ username: "", email: "" }],
  });

  console.log(data);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (functionality === "Add a new Event") {
      createEventData(data)
        .then((res) => {
          window.alert(res.data.message);
          navigate("/portal/events");
        })
        .catch((error) => {
          console.log(error);
          window.alert("Data not added");
          navigate("/portal/events");
        });
    }
    if (functionality === "Update Event") {
      editEventData(fetchEventData.event._id, data)
        .then((res) => {
          window.alert(res.data.message);
          navigate("/portal/events");
        })
        .catch((error) => {
          console.log(error);
          window.alert("Data not updated");
          navigate("/portal/events");
        });
    }
  };

  const handleAddContent = () => {
    setData((prevData) => ({
      ...prevData,
      content: [...prevData.content, { resource: "", type: "paragraph" }],
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
            value={data.title}
            required
            placeholder="Title"
            className="border rounded-xl py-3 w-full px-4 my-2"
            onChange={(e) => setData({ ...data, title: e.target.value })}
          />

          <input
            type="url"
            value={data.banner}
            required
            placeholder="Banner"
            className="border rounded-xl py-3 w-full px-4 my-2"
            onChange={(e) => setData({ ...data, banner: e.target.value })}
          />
          <div className="mx-2 my-4 flex justify-end">
            <div
              className="bg-[#5BBB7B] hover:bg-green-800 p-3 text-white font-semibold rounded-3xl flex items-center justify-center w-48"
              onClick={handleAddContent}
            >
              Add Speakers
            </div>
          </div>
          {data.event.map((contentItem, index) => (
            <div
              className="rounded-xl py-3 my-2 w-full px-4 flex items-center justify-between flex-col"
              key={index}
              title="Right Click to Delete Content"
              onContextMenu={(e) => {
                e.preventDefault();
                const newContent = [...data.speakers];
                newContent.splice(index, 1);
                setData((prevData) => ({
                  ...prevData,
                  speakers: newContent,
                }));
              }}
            >
              <div className="border rounded-xl py-3 w-full px-4 flex flex-col items-center justify-between">
                <select
                  className="outline-none border-none w-full"
                  onChange={(e) =>
                    handleContentChange(index, "type", e.target.value)
                  }
                  value={contentItem.type}
                >
                  <option value="paragraph">paragraph</option>
                  <option value="image">image</option>
                </select>
              </div>
            </div>
          ))}
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

export default EventForm;
