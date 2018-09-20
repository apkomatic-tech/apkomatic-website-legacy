import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';

import './Callout.scss';

const Callout = ({ title, href }) => (
  <Link href={href}>
    <section className="callout">
      <div className="container callout__inner">
        <h1 className="callout__message">{title}</h1>
        <div className="callout__arrow">
          <i className="fa fa-arrow-right" />
        </div>
      </div>
    </section>
  </Link>
);

Callout.propTypes = {
  title: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired
};

export default Callout;
