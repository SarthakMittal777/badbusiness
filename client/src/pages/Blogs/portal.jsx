import { useEffect, useState } from "react";
import { MdDelete } from "react-icons/md";
import { MdEdit } from "react-icons/md";
import { MdOutlineMenu } from "react-icons/md";
import Button from "../../components/Button";
import { Link } from "react-router-dom";
import SidebarPortal from "../../components/SidebarPortal";
import { deleteBlogData, getBlogData } from "../../api/blogs";
const BlogPortal = () => {
  const [menu, setMenu] = useState(false);
  const [blogData, setBlogData] = useState({ blogs: [] });
  const [functionality, setFunctionality] = useState(null);

  const deletePartner = async (id) => {
    const confirmation = window.confirm(
      "Are you sure you want to delete this blog data?"
    );

    if (confirmation) {
      try {
        const res = await deleteBlogData(id);
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
      const res = await getBlogData();
      setBlogData(res);
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
          <div className="w-full p-12">
            <div className="w-[96%] flex justify-end mx-12 mb-3">
              <Link to={`/portal/blogs/add`}>
                <Button
                  type=""
                  className="bg-[#5BBB7B] w-52 my-4 hover:bg-green-800 py-3 text-white font-semibold mx-2 "
                >
                  Add a Blog
                </Button>
              </Link>
            </div>
            <div className="h-[33rem] overflow-y-scroll relative">
              <table className="table-auto min-w-full">
                <thead className="relative">
                  <tr className="bg-gray-200 sticky top-0 z-[100]">
                    <th className="px-4 py-2 sticky top-0 z-[100]">#</th>
                    <th className="px-4 py-2 sticky top-0 z-[100]">Title</th>
                    <th className="px-4 py-2 sticky top-0 z-[100]">Headline</th>
                    <th className="px-4 py-2 sticky top-0 z-[100]">Banner</th>
                    <th className="px-4 py-2 sticky top-0 z-[100]">Preview</th>
                    <th className="px-4 py-2 sticky top-0 z-[100]">Edit</th>
                    <th className="px-4 py-2 sticky top-0 z-[100]">Delete</th>
                  </tr>
                </thead>
                <tbody>
                  {blogData && blogData.blogs && blogData.blogs.length > 0 ? (
                    blogData.blogs.map((blog, index) => (
                      <tr key={index} className="hover:bg-gray-100">
                        <td className="border px-4 py-1 text-center">
                          {index + 1}
                        </td>
                        <td className="border px-4 py-1 text-center">
                          {blog.title}
                        </td>
                        <td className="border px-4 py-1 text-center">
                          {blog.headline}
                        </td>
                        <td className="border px-4 py-1 text-center">
                          {blog.banner}
                        </td>
                        <td className="border px-4 py-1">
                          <ul className="list-disc list-inside">
                            {blog.content.map((content, index) => (
                              <div key={index}>
                                {content.resource}
                                <p className=" text-gray-500">Type : {content.type}</p>
                              </div>
                            ))}
                          </ul>
                        </td>
                        <td className="border px-4 py-1 text-center">
                          <Link to={`/portal/blogs/edit/${blog._id}`}>
                            <MdEdit size={25} className="mx-auto" />
                          </Link>
                        </td>
                        <td className="border px-4 py-1 text-center">
                          <MdDelete
                            size={25}
                            className="mx-auto cursor-pointer"
                            onClick={() => deletePartner(blog._id)}
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

export default BlogPortal;
