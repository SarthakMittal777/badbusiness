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
    date: fetchEventData?.date || "",
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
    sponsors: fetchEventData?.event.sponsors || [
      { name: "", avatar: "", description: "", profile: "", type: "" },
    ],
    venue: fetchEventData?.event.venue || "",
    platform: fetchEventData?.event.platform || "",

    createdBy: fetchEventData?.event.createdBy || [{ username: "", email: "" }],
  });

  console.log(data);
  console.log(data.date?.split("T")[0]);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (functionality === "Add a new Event") {
      createEventData(data)
        .then((res) => {
          console.log(data);
          window.alert(res.data.message);
          console.log(res);
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
          console.log("edited", data);

          window.alert(res.data.message);

          // navigate("/portal/events");
        })
        .catch((error) => {
          console.log(error);

          window.alert("Data not updated");
          navigate("/portal/events");
        });
    }
  };

  const handleAddContent = (contentType) => {
    setData((prevData) => ({
      ...prevData,
      [contentType]: [
        ...prevData[contentType],
        { name: "", avatar: "", description: "", profile: "", type: "" },
      ],
    }));
  };

  const handleContentChange = (index, key, value, contentType) => {
    const updatedContent = data[contentType].map((item, idx) => {
      if (idx === index) {
        return { ...item, [key]: value };
      }
      return item;
    });
    setData((prevData) => ({
      ...prevData,
      [contentType]: updatedContent,
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
            type="text"
            value={data.description}
            required
            placeholder="Description"
            className="border rounded-xl py-3 w-full px-4 my-2"
            onChange={(e) => setData({ ...data, description: e.target.value })}
          />
          <input
            type="text"
            value={data.platform}
            placeholder="Platform"
            className="border rounded-xl py-3 w-full px-4 my-2"
            onChange={(e) => setData({ ...data, platform: e.target.value })}
          />
          <input
            type="text"
            value={data.venue}
            required
            placeholder="Venue"
            className="border rounded-xl py-3 w-full px-4 my-2"
            onChange={(e) => setData({ ...data, venue: e.target.value })}
          />

          <input
            type="url"
            value={data.banner}
            required
            placeholder="Banner"
            className="border rounded-xl py-3 w-full px-4 my-2"
            onChange={(e) => setData({ ...data, banner: e.target.value })}
          />
          <input
            type="date"
            value={data.date}
            required
            placeholder="Date"
            className="border rounded-xl py-3 w-full px-4 my-2"
            onChange={(e) => setData({ ...data, date: e.target.value })}
          />
          <input
            type="text"
            value={data.time}
            required
            placeholder="Time"
            className="border rounded-xl py-3 w-full px-4 my-2"
            onChange={(e) => setData({ ...data, time: e.target.value })}
          />

          <input
            type="text"
            value={data.type}
            required
            placeholder="Type"
            className="border rounded-xl py-3 w-full px-4 my-2"
            onChange={(e) => setData({ ...data, type: e.target.value })}
          />

          <select
            className="border rounded-xl py-3 w-full px-4 my-2"
            value={data.listedBy}
            onChange={(e) => setData({ ...data, listedBy: e.target.value })}
          >
            <option value="" disabled>
              Listed By
            </option>
            <option value="individual">Individual</option>
            <option value="organization">Organization</option>
          </select>

          <select
            className="border rounded-xl py-3 w-full px-4 my-2"
            value={data.status}
            onChange={(e) => setData({ ...data, status: e.target.value })}
          >
            <option value="" disabled>
              Status
            </option>
            <option value="accepted">Accepted</option>
            <option value="declined">Declined</option>
            <option value="pending">Pending</option>
          </select>

          <div className="w-full flex justify-end gap-4">
            <div className="mx-2 my-4 flex justify-end">
              <div
                className="bg-[#5BBB7B] hover:bg-green-800 p-3 text-white font-semibold rounded-3xl flex items-center justify-center w-48"
                onClick={() => handleAddContent("speakers")}
              >
                Add Speakers
              </div>
            </div>
            <div className="mx-2 my-4 flex justify-end">
              <div
                className="bg-[#5BBB7B] hover:bg-green-800 p-3 text-white font-semibold rounded-3xl flex items-center justify-center w-48"
                onClick={() => handleAddContent("hosts")}
              >
                Add Hosts
              </div>
            </div>
            <div className="mx-2 my-4 flex justify-end">
              <div
                className="bg-[#5BBB7B] hover:bg-green-800 p-3 text-white font-semibold rounded-3xl flex items-center justify-center w-48"
                onClick={() => handleAddContent("sponsors")}
              >
                Add Sponsors
              </div>
            </div>
          </div>

          {data.speakers.map((contentItem, index) => (
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
              <input
                type="text"
                value={contentItem.name}
                required
                placeholder="Speaker Name"
                className="border rounded-xl py-3 w-full px-4 my-2 bg-[#ffecef]"
                onChange={(e) =>
                  handleContentChange(index, "name", e.target.value, "speakers")
                }
              />
              <input
                type="text"
                value={contentItem.avatar}
                required
                placeholder="Avatar"
                className="border rounded-xl py-3 w-full px-4 my-2 bg-[#ffecef]"
                onChange={(e) =>
                  handleContentChange(
                    index,
                    "avatar",
                    e.target.value,
                    "speakers"
                  )
                }
              />
              <input
                type="text"
                value={contentItem.description}
                required
                placeholder="Description"
                className="border rounded-xl py-3 w-full px-4 my-2 bg-[#ffecef]"
                onChange={(e) =>
                  handleContentChange(
                    index,
                    "description",
                    e.target.value,
                    "speakers"
                  )
                }
              />
              <input
                type="text"
                value={contentItem.profile}
                required
                placeholder="Profile"
                className="border rounded-xl py-3 w-full px-4 my-2 bg-[#ffecef]"
                onChange={(e) =>
                  handleContentChange(
                    index,
                    "profile",
                    e.target.value,
                    "speakers"
                  )
                }
              />
            </div>
          ))}

          {data.hosts.map((item, index) => (
            <div
              className="rounded-xl py-3 my-2 w-full px-4 flex items-center justify-between flex-col"
              key={index}
              title="Right Click to Delete Content"
              onContextMenu={(e) => {
                e.preventDefault();
                const newContent = [...data.hosts];
                newContent.splice(index, 1);
                setData((prevData) => ({
                  ...prevData,
                  hosts: newContent,
                }));
              }}
            >
              <input
                type="text"
                value={item.name}
                required
                placeholder="Host Name"
                className="border rounded-xl py-3 w-full px-4 my-2 bg-[#fafae3]"
                onChange={(e) =>
                  handleContentChange(index, "name", e.target.value, "hosts")
                }
              />
              <input
                type="text"
                value={item.avatar}
                required
                placeholder="Avatar"
                className="border rounded-xl py-3 w-full px-4 my-2 bg-[#fafae3]"
                onChange={(e) =>
                  handleContentChange(index, "avatar", e.target.value, "hosts")
                }
              />
              <input
                type="text"
                value={item.description}
                required
                placeholder="Description"
                className="border rounded-xl py-3 w-full px-4 my-2 bg-[#fafae3]"
                onChange={(e) =>
                  handleContentChange(
                    index,
                    "description",
                    e.target.value,
                    "hosts"
                  )
                }
              />
              <input
                type="text"
                value={item.profile}
                required
                placeholder="Profile"
                className="border rounded-xl py-3 w-full px-4 my-2 bg-[#fafae3]"
                onChange={(e) =>
                  handleContentChange(index, "profile", e.target.value, "hosts")
                }
              />
            </div>
          ))}

          {data.sponsors.map((item, index) => (
            <div
              className="rounded-xl py-3 my-2 w-full px-4 flex items-center justify-between flex-col"
              key={index}
              title="Right Click to Delete Content"
              onContextMenu={(e) => {
                e.preventDefault();
                const newContent = [...data.sponsors];
                newContent.splice(index, 1);
                setData((prevData) => ({
                  ...prevData,
                  sponsors: newContent,
                }));
              }}
            >
              <input
                type="text"
                value={item.name}
                required
                placeholder="Sponsor Name"
                className="border rounded-xl py-3 w-full px-4 my-2 bg-[#e2ffe2]"
                onChange={(e) =>
                  handleContentChange(index, "name", e.target.value, "sponsors")
                }
              />
              <input
                type="text"
                value={item.avatar}
                placeholder="Avatar"
                className="border rounded-xl py-3 w-full px-4 my-2 bg-[#e2ffe2]"
                onChange={(e) =>
                  handleContentChange(
                    index,
                    "avatar",
                    e.target.value,
                    "sponsors"
                  )
                }
              />
              <input
                type="text"
                value={item.description}
                required
                placeholder="Description"
                className="border rounded-xl py-3 w-full px-4 my-2 bg-[#e2ffe2]"
                onChange={(e) =>
                  handleContentChange(
                    index,
                    "description",
                    e.target.value,
                    "sponsors"
                  )
                }
              />
              <input
                type="text"
                value={item.profile}
                placeholder="Profile"
                className="border rounded-xl py-3 w-full px-4 my-2 bg-[#e2ffe2]"
                onChange={(e) =>
                  handleContentChange(
                    index,
                    "profile",
                    e.target.value,
                    "sponsors"
                  )
                }
              />
            </div>
          ))}

          <Button
            type="submit"
            className="bg-[#5BBB7B] hover:bg-green-800 py-3 text-white font-semibold w-full"
          >
            Submit
          </Button>
        </form>
      </div>
    </div>
  );
};

export default EventForm;
