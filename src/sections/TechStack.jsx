import React from "react";
import './TechStack.css'; // your CSS file

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
  GiCosmicEgg
} from "react-icons/gi";
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
  SiApachekafka,
  SiAmazonec2,
  SiElasticsearch,
  SiRabbitmq,
  SiApachehadoop,
  SiDatabricks,
  SiTerraform,
  SiNginx,
  SiOracle,
  SiAmazondynamodb,
  SiSpring,
  SiSpringboot,
  SiGraphql,
  SiHibernate,
  SiFastapi,
  SiFlask,
  SiGithubcopilot,
  SiClaude,
  SiGitlab,
  SiAnsible,
  SiApachemaven,
  SiGradle,
  SiJira,
  SiSplunk,
  SiJunit5,
  SiServerless,
  SiNginxproxymanager,
  SiAmazonapigateway,
  SiAwselasticloadbalancing,
  SiPostman
} from 'react-icons/si';
import { VscAzure } from "react-icons/vsc";
import { BiLogoSpringBoot } from "react-icons/bi";
import { DiMysql } from "react-icons/di";

const iconSize = 16;

const techs = [
  { name: 'React', icon: <FaReact size={iconSize} color="#61DAFB" /> },
  { name: 'Node.js', icon: <FaNodeJs size={iconSize} color="#339933" /> },
  { name: 'Java', icon: <FaJava size={iconSize} color="#0293bfff" /> },
  { name: 'MongoDB', icon: <SiMongodb size={iconSize} color="#47A248" /> },
  { name: 'Kafka', icon: <SiApachekafka size={iconSize} color="#E10098" /> },
  { name: 'Redis', icon: <SiRedis size={iconSize} color="#DC382D" /> },
  { name: 'Docker', icon: <FaDocker size={iconSize} color="#2496ED" /> },
  { name: 'AWS', icon: <FaAws size={iconSize} color="#FF9900" /> },
  { name: 'Python', icon: <FaPython size={iconSize} color="#3776AB" /> },
  { name: 'Git', icon: <FaGitAlt size={iconSize} color="#F05032" /> },
  { name: 'Linux', icon: <FaLinux size={iconSize} color="#FCC624" /> },
  { name: 'TypeScript', icon: <SiTypescript size={iconSize} color="#3178C6" /> },
  { name: 'Next.js', icon: <SiNextdotjs size={iconSize} color="var(--text)" /> },
  { name: 'PostgreSQL', icon: <SiPostgresql size={iconSize} color="#0293bfff" /> },
  { name: 'Tailwind CSS', icon: <SiTailwindcss size={iconSize} color="#06B6D4" /> },
  { name: 'Azure', icon: <VscAzure size={iconSize} color="#007FFF" /> },
  { name: 'Springboot', icon: <BiLogoSpringBoot size={iconSize} color="#6db33f" /> },
  { name: 'Express.js', icon: <SiExpress size={iconSize} color="var(--text)" /> },
  { name: 'Android', icon: <FaAndroid size={iconSize} color="#A4C639" /> },
  { name: 'Sass', icon: <FaSass size={iconSize} color="#ce649a" /> },
  { name: 'Figma', icon: <FaFigma size={iconSize} color="#ff7137" /> },
  { name: 'Bootstrap', icon: <FaBootstrap size={iconSize} color="#7711f6" /> },
  { name: 'AdobeXd', icon: <SiAdobexd size={iconSize} color="#7b045fff" /> },
  { name: 'MySql', icon: <DiMysql size={iconSize} color="#0293bfff" /> },
  { name: 'CI/CD (Jenkins, GitHub Actions)', icon: <FaJenkins size={iconSize} color="#d33732" /> },
  { name: 'Kubernetes', icon: <SiKubernetes size={iconSize} color="#306ce6" /> },
  { name: 'Unity', icon: <FaUnity size={iconSize} color="var(--text)" /> },
  { name: 'HuggingFace', icon: <SiHuggingface size={iconSize} color="#ffd21e" /> },
  { name: 'EC2', icon: <SiAmazonec2 size={iconSize} color="#FF9900" /> },
  { name: 'Elasticsearch', icon: <SiElasticsearch size={iconSize} color="#005571" /> },
  { name: 'RabbitMQ', icon: <SiRabbitmq size={iconSize} color="#FF6600" /> },
  { name: 'Hadoop', icon: <SiApachehadoop size={iconSize} color="#66ccff" /> },
  { name: 'Databricks', icon: <SiDatabricks size={iconSize} color="#FF3A29" /> },
  { name: 'Terraform', icon: <SiTerraform size={iconSize} color="#7B42BC" /> },
  { name: 'Nginx', icon: <SiNginx size={iconSize} color="#00A64F" /> },
  { name: 'OracleDB', icon: <SiOracle size={iconSize} color="#F80000" /> },
  { name: 'DynamoDB', icon: <SiAmazondynamodb size={iconSize} color="#4053D6" /> },
  { name: 'Spring Framework', icon: <SiSpring size={iconSize} color="#6DB33F" /> },
  { name: 'Spring Security', icon: <SiSpring size={iconSize} color="#6DB33F" /> },
  { name: 'GraphQL', icon: <SiGraphql size={iconSize} color="#E10098" /> },
  { name: 'Hibernate', icon: <SiHibernate size={iconSize} color="#59666C" /> },
  { name: 'FastAPI', icon: <SiFastapi size={iconSize} color="#009688" /> },
  { name: 'Flask', icon: <SiFlask size={iconSize} color="#000000" /> },
  { name: 'GitHub Copilot', icon: <SiGithubcopilot size={iconSize} color="#7E57C2" /> },
  { name: 'Claude Code', icon: <SiClaude size={iconSize} color="#FFD600" /> },
  { name: 'GitLab', icon: <SiGitlab size={iconSize} color="#FC6D26" /> },
  { name: 'Ansible', icon: <SiAnsible size={iconSize} color="#EE0000" /> },
  { name: 'Maven', icon: <SiApachemaven size={iconSize} color="#C71A36" /> },
  { name: 'Gradle', icon: <SiGradle size={iconSize} color="#02303A" /> },
  { name: 'Jira', icon: <SiJira size={iconSize} color="#0052CC" /> },
  { name: 'Splunk', icon: <SiSplunk size={iconSize} color="#009999" /> },
  { name: 'JUnit5', icon: <SiJunit5 size={iconSize} color="#25A162" /> },
  { name: 'Serverless', icon: <SiServerless size={iconSize} color="#F93B12" /> },
  { name: 'Reverse Proxy (NGINX)', icon: <SiNginxproxymanager size={iconSize} color="#00A64F" /> },
  { name: 'API Gateway', icon: <SiAmazonapigateway size={iconSize} color="#FF9900" /> },
  { name: 'Load Balancing', icon: <SiAwselasticloadbalancing size={iconSize} color="#FF9900" /> },
  { name: 'SpringBoot', icon: <SiSpringboot size={iconSize} color="#6DB33F" /> },
  { name: 'Postman', icon: <SiPostman size={iconSize} color="#FC6D26" /> },
  { name: 'Azure Cosmos DB', icon: <GiCosmicEgg size={iconSize} color="#FC6D26" /> },
];


const skillsData = [
  {
    category: "Programming Languages",
    iconClass: "fas fa-code",
    skills: ["Java", "JavaScript", "Python", "SQL"]
  },
  {
    category: "Programming & Design Concepts",
    iconClass: "fas fa-lightbulb",
    skills: ["Object Oriented Design", "SOLID Principles", "Microservices Principles", "Design Patterns", "Unit Testing"]
  },
  {
    category: "Database Technologies",
    iconClass: "fas fa-database",
    skills: ["OracleDB", "MongoDB", "DynamoDB", "MySQL", "PostgreSQL", "Redis"]
  },
  {
    category: "Software Architecture",
    iconClass: "fas fa-building",
    skills: ["Microservices", "Monolithic", "Event-Driven", 
      "Service-Oriented", "Event Sourcing", "Service Mesh", "Message Queues (SQS, Pub/Sub Systems)", 
      "API Gateway", "Load Balancing", "Caching Strategies", "Distributed Systems", "Rest API Architecture",
      "Scalability & High Availability", "Fault Tolerance", "Serverless", 
      "Reverse Proxy (NGINX)", "CI/CD (Jenkins)"]
  },
  {
    category: "Backend & Microservices",
    iconClass: "fas fa-server",
    skills: ["Spring Framework", "SpringBoot", "Spring Security", "GraphQL", 
      "Hibernate", "Spring Data JPA", "WebSockets", "Node.js"]
  },
  {
    category: "UI/Frontend",
    iconClass: "fas fa-palette",
    skills: ["React",  "Angular", "HTML5", "CSS3", "Sass", "Next.js", 
     ]
  },
  {
    category: "Cloud & Big Data",
    iconClass: "fas fa-cloud",
    skills: ["AWS", "EC2", "S3", "IAM", "Elasticsearch", "Kafka", "RabbitMQ", "BigQuery", "CloudSQL"]
  },
  {
    category: "DevOps & Tools",
    iconClass: "fas fa-tools",
    skills: ["GitHub Copilot", "Claude Code", "Docker", "Kubernetes", "Helm", "Git",  "Maven", "Gradle", 
      "Jira", "Postman"]
  }
];

// Map for quick lookup
const skillIconComponents = {};
techs.forEach(tech => skillIconComponents[tech.name] = tech.icon);


export default function TechStack() {
  return (
    <section className="skills section" id="skills">
      <div className="container">
        <div className="section-header">
          <span className="section-label">My expertise</span>
          <h2 className="section-title">Skills & Technologies</h2>
          <div className="section-divider"></div>
        </div>
        <div className="skills-content">
          {skillsData.map((category, idx) => (
            <div className="skill-category" key={idx}>
              <div className="category-header">
                <i className={category.iconClass}></i>
                <h3>{category.category}</h3>
              </div>
              <div className="skill-tags">
                {category.skills.map((skill, i) => (
                  <span className="skill-tag" key={i}>
                    {skillIconComponents[skill] && (
                      <span className="skill-icon">{skillIconComponents[skill]}</span>
                    )}
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}









// const skillIcons = {
//   "Java": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg",
//   "JavaScript": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
//   "Python": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
//   "TypeScript": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
//   "SQL": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sqlite/sqlite-original.svg",
//   "C": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg",
//   "C++": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg",
//   "React.js": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
//   "Redux": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redux/redux-original.svg",
//   "HTML5": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
//   "CSS3": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
//   "Sass": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sass/sass-original.svg",
//   "Tailwind CSS": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-plain.svg",
//   "Node.js": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",
//   "Express.js": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg",
//   "MySQL": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg",
//   "PostgreSQL": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg",
//   "MongoDB": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg",
//   "Redis": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redis/redis-original.svg",
//   "Git": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
//   "GitHub": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg",
//   "Docker": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg",
//   "Kubernetes": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kubernetes/kubernetes-plain.svg",
//   "React.js": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
//   "Redux": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redux/redux-original.svg",
//   "HTML5": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
//   "CSS3": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
//   "Sass": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sass/sass-original.svg",
//   "Tailwind CSS": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-plain.svg",
//   "Next.js": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
//   "Spring Framework": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg",      // Spring → Java icon
//   "SpringBoot": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg",           // Spring Boot → Java icon
//   "JDBC": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg",                  // JDBC → Java icon
//   "Spring Security": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg",      // Spring Security → Java icon
//   "REST APIs": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/api/api-original.svg",              // generic API icon (or use FontAwesome)
//   "GraphQL": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/graphql/graphql-plain.svg",
//   "Hibernate": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg",            // Hibernate → Java
//   "Spring Data JPA": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg",      // Java icon
//   "WebSockets": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/websocket/websocket-plain.svg",    // if available, else generic JS icon
//   "Node.js": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",
//   "Express.js": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg",
//   "Flask": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",            // Flask → Python icon
//   "FastAPI": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
//   "OracleDB": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/oracle/oracle-original.svg",
//   "MongoDB": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg",
//   "DynamoDB": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazondynamodb/amazondynamodb-plain.svg",
//   "MySQL": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg",
//   "PostgreSQL": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg",
//   "Redis": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redis/redis-original.svg",
//   "Azure Cosmos DB": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azure/azure-original.svg", // generic Azure icon         // FastAPI → Python icon
//   "AWS": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-line-wordmark.svg",
//   "EC2": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original.svg", // EC2 → AWS icon
//   "S3": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original.svg",  // S3 → AWS icon
//   "IAM": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original.svg", // IAM → AWS icon
//   "Elasticsearch": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/elasticsearch/elasticsearch-original.svg",
//   "Kafka": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/apachekafka/apachekafka-original.svg",
//   "RabbitMQ": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/rabbitmq/rabbitmq-plain.svg",
//   "PySpark": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/apache/Apache-plain.svg", // generic Apache icon
//   "Databricks": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/databricks/databricks-original.svg",
//   "Terraform": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/terraform/terraform-original.svg",
//   "Hadoop": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/hadoop/hadoop-original.svg",
//   "Docker": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg",
//   "Kubernetes": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kubernetes/kubernetes-plain.svg",
//   "Microservices Architecture": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg", // microservices → Docker
//   "Monolithic Architecture": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg",      // monolith → Java generic
//   "Event-Driven Architecture": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kafka/kafka-original.svg", // event-driven → Kafka
//   "Service-Oriented Architecture (SOA)": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg", 
//   "Event Sourcing": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kafka/kafka-original.svg", 
//   "Message Queues (SQS, Pub/Sub Systems)": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/rabbitmq/rabbitmq-plain.svg",
//   "API Gateway": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nginx/nginx-original.svg",
//   "Load Balancing": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nginx/nginx-original.svg",
//   "Caching Strategies": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redis/redis-original.svg",
//   "Distributed Systems": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kubernetes/kubernetes-plain.svg",
//   "Scalability & High Availability": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kubernetes/kubernetes-plain.svg",
//   "Fault Tolerance": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kubernetes/kubernetes-plain.svg",
//   "Serverless Architecture": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original.svg", 
//   "Reverse Proxy (NGINX)": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nginx/nginx-original.svg",
//   "CI/CD (Jenkins, GitHub Actions)": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jenkins/jenkins-original.svg"
// };