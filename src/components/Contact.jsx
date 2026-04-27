import { useScrollReveal } from "../hooks/useScrollReveal";
import { contactData } from "../data/content";

export default function Contact() {
  const { ref: headerRef, isVisible: headerVisible } = useScrollReveal();

  return (
    <section id="contact" className="py-16 md:py-24">
      <div className="max-w-5xl mx-auto px-6">
        <div
          ref={headerRef}
          className={`reveal ${headerVisible ? "visible" : ""} mb-8`}
        >
          <h2 className="text-3xl font-serif text-text mb-2">
            Contact
          </h2>
        </div>

        <div
          className={`reveal reveal-delay-2 ${headerVisible ? "visible" : ""}`}
        >
          <p className="text-text-muted text-lg mb-8 max-w-2xl leading-relaxed">
            {contactData.message}
          </p>

          <div className="flex flex-col gap-4">
            <a
              href={`mailto:${contactData.email}`}
              className="text-lg text-text hover:text-accent underline underline-offset-4 transition-colors duration-300 w-fit"
            >
              {contactData.email}
            </a>
            
            <div className="flex flex-wrap gap-6 mt-4 text-text-muted">
               <a
                href={contactData.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent transition-colors duration-300"
              >
                LinkedIn
              </a>
              <a
                href={contactData.github}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent transition-colors duration-300"
              >
                GitHub
              </a>
              <a
                href={contactData.leetcode}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent transition-colors duration-300"
              >
                LeetCode
              </a>
              <a
                href={contactData.x}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent transition-colors duration-300"
              >
                X
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
