import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'

interface Props {
  headerElement: any
  navOpen: Boolean
  navItems: any[]
  closeNav: any
  path: String
}

const MobileNav = ({
  headerElement,
  navOpen,
  navItems,
  closeNav,
  path
}: Props) => {
  const headerHeight = headerElement.current
    ? headerElement.current.clientHeight
    : 0
  const navVariants = {
    visible: {
      opacity: 1,
      transition: {
        when: 'beforeChildren',
        staggerChildren: 0.05
      }
    },
    hidden: {
      opacity: 0,
      transition: {
        when: 'afterChildren'
      }
    }
  }
  const navLinkVariants = {
    visible: {
      y: 0,
      opacity: 1,
      scale: 1
    },
    hidden: {
      y: -5,
      opacity: 0,
      scale: 0.95
    }
  }

  return (
    <motion.nav
      initial="hidden"
      animate={navOpen ? 'visible' : 'hidden'}
      variants={navVariants}
      style={{
        top: headerHeight,
        height: `calc(100vh - ${headerHeight}px)`
      }}
      transition={{
        duration: 0.15
      }}
      className={`mobile-nav ${navOpen ? 'is-open' : ''}`}
    >
      <ul className="mobile-nav__list">
        {navItems
          .filter(({ active }) => Boolean(active))
          .map(({ id, href, label, pathname }) => (
            <li key={id} className="mobile-nav__item" onClick={closeNav}>
              <Link href={href}>
                <motion.a
                  transition={{
                    duration: 0.1,
                    stiffness: 0.25
                  }}
                  variants={navLinkVariants}
                  className={`mobile-nav__link${
                    path === pathname ? ' active' : ''
                  }`}
                >
                  {label}
                  <span className="sr-only">{label}</span>
                </motion.a>
              </Link>
            </li>
          ))}
      </ul>
    </motion.nav>
  )
}

export default MobileNav
