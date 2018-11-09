import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Header, Footer } from '.';

const theme = {
  colors: {
    white: '#fff',
    dark: '#19213e',
    primary: '#0769fc',
    secondary: '#FFBf69',
    ternary: '#DB324D',
    success: '#5FB54C',
    offWhite: '#f1f3f7'
  }
};

const Page = props => {
  const { pathname, children } = props;
  const pageName = pathname === '/' ? 'landing' : pathname.replace('/', '');

  return (
    <ThemeProvider theme={theme}>
      <section className="page" id={pageName}>
        <Header path={pathname} fixed={pathname === '/'} />
        {children}
        <Footer />
      </section>
    </ThemeProvider>
  );
};

export default Page;
