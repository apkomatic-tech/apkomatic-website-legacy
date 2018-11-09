import React, { Component } from 'react';
import ReactGA from 'react-ga';
import { CONTACT_ENDPOINT, EMAIL_CONFIRMATION_URL } from '../config/global';
import { Form, FormBlock, InputField, Legend } from './styles/FormStyles';
import './ContactForm.scss';

class ContactForm extends Component {
  componentDidMount() {
    this.nameFieldNode.focus();
  }

  onFormSubmit = () => {
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
      <div className="row">
        <div className="col-lg-6 mx-auto">
          <Form
            action={CONTACT_ENDPOINT}
            method="POST"
            validate
            ref={node => {
              this.formNode = node;
            }}
          >
            <Legend>
              Let
              {"'"}s Get In Touch
            </Legend>
            <FormBlock alignItems="center" justifyContent="space-between" spaceBottom="1rem">
              <div>
                <InputField
                  ref={node => (this.nameFieldNode = node)}
                  name="name"
                  type="text"
                  placeholder="Name"
                  required
                />
              </div>
              <div>
                <InputField name="email" type="email" placeholder="Email" required />
              </div>
            </FormBlock>

            <FormBlock spaceBottom="1rem">
              <InputField name="message" as="textarea" rows="6" placeholder="Message (optional)" />
            </FormBlock>

            <FormBlock>
              <button
                type="submit"
                onClick={this.onFormSubmit}
                className="btn btn--with-direction-right btn-primary btn-block contact-form__submit-btn"
              >
                Send <i className="fa fa-envelope direction-icon" />
              </button>
            </FormBlock>

            <input type="hidden" name="_next" value={EMAIL_CONFIRMATION_URL} />
            <input type="text" name="_gotcha" style={{ display: 'none' }} />
          </Form>
        </div>
      </div>
    );
  }
}

export default ContactForm;
