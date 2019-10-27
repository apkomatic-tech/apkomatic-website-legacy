import React, { useState, useEffect, useContext, useRef } from "react"
import PropTypes from "prop-types"
import Link from "next/link"
import { motion } from "framer-motion"
import { LINKS } from "../config/global"
import { pageContext } from "./context"
import Logo from "./Logo"

const Header = () => {
  const [navOpen, setNavOpen] = useState<Boolean>(false)
  const path = useContext(pageContext)
  const headerRef = useRef(null)

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
  const mobileNavVariants = {
    show: {
      y: headerRef.current ? headerRef.current.clientHeight : 0
    },
    hide: {
      y: "-100%"
    }
  }

  // render

  return (
    <>
      <header ref={headerRef} className="header">
        <div className="header__inner">
          <Link href="/">
            <a className="brand">
              <Logo width={170} height={50} />
            </a>
          </Link>
          <div
            role="button"
            tabIndex={0}
            id="toggle-nav"
            className={`top-nav__toggle`}
            onClick={toggleNav}
            onKeyDown={e => {
              if (e.keyCode === 13) {
                toggleNav()
              }
            }}
          >
            <span className="sr-only">Toggle Navigation</span>
            <div className="icon"></div>
          </div>
          <ul className="top-nav">
            {LINKS.filter(({ active }) => Boolean(active)).map(
              ({ id, href, ...linkProps }) => (
                <li key={id} className="top-nav__item">
                  <Link href={href}>{renderDesktopLink(linkProps)}</Link>
                </li>
              )
            )}
          </ul>
        </div>
      </header>
      <motion.nav
        initial={false}
        animate={navOpen ? "show" : "hide"}
        variants={mobileNavVariants}
        transition={{
          type: "tween",
          duration: 0.2
        }}
        className={`mobile-nav${navOpen ? " open" : ""}`}
      >
        <ul className="mobile-nav__list">
          {LINKS.filter(({ active }) => Boolean(active)).map(
            ({ id, href, label, pathname }) => (
              <li key={id} className="mobile-nav__item" onClick={closeNav}>
                <Link href={href}>
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
      </motion.nav>
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
