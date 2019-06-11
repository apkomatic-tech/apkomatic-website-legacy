/* eslint-disable jsx-a11y/label-has-for */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState, useEffect } from 'react';
import ReactGA from 'react-ga';

import { CONTACT_ENDPOINT, EMAIL_CONFIRMATION_URL } from '../config/global';
import Button from './shared/Button';
import './ContactForm.scss';

const ContactForm = () => {
  let formNode;

  const [formState, setFormState] = useState({
    email: '',
    fullName: '',
    deadline: '',
    message: ''
  });

  const submitButtonProps = {
    look: 'primary',
    size: 'lg',
    block: true,
    type: 'submit',
    className: 'contact-form__submit-btn'
  };

  const saveFormStateInStorage = () => {
    if (window.localStorage) {
      window.localStorage.setItem('formState', JSON.stringify(formState));
    }
  };

  const clearFormStateInStorage = () => {
    if (window.localStorage) {
      if (window.localStorage.getItem('formState')) {
        window.localStorage.removeItem('formState');
      }
    }
  };

  const handleFormSubmit = () => {
    const formIsValid = formNode.checkValidity();
    if (formIsValid) {
      ReactGA.event({
        category: 'Contact',
        action: 'Submit-Contact-Form'
      });

      clearFormStateInStorage();
    }
  };

  const handleInputChange = e => {
    const fieldName = e.target.name;
    const fieldValue = e.target.value;

    setFormState({
      ...formState,
      [fieldName]: fieldValue
    });
    saveFormStateInStorage();
  };

  // component did mount
  // only run once on mount
  useEffect(() => {
    if (window.localStorage) {
      if (window.localStorage.getItem('formState')) {
        const newFormState = JSON.parse(window.localStorage.getItem('formState'));
        setFormState(newFormState);
      }
    }
  }, []);

  return (
    <div id="contact-form">
      <form
        className="contact-form form mt-3"
        method="post"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        data-netlify-recaptcha="true"
        name="apkomatic-contact"
        ref={node => {
          formNode = node;
        }}
      >
        <input type="hidden" name="form-name" value="apkomatic-contact" />
        <div style={{ display: 'none' }}>
          <input name="bot-field" />
        </div>
        <div className="form-section">
          <div className="form-group">
            <label htmlFor="email">Email address</label>
            <input
              id="email"
              type="email"
              className="form-control"
              placeholder="Email"
              name="email"
              value={formState.email}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="full-name">Name</label>
            <input
              id="full-name"
              type="text"
              className="form-control"
              placeholder="Name"
              name="fullName"
              value={formState.fullName}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="deadline">When do you need it done?</label>
            <select
              className="custom-select custom-select mb-3"
              id="deadline"
              name="deadline"
              value={formState.deadline}
              onChange={handleInputChange}
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
              name="message"
              value={formState.message}
              onChange={handleInputChange}
              rows={5}
            />
          </div>
        </div>

        <div data-netlify-recaptcha="true" />
        <div className="contact-form__submit-btn-wrapper">
          <Button onClick={handleFormSubmit} {...submitButtonProps}>
            Get In Touch
          </Button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
