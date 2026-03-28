// ExperienceSection.jsx (Vanilla CSS version for 3 detailed experiences)
import React from 'react';
import './ExperienceSection.css';

const experiences = [
  {
    company: 'California State University, Fullerton',
    role: 'Teaching Associate',
    period: 'July 2024 – Present',
    tech: ['Frontend-Tech', 'Distributed Systems', 'Cloud Computing', 'Big Data'],
    points: [
      'Delivered in-depth lessons on Web Frontend Engineering (HTML, CSS, JavaScript, React) to 45 students, emphasizing best practices in responsive design, component-based architecture, and state management',
      'Supported instruction for graduate courses including Big Data Systems (Hadoop, Spark), Distributed Systems, and Scalable Cloud Computing.',
      //'Led the design and development of a new frontend curriculum, focusing on real-world UI challenges, accessibility, and performance optimization.'
    ]
  },
  {
    company: 'Tata Consultancy Services',
    role: 'Software Development Engineer',
    period: 'Jan 2021 – Jan 2024',
    tech: ['Java', 'Spring Boot', 'Spring Security', 'Hibernate', 'Spring Cloud', 'AWS'],
    points: [
      'Eliminated duplicate strings and objects using garbage collection logs and refactored 1.8K lines of code, reducing website memory consumption by 99%',
      'Led a 10-member security team to identify and patch 12+ critical vulnerabilities (including Log4j, CSRF, and broken access control), reducing breach risks by 40%',
      //'Optimized API performance, reducing response times from 500ms to 200ms, improving system efficiency, and ensuring smoother customer interactions for 50K+ daily users.',
    ]
  },
  {
    company: 'Designerrs',
    role: 'UI/UX Design Intern',
    period: 'Jan 2020 – Jun 2020',
    tech: ['UX Research', 'UI/UX Design', 'Web Development', 'AdobeXD', 'Figma', 'Mobile Interface Design'],
    points: [
        'Conducted a heuristic evaluation of an edu-tech app, identifying four key pain points and delivering UX solutions to improve error message clarity and ensure UI consistency across all apps.',
        'Proposed solutions for critical UX challenges, contributing to an improved free-to-paid user conversion rate (6.7%).',
        //'Initiated 20+ admin profile features using Figma and Sketch, including customizable quizzes, real-time updates, and interactive prompts to encourage engagement.'
    ]
  }
];

function ExperienceSection() {
  return (
    <section className="experience-section" id="experience">
      <h2 className="section-title">Experience</h2>
      <div className="experience-grid">
        {experiences.map((exp, idx) => (
          <div className="experience-card" key={idx}>
            <h3 className="experience-title">{exp.role} @ {exp.company}</h3>
            <p className="experience-role">{exp.period}</p>
            <div className="tech-badges">
              {exp.tech.map((tech, i) => (
                <span className="tech-badge" key={i}>{tech}</span>
              ))}
            </div>
            <ul className="experience-points">
              {exp.points.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ExperienceSection;