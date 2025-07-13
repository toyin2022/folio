import React from "react";
import { projects } from "../constants";

const Works = () => {
  return (
    <section id="work" className="py-10 px-4 max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold text-white mb-4 text-center">
        Projects
      </h2>
      <p className="text-secondary text-center mb-8">
        Following projects showcase my skills and experience through real-world
        examples of my work. More projects coming soon.
      </p>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {Array.isArray(projects) && projects.length > 0 ? (
          projects.map((project, idx) => (
            <div
              key={project.name + idx}
              className="bg-tertiary rounded-xl p-5 shadow-md flex flex-col h-full"
            >
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-40 object-cover rounded-lg mb-4"
                loading="lazy"
              />
              <h3 className="text-xl font-semibold text-white mb-2">
                {project.name}
              </h3>
              <p className="text-secondary text-sm mb-3 flex-1">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tags &&
                  project.tags.map((tag) => (
                    <span
                      key={tag.name}
                      className={`text-xs rounded px-2 py-1 ${
                        tag.color || "text-primary bg-primary/10"
                      }`}
                    >
                      #{tag.name}
                    </span>
                  ))}
              </div>
              {project.source_code_link && (
                <a
                  href={project.source_code_link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-block text-white underline text-sm hover:text-secondary"
                >
                  Live View
                </a>
              )}
            </div>
          ))
        ) : (
          <div className="text-white col-span-full text-center">
            No projects found.
          </div>
        )}
      </div>
    </section>
  );
};

export default Works;
