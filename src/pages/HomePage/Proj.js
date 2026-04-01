import React from "react";
import "./Proj.css";

const Proj = () => {
  const projectsData = [
    {
      id: 1,
      title: "Rooftop Solar Installation",
      desc: "Efficient rooftop PV systems designed for long-term performance and savings.",
      img: "/roof.jpg", // public folder path
    },
    {
      id: 2,
      title: "Commercial Solar Array",
      desc: "Large-scale installations that help businesses reduce power costs and carbon footprint.",
      img: "/comm.jpg",
    },
    {
      id: 3,
      title: "Solar Farm Deployment",
      desc: "Utility-scale solar farm projects delivering clean energy at scale.",
      img: "/farm.jpg",
    },
    {
      id: 4,
      title: "Industrial Solar Solution",
      desc: "Robust system designs for factories and warehouses that require high energy output.",
      img: "/ind.jpg",
    },
  ];

  return (
    <section className="projects-section">
      <div className="projects-header">
        <h2 className="projects-title">Our Recent Projects</h2>
        <div className="yellow-dash"></div>
        <p className="projects-subtitle">
          A glimpse into our most impactful solar installations across
          residential, commercial & industrial sectors.
        </p>
      </div>

      <div className="projects-grid">
        {projectsData.map((project) => (
          <div key={project.id} className="project-card">
            <div className="project-img-wrapper">
              <img src={project.img} alt={project.title} />
            </div>
            <div className="project-content">
              <h3 className="project-card-title">{project.title}</h3>
              <p className="project-card-desc">{project.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Proj;
