import React, { Component } from 'react';
import ReactGA from 'react-ga';
import { CONTACT_ENDPOINT, EMAIL_CONFIRMATION_URL } from '../config/global';
import './ContactForm.scss';

class ContactForm extends Component {
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
          <div className="form-section">
            <div className="form-group">
              <label htmlFor="email">Email address</label>
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
              <label htmlFor="full-name">Name</label>
              <input id="full-name" type="text" className="form-control" placeholder="Name" name="name" required />
            </div>

            <div className="form-group">
              <label htmlFor="deadline">When do you need it done?</label>
              <select
                className="custom-select custom-select mb-3"
                id="deadline"
                name="deadline"
                defaultValue=""
                required
              >
                <option value="">Select...</option>
                <option value="1-2 weeks">1-2 weeks</option>
                <option value="2-4 weeks">2-4 weeks</option>
                <option value="4-6 weeks">4-6 weeks</option>
                <option value="6+ weeks">More than 6 weeks</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="inspirations">Message (optional)</label>
              <textarea
                className="form-control"
                id="inspirations"
                placeholder="Please provide any details here. It can help us better estimate project scope and pricing."
                name="inspirations"
                rows={4}
              />
            </div>
          </div>

          <div className="contact-form__submit-btn-wrapper">
            <button
              onClick={this.handleFormSubmit}
              className="btn btn-primary btn-lg btn-block contact-form__submit-btn"
            >
              Get In Touch
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
