import React from 'react';
import ReactGA from 'react-ga';
import { SOCIAL } from '../config/global';
import SmallLogo from '../static/apkomatic_logo_small.svg';
import './Footer.scss';

const d = new Date();
const year = d.getFullYear();
const socialIcons = SOCIAL.filter(s => Boolean(s.active));

const Footer = () => (
  <footer className="site-footer">
    <div className="top">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="d-flex align-items-center">
              <div>
                <p className="lead">Apkomatic</p>
                <div className="d-flex align-items-start">
                  <SmallLogo style={{ width: '60px' }} className="site-footer__logo" />

                  <p className="small">
                    We are a group of passionate web designers and developers. We design and develop high quality and
                    affordable web applications and sites for individuals and businesses.
                  </p>
                </div>
              </div>
            </div>
          </div>{' '}
          {/* end of column 1 */}
          <div className="col-md-6 text-right">
            {socialIcons.length > 0 && (
              <ul className="footer__social list-unstyled small">
                <li className="sep">Connect |</li>
                <li>
                  <a href="mailto:apkomatic@gmail.com">
                    <i className="fas fa-at" />
                  </a>
                </li>
                {socialIcons.map(s => (
                  <li key={s.id}>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href={s.href}
                      onClick={() => {
                        ReactGA.event({
                          category: 'Footer',
                          action: 'Social-Icon-Click',
                          label: s.label
                        });
                      }}
                    >
                      <i className={`fab fa-${s.iconLabel}`} />
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </div>

    <div className="site-footer__bottom text-muted">
      <div className="container">
        <div className="row">
          <div className="col-md-12 text-center">
            <p className="small text-muted">&copy; Apkomatic, All Rights Reserved {year}</p>
          </div>
        </div>
      </div>
    </div>
  </footer>
);

Footer.propTypes = {};

export default Footer;
