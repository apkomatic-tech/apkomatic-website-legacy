import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import ReactGA from 'react-ga';
import { LINKS, GUA_TRACKING_ID, IS_DEV } from './../config/global';
import './Header.scss';

import Logo from './../static/apkomatic_logo_red.svg';

class Header extends Component {
  state = {
    navOpen: false
  };

  componentDidMount() {
    ReactGA.initialize(GUA_TRACKING_ID, { debug: IS_DEV });
    if (typeof window !== 'undefined') {
      ReactGA.pageview(window.location.pathname + window.location.search);
    }
  }

  closeNav = () => {
    this.setState({
      navOpen: false
    });

    document.body.classList.remove('nav-open');
  };

  toggleNav = () => {
    this.setState({
      navOpen: !this.state.navOpen
    });

    document.body.classList.toggle('nav-open');
  };

  render() {
    return (
      <React.Fragment>
        <header className="header">
          <div className="container header__inner">
            <Link href="/">
              <a className="brand">
                <Logo style={{ width: '160px' }} />
              </a>
            </Link>
            <i className="top-nav__toggle fa fa-bars" onClick={this.toggleNav} />
            <ul className="top-nav">
              {LINKS.filter(({ active }) => Boolean(active)).map(({ id, href, label, pathname }) => (
                <li key={id} className="top-nav__item">
                  <Link href={href}>
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
                <Link href={href}>
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
