import React, { useState, useEffect, useContext, useRef } from "react"
import PropTypes from "prop-types"
import Link from "next/link"
import { LINKS } from "../config/global"
import { pageContext, navContext } from "./context"

const Header = () => {
  const [navOpen, setNavOpen] = useState<Boolean>(false)
  const path = useContext(pageContext)

  const closeNav = () => {
    setNavOpen(false)
  }
  const toggleNav = () => {
    setNavOpen(!navOpen)
  }
  const renderDesktopLink = params => {
    const { label, pathname, isButton } = params
    if (isButton) {
      return <a className="btn nav-btn">{label}</a>
    }
    return (
      <a className={`top-nav__link${path === pathname ? " active" : ""}`}>
        {label}
      </a>
    )
  }

  useEffect(() => {
    if (navOpen) {
      document.body.classList.add("nav-open")
    } else if (!navOpen) {
      document.body.classList.remove("nav-open")
    }
  }, [navOpen])

  // render

  return (
    <>
      <header className="header">
        <div className="header__inner">
          <Link prefetch href="/">
            <a className="brand">
              <img src="/static/logo-lg.svg" alt="Apkomatic Logo" />
            </a>
          </Link>
          <i
            role="navigation"
            className="top-nav__toggle fa fa-bars"
            onClick={toggleNav}
          />
          <ul className="top-nav">
            {LINKS.filter(({ active }) => Boolean(active)).map(
              ({ id, href, ...linkProps }) => (
                <li key={id} className="top-nav__item">
                  <Link prefetch href={href}>
                    {renderDesktopLink(linkProps)}
                  </Link>
                </li>
              )
            )}
          </ul>
        </div>
      </header>
      <div className={`mobile-nav${navOpen ? " open" : ""}`}>
        <ul className="mobile-nav__list">
          {LINKS.filter(({ active }) => Boolean(active)).map(
            ({ id, href, label, pathname }) => (
              <li key={id} className="mobile-nav__item" onClick={closeNav}>
                <Link prefetch href={href}>
                  <a
                    className={`mobile-nav__link${
                      path === pathname ? " active" : ""
                    }`}
                  >
                    {label}
                  </a>
                </Link>
              </li>
            )
          )}
        </ul>
      </div>
    </>
  )
}

Header.propTypes = {
  path: PropTypes.string,
  fixed: PropTypes.bool
}

Header.defaultProps = {
  path: "",
  fixed: false
}

export default Header
