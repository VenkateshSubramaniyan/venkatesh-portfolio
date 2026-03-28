import React from "react";
import './ExperienceSection.css'; // Your CSS file

const experiences = [
  {
    id: 1,
    date: "Jan 2025 - Present",
    title: "Senior Software Engineer",
    company: "PayPal",
    desc: [
      "Led a squad of 5 engineers to build a regulatory reporting platform from scratch",
      "Drove end-to-end delivery including design coordination, architecture reviews, mockups, and low-level design",
      "Planned and distributed work across the team, ensuring smooth execution and timeline alignment",
      "Delivered the pilot release of the regulatory reporting application successfully",
      "Leveraged AI-assisted tools to accelerate frontend development and improve productivity"
    ],
    tags: ["Java", "Microservices", "System Design", "Agile", "Leadership"]
  },
  {
    id: 2,
    date: "Mar 2022 - Jan 2025",
    title: "Officer -C11",
    company: "Citibank",
    desc: [
      "Led a cross-functional squad of 10 members including UI, UX, Backend, and QA",
      "Owned full lifecycle from design to production release ensuring quality and timely delivery",
      "Designed and implemented key features like Product Subscription, Action Items, Systematic Controls, and New Activity Approval",
      "Delivered multiple enhancements and performance optimizations improving scalability and responsiveness",
      "Applied clean code and scalable architecture principles to reduce technical debt",
      "Drove Agile/Scrum practices to improve team efficiency and delivery consistency"
    ],
    tags: ["Java", "Spring Boot", "Microservices", "Agile", "System Design"]
  },
  {
    id: 3,
    date: "Jan 2021 - Mar 2022",
    title: "Software Engineer II",
    company: "Bank of America",
    desc: [
      "Developed and maintained large-scale banking applications with focus on security, scalability, and reliability",
      "Contributed across all phases of SDLC translating business requirements into technical solutions",
      "Designed scalable solutions to improve workflows and system efficiency",
      "Ensured adherence to enterprise standards, compliance, and secure coding practices",
      "Collaborated with cross-functional teams to deliver high-quality applications"
    ],
    tags: ["Java", "Spring", "REST APIs", "SDLC", "Banking"]
  },
  {
    id: 4,
    date: "Jul 2017 - Dec 2020",
    title: "Senior Software Engineer",
    company: "Bank of America",
    desc: [
      "Worked on high-performance banking systems with strong emphasis on scalability and reliability",
      "Implemented robust backend services and optimized workflows",
      "Collaborated with product, architecture, and QA teams for enterprise application delivery"
    ],
    tags: ["Java", "Microservices", "SOA", "Enterprise Systems"]
  },
  {
    id: 5,
    date: "Apr 2015 - Jul 2017",
    title: "Software Engineer",
    company: "Urjanet",
    desc: [
      "Developed internal tools and automation solutions for energy data processing",
      "Worked on data extraction and normalization pipelines",
      "Contributed to innovation initiatives and training programs"
    ],
    tags: ["Java", "Data Processing", "Automation"]
  }
];

const Experience = () => {
  return (
    <section className="experience section" id="experience">
      <div className="container">
        <div className="section-header">
          <span className="section-label">My journey</span>
          <h2 className="section-title">Work Experience</h2>
          <div className="section-divider"></div>
        </div>

        <div className="timeline">
          {experiences.map((exp, index) => (
            <div key={exp.id} className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <span className="timeline-date">{exp.date}</span>
                <h3 className="timeline-title">{exp.title}</h3>
                <h4 className="timeline-company">{exp.company}</h4>
                <ul className="timeline-description">
                  {exp.desc.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
                <div className="timeline-tags">
                  {exp.tags.map((tag, i) => (
                    <span key={i} className="tag-pill">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
