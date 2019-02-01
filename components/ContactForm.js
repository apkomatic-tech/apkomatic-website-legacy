/* eslint-disable jsx-a11y/label-has-for */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { Component } from 'react';
import ReactGA from 'react-ga';

import { CONTACT_ENDPOINT, EMAIL_CONFIRMATION_URL } from '../config/global';
import Button from './shared/Button';
import './ContactForm.scss';

class ContactForm extends Component {
  state = {
    formState: {
      email: '',
      fullName: '',
      deadline: '',
      message: ''
    }
  };

  componentDidMount() {
    if (window.localStorage) {
      if (window.localStorage.getItem('formState')) {
        this.setState({
          formState: JSON.parse(window.localStorage.getItem('formState'))
        });
      }
    }
  }

  saveFormStateInStorage = () => {
    if (window.localStorage) {
      const { formState } = this.state;
      window.localStorage.setItem('formState', JSON.stringify(formState));
    }
  };

  clearFormStateInStorage = () => {
    if (window.localStorage) {
      if (window.localStorage.getItem('formState')) {
        window.localStorage.removeItem('formState');
      }
    }
  };

  handleFormSubmit = () => {
    const formIsValid = this.formNode.checkValidity();
    if (formIsValid) {
      ReactGA.event({
        category: 'Contact',
        action: 'Submit-Contact-Form'
      });

      this.clearFormStateInStorage();
    }
  };

  handleInputChange = e => {
    const fieldName = e.target.name;
    const fieldValue = e.target.value;
    this.setState(
      currentState => ({
        formState: {
          ...currentState.formState,
          [fieldName]: fieldValue
        }
      }),
      this.saveFormStateInStorage
    );
  };

  render() {
    const { formState } = this.state;
    const { email, fullName, deadline, message } = formState;

    const submitButtonProps = {
      look: 'primary',
      size: 'lg',
      block: true,
      type: 'submit',
      className: 'contact-form__submit-btn'
    };

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
                value={email}
                onChange={this.handleInputChange}
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
                value={fullName}
                onChange={this.handleInputChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="deadline">When do you need it done?</label>
              <select
                className="custom-select custom-select mb-3"
                id="deadline"
                name="deadline"
                value={deadline}
                onChange={this.handleInputChange}
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
                value={message}
                onChange={this.handleInputChange}
                rows={5}
              />
            </div>
          </div>

          <div className="contact-form__submit-btn-wrapper">
            <Button onClick={this.handleFormSubmit} {...submitButtonProps}>
              Get In Touch
            </Button>
          </div>

          <input type="hidden" name="_next" value={EMAIL_CONFIRMATION_URL} />
          <input type="text" name="_gotcha" style={{ display: 'none' }} />
        </form>
      </div>
    );
  }
}

export default ContactForm;
