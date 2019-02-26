import React from "react";
import "../assets/styles/Footer.css"
let Footer = () => (
  <footer className="footer">
    <div className="container">
      <img src="/tmdb-attribution-logo-long-secondary.svg" height="60" alt="TMDb Attribution Logo"/>
      <span className="text-muted">{' '}This product uses the TMDb API but is not endorsed or certified by TMDb.</span>
    </div>
  </footer>
);

export default Footer;