import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import ReactGA from 'react-ga';
import { LINKS, GUA_TRACKING_ID, IS_DEV } from '../config/global';
import './Header.scss';

class Header extends Component {
  state = {
    navOpen: false,
    stickyInitialized: false
  };

  componentDidMount() {
    const { fixed } = this.props;

    ReactGA.initialize(GUA_TRACKING_ID, { debug: IS_DEV });
    if (typeof window !== 'undefined') {
      if (fixed) {
        this.initStickyHeader();
      }
      ReactGA.pageview(window.location.pathname + window.location.search);
    }

    if (!('backgroundBlendMode' in document.body.style)) {
      document.body.classList.add('background-blend-unsupported');
    } else {
      document.body.classList.add('background-blend-supported');
    }
  }

  componentDidUpdate() {
    const { fixed } = this.props;
    const { stickyInitialized } = this.state;
    if (fixed && !stickyInitialized) {
      this.initStickyHeader();
    }
  }

  displayStickyHeader = () => {
    if (this.headerNode) {
      this.headerNode.classList.add('fadeInDown');
      this.headerNode.classList.add('sticky');
    }
  };

  hideStickyHeader = () => {
    if (this.headerNode) {
      this.headerNode.classList.remove('fadeInDown');
      this.headerNode.classList.remove('sticky');
    }
  };

  initStickyHeader = (scrollThreshold = 150) => {
    let lastScroll = 0;

    // on initial page load check if page was scrolled
    if (window.pageYOffset > scrollThreshold) {
      this.displayStickyHeader();
    }

    this.headerNode.classList.add('animated');

    window.addEventListener('scroll', () => {
      // close navigation when scrolling
      if (document.body.classList.contains('nav-open')) {
        this.closeNav();
      }

      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

      if (scrollTop > scrollThreshold) {
        if (scrollTop >= lastScroll) {
          this.displayStickyHeader();
        } else {
          this.hideStickyHeader();
        }
      } else {
        this.hideStickyHeader();
      }

      lastScroll = scrollTop <= 0 ? 0 : scrollTop;
    });

    this.setState({
      stickyInitialized: true
    });
  };

  closeNav = () => {
    this.setState({
      navOpen: false
    });

    document.body.classList.remove('nav-open');
  };

  toggleNav = () => {
    this.setState(prevState => ({
      navOpen: !prevState.navOpen
    }));

    document.body.classList.toggle('nav-open');
  };

  renderDesktopLink = ({ label, pathname, isButton }) => {
    if (isButton) {
      return <a className="btn btn-primary nav-btn">{label}</a>;
    }
    const { path } = this.props;
    return <a className={`top-nav__link${path === pathname ? ' active' : ''}`}>{label}</a>;
  };

  render() {
    const { fixed } = this.props;
    return (
      <React.Fragment>
        <header ref={node => (this.headerNode = node)} className={`header${fixed ? ' header--fixed' : ''}`}>
          <div className="container header__inner">
            <Link prefetch href="/">
              <a className="brand">
                <img src="/static/apkomatic_logo_lg.png" style={{ width: '160px' }} alt="Apkomatic Logo" />
              </a>
            </Link>
            <i role="navigation" className="top-nav__toggle fa fa-bars" onClick={this.toggleNav} />
            <ul className="top-nav">
              {LINKS.filter(({ active }) => Boolean(active)).map(({ id, href, ...linkProps }) => (
                <li key={id} className="top-nav__item">
                  <Link prefetch href={href}>
                    {this.renderDesktopLink(linkProps)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </header>
        <div className={`mobile-nav${this.state.navOpen ? ' open' : ''}`}>
          <ul className="mobile-nav__list">
            {LINKS.filter(({ active }) => Boolean(active)).map(({ id, href, label, pathname }) => (
              <li key={id} className="mobile-nav__item" onClick={this.closeNav}>
                <Link prefetch href={href}>
                  <a className={`mobile-nav__link${this.props.path === pathname ? ' active' : ''}`}>{label}</a>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </React.Fragment>
    );
  }
}

Header.propTypes = {
  path: PropTypes.string,
  fixed: PropTypes.bool
};

Header.defaultProps = {
  path: '',
  fixed: false
};

export default Header;
