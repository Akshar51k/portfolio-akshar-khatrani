import { useScrollReveal } from "../hooks/useScrollReveal";
import { aboutData, quotes } from "../data/content";

export default function About() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="about" className="py-16 md:py-24">
      <div
        ref={ref}
        className={`reveal ${isVisible ? "visible" : ""} max-w-5xl mx-auto px-6`}
      >
        <p className="text-text-muted text-lg leading-relaxed mb-8">
          {aboutData.bio}
        </p>
        <p className="text-text-dim text-sm italic">
          "{quotes.insideAbout}"
        </p>
      </div>
    </section>
  );
}
