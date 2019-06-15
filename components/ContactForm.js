/* eslint-disable jsx-a11y/label-has-for */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState, useEffect, useRef } from 'react';
import ReactGA from 'react-ga';
import { encode } from '../utils';
import Button from './shared/Button';
import Toast from './shared/Toast';
import './ContactForm.scss';

const CONTACT_FORM_NAME = process.env.NODE_ENV === 'production' ? 'apkomatic-prod-contact' : 'apkomatic-dev-contact';
const notificationDelay = 3500;
const initialFormState = {
  email: '',
  fullName: '',
  deadline: '',
  message: ''
};
const submitButtonProps = {
  look: 'primary',
  size: 'lg',
  block: true,
  type: 'submit',
  className: 'contact-form__submit-btn'
};

const ContactForm = () => {
  const [formState, setFormState] = useState(initialFormState);
  const [validation, setValidation] = useState({
    formValid: false
  });
  const [submission, setSubmission] = useState({
    success: {
      show: false,
      message: 'We have received your contact request. Someone from our team will contact you shortly.'
    },
    error: {
      show: false,
      message: ''
    }
  });

  const formNode = useRef(null);
  const isFormValid = () => formState.email !== '' && formState.fullName !== '' && formState.deadline !== '';
  const showRequestFail = () => {
    setSubmission({
      success: {
        ...submission.success,
        show: false
      },
      error: {
        show: true,
        message: 'Submission request failed. Please try again.'
      }
    });
  };

  const sendEmail = async () => {
    try {
      const response = await fetch('/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: encode({ 'form-name': CONTACT_FORM_NAME, ...formState })
      });
      if (response.ok) {
        setSubmission({
          success: {
            ...submission.success,
            show: true
          },
          error: {
            ...submission.error,
            show: false
          }
        });
        setFormState({ ...initialFormState });
      } else {
        showRequestFail();
      }
    } catch (e) {
      showRequestFail();
    }
    // TODO: dev only remove before deploying!!
    // setSubmission({
    //   success: {
    //     ...submission.success,
    //     show: true
    //   },
    //   error: {
    //     ...submission.error,
    //     show: false
    //   }
    // });
  };

  const handleFormSubmit = e => {
    e.preventDefault();

    if (!isFormValid()) {
      return setSubmission({
        success: {
          ...submission.success,
          show: false
        },
        error: {
          show: true,
          message: 'Submission error: Please fill out all required fields'
        }
      });
    }

    ReactGA.event({
      category: 'Contact',
      action: 'Submit-Contact-Form'
    });
    return sendEmail();
  };

  const handleInputChange = e => {
    const fieldName = e.target.name;
    const fieldValue = e.target.value;

    setFormState({
      ...formState,
      [fieldName]: fieldValue
    });
  };

  const resetSubmissionState = () => {
    setSubmission({
      success: {
        ...submission.success,
        show: false
      },
      error: {
        ...submission.error,
        show: false
      }
    });
  };

  // component did mount
  // only run once on mount
  useEffect(() => {
    if (window.localStorage) {
      if (window.localStorage.getItem('formState')) {
        const newFormState = JSON.parse(window.localStorage.getItem('formState'));
        setFormState(newFormState);
        if (isFormValid()) {
          setValidation({
            formValid: true
          });
        }
      }
    }
  }, []);

  useEffect(
    () => {
      setValidation({
        formValid: isFormValid()
      });
    },
    [formState]
  );

  useEffect(
    () => {
      if (submission.success.show || submission.error.show) {
        window.setTimeout(resetSubmissionState, notificationDelay);
      }
    },
    [submission]
  );

  return (
    <React.Fragment>
      <Toast show={submission.success.show}>{submission.success.message}</Toast>
      <Toast type="error" show={submission.error.show}>
        {submission.error.message}
      </Toast>
      <div id="contact-form">
        <form
          name={CONTACT_FORM_NAME}
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          onSubmit={handleFormSubmit}
          className="contact-form form mt-3"
          ref={formNode}
        >
          <input type="hidden" name="form-name" value={CONTACT_FORM_NAME} />
          <div className="form-section">
            <div className="form-group">
              <label className="label--with-hint" htmlFor="email">
                Email address <span className="hint">Required</span>
              </label>
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
              <label className="label--with-hint" htmlFor="full-name">
                Name <span className="hint">Required</span>
              </label>
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
              <label className="label--with-hint" htmlFor="deadline">
                When do you need it done? <span className="hint">Required</span>
              </label>
              <select
                className="custom-select custom-select mb-3"
                id="deadline"
                name="deadline"
                value={formState.deadline}
                onChange={handleInputChange}
                required
              >
                <option value="">Select Deadline...</option>
                <option value="1-2 weeks">1-2 weeks</option>
                <option value="2-4 weeks">2-4 weeks</option>
                <option value="4-6 weeks">4-6 weeks</option>
                <option value="6+ weeks">More than 6 weeks</option>
              </select>
            </div>
            <div className="form-group">
              <label className="label--with-hint" htmlFor="inspirations">
                Message <span className="hint">Optional</span>
              </label>
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

          <div className="contact-form__submit-btn-wrapper">
            <Button onClick={handleFormSubmit} {...submitButtonProps}>
              Get In Touch
            </Button>
          </div>
        </form>
      </div>
    </React.Fragment>
  );
};

export default ContactForm;
