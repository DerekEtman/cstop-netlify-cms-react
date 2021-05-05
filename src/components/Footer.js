import React from 'react'
import linkedin from "../components/FooterImages/LinkedIn_logo_initials.png";
import facebook from "../components/FooterImages/f_logo_RGB-Blue_72.png";
import logo from "../components/FooterImages/android-chrome-512x512.png";
import { Link } from 'react-router-dom'

import './Footer.sass'

export default ({ globalSettings, socialSettings, navLinks }) => (
  <footer className="Footer">
    <div className="footer-container">
      <a
        className="footer-social-icon"
        href="https://www.linkedin.com/company/c-stop/"
      >
        <img
          src={linkedin}
          loading="lazy"
          width="200"
          alt="Link to CStop Linked in"
        />
      </a>

      <a
        className="footer-social-icon"
        href="https://www.facebook.com/C-Stop-Health-Safety-Services-105283481304458/"
      >
        <img
          src={facebook}
          loading="lazy"
          width="200"
          alt="Link to CStop Facebook"
        />
      </a>

      <Link to="/" className="webflow-link">
        <img
          src={logo}
          width="100"
          alt=""
          className="webflow-logo-tiny"
        />
        <div className="paragraph-tiny">Copyright C-Stop 2020</div>
      </Link>
    </div>
  </footer>
)
