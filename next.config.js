const withSass = require('@zeit/next-sass');

module.exports = withSass({
  exportPathMap() {
    return {
      '/': { page: '/' },
      '/about': { page: '/about' },
      '/services': { page: '/services' },
      '/contact': { page: '/contact' },
      '/work': { page: '/work' },
      '/faq': { page: '/faq' },
      '/thank-you': { page: '/thank-you' }
    };
  }
});
