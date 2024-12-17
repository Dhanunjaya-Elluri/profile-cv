import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

const blogs = [
  {
    id: "create-simple-blog",
    date: "Oct 27, 2023",
    title: "🎨 Easily create your own simple yet highly customizable blog",
    description:
      "Take full control of your personal brand and privacy by migrating away from the big tech platforms!",
    slug: "/blog/create-simple-blog",
  },
  {
    id: "second-brain",
    date: "Oct 26, 2023",
    title: "🧠 Sharpen your thinking with a second brain",
    description:
      "Create a personal knowledge base and share your knowledge with your peers.",
    slug: "/blog/second-brain",
  },
  {
    id: "data-viz",
    date: "Oct 25, 2023",
    title:
      "📊 Communicate your results effectively with the best data visualizations",
    description: "Use popular tools such as Plotly, Mermaid, and data frames.",
    slug: "/blog/data-viz",
  },
];

const Blog = () => {
  return (
    <div className="blog-container">
      <h1>Blog</h1>
      <div className="blog-list">
        {blogs.map((blog) => (
          <article key={blog.id} className="blog-preview">
            <div className="blog-meta">
              <time>{blog.date}</time>
            </div>
            <div className="blog-content">
              <h2>{blog.title}</h2>
              <p className="blog-description">{blog.description}</p>
              <Link to={blog.slug} className="read-more">
                Read more <FaArrowRight className="arrow-icon" />
              </Link>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default Blog;
