import React from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { Footer } from "../../components/Footer";
import Navbar from "../../components/Navbar";

const blogPosts = [
  {
    slug: "first-post",
    title: "First Blog Post",
    excerpt: "This is a short description of the first blog post.",
    date: "May 20, 2024",
    image: "https://via.placeholder.com/300",
    createdAt: "May 17, 2024",
    updatedAt: "May 19, 2024",
    content: "This is the full content of the first blog post.",
  },
  {
    slug: "second-post",
    title: "Second Blog Post",
    excerpt: "This is a short description of the second blog post.",
    date: "May 21, 2024",
    image: "https://via.placeholder.com/300",
    createdAt: "May 18, 2024",
    updatedAt: "May 20, 2024",
    content: "This is the full content of the second blog post.",
  },
  {
    slug: "third-post",
    title: "Third Blog Post",
    excerpt: "This is a short description of the third blog post.",
    date: "May 22, 2024",
    image: "https://via.placeholder.com/300",
    createdAt: "May 19, 2024",
    updatedAt: "May 21, 2024",
    content: "This is the full content of the third blog post.",
  },
  {
    slug: "fourth-post",
    title: "Fourth Blog Post",
    excerpt: "This is a short description of the fourth blog post.",
    date: "May 23, 2024",
    image: "https://via.placeholder.com/300",
    createdAt: "May 20, 2024",
    updatedAt: "May 22, 2024",
    content: "This is the full content of the fourth blog post.",
  },
];

export const BlogPost = () => {
  const { slug } = useParams();
  const post = blogPosts.find((post) => post.slug === slug);

  if (!post) {
    return (
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-2xl font-bold">Blog post not found</h1>
        <Link to="/blogs" className="text-blue-500">
          Go back to Blogs
        </Link>
      </div>
    );
  }

  return (
    <div className="w-full h-full">
      <Navbar />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-2xl font-bold mb-4">{post.title}</h1>
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-64 object-cover mb-4 rounded-lg"
        />
        <div className="flex justify-between">
          <p className="text-gray-500 text-sm mb-2">
            Updated on: {post.updatedAt}
          </p>
          <p className="text-gray-500 text-sm mb-2">
            Created on: {post.createdAt}
          </p>
        </div>

        <p className="mb-4">{post.content}</p>
        <Link to="/blogs" className="text-blue-500">
          Go back to Blogs
        </Link>
      </div>
      <Footer />
    </div>
  );
};
