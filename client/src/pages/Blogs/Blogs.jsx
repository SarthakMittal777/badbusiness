import React from "react";
import { Link } from "react-router-dom";
import { Footer } from "../../components/Footer";
import Navbar from "../../components/Navbar";

const bgImage = "/images/hero/hero-bg.png";

const blogPosts = [
  {
    slug: "first-post",
    title: "First Blog Post",
    excerpt: "This is a short description of the first blog post.",
    date: "May 20, 2024",
    image: "https://via.placeholder.com/300",
    createdAt: "May 17, 2024",
    updatedAt: "May 19, 2024",
  },
  {
    slug: "second-post",
    title: "Second Blog Post",
    excerpt: "This is a short description of the second blog post.",
    date: "May 21, 2024",
    image: "https://via.placeholder.com/300",
    createdAt: "May 18, 2024",
    updatedAt: "May 20, 2024",
  },
  {
    slug: "third-post",
    title: "Third Blog Post",
    excerpt: "This is a short description of the third blog post.",
    date: "May 22, 2024",
    image: "https://via.placeholder.com/300",
    createdAt: "May 19, 2024",
    updatedAt: "May 21, 2024",
  },
  {
    slug: "fourth-post",
    title: "Fourth Blog Post",
    excerpt: "This is a short description of the fourth blog post.",
    date: "May 23, 2024",
    image: "https://via.placeholder.com/300",
    createdAt: "May 20, 2024",
    updatedAt: "May 22, 2024",
  },
];

export const Blogs = () => {
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
          {blogPosts.map((post) => (
            <Link to={`/blogs/${post.slug}`} key={post.slug}>
              <div className="bg-white text-black rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
                <img
                  src={post.image}
                  alt={post.title}
                  className="rounded-t-lg w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
                  <p className="mb-2">{post.excerpt}</p>
                  <p className="text-gray-500 text-sm mb-2">{post.date}</p>
                  <Link to={`/blogs/${post.slug}`} className="text-blue-500">
                    Read more
                  </Link>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};
