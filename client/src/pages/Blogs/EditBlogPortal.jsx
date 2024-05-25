import { useEffect, useState } from "react";
import { getBlogDataById } from "../../api/blogs";
import BlogForm from "./BlogForm";
import { useParams } from "react-router-dom";
export const EditBlogPortal = () => {
  const { id } = useParams();
  const [data, setData] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const res = await getBlogDataById(id);
      setData(res);
    }
    fetchData();
  }, [id]);

  return (
    data &&
    data.success && (
      <BlogForm fetchBlogData={data} functionality="Update Blog" />
    )
  );
};
