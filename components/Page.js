import React from 'react';
import { Header, Footer } from '.';

const Page = props => {
  const { pathname, children } = props;
  const pageName = pathname === '/' ? 'landing' : pathname.replace('/', '');

  return (
    <section className="page" id={pageName}>
      <Header path={pathname} fixed={pathname === '/'} />
      {children}
      <Footer />
    </section>
  );
};

export default Page;
