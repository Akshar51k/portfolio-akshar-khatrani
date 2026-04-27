import { useScrollReveal } from "../hooks/useScrollReveal";
import { projectsData } from "../data/content";

function ProjectCard({ project, index }) {
  const { ref, isVisible } = useScrollReveal();

  return (
    <div
      ref={ref}
      className={`reveal ${isVisible ? "visible" : ""} group mb-16`}
      style={{ transitionDelay: `${index * 0.1}s` }}
    >
      <div className="flex flex-col">
        <h3 className="text-2xl font-medium text-text mb-3 group-hover:text-accent transition-colors duration-300">
          {project.title}
        </h3>
        <p className="text-text-muted text-base leading-relaxed mb-4 max-w-2xl">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-3 mb-4">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-sm text-text-dim"
            >
              {tag}
            </span>
          ))}
        </div>
        <div>
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-text underline underline-offset-4 hover:opacity-70 transition-opacity"
          >
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const { ref: headerRef, isVisible: headerVisible } = useScrollReveal();

  return (
    <section id="projects" className="py-16 md:py-24">
      <div className="max-w-5xl mx-auto px-6">
        <div
          ref={headerRef}
          className={`reveal ${headerVisible ? "visible" : ""} mb-12`}
        >
          <h2 className="text-3xl font-serif text-text mb-2">
            Work
          </h2>
        </div>

        <div className="flex flex-col">
          {projectsData.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
