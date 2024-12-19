import React, { useState, useRef, useEffect } from "react";
import { FaLinkedin, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import yunus from "./images/yunus.png";
import mgraf from "./images/mgraf.png";
import roshan from "./images/roshan.png";
import gensler from "./images/Gensler.jpg";
import aditya from "./images/aditya.png";

const Testimonials = () => {
  const [isPaused, setIsPaused] = useState(false);
  const scrollContainerRef = useRef(null);
  const [expandedCards, setExpandedCards] = useState({});
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
      date: "November 2024",
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
      date: "May 2023",
    },
    {
      name: "Dr. Andre Gensler",
      role: "MLOps Engineer at Munich Re",
      image: gensler,
      text:
        "I am writing to recommend Dhanunjaya Elluri Thimmaraju for any future endeavors he may undertake. I had the pleasure of working more than 6 months with Dhanunjaya on a project to create an inhouse MLOps platform in the insurance space, where I served as the lead software engineer and Dhanunjaya as student intern. I must say that he performed exceptionally well, and his contributions to the project were very valuable.\n\n" +
        "Throughout his time with us, Dhanunjaya consistently demonstrated his great programming skills, technical knowledge, and eagerness to learn. He proved to be a quick learner and easily adapted to our project's requirements, quickly grasping the scope of the project and delivering quality work within set timelines. His ability to analyze complex problems and develop effective solutions impressed me, and he was never shy to ask questions or seek feedback. Besides his technical expertise, Dhanunjaya was also a great team player, always willing to collaborate with other team members and share his insights. He was respectful, reliable, and communicated effectively, both verbally and in writing. His positive attitude and enthusiasm for the project made him valuable to the team.\n\n" +
        "Overall, I strongly endorse Dhanunjaya Elluri Thimmaraju for any future positions or opportunities. His technical prowess, exceptional work ethic, and positive attitude make him an ideal candidate for any role requiring technical proficiency, innovation, and strong teamwork skills. Please do not hesitate to contact me if you require further information.",
      linkedinUrl: "https://de.linkedin.com/in/dr-andr%C3%A9-gensler-11973747",
      date: "May 2023",
    },
    {
      name: "Aditya Sanivarapu",
      role: "Lead Engineer at Carrier",
      image: aditya,
      text: "I worked with Dhanunjaya when I was with TCS. I supervised Dhanunjaya when he was first hired into our project and he quickly became one of the most productive people in our team. Your practical approach to problem solving was a great asset to our team. Your constant efforts made our team to achieve goals as a cohesive unit.",
      linkedinUrl:
        "https://www.linkedin.com/in/dhanunjaya-elluri/details/recommendations/?detailScreenTabIndex=0",
      date: "September 2022",
    },
  ];

  const toggleCard = (index, event) => {
    event.preventDefault();
    event.stopPropagation();

    setExpandedCards((prev) => ({
      [index]: !prev[index],
    }));
  };

  // Auto scroll function
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container || isPaused) return;

    const cardWidth = 350;
    const gap = 24;
    let animationFrameId;
    const speed = 1.2; // Increased speed slightly for visibility

    const animate = () => {
      if (!container) return;

      // Increment scroll position
      container.scrollLeft += speed;

      // Check if we need to loop
      if (
        container.scrollLeft >=
        container.scrollWidth - container.clientWidth
      ) {
        container.scrollLeft = 0;
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    // Start animation
    animationFrameId = requestAnimationFrame(animate);

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [isPaused]);

  // Handle hover
  const handleMouseEnter = () => setIsPaused(true);
  const handleMouseLeave = () => setIsPaused(false);

  return (
    <div className="testimonials-container">
      <h1>Testimonials</h1>
      <div
        className="testimonials-grid"
        ref={scrollContainerRef}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className={`testimonial-card ${
              expandedCards[index] ? "expanded" : ""
            }`}
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
        {testimonials.slice(0, 3).map((testimonial, index) => (
          <div
            key={`clone-${index}`}
            className={`testimonial-card clone-card ${
              expandedCards[index] ? "expanded" : ""
            }`}
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
              <div className="testimonial-text">
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
