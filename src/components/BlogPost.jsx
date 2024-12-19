import React from "react";
import { useParams, Link } from "react-router-dom";
import { FaClock, FaUser, FaArrowLeft, FaArrowRight } from "react-icons/fa";
import SocialLinks from "./SocialLinks";
import profileImage from "../components/images/profile-image.png";

const blogs = {
  "create-simple-blog": {
    title: "🎨 Easily create your own simple yet highly customizable blog",
    date: "Oct 27, 2023",
    author: "Dhanunjaya Elluri",
    readTime: "3 min read",
    content: {
      overview:
        "Take full control of your personal brand and privacy by migrating away from the big tech platforms!",
      sections: [
        {
          id: "get-started",
          title: "Get Started",
          content: "Getting started is easy. Just follow these simple steps...",
        },
        {
          id: "crowd-funded",
          title: "Crowd-funded open-source software",
          content:
            "This project is open source and supported by the community...",
        },
        {
          id: "ecosystem",
          title: "Ecosystem",
          content: "The ecosystem consists of various tools and plugins...",
        },
        {
          id: "inspiration",
          title: "Inspiration",
          content: "This project was inspired by...",
        },
        {
          id: "features",
          title: "Features",
          content: "Key features include...",
        },
        {
          id: "themes",
          title: "Themes",
          content: "Customize your blog with various themes...",
        },
        {
          id: "license",
          title: "License",
          content: "This project is licensed under...",
        },
      ],
    },
  },
  "second-brain": {
    title: "🧠 Sharpen your thinking with a second brain",
    date: "Oct 26, 2023",
    author: "Dhanunjaya Elluri",
    readTime: "4 min read",
    content: {
      overview:
        "Take full control of your personal brand and privacy by migrating away from the big tech platforms!",
      sections: [
        {
          id: "get-started",
          title: "Get Started",
          content: "Getting started is easy. Just follow these simple steps...",
        },
        {
          id: "crowd-funded",
          title: "Crowd-funded open-source software",
          content:
            "This project is open source and supported by the community...",
        },
        {
          id: "ecosystem",
          title: "Ecosystem",
          content: "The ecosystem consists of various tools and plugins...",
        },
        {
          id: "inspiration",
          title: "Inspiration",
          content: "This project was inspired by...",
        },
        {
          id: "features",
          title: "Features",
          content: "Key features include...",
        },
        {
          id: "themes",
          title: "Themes",
          content: "Customize your blog with various themes...",
        },
        {
          id: "license",
          title: "License",
          content: "This project is licensed under...",
        },
      ],
    },
  },
  "data-viz": {
    title:
      "📊 Communicate your results effectively with the best data visualizations",
    date: "Oct 25, 2023",
    author: "Dhanunjaya Elluri",
    readTime: "5 min read",
    content: {
      overview:
        "Take full control of your personal brand and privacy by migrating away from the big tech platforms!",
      sections: [
        {
          id: "get-started",
          title: "Get Started",
          content: "Getting started is easy. Just follow these simple steps...",
        },
        {
          id: "crowd-funded",
          title: "Crowd-funded open-source software",
          content:
            "This project is open source and supported by the community...",
        },
        {
          id: "ecosystem",
          title: "Ecosystem",
          content: "The ecosystem consists of various tools and plugins...",
        },
        {
          id: "inspiration",
          title: "Inspiration",
          content: "This project was inspired by...",
        },
        {
          id: "features",
          title: "Features",
          content: "Key features include...",
        },
        {
          id: "themes",
          title: "Themes",
          content: "Customize your blog with various themes...",
        },
        {
          id: "license",
          title: "License",
          content: "This project is licensed under...",
        },
      ],
    },
  },
};

const BlogPost = () => {
  const { slug } = useParams();
  const post = blogs[slug];

  if (!post) {
    return <div>Blog post not found</div>;
  }

  // Get the slugs of all blog posts
  const blogSlugs = Object.keys(blogs);
  const currentIndex = blogSlugs.indexOf(slug);
  const prevPost = currentIndex > 0 ? blogs[blogSlugs[currentIndex - 1]] : null;
  const nextPost =
    currentIndex < blogSlugs.length - 1
      ? blogs[blogSlugs[currentIndex + 1]]
      : null;

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="blog-post-container">
      <article className="blog-post-content">
        <header className="blog-post-header">
          <h1>{post.title}</h1>
          <div className="blog-post-meta">
            <span className="meta-item">
              <FaUser className="meta-icon" />
              {post.author}
            </span>
            <span className="meta-item">
              <FaClock className="meta-icon" />
              {post.readTime}
            </span>
            <time className="meta-item">{post.date}</time>
          </div>
        </header>

        <div className="blog-post-body">
          <p className="overview">{post.content.overview}</p>

          {post.content.sections.map((section) => (
            <section key={section.id} id={section.id}>
              <h2>{section.title}</h2>
              <p>{section.content}</p>
            </section>
          ))}
        </div>

        <footer className="blog-post-footer">
          <div className="author-section">
            <div className="author-image-container">
              <img
                src={profileImage}
                alt={post.author}
                className="author-image"
              />
            </div>
            <div className="author-info">
              <h3>AUTHORS</h3>
              <h4>{post.author}</h4>
              <p>ML Engineer</p>
              <SocialLinks />
            </div>
          </div>

          <div className="post-navigation">
            {prevPost && (
              <Link
                to={`/blog/${blogSlugs[currentIndex - 1]}`}
                className="nav-link prev"
              >
                <FaArrowLeft className="nav-icon" />
                <div className="nav-content">
                  <span>Previous</span>
                  <h4>{prevPost.title}</h4>
                </div>
              </Link>
            )}
            {nextPost && (
              <Link
                to={`/blog/${blogSlugs[currentIndex + 1]}`}
                className="nav-link next"
              >
                <div className="nav-content">
                  <span>Next</span>
                  <h4>{nextPost.title}</h4>
                </div>
                <FaArrowRight className="nav-icon" />
              </Link>
            )}
          </div>
        </footer>
      </article>

      <aside className="table-of-contents">
        <div className="toc-container">
          <h2>On this page</h2>
          <nav>
            <ul>
              {post.content.sections.map((section) => (
                <li key={section.id}>
                  <button
                    onClick={() => scrollToSection(section.id)}
                    className="toc-link"
                  >
                    {section.title}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </aside>
    </div>
  );
};

export default BlogPost;
