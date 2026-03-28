import React from "react";
import "./Projects.css";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

// Define category colors
const categoryColors = {
  "Full Stack": "#06d6a0",   // blue
  "AI": "#06d6a0",           // purple
  "Data": "#06d6a0",         // green
  "Computer Vision": "#06d6a0", // orange
  "Enterprise": "#06d6a0",   // red
  "Web App": "#06d6a0",
  "Software Architecture": "#06d6a0",   // red
  "Systems Design": "#06d6a0",
};

const projects = [
  {
    title: "Nihira (Real-time Chat App)",
    category: ["Full Stack", "Web App"],
    summary: "A scalable real-time chat application",
    description: [
      "Built a real-time chat application using WebSockets, Kafka for event-driven architecture, and Redis for caching.",
      "Focusing on scalable system design, cloud deployment on AWS, and ensuring high availability and fault tolerance.",
      "Integrated a generative AI assistant to detect toxic behavior, summarize conversations, and retrieve messages by date."
    ],
    keyMetric: "",
    techStack: ["Node.js", "Express.js", "React", "MongoDB", "WebSockets", "Kafka", "Redis", "Docker", "AWS"],
    links: {
      github: "https://github.com/Venkatesh-pasupuleti/Nihira",
      demo: ""
    }
  },
  {
    title: "Agentic AI Project Builder",
    category: ["Full Stack", "AI"],
    summary: "AI coding assistant that generates full projects from user input.",
    description: [
      "Built a full-stack AI coding assistant with a multi-agent workflow (Planner → Architect → Coder) that converts natural language prompts into complete, structured projects. Developed Pydantic-driven task models to safely generate and organize project files.",
      "Integrated Python/FastAPI backend and React frontend. Simulated a real-world software development workflow where agents collaborate to maintain consistency, task dependencies, and project integrity."
    ],
    keyMetric: "",
    techStack: ["LangChain", "LangGraph", "Groq Cloud", "Python/FastAPI", "React", "Pydantic", "multi-agent workflow"],
    links: {
      github: "https://github.com/Venkatesh-pasupuleti/Agentic_AI_Project_Builder",
      demo: ""
    }
  },
  {
    title: "Personalized Health Tracker",
    category: ["Data", "AI"],
    summary: "Track health metrics and get personalized insights using websockets.",
    description: [
      "Built ETL pipelines for ingesting Fitbit data using Python, Kafka (semi-structured), and SQL (structured) into Azure Data Lake using Azure Data Factory, automating data ingestion throughout the day.",
      "Applied Databricks Lakehouse with Medallion Architecture to progressively refine data quality for real-time analytics.",
      "Delivered low-latency, high-throughput pipelines supplying model-ready datasets for predictive analytics and ML."
    ],
    keyMetric: "",
    techStack: ["Azure Databricks", "Data Lake", "PySpark", "Kafka", "Python", "Java", "SQL"],
    links: {
      github: "https://github.com/Venkatesh-pasupuleti/fitbit",
      demo: ""
    }
  },
  {
    title: "Adaptive Load Balancer",
    category: ["Software Architecture", "Systems Design"],
    summary: "Designed an intelligent load balancer supporting static and dynamic algorithms with auto-scaling capabilities.",
    description: [
      "Implemented multiple load balancing strategies — Round Robin, Least Connections, and Response Time–based dynamic routing.",
      "Integrated Kubernetes API to automatically scale pods by spawning or terminating instances based on system load.",
      "Designed a modular architecture allowing easy extension of new balancing algorithms and metrics tracking."
    ],
    keyMetric: "Auto-scales up to 10 pods under high load with <200ms response variance",
    techStack: ["Java", "Spring Boot", "Docker", "Kubernetes"],
    links: {
      github: "https://github.com/Venkatesh-pasupuleti/AdaptiveLoadBalancer",
      demo: ""
    }
  },
  {
    title: "CampusFlow",
    category: ["Full Stack", "Enterprise"],
    summary: "Extensible campus solutions built with design patterns.",
    description: [
      "Built a scalable University Management System using Java 17, Spring Boot, and Spring Cloud with a clean microservices architecture.",
      "Implemented modular services for Authentication, Department, Course, Professor, Student, and Enrollment with robust role-based access control using JWT.",
      "Designed secure REST APIs with Spring Security and token validation middleware, ensuring safe inter-service and user communication."
    ],
    keyMetric: "Supports 5000+ students and staff",
    techStack: ["Java", "Spring Boot", "Spring Security", "Microservices", "API Gateway"],
    links: {
      github: "https://github.com/Venkatesh-pasupuleti/CampusFlow",
      demo: ""
    },
  },
  {
    title: "Underwater Plastic Detection",
    category: ["AI", "Computer Vision"],
    summary: "Detects plastic pollution underwater using AI.",
    description: [
      "Developed a deep learning system using a trained YOLO model to detect and classify underwater plastic pollution.",
      "Built a Flask web application that enables real-time image and video uploads for object detection and visualization.",
      "Integrated OpenCV and YOLO to process inputs, draw bounding boxes, and deliver an AI-driven sustainability solution."
    ],
    keyMetric: "Achieves 92% detection accuracy",
    techStack: ["YOLOv8", "Python", "OpenCV", "TensorFlow", "Cuda"],
    links: {
      github: "https://github.com/Venkatesh-pasupuleti/UnderwaterPlasticDetection",
      demo: ""
    }
  },
];

export default function Projects() {
  return (
    <section className="projects-section" id="projects">

      <div className="container">
        <div className="section-header">
          <span className="section-label">My Work</span>
          <h2 className="section-title">Projects</h2>
          <div className="section-divider"></div>
        </div>

        <div className="projects-grid">
          {projects.map((proj, idx) => (
            <div key={idx} className="project-card">
              <div className="project-header">
                <span className="project-number">{String(idx + 1).padStart(2, '0')}</span>
                <div className="project-category">
                  {proj.category.map((cat, i) => (
                    <span
                      key={i}
                      className="category-badge"
                      style={{
                        backgroundColor: categoryColors[cat] + "33", // light transparent background
                        color: categoryColors[cat],                   // text color
                      }}
                    >
                      {cat}
                    </span>
                  ))}
                </div>
              </div>

              {/* Project Title */}
              <h3 className="project-title">{proj.title}</h3>

              <p className="project-summary">{proj.summary}</p>

              <ul className="project-description">
                {proj.description.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>

              {proj.keyMetric && <p className="project-metric">{proj.keyMetric}</p>}

              <div className="tech-stack">
                {proj.techStack.map((tech, i) => (
                  <span key={i} className="tech-badge">{tech}</span>
                ))}
              </div>

              <div className="project-links">
                {proj.links.github && (
                  <a href={proj.links.github} target="_blank" rel="noopener noreferrer">
                    <FaGithub /> GitHub
                  </a>
                )}
                {proj.links.demo && (
                  <a href={proj.links.demo} target="_blank" rel="noopener noreferrer">
                    <FaExternalLinkAlt /> Demo
                  </a>
                )}
              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}
