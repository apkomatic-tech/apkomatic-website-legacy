import React, { useState, useEffect, useContext, useRef } from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'
import { LINKS, ENABLE_STICKY_HEADER } from '../config/global'
import { pageContext } from './context'

const Header = () => {
  const [navOpen, setNavOpen] = useState(false)
  const headerNode = useRef(null)
  const path = useContext(pageContext)

  const closeNav = () => {
    setNavOpen(false)
  }
  const toggleNav = () => {
    setNavOpen(!navOpen)
  }
  const showStickyHeader = () => {
    if (headerNode.current) {
      headerNode.current.classList.add('fadeInDown')
      headerNode.current.classList.add('sticky')
    }
  }
  const hideStickyHeader = () => {
    if (headerNode.current) {
      headerNode.current.classList.remove('fadeInDown')
      headerNode.current.classList.remove('sticky')
    }
  }
  const renderDesktopLink = params => {
    const { label, pathname, isButton } = params
    if (isButton) {
      return <a className="btn nav-btn">{label}</a>
    }
    return (
      <a className={`top-nav__link${path === pathname ? ' active' : ''}`}>
        {label}
      </a>
    )
  }

  useEffect(() => {
    const initStickyHeader = (scrollThreshold = 150) => {
      let lastScroll = 0

      // on initial page load check if page was scrolled
      if (window.pageYOffset > scrollThreshold) {
        showStickyHeader()
      }

      headerNode.current.classList.add('animated')

      window.addEventListener('scroll', () => {
        // close navigation when scrolling
        if (document.body.classList.contains('nav-open')) {
          closeNav()
        }

        const scrollTop =
          window.pageYOffset || document.documentElement.scrollTop

        if (scrollTop > scrollThreshold) {
          if (scrollTop >= lastScroll) {
            showStickyHeader()
          } else {
            hideStickyHeader()
          }
        } else {
          hideStickyHeader()
        }

        lastScroll = scrollTop <= 0 ? 0 : scrollTop
      })
    }
    if (ENABLE_STICKY_HEADER) {
      initStickyHeader()
    }
  }, [])

  useEffect(() => {
    if (navOpen) {
      document.body.classList.add('nav-open')
    } else if (!navOpen) {
      document.body.classList.remove('nav-open')
    }
  }, [navOpen])

  // render

  return (
    <>
      <header ref={headerNode} className="header header--fixed">
        <div className="container header__inner">
          <Link prefetch href="/">
            <a className="brand">
              <img
                src="/static/apkomatic_logo_lg.png"
                width={160}
                alt="Apkomatic Logo"
              />
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
      <div className={`mobile-nav${navOpen ? ' open' : ''}`}>
        <ul className="mobile-nav__list">
          {LINKS.filter(({ active }) => Boolean(active)).map(
            ({ id, href, label, pathname }) => (
              <li key={id} className="mobile-nav__item" onClick={closeNav}>
                <Link prefetch href={href}>
                  <a
                    className={`mobile-nav__link${
                      path === pathname ? ' active' : ''
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
  fixed: PropTypes.bool,
}

Header.defaultProps = {
  path: '',
  fixed: false,
}

export default Header
