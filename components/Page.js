import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import ReactGA from 'react-ga'
import { GUA_TRACKING_ID, IS_DEV } from '../config/global'
import { Header, Footer } from '.'
import { pageContext } from './context'

const Page = props => {
  const { pathname, children } = props
  const pageName = pathname === '/' ? 'landing' : pathname.replace('/', '')

  useEffect(
    () => {
      ReactGA.initialize(GUA_TRACKING_ID, { debug: false })

      if (typeof window !== 'undefined') {
        ReactGA.pageview(window.location.pathname + window.location.search)
      }

      if (!('backgroundBlendMode' in document.body.style)) {
        document.body.classList.add('background-blend-unsupported')
      } else {
        document.body.classList.add('background-blend-supported')
      }
    },
    [pathname]
  )

  return (
    <section className="page" id={pageName}>
      <pageContext.Provider value={pathname}>
        <Header />
        {children}
        <Footer />
      </pageContext.Provider>
    </section>
  )
}

Page.propTypes = {
  pathname: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
}

export default Page
