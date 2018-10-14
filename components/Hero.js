import React from 'react';
import ReactGA from 'react-ga';
import Link from 'next/link';
import VanillaTilt from 'vanilla-tilt';
import './Hero.scss';

export default class Hero extends React.Component {
  componentDidMount() {
    if (this.aboutUsNode) {
      VanillaTilt.init(this.aboutUsNode, {
        max: 10,
        speed: 5000
      });
    }
  }

  render() {
    return (
      <React.Fragment>
        <div
          className="hero jumbotron d-flex align-items-center mb-0"
          ref={hero => {
            this.heroElement = hero;
          }}
        >
          <div className="container">
            <h1 className="hero-title text-center animated fadeInDown" style={{ animationDuration: '500ms' }}>
              Take your website or app <br /> to a whole new level.
            </h1>

            <div className="animated fadeInUp" style={{ animationDelay: '300ms' }}>
              <Link href="/contact">
                <button
                  style={{ maxWidth: '300px' }}
                  className="btn btn-tertiary mx-auto text-uppercase btn--with-direction-right btn-lg btn-block btn--hero"
                >
                  Get a Quote <i className="direction-icon fas fa-chevron-right" />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
