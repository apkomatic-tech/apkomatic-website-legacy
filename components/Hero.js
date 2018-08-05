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
              Take your website or app <br /> to the whole new level.
            </h1>

            <div className="animated fadeInUp" style={{ animationDelay: '300ms' }}>
              <Link href="/contact">
                <button
                  style={{ maxWidth: '200px' }}
                  className="btn btn-tertiary text-uppercase btn-lg btn-block mx-auto hero-cta"
                >
                  Get Started <i className="fa fa-angle-right" />
                </button>
              </Link>
            </div>
          </div>
          <button
            className="scroll-down animated fadeInUp"
            style={{ animationDelay: '1s' }}
            ref={el => {
              this.scrollElement = el;
            }}
            onClick={() => {
              const heroRect = this.heroElement.getBoundingClientRect();
              const heightOffset = heroRect.height + 80;
              window.scrollTo(0, heightOffset);

              ReactGA.event({
                category: 'Landing-Page',
                action: 'Click-Arrow-Down'
              });
            }}
          >
            <i className="fa fa-arrow-down animated pulse infinite" />
          </button>
        </div>
        <section
          className="section-about"
          ref={el => {
            this.aboutSection = el;
          }}
        >
          <div className="container" data-aos="fade-up">
            <div
              ref={node => {
                this.aboutUsNode = node;
              }}
            >
              <h3 className="text-center">Who are we?</h3>
              <p className="text">
                {' '}
                <strong>Apkomatic</strong> is a Los Angeles based web design and development group of professionals who
                love producing high quality and affordable web applications and sites for individuals and businesses. We
                strive to deliver high-quality work at low cost for small and mid-size businesses to better reach out to
                their customers through technology.
              </p>
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}
