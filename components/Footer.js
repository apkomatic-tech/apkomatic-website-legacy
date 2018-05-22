import React from 'react';
import PropTypes from 'prop-types';
import { SOCIAL } from './../config/global';
import SmallLogo from './../static/apkomatic_logo_small.svg';
import './Footer.scss';

const d = new Date();
const year = d.getFullYear();
const socialIcons = SOCIAL.filter(s => Boolean(s.active));

const Footer = props => (
  <footer className="site-footer text-dark">
    <div className="top py-3">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="d-flex align-items-center">
              <div>
                <p className="lead">Apkomatic</p>
                <div className="d-flex align-items-start">
                  <SmallLogo style={{ width: '60px' }} className="site-footer__logo" />

                  <p className="text-muted small">
                    We are a group of passionate web designers and developers. We design and develop high quality and
                    affordable web applications and sites for individuals and businesses.
                  </p>
                </div>
              </div>
            </div>
          </div>{' '}
          {/* end of column 1 */}
          {socialIcons.length > 0 && (
            <div className="col-md-6 text-right">
              <ul className="footer__social list-unstyled small">
                {socialIcons.map(s => (
                  <li key={s.id}>
                    <a href={s.href}>
                      <i className={`fa fa-${s.iconLabel}`} />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>

    <div className="site-footer__bottom py-3 text-muted">
      <div className="container">
        <div className="row">
          <div className="col-md-12 text-center">
            <p className="small copyright">&copy; Apkomatic, All Rights Reserved {year}</p>
          </div>
        </div>
      </div>
    </div>
  </footer>
);

Footer.propTypes = {};

export default Footer;
