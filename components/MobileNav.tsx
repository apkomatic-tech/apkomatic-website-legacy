import React from "react"
import { motion } from "framer-motion"
import Link from "next/link"

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
  const mobileNavVariants = {
    show: {
      y: headerElement.current ? headerElement.current.clientHeight : 0
    },
    hide: {
      y: "-100%"
    }
  }
  return (
    <motion.nav
      initial={false}
      animate={navOpen ? "show" : "hide"}
      variants={mobileNavVariants}
      transition={{
        type: "tween",
        duration: 0.26
      }}
      className={`mobile-nav${navOpen ? " open" : ""}`}
    >
      <ul className="mobile-nav__list">
        {navItems
          .filter(({ active }) => Boolean(active))
          .map(({ id, href, label, pathname }) => (
            <li key={id} className="mobile-nav__item" onClick={closeNav}>
              <Link href={href}>
                <a
                  className={`mobile-nav__link${
                    path === pathname ? " active" : ""
                  }`}
                >
                  {label}
                  <span className="sr-only">{label}</span>
                </a>
              </Link>
            </li>
          ))}
      </ul>
    </motion.nav>
  )
}

export default MobileNav
