import React from "react";
import "./Footer.css";
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { FiMail, FiChevronUp } from 'react-icons/fi';

const Footer = ({ home }) => {
  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="site-footer">
      <div className="footer-container max-w-6xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="footer-left">
          <div className="footer-brand text-white font-bold text-lg">Ron Rivera — Developer</div>
          <div className="mt-3">
            <a href="/assets/Data/Resume - Rivera, Ron Matthew.pdf" target="_blank" rel="noreferrer noopener" className="btn-resume inline-block">Download Resume</a>
          </div>
        </div>

        <nav className="footer-nav text-sm text-gray-300">
          <ul className="flex gap-6 flex-wrap items-center justify-center">
            <li><button onClick={home} className="footer-link">Home</button></li>
            <li><a href="#career" className="footer-link">Career</a></li>
            <li><a href="#projects" className="footer-link">Projects</a></li>
            <li><a href="#contact" className="footer-link">Contact</a></li>
          </ul>
        </nav>

        <div className="footer-right flex items-center gap-4">
          <a href="mailto:youremail@example.com" aria-label="Email" className="social-icon"><FiMail /></a>
          <a href="https://github.com/yourusername" target="_blank" rel="noreferrer noopener" aria-label="GitHub" className="social-icon"><FaGithub /></a>
          <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noreferrer noopener" aria-label="LinkedIn" className="social-icon"><FaLinkedin /></a>

          <button onClick={scrollTop} aria-label="Back to top" className="back-to-top">
            <FiChevronUp />
          </button>
        </div>
      </div>

      <div className="footer-bottom text-center text-gray-400 text-sm py-3">
        © {new Date().getFullYear()} Ron Rivera. <span className="mx-2">•</span> Available for hire.
      </div>
    </footer>
  );
};

export default Footer;