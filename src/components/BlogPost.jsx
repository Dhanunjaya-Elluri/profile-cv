import React, { useEffect, useState } from "react";
import { useParams, Navigate } from "react-router-dom";
import { blogPosts } from "../data/blogPosts";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import MarkdownContent from "./MarkdownContent";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import {
  FaUser,
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import profileImage from "./images/profile-image.png";

const BlogPost = () => {
  const { slug } = useParams();
  const [headings, setHeadings] = useState([]);

  const post = blogPosts.find((post) => post.slug === slug);

  useEffect(() => {
    if (post) {
      const extractHeadings = () => {
        const headingRegex = /^##\s+([^#\n]+)/gm;
        const matches = [...post.content.matchAll(headingRegex)];
        return matches.map((match) => ({
          title: match[1].trim(),
          id: match[1]
            .trim()
            .toLowerCase()
            .replace(/[^\w]+/g, "-"),
        }));
      };

      setHeadings(extractHeadings());
    }
  }, [post]);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 110; // Adjust this value based on your header height
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  const renderContent = (content) => {
    // Split content to separate code blocks from regular text
    const parts = content.split(/(```[\s\S]+?```)/);

    return parts.map((part, index) => {
      if (part.startsWith("```")) {
        // Handle code blocks with ReactMarkdown
        return (
          <ReactMarkdown
            key={index}
            components={components}
            remarkPlugins={[remarkGfm]}
          >
            {part}
          </ReactMarkdown>
        );
      }
      // Handle regular text with our custom component
      return <MarkdownContent key={index} content={part} />;
    });
  };

  const components = {
    code({ className, children, ...props }) {
      const match = /language-(\w+)/.exec(className || "");
      return match ? (
        <div className="code-block">
          <SyntaxHighlighter
            style={vscDarkPlus}
            language={match[1]}
            PreTag="div"
            {...props}
          >
            {String(children).replace(/\n$/, "")}
          </SyntaxHighlighter>
        </div>
      ) : (
        <code className={className} {...props} />
      );
    },
    h2: ({ children }) => {
      const id = children
        .toString()
        .toLowerCase()
        .replace(/[^\w]+/g, "-");
      return <h2 id={id}>{children}</h2>;
    },
  };

  return (
    <div className="blog-post-container">
      <article className="blog-post">
        <header className="blog-post-header">
          <h1>{post.title}</h1>
          <div className="blog-post-meta">
            <span className="blog-author">
              <FaUser className="author-icon" />
              Dhanunjaya Elluri
            </span>
            <span className="blog-date">{post.date}</span>
            <span className="blog-read-time">{post.readTime}</span>
          </div>
        </header>
        <div className="prose prose-lg dark:prose-invert max-w-none">
          {renderContent(post.content)}
        </div>

        <footer className="blog-post-footer">
          <h2>AUTHORS</h2>
          <div className="blog-author-card">
            <img
              src={profileImage}
              alt="Dhanunjaya Elluri"
              className="author-image"
            />
            <div className="author-info">
              <h3>Dhanunjaya Elluri</h3>
              <p className="author-role">ML Engineer</p>
              <div className="author-social">
                <a href="mailto:dhanunjaya.elluri@gmail.com" aria-label="Email">
                  <FaEnvelope />
                </a>
                <a
                  href="https://github.com/Dhanunjaya-Elluri"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                >
                  <FaGithub />
                </a>
                <a
                  href="https://www.linkedin.com/in/dhanunjayaelluri/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin />
                </a>
                <a
                  href="https://twitter.com/dhanunjayaellur"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="X (formerly Twitter)"
                >
                  <FaXTwitter />
                </a>
                <a
                  href="https://www.instagram.com/dhanunjaya.elluri/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                >
                  <FaInstagram />
                </a>
              </div>
            </div>
          </div>
        </footer>
      </article>

      <aside className="table-of-contents">
        <div className="toc-container">
          <h2>On this page</h2>
          <nav>
            <ul>
              {headings.map((heading, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(heading.id)}
                    className="toc-link"
                  >
                    {heading.title}
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
