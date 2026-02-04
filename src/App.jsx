import React, { useEffect, useState } from "react";
import "./App.css";
import { portfolioItems, companyInfo } from "./data/portfolio";

function App() {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="app-container">
      {/* Navigation */}
      <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
        <div className="container nav-content">
          <div className="logo pixel-font">
            <span className="anchor-icon">⚓</span> StudioEsso
          </div>

          <button
            className="hamburger-btn"
            onClick={toggleMenu}
            aria-label="Toggle Menu"
          >
            <span className={`bar ${isMenuOpen ? "open" : ""}`}></span>
            <span className={`bar ${isMenuOpen ? "open" : ""}`}></span>
            <span className={`bar ${isMenuOpen ? "open" : ""}`}></span>
          </button>

          <ul className={`nav-links ${isMenuOpen ? "active" : ""}`}>
            <li>
              <a href="#about" onClick={() => setIsMenuOpen(false)}>
                About
              </a>
            </li>
            <li>
              <a href="#portfolio" onClick={() => setIsMenuOpen(false)}>
                Works
              </a>
            </li>
            <li>
              <a href="#contact" onClick={() => setIsMenuOpen(false)}>
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="hero">
        <div className="hero-content text-center">
          <h1
            className="company-name pixel-font glitch"
            data-text={companyInfo.name}
          >
            {companyInfo.name}
          </h1>
          <p className="tagline">{companyInfo.tagline}</p>
          <div className="hero-decoration">
            <span className="floating-icon" style={{ animationDelay: "0s" }}>
              🌊
            </span>
            <span className="floating-icon" style={{ animationDelay: "1s" }}>
              🎹
            </span>
            <span className="floating-icon" style={{ animationDelay: "2s" }}>
              👾
            </span>
          </div>
          <a href="#portfolio" className="cta-button pixel-box pixel-font">
            Dive In
          </a>
        </div>
        <div className="ocean-overlay"></div>
      </header>

      {/* About Section */}
      <section id="about" className="section bg-darker">
        <div className="container">
          <h2 className="section-title pixel-font text-accent">
            {" "}
            <span className="icon">💡</span> Who We Are
          </h2>
          <div className="about-card pixel-box">
            <p className="about-text">{companyInfo.description}</p>
            <p className="about-text mt-2">
              From small ideas, we craft meaningful experiences that stay with
              users long after they interact with them. Our work blends emotion,
              enjoyment, and practicality, bridging the worlds of games and
              applications.
            </p>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="section">
        <div className="container">
          <h2 className="section-title pixel-font text-accent">
            {" "}
            <span className="icon">🚀</span> Creations
          </h2>
          <div className="portfolio-grid">
            {portfolioItems.map((item) => (
              <div key={item.id} className="project-card pixel-box">
                <div className="card-header">
                  <span className="project-icon">
                    {typeof item.icon === "string" &&
                    (item.icon.startsWith("/") ||
                      item.icon.startsWith("http") ||
                      item.icon.startsWith("data:") ||
                      item.icon.includes(".")) ? (
                      <img
                        src={item.icon}
                        alt={item.title}
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "contain",
                        }}
                      />
                    ) : (
                      item.icon
                    )}
                  </span>
                  <span
                    className={`status-badge pixel-font ${item.status === "Released" ? "released" : ""}`}
                  >
                    {item.status}
                  </span>
                </div>
                <h3 className="project-title pixel-font">{item.title}</h3>
                <p className="project-desc">{item.description}</p>
                <div className="project-tags">
                  {item.tags.map((tag) => (
                    <span key={tag} className="tag">
                      #{tag}
                    </span>
                  ))}
                </div>
                <div className="project-links">
                  {item.links.length > 0 ? (
                    item.links.map((link) => (
                      <a
                        key={link.label}
                        href={link.url}
                        className="link-btn pixel-font"
                      >
                        {link.label} &rarr;
                      </a>
                    ))
                  ) : (
                    <span className="coming-soon pixel-font">
                      Coming Soon...
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact/Footer */}
      <footer id="contact" className="footer">
        <div className="container text-center">
          <div className="footer-links">
            {companyInfo.socials.map((social) => (
              <a
                key={social.label}
                href={social.url}
                target="_blank"
                rel="noreferrer"
                className="footer-link pixel-font"
              >
                {social.label}
              </a>
            ))}
          </div>
          <p className="footer-email pixel-font text-accent">
            <span className="icon">📧</span> {companyInfo.email}
          </p>
          <p className="copyright">
            &copy; {new Date().getFullYear()} {companyInfo.name}. All rights
            reserved.
          </p>
          <div className="pixel-waves"></div>
        </div>
      </footer>
    </div>
  );
}

export default App;
