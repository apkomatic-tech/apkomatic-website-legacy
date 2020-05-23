import React from 'react'
import Link from 'next/link'
import renderDesktopLink from '../helpers/renderDesktopLink'

interface Props {
  navItems: any[]
  path: String
}

const DesktopNav = ({ navItems, path }: Props) => {
  return (
    <ul className="top-nav">
      {navItems
        .filter(({ active }) => Boolean(active))
        .map(({ id, href, ...linkProps }) => (
          <li key={id} className="top-nav__item">
            <Link href={href}>{renderDesktopLink(linkProps, path)}</Link>
          </li>
        ))}
    </ul>
  )
}

export default DesktopNav
