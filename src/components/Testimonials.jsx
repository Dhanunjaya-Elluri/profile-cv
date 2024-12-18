import React, { useState, useRef } from "react";
import { FaLinkedin, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import yunus from "./images/yunus.png";
import mgraf from "./images/mgraf.png";
import roshan from "./images/roshan.png";
import aditya from "./images/aditya.png";

const Testimonials = () => {
  const [expandedCards, setExpandedCards] = useState({});
  const scrollContainerRef = useRef(null);
  const textRefs = useRef({});

  const testimonials = [
    {
      name: "Yunus Bulut",
      role: "CEO at Validaitor",
      image: yunus,
      text:
        "I had the pleasure of working with Dhanunjaya at Validaitor, and I can confidently say that he is an exceptional professional. Dhanunjaya consistently demonstrated a systematic approach to his work, ensuring that every task was meticulously documented and executed with precision.\n\n" +
        "His hard work and dedication were evident in every project he undertook. He has an impressive ability to learn quickly, adapting to new challenges and technologies with ease. This skill, combined with his strong work ethic, made him an invaluable asset to our team.\n\n" +
        "Moreover, Dhanunjaya is a true team player. He collaborates seamlessly with his colleagues, fostering a positive and productive work environment. His ability to build strong relationships and work effectively within a team setting is commendable.\n\n" +
        "I highly recommend Dhanunjaya for any position that requires a detail-oriented, hardworking, and collaborative professional. He would be a great addition to any team.",
      linkedinUrl:
        "https://www.linkedin.com/in/dhanunjaya-elluri/details/recommendations/?detailScreenTabIndex=0",
      date: "November 2024",
    },
    {
      name: "Michael Graf",
      role: "Senior Software Engineer at Validaitor",
      image: mgraf,
      text:
        "Dhanunjaya did great work in managing our AWS and LLM infrastructure at Validaitor.\n\n" +
        "He was able to quickly, independently and creatively solve many challenges across our full range of AWS (including ECS, RDS, SNS, EC2 Lambda and many others). In addition to this Jay was also managing our LLM Operations. Deploying and managing models on AWS (Bedrock & Sagemaker) as well as using Azure Studio. \n\n" +
        "I especially appreciated his structured way of working, willingness to learn, adherence to best practices and diligence in documenting his work, which made collaboration, especially on long term tasks, with Dhanunjaya a joy. Dhanunjaya was always on top of his communications, so adapting quickly in a fast paced startup environment worked as well as we could imagine.",
      linkedinUrl:
        "https://www.linkedin.com/in/dhanunjaya-elluri/details/recommendations/?detailScreenTabIndex=0",
      date: "February 2024",
    },
    {
      name: "Roshan Amasa",
      role: "Data and AI Lead at Munich Re",
      image: roshan,
      text:
        "I had the pleasure of working with Dhanunjaya Elluri during his internship at Munich Reinsurance, where he demonstrated outstanding skills and knowledge in the field of MLOps and Feature Store.\n\n" +
        "Dhanunjaya's ability to analyze complex data and build models that deliver actionable insights was impressive. His knowledge of data processing and predictive modeling algorithms, combined with his expertise in scripting languages such as Python and R, allowed him to efficiently tackle any challenge he faced.\n\n" +
        "Throughout his internship, Dhanunjaya showed an exceptional work ethic and was always willing to take on new tasks and responsibilities. His excellent communication skills and ability to work collaboratively with other team members made him a valuable asset to our team.\n\n" +
        "I have no doubt that Dhanunjaya will excel in any role that he takes on in the future. His dedication, expertise, and passion for data science and MLOps make him a valuable addition to any organization. I would highly recommend him to any prospective employer looking for a skilled and knowledgeable data scientist.",
      linkedinUrl:
        "https://www.linkedin.com/in/dhanunjaya-elluri/details/recommendations/?detailScreenTabIndex=0",
      date: "January 2024",
    },
    {
      name: "Aditya Sanivarapu",
      role: "Lead Engineer at Carrier",
      image: aditya,
      text: "I worked with Dhanunjaya when I was with TCS. I supervised Dhanunjaya when he was first hired into our project and he quickly became one of the most productive people in our team. Your practical approach to problem solving was a great asset to our team. Your constant efforts made our team to achieve goals as a cohesive unit.",
      linkedinUrl:
        "https://www.linkedin.com/in/dhanunjaya-elluri/details/recommendations/?detailScreenTabIndex=0",
      date: "December 2023",
    },
  ];

  const toggleCard = (index, event) => {
    event.preventDefault();
    event.stopPropagation();

    setExpandedCards((prev) => ({
      [index]: !prev[index],
    }));
  };

  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const cardWidth = 400;
      const gap = 32;
      const scrollAmount = cardWidth + gap;

      // Get current scroll position
      const currentScroll = container.scrollLeft;
      const containerWidth = container.clientWidth;
      const scrollWidth = container.scrollWidth;

      // Calculate new scroll position
      let newScrollPosition;
      if (direction === "right") {
        // Check if we're at the end
        if (currentScroll + containerWidth >= scrollWidth) {
          newScrollPosition = 0; // Loop back to start
        } else {
          newScrollPosition = currentScroll + scrollAmount;
        }
      } else {
        // Check if we're at the start
        if (currentScroll <= 0) {
          newScrollPosition = scrollWidth - containerWidth; // Loop to end
        } else {
          newScrollPosition = currentScroll - scrollAmount;
        }
      }

      // Ensure scroll position is within bounds
      newScrollPosition = Math.max(
        0,
        Math.min(newScrollPosition, scrollWidth - containerWidth),
      );

      // Use scrollTo with smooth behavior
      container.scrollTo({
        left: newScrollPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="testimonials-container">
      <h1>Testimonials</h1>
      <button
        className="scroll-button prev"
        onClick={() => scroll("left")}
        aria-label="Previous testimonials"
      >
        <FaChevronLeft />
      </button>
      <button
        className="scroll-button next"
        onClick={() => scroll("right")}
        aria-label="Next testimonials"
      >
        <FaChevronRight />
      </button>
      <div className="testimonials-grid" ref={scrollContainerRef}>
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className={`testimonial-card ${expandedCards[index] ? "expanded" : ""}`}
          >
            <div className="testimonial-header">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="testimonial-image"
              />
              <div className="testimonial-info">
                <h3>{testimonial.name}</h3>
                <p className="testimonial-role">{testimonial.role}</p>
              </div>
            </div>
            <div className="testimonial-text-container">
              <div
                className="testimonial-text"
                ref={(el) => (textRefs.current[index] = el)}
              >
                {testimonial.text}
                {!expandedCards[index] && <div className="read-more-fade" />}
              </div>
            </div>
            <button
              className="read-more-button"
              onClick={(e) => toggleCard(index, e)}
            >
              {expandedCards[index] ? "Read Less" : "Read More"}
            </button>
            <div className="testimonial-footer">
              <span className="testimonial-date">{testimonial.date}</span>
              <a
                href={testimonial.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="linkedin-link"
              >
                <FaLinkedin />
                <span>View on LinkedIn</span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
