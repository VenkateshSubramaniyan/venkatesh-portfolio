import React from 'react';
import './TechStack.css';

import {
  FaReact,
  FaNodeJs,
  FaJava,
  FaDocker,
  FaAws,
  FaPython,
  FaGitAlt,
  FaLinux,
  FaAndroid,
  FaFigma,
  FaJenkins,
  FaUnity,
  FaSass,
  FaBootstrap,
} from 'react-icons/fa';
import {
  SiExpress,
  SiMongodb,
  SiRedis,
  SiTypescript,
  SiNextdotjs,
  SiPostgresql,
  SiTailwindcss,
  SiHuggingface,
  SiAdobexd,
  SiKubernetes,
  SiApachekafka
} from 'react-icons/si';
import { VscAzure } from "react-icons/vsc";
import { BiLogoSpringBoot } from "react-icons/bi";
import { DiMysql } from "react-icons/di";

const iconSize = 48;

const techs = [
  { name: 'React', icon: <FaReact size={iconSize} color="#61DAFB" /> },           // React blue
  { name: 'Node.js', icon: <FaNodeJs size={iconSize} color="#339933" /> },       // Node green
  { name: 'Java', icon: <FaJava size={iconSize} color="#0293bfff" /> },            // Java blue
  { name: 'MongoDB', icon: <SiMongodb size={iconSize} color="#47A248" /> },      // Mongo green
  { name: 'Kafka', icon: <SiApachekafka size={iconSize} color="var(--text)" /> },          // Kafka is red-ish, but FaMusic used here? fallback color
  { name: 'Redis', icon: <SiRedis size={iconSize} color="#DC382D" /> },          // Redis red
  { name: 'Docker', icon: <FaDocker size={iconSize} color="#2496ED" /> },        // Docker blue
  { name: 'AWS', icon: <FaAws size={iconSize} color="#FF9900" /> },              // AWS orange
  { name: 'Python', icon: <FaPython size={iconSize} color="#3776AB" /> },        // Python blue
  { name: 'Git', icon: <FaGitAlt size={iconSize} color="#F05032" /> },           // Git orange/red
  { name: 'Linux', icon: <FaLinux size={iconSize} color="#FCC624" /> },          // Linux yellow
  { name: 'TypeScript', icon: <SiTypescript size={iconSize} color="#3178C6" /> },// TypeScript blue
  { name: 'Next.js', icon: <SiNextdotjs size={iconSize} color="var(--text)" /> },    // Next.js black
  { name: 'PostgreSQL', icon: <SiPostgresql size={iconSize} color="#0293bfff" /> },// Postgres blue
  { name: 'Tailwind CSS', icon: <SiTailwindcss size={iconSize} color="#06B6D4" /> }, // Tailwind cyan
  { name: 'Azure', icon: <VscAzure size={iconSize} color="#007FFF" /> },
  { name: 'Springboot', icon: <BiLogoSpringBoot size={iconSize} color="#6db33f" /> },
  { name: 'Express.js', icon: <SiExpress size={iconSize} color="var(--text)" /> },
  { name: 'Android', icon: <FaAndroid size={iconSize} color="#A4C639" /> },
  { name: 'Sass', icon: <FaSass size={iconSize} color="#ce649a" /> },
  { name: 'Figma', icon: <FaFigma size={iconSize} color="#ff7137" /> },
  { name: 'Bootstrap', icon: <FaBootstrap size={iconSize} color="#7711f6" /> },
  { name: 'AdobeXd', icon: <SiAdobexd size={iconSize} color="#7b045fff" /> },
  { name: 'MySql', icon: <DiMysql size={iconSize} color="#0293bfff" /> },
  { name: 'Jenkins', icon: <FaJenkins size={iconSize} color="#d33732" /> },
  { name: 'Kubernetes', icon: <SiKubernetes size={iconSize} color="#306ce6" /> },
  { name: 'Unity', icon: <FaUnity size={iconSize} color="var(--text)" /> },
  { name: 'HuggingFace', icon: <SiHuggingface size={iconSize} color="#ffd21e" /> },
];


export default function TechStack() {
  return (
    <section className="techstack" id="tech">
      <h2>Tech Stack</h2>
      <div className="tech-grid">
        {techs.map((tech, idx) => (
          <div className="tech-card" key={idx}>
            <span className="tech-icon" aria-label={tech.name}>
              {tech.icon}
            </span>
            <p>{tech.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
