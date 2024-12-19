import React from "react";

const MarkdownContent = ({ content }) => {
  const parseInlineStyles = (text) => {
    // Process the text in order: code, bold, italic, links
    let parts = text.split(/(`[^`]+`)/).filter(Boolean);
    parts = parts.map((part, index) => {
      if (part.startsWith("`") && part.endsWith("`")) {
        return (
          <code key={`code-${index}`} className="inline-code">
            {part.slice(1, -1)}
          </code>
        );
      }

      // Handle bold text
      const boldParts = part.split(/(\*\*[^*]+\*\*)/).filter(Boolean);
      return boldParts.map((boldPart, boldIndex) => {
        if (boldPart.startsWith("**") && boldPart.endsWith("**")) {
          return (
            <strong key={`bold-${index}-${boldIndex}`}>
              {boldPart.slice(2, -2)}
            </strong>
          );
        }

        // Handle italic text
        const italicParts = boldPart.split(/(_[^_]+_)/).filter(Boolean);
        return italicParts.map((italicPart, italicIndex) => {
          if (italicPart.startsWith("_") && italicPart.endsWith("_")) {
            return (
              <em key={`italic-${index}-${boldIndex}-${italicIndex}`}>
                {italicPart.slice(1, -1)}
              </em>
            );
          }

          // Handle links
          const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
          const linkParts = italicPart.split(linkRegex);
          if (linkParts.length > 1) {
            return linkParts.map((part, linkIndex) => {
              if (linkIndex % 3 === 1) {
                return (
                  <a
                    key={`link-${index}-${linkIndex}`}
                    href={linkParts[linkIndex + 1]}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {part}
                  </a>
                );
              }
              return linkIndex % 3 === 0 ? part : null;
            });
          }

          return (
            <span key={`text-${index}-${boldIndex}-${italicIndex}`}>
              {italicPart}
            </span>
          );
        });
      });
    });

    return parts.flat().filter(Boolean);
  };

  const renderContent = (content) => {
    const lines = content.split("\n");
    const elements = [];
    let currentList = [];
    let isInList = false;
    let listIndentLevel = 0;
    let currentListType = null;
    let isInBlockquote = false;
    let blockquoteContent = [];

    const finishCurrentList = (index) => {
      if (currentList.length > 0) {
        const ListComponent = currentListType === "ol" ? "ol" : "ul";
        elements.push(
          <ListComponent
            key={`list-${index}`}
            style={{ paddingLeft: `${listIndentLevel * 20}px` }}
          >
            {currentList}
          </ListComponent>,
        );
        currentList = [];
        isInList = false;
        listIndentLevel = 0;
      }
    };

    const finishBlockquote = (index) => {
      if (blockquoteContent.length > 0) {
        elements.push(
          <blockquote key={`blockquote-${index}`}>
            {blockquoteContent.map((content, i) => (
              <p key={i}>{parseInlineStyles(content)}</p>
            ))}
          </blockquote>,
        );
        blockquoteContent = [];
        isInBlockquote = false;
      }
    };

    lines.forEach((line, index) => {
      const trimmedLine = line.trim();
      const indentLevel = (line.match(/^\s*/) || [""])[0].length / 2;

      // Handle headers (h1 to h6)
      const headerMatch = trimmedLine.match(/^(#{1,6})\s+(.+)$/);
      if (headerMatch) {
        finishCurrentList(index);
        finishBlockquote(index);
        const level = headerMatch[1].length;
        const headingText = headerMatch[2];
        const id = headingText.toLowerCase().replace(/[^\w]+/g, "-");
        const HeaderTag = `h${level}`;
        elements.push(
          <HeaderTag key={index} id={id}>
            {parseInlineStyles(headingText)}
          </HeaderTag>,
        );
      }
      // Handle blockquotes
      else if (trimmedLine.startsWith("> ")) {
        isInBlockquote = true;
        blockquoteContent.push(trimmedLine.slice(2));
      }
      // Handle horizontal rules
      else if (trimmedLine === "---" || trimmedLine === "***") {
        finishCurrentList(index);
        finishBlockquote(index);
        elements.push(<hr key={index} />);
      }
      // Handle lists
      else if (trimmedLine.startsWith("- ") || trimmedLine.startsWith("* ")) {
        if (
          !isInList ||
          currentListType !== "ul" ||
          listIndentLevel !== indentLevel
        ) {
          finishCurrentList(index);
          isInList = true;
          currentListType = "ul";
          listIndentLevel = indentLevel;
        }
        currentList.push(
          <li key={`item-${index}`}>
            {parseInlineStyles(trimmedLine.slice(2))}
          </li>,
        );
      } else if (/^\d+\.\s/.test(trimmedLine)) {
        if (
          !isInList ||
          currentListType !== "ol" ||
          listIndentLevel !== indentLevel
        ) {
          finishCurrentList(index);
          isInList = true;
          currentListType = "ol";
          listIndentLevel = indentLevel;
        }
        currentList.push(
          <li key={`item-${index}`}>
            {parseInlineStyles(trimmedLine.replace(/^\d+\.\s/, ""))}
          </li>,
        );
      }
      // Handle paragraphs
      else if (trimmedLine !== "") {
        finishCurrentList(index);
        if (isInBlockquote) {
          blockquoteContent.push(trimmedLine);
        } else {
          elements.push(
            <p key={index} style={{ paddingLeft: `${indentLevel * 20}px` }}>
              {parseInlineStyles(trimmedLine)}
            </p>,
          );
        }
      }
      // Handle empty lines
      else if (trimmedLine === "") {
        finishBlockquote(index);
      }
    });

    finishCurrentList("final");
    finishBlockquote("final");
    return elements;
  };

  return <div className="markdown-content">{renderContent(content)}</div>;
};

export default MarkdownContent;
