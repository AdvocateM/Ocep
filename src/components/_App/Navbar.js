import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import * as Icon from "react-feather"

import Logo from "../../assets/images/ocepLogo.png"

const Navbar = () => {
  const [menu, setMenu] = useState(true)

  const toggleNavbar = () => {
    setMenu(!menu)
  }

  useEffect(() => {
    const element = document.getElementById("header")

    const handleScroll = () => {
      if (window.scrollY > 170) {
        element.classList.add("is-sticky")
      } else {
        element.classList.remove("is-sticky")
      }
    }

    document.addEventListener("scroll", handleScroll)
    window.scrollTo(0, 0)

    return () => {
      document.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const classOne = menu
    ? "collapse navbar-collapse"
    : "collapse navbar-collapse show"
  const classTwo = menu
    ? "navbar-toggler navbar-toggler-right collapsed"
    : "navbar-toggler navbar-toggler-right"

  return (
    <header id="header" className="headroom">
      <div className="startp-nav">
        <div className="container">
          <nav className="navbar navbar-expand-md navbar-light">
            <Link to="#" className="navbar-brand" onClick={toggleNavbar}>
              <img src={Logo} alt="logo" style={{ width: '150px', height: 'auto' }} />
            </Link>

            <button
              onClick={toggleNavbar}
              className={classTwo}
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded={!menu}
              aria-label="Toggle navigation"
            >
              <span className="icon-bar top-bar"></span>
              <span className="icon-bar middle-bar"></span>
              <span className="icon-bar bottom-bar"></span>
            </button>

            <div className={classOne} id="navbarSupportedContent">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <Link to="/" activeClassName="active" onClick={toggleNavbar} className="nav-link">
                    Home
                  </Link>
                </li>

                <li className="nav-item">
                  <Link to="/aboutUs" activeClassName="active" onClick={toggleNavbar} className="nav-link">
                    About Us
                  </Link>
                </li>

                <li className="nav-item">
                  <Link to="/services" activeClassName="active" onClick={toggleNavbar} className="nav-link">
                    Our Services
                  </Link>
                </li>

                <li className="nav-item">
                  <Link to="/projects" activeClassName="active" onClick={toggleNavbar} className="nav-link">
                    Projects
                  </Link>
                </li>

                <li className="nav-item">
                  <Link to="/training" activeClassName="active" onClick={toggleNavbar} className="nav-link">
                    Training
                  </Link>
                </li>

                <li className="nav-item">
                  <Link to="/contact" activeClassName="active" onClick={toggleNavbar} className="nav-link">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Navbar
