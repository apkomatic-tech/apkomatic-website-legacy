import React from 'react';
import Link from 'next/link';
import { Header, Footer, Wrapper, Splash } from './../components/';

const cardTextAlignStyle = 'text-center text-md-left text-lg-left text-xl-left';

const Services = () => (
  <div id="services">
    <Header path="/services" />
    <Splash title="Services" text="We offer web design and development services." />
    <Wrapper>
      <div className="row d-flex align-items-stretch mt-3 pt-3">
        {/* Basic */}
        <div className="col-lg-4 mb-3 animated fadeInUp" style={{ animationDelay: '200ms' }}>
          <div
            className={`card h-100 ${cardTextAlignStyle}`}
            style={{
              borderTop: '8px solid #FFBF69'
            }}
          >
            <div className="card-body bg-light">
              <h3>Starter</h3>
              <p className="text-muted">Perfect for clean, light, and interactive websites.</p>
            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">Mobile Responsive</li>
              <li className="list-group-item">Custom Design</li>
              <li className="list-group-item">1-4 pages</li>
              <li className="list-group-item">Basic SEO</li>
            </ul>
            <div className="card-body">
              <Link href="/contact/#contact-form">
                <a className="btn btn-tertiary d-block">Contact for price</a>
              </Link>
            </div>
          </div>
        </div>

        {/* Bootstrap  */}
        <div className="col-lg-4 mb-3 animated fadeInUp">
          <div
            className={`card h-100 zoomed-on-desktop ${cardTextAlignStyle}`}
            style={{
              borderTop: '8px solid #DB324D'
            }}
          >
            <div className="card-body bg-light">
              <h3>Value</h3>
              <p className="text-muted">
                Perfect for more complicated websites with more content and rich interactions.
              </p>
            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">Interactive &amp; Responsive</li>
              <li className="list-group-item">Custom Design</li>
              <li className="list-group-item">5-10 pages</li>
              <li className="list-group-item">Social Media Integration</li>
            </ul>
            <div className="card-body">
              <Link href="/contact/#contact-form">
                <a className="btn btn-tertiary d-block">Contact for price</a>
              </Link>
            </div>
          </div>
        </div>

        {/* Custom */}
        <div className="col-lg-4 mb-3 animated fadeInUp" style={{ animationDelay: '200ms' }}>
          <div
            className={`card h-100 ${cardTextAlignStyle}`}
            style={{
              borderTop: '8px solid #6C9DD1'
            }}
          >
            <div className="card-body bg-light">
              <h3>Flexible</h3>
              <p className="text-muted">Perfect for more complicated products, like e-commerce or web apps.</p>
            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">Interactive &amp; Responsive</li>
              <li className="list-group-item">Custom Design</li>
              <li className="list-group-item">SEO</li>
              <li className="list-group-item">Social Media Integration</li>
            </ul>
            <div className="card-body">
              <Link href="/contact/#contact-form">
                <a className="btn btn-tertiary d-block">Contact for price</a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
    <Footer />
  </div>
);

export default Services;
