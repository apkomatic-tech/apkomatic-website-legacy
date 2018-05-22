export const LINKS = [
  {
    id: 1,
    href: '/',
    pathname: '/',
    label: 'Home',
    active: true
  },
  {
    id: 2,
    href: '/services',
    pathname: '/services',
    label: 'Services',
    active: true
  },
  {
    id: 3,
    href: '/work',
    pathname: '/work',
    label: 'Work',
    active: true
  },
  {
    id: 4,
    href: '/contact',
    pathname: '/contact',
    label: 'Contact',
    active: true
  }
];
export const SOCIAL = [
  {
    id: 1,
    href: 'https://twitter.com/apkomatic',
    label: 'twitter',
    iconLabel: 'twitter',
    active: true
  },
  {
    id: 2,
    href: 'https://www.instagram.com/apkomatic',
    label: 'instagram',
    iconLabel: 'instagram',
    active: true
  }
];
export const DISPLAY_CONTACT_FORM = true;
export const CONTACT_ENDPOINT =
  process.env.NODE_ENV === 'production'
    ? 'https://formspree.io/apkomatic@gmail.com'
    : 'https://formspree.io/konstantindev925@gmail.com';
export const EMAIL_CONFIRMATION_URL =
  process.env.NODE_ENV === 'production' ? '//apkomatic.com/thank-you' : '//localhost:3000/thank-you';
