import React from 'react'
import Link from 'next/link'
import ReactGA from 'react-ga'
import Wrapper from './Wrapper'

type SocialLinkType = {
  id: string | number
  href: string
  label: string
  iconClass: string
  active: boolean
}

export const socialLinks: SocialLinkType[] = [
  {
    id: 'email',
    href: 'mailto:apkomatic@gmail.com',
    label: 'email',
    iconClass: 'fa fa-at',
    active: true
  },
  {
    id: 'twitter',
    href: 'https://twitter.com/apkomatic',
    label: 'twitter',
    iconClass: 'fab fa-twitter',
    active: true
  },
  {
    id: 'instagram',
    href: 'https://www.instagram.com/apkomatic',
    label: 'instagram',
    iconClass: 'fas fa-instagram',
    active: false
  }
]

const Footer = () => (
  <footer className="site-footer">
    <Wrapper customClass="site-footer__wrapper">
      <section className="site-footer__top">
        <div className="site-footer__company-info">
          <Link href="/" passHref>
            <a className="site-footer__company-name">Apkomatic</a>
          </Link>
          <p>
            We are a group of passionate web designers and developers. We design
            and develop high quality and affordable web applications and sites
            for individuals and businesses.
          </p>
        </div>
        <div className="site-footer__social">
          {socialLinks
            .filter(s => Boolean(s.active))
            .map(s => (
              <a
                key={s.id}
                target="_blank"
                rel="noopener noreferrer"
                href={s.href}
                onClick={() => {
                  ReactGA.event({
                    category: 'Footer',
                    action: 'Social-Icon-Click',
                    label: s.label
                  })
                }}
              >
                <span className="sr-only">{s.label}</span>
                <i className={s.iconClass} />
              </a>
            ))}
        </div>
      </section>
      <section className="site-footer__bottom">
        <p className="site-footer__copyright">
          &copy; Apkomatic, All Rights Reserved {new Date().getFullYear()}
        </p>
      </section>
    </Wrapper>
  </footer>
)

export default Footer
