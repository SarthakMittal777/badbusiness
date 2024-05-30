import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import Button from "../../components/Button";
import { createBlogData, editBlogData } from "../../api/blogs";
import SidebarPortal from "../../components/SidebarPortal";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { MdOutlineMenu } from "react-icons/md";

const BlogForm = ({ functionality, fetchBlogData }) => {
  const navigate = useNavigate();
  const [menu, setMenu] = useState(false);

  const [data, setData] = useState({
    title: fetchBlogData?.blog.title || "",
    banner: fetchBlogData?.blog.banner || "",
    content: fetchBlogData?.blog.content || [
      { resource: "", type: "paragraph" },
    ],
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (functionality === "Add a new Blog Data") {
      createBlogData(data)
        .then((res) => {
          window.alert(res.data.message);
          navigate("/portal/blogs");
        })
        .catch((error) => {
          console.log(error);
        });
    }
    if (functionality === "Update Blog") {
      editBlogData(fetchBlogData.blog._id, data)
        .then((res) => {
          window.alert(res.data.message);
          navigate("/portal/blogs");
        })
        .catch((error) => {
          console.log(error);
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
              Add More Content
            </div>
          </div>
          {data.content.map((contentItem, index) => (
            <div
              className="rounded-xl py-3 my-2 w-full px-4 flex items-center justify-between flex-col"
              key={index}
              title="Right Click to Delete Content"
              onContextMenu={(e) => {
                e.preventDefault();
                const newContent = [...data.content];
                newContent.splice(index, 1);
                setData((prevData) => ({
                  ...prevData,
                  content: newContent,
                }));
              }}
            >
              <ReactQuill
                value={contentItem.resource}
                onChange={(value) =>
                  handleContentChange(index, "resource", value)
                }
                placeholder="Content Resource"
                className="w-full"
                modules={{
                  toolbar: [
                    [{ header: [1, 2, false] }],
                    ["bold", "italic", "underline", "strike"],
                    [{ list: "ordered" }, { list: "bullet" }],
                    ["link"],
                    ["clean"],
                  ],
                }}
              />
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

export default BlogForm;
