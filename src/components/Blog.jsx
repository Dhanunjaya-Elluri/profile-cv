import React from "react";
import { Link } from "react-router-dom";
import { blogPosts } from "../data/blogPosts";

const Blog = () => {
  return (
    <div className="blog-container">
      <h1>Blog</h1>
      <div className="blog-list">
        {blogPosts.map((post, index) => (
          <Link
            to={`/blog/${post.slug}`}
            key={index}
            className="blog-post-preview"
          >
            <div className="blog-post-date">{post.date}</div>
            <div className="blog-post-content-preview">
              <h2>{post.title}</h2>
              <p>{post.description}</p>
              <span className="read-more">Read more →</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Blog;
