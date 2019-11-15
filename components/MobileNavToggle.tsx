import React from 'react'

interface Props {
  navOpen: Boolean
  toggleNav: any
}

const MobileNavToggle = ({ navOpen, toggleNav }: Props) => {
  return (
    <div
      role='button'
      tabIndex={0}
      id='toggle-nav'
      className={`top-nav__toggle${navOpen ? ' open' : ''}`}
      onClick={toggleNav}
      onKeyDown={e => {
        if (e.keyCode === 13) {
          toggleNav()
        }
      }}>
      <span className='sr-only'>Toggle Navigation</span>
      <div className='top'></div>
      <div className='center'></div>
      <div className='bottom'></div>
    </div>
  )
}

export default MobileNavToggle
