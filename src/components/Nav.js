import React, { useState } from 'react'
import { slide as Menu } from 'react-burger-menu'
import { Link } from 'react-router-dom'
import Logo from './Logo'
import './Nav.sass'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown } from '@fortawesome/free-solid-svg-icons'

export default function Nav({ handlePopupOpen }) {
  const [state] = useState({ active: false, navBarActiveClass: '' })

  const [menuOpen, setMenuOpen] = useState(false)
  const [subMenu, setSubMenu] = useState(false)

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  function toggleSub(subSection) {
    setSubMenu(!subMenu);
    console.log('submenu state', subMenu)
    // !subMenu? document.getElementById(subSection).style.display = 'block' : document.getElementById(subSection).style.display = 'none';
  }

  return (
    <nav className="navigation">
      <div className={`navigation-wrap`}>
        <Link to="/" aria-current="page">
          <Logo />
        </Link>

        <div id="navMenu" className={`navbar-menu ${state.navBarActiveClass}`}>
          <nav
            role="navigation"
            className={`navigation-items ${state.navBarActiveClass}`}
          >
            <Link to="/" aria-current="page" className="navigation-item">
              Home
            </Link>
            <Link to="/services" className="navigation-item">
              Services
            </Link>

            <div className="subnav">
              <Link to="/about" className="navigation-item">
                About <FontAwesomeIcon icon={faCaretDown} />
              </Link>
              <div className="subnav-content">
                <Link to="/about" className="subnav-item navigation-item">
                  About C-Stop
                </Link>
                <Link
                  to="/about/clients"
                  className="subnav-item navigation-item"
                >
                  Clients
                </Link>
                <Link
                  to="/about/videos"
                  className="subnav-item navigation-item"
                >
                  Videos
                </Link>
              </div>
            </div>

            <Link to="/contact" className="navigation-item">
              Contact
            </Link>
          </nav>
        </div>

        <Link id="navQuoteButton" to="/quote" className="Button">
          <div className="text-block">Request an Estimate</div>
        </Link>
      </div>

      {/*            */}
      {/* Mobile Nav */}
      {/*            */}

      <Menu
        right
        className="navigation-mobile"
        width={'70%'}
        isOpen={menuOpen}
        pageWrapId={'page-wrap'}
        onStateChange={({ isOpen }) => setMenuOpen(isOpen)}
      >
        <Link
          id="navQuoteButton"
          to="/quote"
          className="navigation-item"
          onClick={() => toggleMenu()}
        >
          Request an Estimate
        </Link>
        <Link
          to="/"
          aria-current="page"
          className="navigation-item"
          onClick={() => toggleMenu()}
        >
          Home
        </Link>
        <Link
          to="/services"
          className="navigation-item"
          onClick={() => toggleMenu()}
        >
          Services
        </Link>

        <div>
          <a className="navigation-item" onClick={() => toggleSub("sub-about")} href="#subNavAbout">
            About <FontAwesomeIcon icon={faCaretDown} />
          </a>

          <div className={`subnav-container ${subMenu ? 'show' : ''}`} id="subNavAbout" >
            <Link
              to="/about"
              className="subnav-item navigation-item"
              onClick={() => toggleMenu()}
              id="sub-1"
            >
              About C-Stop
            </Link>
            <Link
              to="/about/clients"
              className="subnav-item navigation-item"
              onClick={() => toggleMenu()}
            >
              Clients
            </Link>
            <Link
              to="/about/videos"
              className="subnav-item navigation-item"
              onClick={() => toggleMenu()}
            >
              Videos
            </Link>
          </div>
        </div>
        <Link
          to="/contact"
          className="navigation-item"
          onClick={() => toggleMenu()}
        >
          Contact
        </Link>
      </Menu>
    </nav>
  )
}
