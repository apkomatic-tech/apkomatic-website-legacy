import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import ReactGA from 'react-ga';
import { LINKS, GUA_TRACKING_ID, IS_DEV } from '../config/global';
import './Header.scss';

class Header extends Component {
  state = {
    navOpen: false
  };

  componentDidMount() {
    ReactGA.initialize(GUA_TRACKING_ID, { debug: IS_DEV });
    if (typeof window !== 'undefined') {
      ReactGA.pageview(window.location.pathname + window.location.search);
    }

    if (!('backgroundBlendMode' in document.body.style)) {
      document.body.classList.add('background-blend-unsupported');
    } else {
      document.body.classList.add('background-blend-supported');
    }
  }

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

  render() {
    return (
      <React.Fragment>
        <header className={`header${this.props.fixed ? ' header--fixed' : ''}`}>
          <div className="container header__inner">
            <Link prefetch href="/">
              <a className="brand">
                <img src="/static/apkomatic_logo_lg.png" style={{ width: '160px' }} alt="Apkomatic Logo" />
              </a>
            </Link>
            <i role="navigation" className="top-nav__toggle fa fa-bars" onClick={this.toggleNav} />
            <ul className="top-nav">
              {LINKS.filter(({ active }) => Boolean(active)).map(({ id, href, label, pathname }) => (
                <li key={id} className="top-nav__item">
                  <Link prefetch href={href}>
                    <a className={`top-nav__link${this.props.path === pathname ? ' active' : ''}`}>{label}</a>
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
  path: PropTypes.string
};

Header.defaultProps = {
  path: ''
};

export default Header;
