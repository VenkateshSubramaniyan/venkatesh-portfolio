import React from 'react';
import './Achievements.css';

const achievements = [
  {
    title: "TCS Gems Award Recipient",
    description: "Recognized for outstanding contributions and innovation in project development.",
    year: "2022",
  },
  {
    title: "Top 5% in TCS CodeVita",
    description: "Placed among the Top 5% of participants in the global TCS CodeVita coding challenge",
    year: "2021",
  },
  {
    title: "Lead teams as Scrum Master",
    description: "Successfully led agile teams and delivered multiple projects on schedule without failure.",
    year: "2023",
  },
  {
    title: "Certified UI/UX Designer",
    description: "Completed certification in UI/UX design, focusing on user-centered design principles and interface design.",
    year: "2020",
  },
];


const Achievements = () => {
  return (
    <section className="achievements-section">
      <div className="achievements-header">
        <span className="section-label">Achievements</span>
        <h2 className="section-title">My Accomplishments</h2>
        <div className="section-divider"></div>
      </div>
      <div className="achievements-grid">
        {achievements.map((item, index) => (
          <div key={index} className="achievement-card">
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <span className="achievement-year">{item.year}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Achievements;
