import React, { Component } from 'react';
import { DISPLAY_CONTACT_FORM, CONTACT_ENDPOINT, EMAIL_CONFIRMATION_URL } from './../config/global';
import { Header, Footer, Wrapper, CustomControl, Splash } from './../components/';

export default class Contact extends Component {
  state = { hasWebsite: false };

  componentDidMount() {
    const { hash } = window.location;
    const formElement = this.formDiv;
    const bodyRect = document.body.getBoundingClientRect();
    const elemRect = formElement.getBoundingClientRect();

    if (hash.replace('#', '') === 'contact-form' && formElement) {
      const y = elemRect.top - bodyRect.top;
      window.scrollTo(0, y);
      window.setTimeout(() => {
        this.emailInput.focus();
      });
    }
  }

  toggleHasWebsite = e => {
    // set focus on website uri when "has website" checkbox is toggled
    this.setState({
      hasWebsite: e.target.checked
    });

    if (e.target.checked) {
      window.setTimeout(() => {
        this.websiteUrlInput.focus();
      }, 0);
    }
  };

  renderForm = () => (
    <div id="contact-form">
      <form
        className="contact-form form mt-3 border"
        action={CONTACT_ENDPOINT}
        method="POST"
        ref={div => {
          this.formDiv = div;
        }}
      >
        <div className="form-section p-3">
          <div className="py-2 px-3 form-section-heading">Personal Info</div>

          <div className="form-group">
            <label htmlFor="email">Email address *</label>
            <input
              id="email"
              type="email"
              className="form-control"
              placeholder="Email"
              name="email"
              ref={input => {
                this.emailInput = input;
              }}
              onChange={this.handleInputChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="full-name">Name *</label>
            <input id="full-name" type="text" className="form-control" placeholder="Name" name="name" required />
          </div>
        </div>

        <div className="form-section p-3">
          <div className="py-2 px-3 form-section-heading">Project Info</div>

          <div className="form-group">
            <label htmlFor="business-info" title="Tell us about your business (industry, competitors, etc)">
              Business info *
            </label>
            <textarea
              id="business-info"
              className="form-control"
              placeholder="Tell us about your business (industry, competitors, etc)."
              rows={3}
              name="businessInfo"
              required
            />
          </div>

          <div className="form-group">
            <label
              htmlFor="business-info"
              title="Why do you want a website? What features are you looking for? A simple website? An app? An e-commerce site?"
            >
              Objectives *
            </label>
            <textarea
              id="business-info"
              className="form-control"
              placeholder="Why do you want a website? What features are you looking for? A simple website? An app? An e-commerce site?"
              rows={5}
              name="objectives"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="deadline">Deadline *</label>
            <select className="custom-select custom-select mb-3" id="deadline" name="deadline" defaultValue="" required>
              <option value="">Select project deadline...</option>
              <option value="As soon as possible">As soon as possible</option>
              <option value="2-4 weeks">2-4 weeks</option>
              <option value="4-6 weeks">4-6 weeks</option>
              <option value="Flexible">Flexible</option>
            </select>
          </div>

          <div className="form-group">
            <CustomControl
              type="checkbox"
              labelText="I have a website"
              name="hasWebsite"
              id="hasWebsite"
              onChange={this.toggleHasWebsite}
            />
          </div>

          <div className={`form-group${this.state.hasWebsite ? '' : ' d-none'}`}>
            <input
              type="text"
              className="form-control"
              ref={input => (this.websiteUrlInput = input)}
              placeholder="Website URI (required)"
              name="websiteUri"
              required={this.state.hasWebsite}
            />
          </div>
        </div>

        <div className="form-section last p-3">
          <div className="py-2 px-3 form-section-heading">Additional Info</div>
          <div className="form-group">
            <label htmlFor="inspirations">Inspirations</label>
            <textarea
              className="form-control"
              id="inspirations"
              placeholder="Add links to the websites you like, so we get an idea..."
              name="inspirations"
              rows={4}
            />
          </div>
          <div className="form-group">
            <label htmlFor="comments">Comments (optional)</label>
            <textarea
              className="form-control"
              id="comments"
              placeholder="Comments, additional info, etc."
              name="comments"
              rows={4}
            />
          </div>
        </div>

        <div className="px-3">
          <button className="btn btn-block btn-primary">
            <i className="fa fa-envelope" /> Send
          </button>
        </div>

        <input type="hidden" name="_next" value={EMAIL_CONFIRMATION_URL} />
        <input type="text" name="_gotcha" style={{ display: 'none' }} />
      </form>
    </div>
  );

  renderStaticContact = () => (
    <div className="static-contact">
      <div className="top">
        <address>
          Email: <a href="mailto:apkomatic@gmail.com">apkomatic@gmail.com</a>
        </address>
      </div>
      <iframe
        title="map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d423286.27400089975!2d-118.69191545156662!3d34.02016131792394!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c75ddc27da13%3A0xe22fdf6f254608f4!2sLos+Angeles%2C+CA!5e0!3m2!1sen!2sus!4v1524695402254"
        width="100%"
        height="350px"
        frameBorder="0"
        style={{ border: 0 }}
        allowFullScreen
      />
    </div>
  );

  render() {
    return (
      <div id="contact">
        <Header path="/contact" />
        <div className="animated fadeIn">
          <Splash title="Contact" text="Contact us for a quote or to just say hello." />
          <Wrapper animated>
            <div className="row">
              <div className="col-md-12 col-lg-8 mx-auto">
                {DISPLAY_CONTACT_FORM && this.renderForm()}
                {!DISPLAY_CONTACT_FORM && this.renderStaticContact()}
              </div>
            </div>
          </Wrapper>
        </div>
        <Footer />
      </div>
    );
  }
}
