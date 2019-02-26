import React from "react";
import "../assets/styles/Footer.css"
let Footer = () => (
  <footer className="footer">
    <div className="container">
      <a href="https://www.themoviedb.org/" target="_blank" rel="noopener noreferrer"><img src="/tmdb-attribution-logo-long-secondary.svg" height="50" alt="TMDb Attribution Logo"/></a>
      <span className="text-muted">{' '}This product uses the TMDb API but is not endorsed or certified by TMDb.</span>
    </div>
  </footer>
);

export default Footer;