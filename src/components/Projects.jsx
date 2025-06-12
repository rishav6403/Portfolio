// src/components/Projects.jsx

import { projects } from "../data/projects";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

export default function ProjectsComponent() {
  return (
    <section id="projects" className="py-12 px-4 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">
        Featured Projects
      </h2>

      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-[#f9fafb] rounded-xl shadow-md overflow-hidden hover:shadow-xl hover:-translate-y-1 transition duration-300 border-1 border-gray-300"
          >
            {project.image && (
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
            )}

            <div className="p-6">
              <h3 className="text-xl font-semibold text-blue-600 mb-2">
                {project.title}
              </h3>
              <p className="text-gray-700 mb-4">{project.description}</p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.split(",").map((tech, i) => (
                  <span
                    key={i}
                    className="bg-blue-100 text-blue-800 text-xs font-semibold px-3 py-1 rounded-full"
                  >
                    {tech.trim()}
                  </span>
                ))}
              </div>

              <div className="flex space-x-4">
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center bg-blue-500 text-white px-4 py-2 rounded hover:bg-gray-700 transition"
                >
                  <FaExternalLinkAlt className="mr-2" />
                  Live Demo
                </a>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-900 transition"
                >
                  <FaGithub className="mr-2" />
                  GitHub
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
