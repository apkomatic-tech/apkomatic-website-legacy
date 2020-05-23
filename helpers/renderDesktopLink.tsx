import React from 'react'

interface Props {
  label: String
  pathname: String
  currentPath: String
  isButton?: Boolean
}
const renderDesktopLink = (
  { label, pathname, isButton }: Props,
  currentPath
) => {
  return (
    <a className={`top-nav__link${currentPath === pathname ? ' active' : ''}`}>
      <span className="label">{label}</span>
      <span className="sr-only">{label}</span>
    </a>
  )
}

export default renderDesktopLink
