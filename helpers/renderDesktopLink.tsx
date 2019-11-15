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
  if (isButton) {
    return <a className='btn nav-btn'>{label}</a>
  }
  return (
    <a className={`top-nav__link${currentPath === pathname ? ' active' : ''}`}>
      {label}
    </a>
  )
}

export default renderDesktopLink
