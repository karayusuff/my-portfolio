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
      { src: "/screenshare-landing-page.png", name: "Landing Page" },
      { src: "/screenshare-movies-page.png", name: "Movies Page" },
      { src: "/screenshare-users-page.png", name: "Users Page" },
      { src: "/screenshare-movie-page-1.png", name: "Movie Details 1" },
      { src: "/screenshare-movie-page-2.png", name: "Movie Details 2" },
      { src: "/screenshare-user-page.png", name: "User Profile" }
    ]
  },
  {
    title: "Homebnb",
    description:
      "A full-stack web application inspired by Airbnb, allowing users to list, browse, and review rental properties.",
    github: "https://github.com/karayusuff/Homebnb",
    live: "https://homebnb-tupx.onrender.com/",
    images: [
      { src: "/homebnb-landing-page.png", name: "Landing Page" },
      { src: "/homebnb-listing-page-1.png", name: "Listing Page 1" },
      { src: "/homebnb-listing-page-2.png", name: "Listing Page 2" }
    ]
  },
  {
    title: "Flux",
    description:
      "A social media platform where users can create image-based posts, engage through likes, comments, and follows, and stay updated via a real-time activity feed.",
    github: "https://github.com/karayusuff/Flux",
    live: "https://flux-1ty5.onrender.com/",
    images: [
      { src: "/flux-landing-page.png", name: "Landing Page" },
      { src: "/flux-follows-page.png", name: "Follows Page" },
      { src: "/flux-likes-page.png", name: "Likes Page" }
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
        <img src={project.images[currentImageIndex].src} alt={project.images[currentImageIndex].name} />
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
          <div className="image-title">{project.images[currentImageIndex].name}</div>
        </div>
      </div>
      <div className="project-details">
        <div className="project-title-container">
          <h3 
            className="project-title" 
            onClick={() => window.open(project.live, "_blank", "noopener,noreferrer")}
          >
            {project.title}
          </h3>
        </div>
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