import React from "react"
import ReactGA from "react-ga"
import { SOCIAL } from "../config/global"
import Logo from "./Logo"

const socialIcons = SOCIAL.filter(s => Boolean(s.active))

const Footer = () => (
  <footer className="site-footer">
    <div className="top">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="d-flex align-items-center">
              <div>
                <Logo width={100} height={30} />
                <div className="d-flex align-items-start">
                  <p>
                    We are a group of passionate web designers and developers.
                    We design and develop high quality and affordable web
                    applications and sites for individuals and businesses.
                  </p>
                </div>
              </div>
            </div>
          </div>{" "}
          {/* end of column 1 */}
          <div className="col-md-6 text-right">
            {socialIcons.length > 0 && (
              <ul className="footer__social list-unstyled">
                <li className="sep">Connect |</li>
                <li>
                  <a href="mailto:apkomatic@gmail.com">
                    <span className="sr-only">Email Apkomatic</span>
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
                          category: "Footer",
                          action: "Social-Icon-Click",
                          label: s.label
                        })
                      }}
                    >
                      <span className="sr-only">{s.label}</span>
                      <i className={`fab fa-${s.iconLabel}`} />
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-md-12">
            <p>
              &copy; Apkomatic, All Rights Reserved {new Date().getFullYear()}
            </p>
          </div>
        </div>
      </div>
    </div>
  </footer>
)

Footer.propTypes = {}

export default Footer
