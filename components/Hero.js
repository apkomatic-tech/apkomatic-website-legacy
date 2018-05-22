import React, { Component } from 'react';

import Link from 'next/link';
import PropTypes from 'prop-types';

import Typed from 'typed.js';

import './Hero.scss';

export default class Hero extends Component {
  static propTypes = {
    tagLines: PropTypes.arrayOf(PropTypes.string).isRequired
  };

  componentDidMount() {
    const { tagLines } = this.props;
    const options = {
      strings: tagLines,
      typeSpeed: 75,
      backSpeed: 50,
      showCursor: false
    };

    this.typed = new Typed(this.el, options);
  }

  componentWillUnmount() {
    this.typed.destroy();
  }

  render() {
    return (
      <div className="hero jumbotron d-flex align-items-center mb-0">
        <div className="container">
          <h1 className="hero-title">
            <span
              style={{
                whiteSpace: 'pre'
              }}
              ref={el => {
                this.el = el;
              }}
            />{' '}
          </h1>

          <p className="lead hero-slogan text-center">
            Web design and development company <br /> based in Los Angeles.
          </p>

          <div className="animated tada" style={{ animationDuration: '1s', animationDelay: '300ms' }}>
            <Link href="/contact#contact-form">
              <a
                style={{ maxWidth: '200px' }}
                className="btn btn-tertiary text-uppercase btn-lg btn-block mx-auto hero-cta"
              >
                Get Started <i className="fa fa-angle-double-right" />
              </a>
            </Link>
          </div>
          {/* <p className="lead" style={{ textShadow: '0 10px 35px rgba(22,22,22,.5)', fontSize: '25px' }}>
                We are a group of passionate web designers and developers. We design and develop high quality and
                affordable web applications and sites for individuals and businesses.
              </p> */}
        </div>
        {/* <HeroScrollElement /> */}
      </div>
    );
  }
}
