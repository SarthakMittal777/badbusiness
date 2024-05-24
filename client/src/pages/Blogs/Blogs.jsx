import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Footer } from "../../components/Footer";
import Navbar from "../../components/Navbar";
import { getBlogData } from "../../api/blogs";

const bgImage = "/images/hero/hero-bg.png";

const generateSlug = (title) => {
  return title
    .toLowerCase()
    .replace(/ /g, "-")
    .replace(/[^\w-]+/g, "");
};

export const Blogs = () => {
  const [blogPosts, setBlogPosts] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      const data = await getBlogData();
      if (data && Array.isArray(data.blogs)) {
        setBlogPosts(data.blogs);
      } else {
        console.error("Fetched data is not an array of blogs", data);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <div className="w-full h-full">
      <Navbar />
      <div
        className="bg-center bg-cover bg-no-repeat text-white py-4"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 lg:py-8">
          <h1 className="flex items-center justify-center font-bold text-2xl mb-8">
            BAD Blogs
          </h1>
        </div>
      </div>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {blogPosts.map((post) => {
            const slug = generateSlug(post.title);
            return (
              <Link to={`/blogs/${slug}`} key={post._id}>
                <div className="bg-white text-black rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
                  <img
                    src={post.banner}
                    alt={post.title}
                    className="rounded-t-lg w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
                    <p className="mb-2">{post.headline}</p>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Blogs;
