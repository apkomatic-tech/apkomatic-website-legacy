import React, { useState, useContext, useRef, useEffect } from 'react'
import Link from 'next/link'
import { pageContext } from './context'
import MobileNavToggle from './MobileNavToggle'
import MobileNav from './MobileNav'
import DesktopNav from './DesktopNav'
import { motion } from 'framer-motion'

type NavLinkType = {
  id: number
  href: string
  pathname: string
  label: string
  active: boolean
}
export const LINKS: NavLinkType[] = [
  {
    id: 1,
    href: '/',
    pathname: '/',
    label: 'Home',
    active: true
  },
  {
    id: 2,
    href: '/services',
    pathname: '/services',
    label: 'Services',
    active: true
  },
  {
    id: 3,
    href: '/work',
    pathname: '/work',
    label: 'Work',
    active: false
  },
  {
    id: 4,
    href: '/about',
    pathname: '/about',
    label: 'About Us',
    active: true
  },
  {
    id: 5,
    href: '/faq',
    pathname: '/faq',
    label: 'FAQ',
    active: true
  },
  {
    id: 6,
    href: '/contact',
    pathname: '/contact',
    label: 'Contact Us',
    active: true
  }
]

const useNav = () => {
  const [navOpen, setNavOpen] = useState<Boolean>(false)
  const closeNav = () => {
    setNavOpen(false)
  }
  const toggleNav = () => {
    setNavOpen(!navOpen)
  }

  useEffect(() => {
    const handleEscKey = (e: KeyboardEvent) => {
      if (e.key === 'Esc' || e.key === 'Escape') {
        setNavOpen(false)
      }
    }
    window.addEventListener('keydown', handleEscKey)
    return () => {
      window.removeEventListener('keydown', handleEscKey)
    }
  }, [])

  useEffect(() => {
    const { body } = document
    if (navOpen) {
      body.classList.add('mobile-menu-open')
    } else {
      body.classList.remove('mobile-menu-open')
    }
  }, [navOpen])

  return {
    navOpen,
    closeNav,
    toggleNav
  }
}

const Header = () => {
  const { navOpen, closeNav, toggleNav } = useNav()
  const path = useContext(pageContext)
  const headerRef = useRef(null)

  return (
    <>
      <header ref={headerRef} className="header">
        <div className="header__inner">
          <Link href="/" passHref>
            <motion.a className="brand">Apkomatic</motion.a>
          </Link>
          <DesktopNav navItems={LINKS} path={path} />
          <MobileNavToggle navOpen={navOpen} toggleNav={toggleNav} />
        </div>
      </header>
      <MobileNav
        headerElement={headerRef}
        navOpen={navOpen}
        navItems={LINKS}
        closeNav={closeNav}
        path={path}
      />
    </>
  )
}

export default Header
