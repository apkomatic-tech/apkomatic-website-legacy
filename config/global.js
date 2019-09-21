export const IS_DEV = process.env.NODE_ENV !== 'production'
export const GUA_TRACKING_ID =
  process.env.NODE_ENV === 'production' ? 'UA-101945546-1' : 'UA-119740251-1'
export const SENTRY_KEY =
  process.env.NODE_ENV === 'production'
    ? 'https://7dcedfd697fa495cb02c6bfd0e177260@sentry.io/1284502'
    : 'https://b437d768b74a4b179edcb38b4d801a60@sentry.io/1284503'
export const DISPLAY_WORK = false
export const CONTACT_ENDPOINT =
  process.env.NODE_ENV === 'production'
    ? 'https://formspree.io/apkomatic@gmail.com'
    : 'https://formspree.io/konstantindev925@gmail.com'
export const EMAIL_CONFIRMATION_URL =
  process.env.NODE_ENV === 'production'
    ? '//apkomatic.com/thank-you'
    : '//localhost:3000/thank-you'
export const LINKS = [
  {
    id: 1,
    href: '/',
    pathname: '/',
    label: 'Home',
    active: true,
  },
  {
    id: 2,
    href: '/services',
    pathname: '/services',
    label: 'Services',
    active: true,
  },
  {
    id: 3,
    href: '/work',
    pathname: '/work',
    label: 'Work',
    active: DISPLAY_WORK,
  },
  {
    id: 4,
    href: '/about',
    pathname: '/about',
    label: 'About',
    active: true,
  },
  {
    id: 5,
    href: '/faq',
    pathname: '/faq',
    label: 'FAQ',
    active: true,
  },
  {
    id: 6,
    href: '/contact',
    pathname: '/contact',
    label: 'Get a Quote',
    active: true,
    isButton: true,
  },
]
export const SOCIAL = [
  {
    id: 1,
    href: 'https://twitter.com/apkomatic',
    label: 'twitter',
    iconLabel: 'twitter',
    active: true,
  },
  {
    id: 2,
    href: 'https://www.instagram.com/apkomatic',
    label: 'instagram',
    iconLabel: 'instagram',
    active: false,
  },
]
export const ENABLE_STICKY_HEADER = false
