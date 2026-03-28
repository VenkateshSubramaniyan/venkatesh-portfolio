import './Hero.css';
import VenkateshImage from '../assets/DP3.png';
import { FaLinkedin, FaGithub, FaMedium } from 'react-icons/fa';
import { SiLeetcode } from "react-icons/si";
import { Typewriter } from 'react-simple-typewriter';

function Hero() {
  return (
    <section className="hero-section" id="hero">
      <div className="hero-left">
        <div className="typewriter">
          <Typewriter
            words={[
              "I write code that humans and machines love.",
              "Building scalable apps, one line at a time.",
              "Solving problems, shipping features.",
            ]}
            loop={0}
            cursor
            cursorStyle="|"
            typeSpeed={60}
            deleteSpeed={40}
            delaySpeed={2000}
          />
        </div>

        <h1 className="hero-title">
          Hello I’m <br />
          <span className="hero-name">
            Venkatesh <br /> Subramaniyan
          </span>
        </h1>
        <p className="hero-description">
          A passionate Full Stack Developer and Master’s student in Computer Science at California State University, Fullerton.
        </p>

        <div className="hero-bottom">
          <a href="/Venkatesh Subramaniyan - Senior Software Engineer - 11 Years Exp.pdf" className="resume-btn" download>
            DOWNLOAD RESUME
          </a>

          <div className="social-icons">
            <a
              href="https://www.linkedin.com/in/venkatesh-subramaniyan/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/VenkateshSubramaniyan"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
            </a>
          </div>
        </div>
      </div>

      <div className="hero-right">
        <img src={VenkateshImage} alt="Venkatesh Subramaniyan" />
      </div>
    </section>
  );
}

export default Hero;