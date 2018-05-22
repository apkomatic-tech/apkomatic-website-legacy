const withSass = require('@zeit/next-sass');

module.exports = withSass({
  exportPathMap() {
    return {
      '/': { page: '/' },
      '/services': { page: '/services' },
      '/contact': { page: '/contact' },
      '/work': { page: '/work' },
      '/thank-you': { page: '/thank-you' }
    };
  }
});
