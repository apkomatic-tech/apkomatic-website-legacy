import React, { useState, useContext, useRef } from 'react'
import Link from 'next/link'
import { LINKS } from '../config/global'
import { pageContext } from './context'
import Logo from './Logo'
import MobileNavToggle from './MobileNavToggle'
import MobileNav from './MobileNav'
import DesktopNav from './DesktopNav'

const useNav = () => {
  const [navOpen, setNavOpen] = useState<Boolean>(false)
  const closeNav = () => {
    setNavOpen(false)
  }
  const toggleNav = () => {
    setNavOpen(!navOpen)
  }

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
      <header ref={headerRef} className='header'>
        <div className='header__inner'>
          <Link href='/'>
            <a className='brand'>
              <Logo width={170} height={50} />
            </a>
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
