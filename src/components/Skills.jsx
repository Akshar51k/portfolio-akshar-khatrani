import { useScrollReveal } from "../hooks/useScrollReveal";
import { skillsData } from "../data/content";

export default function Skills() {
  const { ref: headerRef, isVisible: headerVisible } = useScrollReveal();

  return (
    <section id="skills" className="py-16 md:py-24">
      <div className="max-w-3xl mx-auto px-6">
        <div
          ref={headerRef}
          className={`reveal ${headerVisible ? "visible" : ""} mb-12`}
        >
          <h2 className="text-3xl font-serif text-text mb-2">
            Skills
          </h2>
        </div>

        <div className="flex flex-col gap-8">
          {Object.entries(skillsData).map(([category, skills], catIndex) => (
            <SkillCategory
              key={category}
              category={category}
              skills={skills}
              index={catIndex}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function SkillCategory({ category, skills, index }) {
  const { ref, isVisible } = useScrollReveal();

  return (
    <div
      ref={ref}
      className={`reveal ${isVisible ? "visible" : ""} group`}
      style={{ transitionDelay: `${index * 0.1}s` }}
    >
      <h3 className="text-lg font-medium text-text mb-3 group-hover:text-accent transition-colors duration-300">
        {category}
      </h3>
      <div className="flex flex-wrap gap-2 text-text-muted">
        {skills.map((skill, i) => (
          <span key={skill}>
            {skill}{i < skills.length - 1 ? " •" : ""}
          </span>
        ))}
      </div>
    </div>
  );
}
