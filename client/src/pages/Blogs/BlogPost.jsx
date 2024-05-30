import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Footer } from "../../components/Footer";
import Navbar from "../../components/Navbar";
import { getBlogData } from "../../api/blogs";
import ReactHtmlParser from "react-html-parser";

const bgImage = "/images/hero/hero-bg.png";

const BlogPost = () => {
  const { slug } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    const fetchBlogPost = async () => {
      const data = await getBlogData();
      if (data && Array.isArray(data.blogs)) {
        const blogPost = data.blogs.find(
          (post) => generateSlug(post.title) === slug
        );
        setPost(blogPost);
      } else {
        console.error("Blog post not found", slug);
      }
    };

    if (slug) {
      fetchBlogPost();
    }
  }, [slug]);

  if (!post) {
    return (
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-2xl font-bold">Blog post not found</h1>
        <Link to="/blogs" className="text-blue-500">
          Go back to all Blogs
        </Link>
      </div>
    );
  }

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
          <h2 className="flex items-center justify-center font-bold text-2xl mb-4">
            {post.headline}
          </h2>
        </div>
      </div>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-2xl font-bold mb-4">{post.title}</h1>
        <img
          src={post.banner}
          alt={post.title}
          className="w-full max-h-[500px] object-cover mb-6 rounded-lg"
        />
        <div className="blog-content">
          {post.content.map((contentItem) => (
            <div key={contentItem._id} className="mb-4 leading-relaxed">
              {ReactHtmlParser(contentItem.resource)}
            </div>
          ))}
        </div>
        <Link to="/blogs" className="text-blue-500">
          Go back to all Blogs
        </Link>
      </div>
      <Footer />
    </div>
  );
};

export default BlogPost;

const generateSlug = (title) => {
  return title
    .toLowerCase()
    .replace(/ /g, "-")
    .replace(/[^\w-]+/g, "");
};
