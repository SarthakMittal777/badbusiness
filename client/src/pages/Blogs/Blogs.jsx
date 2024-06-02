import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Footer } from "../../components/Footer";
import Navbar from "../../components/Navbar";
import { getBlogData } from "../../api/blogs";

const bgImage = "/images/hero/blog.jpg";

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
        className="w-full h-[60vh] flex items-center justify-center relative"
        style={{
          background:
            "url(/images/hero/blog.jpg) no-repeat center center fixed",
          backgroundSize: "cover",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>{" "}
        <div className="relative text-center text-white mx-24">
          {" "}
          <h1 className="text-4xl py-8 font-bold"> BAD Blogs</h1>
          <p>
            &quot;Welcome to our blog, where we share insights, stories, and
            updates on a wide range of topics. Explore articles, tips, and
            resources designed to inspire and inform. Stay tuned for regular
            posts from our team of writers and guest contributors.&quot;
          </p>
        </div>
      </div>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {blogPosts.map((post) => {
            const slug = generateSlug(post.title);
            return (
              <Link to={`/blogs/${slug}`} key={post._id}>
                <div className="bg-white text-black rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 h-auto">
                  <img
                    src={post.banner}
                    alt={post.title}
                    className="rounded-t-lg w-full h-64 object-cover"
                  />
                  <div className="p-4 h-auto flex flex-col justify-between">
                    <h2 className="text-xl font-semibold mb-2 h-16 overflow-hidden">
                      {post.title}
                    </h2>
                    <p className="mb-2">{post.headline}</p>
                    <Link
                      to={`/blogs/${slug}`}
                      key={post._id}
                      className="text-blue-600"
                    >
                      Read More
                    </Link>
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
