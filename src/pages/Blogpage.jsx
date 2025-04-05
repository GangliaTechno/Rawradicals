// src/BlogPage.jsx
import React, { useState } from "react";
import Navbar from "../components/Navbar";

const BlogPage = () => {
  const [blogPosts] = useState([
    {
      id: 1,
      title: "Blog Post Title 1",
      date: "March 25, 2025",
      excerpt: "Short excerpt or preview of the blog post goes here...",
      image: "/images/avurveda_1.png", // Relative path to image in the public folder
    },
    {
      id: 2,
      title: "Blog Post Title 2",
      date: "April 1, 2025",
      excerpt: "Short excerpt or preview of the blog post goes here...",
      image: "/images/avurveda_1.png",
    },
    {
      id: 3,
      title: "Blog Post Title 3",
      date: "April 2, 2025",
      excerpt: "Short excerpt or preview of the blog post goes here...",
      image: "/images/avurveda_1.png",
    },
    {
      id: 4,
      title: "Blog Post Title 4",
      date: "April 5, 2025",
      excerpt: "Another short excerpt for blog post 4 goes here...",
      image: "/images/avurveda_1.png",
    },
    {
      id: 5,
      title: "Blog Post Title 5",
      date: "April 7, 2025",
      excerpt: "Another short excerpt for blog post 5 goes here...",
      image: "/images/avurveda_1.png",
    },
  ]);

  return (
    <div className="font-sans bg-white min-h-screen flex flex-col">
      {/* Imported Navbar */}
      <Navbar />
      
      {/* Main Blog Section with added padding-top */}
      <main className="container mx-auto px-4 pt-20 py-8 flex-grow">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <article
              key={post.id}
              className="bg-white border border-gray-200 rounded-xl shadow-md transition transform hover:scale-105 hover:shadow-xl overflow-hidden cursor-pointer"
            >
              {/* Image Container */}
              <div className="relative w-full h-70">
                <img
                  src={post.image}
                  alt={`Blog post ${post.id}`}
                  className="absolute inset-0 w-full h-full object-cover transition duration-300 ease-in-out"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-2">{post.title}</h3>
                <p className="text-gray-600 text-sm mb-2">{post.date}</p>
                <p className="text-gray-700 mb-4">{post.excerpt}</p>
                <button className="bg-black text-white px-4 py-2 rounded transition transform duration-300 hover:bg-gray-800 hover:scale-105 cursor-pointer">
                  Read More
                </button>
              </div>
            </article>
          ))}
        </div>
      </main>
    </div>
  );
};

export default BlogPage;
