"use client";

import "bootstrap/dist/css/bootstrap.min.css";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-minimal-wrap mt-5">
      <div className="container">
        <div className="footer-minimal">
          <div className="footer-minimal-links">
            <a
              href="mailto:joaovitorbrogginelopes@gmail.com"
              className="footer-minimal-link no-underline"
            >
              <FiMail />
              <span>joaovitorbrogginelopes@gmail.com</span>
            </a>
            <a
              href="https://github.com/joaobroggine"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-minimal-link no-underline"
            >
              <FiGithub />
              <span>GitHub</span>
            </a>
            <a
              href="https://www.linkedin.com/in/jo%C3%A3o-broggine-5b92a02b2/"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-minimal-link no-underline"
            >
              <FiLinkedin />
              <span>LinkedIn</span>
            </a>
          </div>
          <p className="footer-minimal-copy mb-0">
            © {currentYear} João Vitor Broggine
          </p>
        </div>
      </div>
    </footer>
  );
}
