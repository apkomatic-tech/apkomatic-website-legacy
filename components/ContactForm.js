import React, { Component } from 'react';
import ReactGA from 'react-ga';
import { CONTACT_ENDPOINT, EMAIL_CONFIRMATION_URL } from '../config/global';
import { CustomControl } from '.';

class ContactForm extends Component {
  state = { hasWebsite: false };

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

  handleFormSubmit = () => {
    const formIsValid = this.formNode.checkValidity();
    if (formIsValid) {
      ReactGA.event({
        category: 'Contact',
        action: 'Submit-Contact-Form'
      });
    }
  };

  render() {
    return (
      <div id="contact-form">
        <form
          className="contact-form form mt-3"
          action={CONTACT_ENDPOINT}
          method="POST"
          ref={node => {
            this.formNode = node;
          }}
        >
          <div className="form-section p-3">
            <div className="py-2 px-3 form-section-heading">Tell us about you</div>

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
            <div className="py-2 px-3 form-section-heading">Tell us about your goal</div>

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
              <select
                className="custom-select custom-select mb-3"
                id="deadline"
                name="deadline"
                defaultValue=""
                required
              >
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
                ref={input => {
                  this.websiteUrlInput = input;
                }}
                placeholder="Website URI (required)"
                name="websiteUri"
                required={this.state.hasWebsite}
              />
            </div>
          </div>

          <div className="form-section last p-3">
            <div className="py-2 px-3 form-section-heading">Additional Info</div>
            <div className="form-group">
              <label htmlFor="inspirations">Inspirations (optional)</label>
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
            <button
              onClick={this.handleFormSubmit}
              className="btn btn-primary"
              style={{ width: '100%', maxWidth: '320px', marginLeft: 'auto', marginRight: 'auto', display: 'block' }}
            >
              <i className="fa fa-envelope" /> Send
            </button>
          </div>

          <input type="hidden" name="_next" value={EMAIL_CONFIRMATION_URL} />
          <input type="text" name="_gotcha" style={{ display: 'none' }} />
        </form>
      </div>
    );
  }
}

export default ContactForm;
