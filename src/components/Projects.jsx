import { useState } from "react";
import "../styles/Projects.css";

const projects = [
  {
    title: "Screenshare",
    description:
      "A social platform for movie enthusiasts to create and manage personalized movie lists while engaging with other users.",
    github: "https://github.com/karayusuff/Screenshare",
    live: "https://screenshare-24ps.onrender.com/",
    images: [
      "/my-portfolio/screenshare-landing-page.png",
      "/my-portfolio/screenshare-movies-page.png",
      "/my-portfolio/screenshare-users-page.png",
      "/my-portfolio/screenshare-movie-page-1.png",
      "/my-portfolio/screenshare-movie-page-2.png",
      "/my-portfolio/screenshare-user-page.png"
    ]
  },
  {
    title: "Homebnb",
    description:
      "A full-stack web application inspired by Airbnb, allowing users to list, browse, and review rental properties.",
    github: "https://github.com/karayusuff/Homebnb",
    live: "https://homebnb-tupx.onrender.com/",
    images: [
      "/my-portfolio/homebnb-landing-page.png",
      "/my-portfolio/homebnb-listing-page-1.png",
      "/my-portfolio/homebnb-listing-page-2.png"
    ]
  },
  {
    title: "Flux",
    description:
      "A social media platform where users can create image-based posts, engage through likes, comments, and follows, and stay updated via a real-time activity feed.",
    github: "https://github.com/karayusuff/Flux",
    live: "https://flux-1ty5.onrender.com/",
    images: [
      "/my-portfolio/flux-landing-page.png",
      "/my-portfolio/flux-follows-page.png",
      "/my-portfolio/flux-likes-page.png"
    ]
  }
];

function Projects() {
  return (
    <section id="projects">
      <h2 className="section-title">Projects</h2>
      <div className="projects-container">
        {projects.map((project, index) => (
          <ProjectItem key={index} project={project} reverseLayout={index % 2 !== 0} />
        ))}
      </div>
    </section>
  );
}

function ProjectItem({ project, reverseLayout }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleNext = () => {
    setCurrentImageIndex((prevIndex) => prevIndex + 1);
  };

  const handlePrev = () => {
    setCurrentImageIndex((prevIndex) => prevIndex - 1);
  };

  return (
    <div className={`project-item ${reverseLayout ? "reverse" : ""}`}>
      <div className="project-image">
        <img src={project.images[currentImageIndex]} alt={project.title} />
          <button
            onClick={handlePrev}
            className={`nav-arrow left ${currentImageIndex === 0 ? "hidden" : ""}`}
          >
            &lt;
          </button>
          <button
            onClick={handleNext}
            className={`nav-arrow right ${currentImageIndex === project.images.length - 1 ? "hidden" : ""}`}
          >
            &gt;
          </button>
        <div className="image-overlay">
          <div className="image-title">{`Image ${currentImageIndex + 1}`}</div>
        </div>
      </div>
      <div className="project-details">
        <h3 className="project-title">{project.title}</h3>
        <p className="project-description">{project.description}</p>
        <div className="project-links">
          {project.github && (
            <a href={project.github} target="_blank" rel="noopener noreferrer">
              GitHub Repo
            </a>
          )}
          {project.live && (
            <a href={project.live} target="_blank" rel="noopener noreferrer">
              Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default Projects;