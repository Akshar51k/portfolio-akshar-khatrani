import { useScrollReveal } from "../hooks/useScrollReveal";
import { experienceData } from "../data/content";

function ExperienceCard({ item, index }) {
  const { ref, isVisible } = useScrollReveal();

  return (
    <div
      ref={ref}
      className={`reveal ${isVisible ? "visible" : ""} group mb-12`}
      style={{ transitionDelay: `${index * 0.1}s` }}
    >
      <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-6 mb-2">
        <h3 className="text-xl font-medium text-text group-hover:text-accent transition-colors duration-300">
          {item.role} @ {item.company}
        </h3>
        <span className="text-text-dim text-sm">
          {item.period}
        </span>
      </div>
      <p className="text-text-muted text-base leading-relaxed max-w-2xl">
        {item.description}
      </p>
    </div>
  );
}

export default function Experience() {
  const { ref: headerRef, isVisible: headerVisible } = useScrollReveal();

  return (
    <section id="experience" className="py-16 md:py-24">
      <div className="max-w-3xl mx-auto px-6">
        <div
          ref={headerRef}
          className={`reveal ${headerVisible ? "visible" : ""} mb-12`}
        >
          <h2 className="text-3xl font-serif text-text mb-2">
            Experience
          </h2>
        </div>

        <div className="flex flex-col">
          {experienceData.map((item, index) => (
            <ExperienceCard key={index} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
