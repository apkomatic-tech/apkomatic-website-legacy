/* eslint-disable no-use-before-define */
/* eslint-disable jsx-a11y/label-has-for */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState, useEffect, useRef } from 'react';
import ReactGA from 'react-ga';
import { encode, validateEmail } from '../utils';
import Button from './shared/Button';
import Toast from './shared/Toast';
import './ContactForm.scss';

console.warn('build context', process.env.CONTEXT);

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

const VALIDATION_MESSAGES = {
  required: 'This field is required',
  email: 'Please provide a valid email address',
  deadline: 'Please choose deadline'
};

const ContactForm = () => {
  const [formState, setFormState] = useState(initialFormState);
  const [formInitialized, setFormInitialized] = useState(false);
  const [validation, setValidation] = useState({
    formValid: false,
    email: '',
    fullName: '',
    deadline: ''
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
  const [processing, setProcessing] = useState(false);

  const formNode = useRef(null);
  const validateForm = () => {
    if (formState.email !== '' && formState.fullName !== '' && formState.deadline !== '') {
      if (validateEmail(formState.email)) {
        return true;
      }
      return false;
    }
    return false;
  };
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
      setProcessing(true);
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
        setValidation({
          ...validation,
          formValid: true,
          email: '',
          fullName: '',
          deadline: ''
        });
        setProcessing(false);
      } else {
        showRequestFail();
        setProcessing(false);
      }
    } catch (e) {
      showRequestFail();
      setProcessing(false);
    }
  };

  const handleFormSubmit = e => {
    e.preventDefault();
    const failedSubmissionState = {
      success: {
        ...submission.success,
        show: false
      },
      error: {
        show: true,
        message: 'Submission failed: Please fix validation errors'
      }
    };
    if (!validateForm()) {
      showValidationErrors();
      return setSubmission(failedSubmissionState);
    }

    ReactGA.event({
      category: 'Contact',
      action: 'Submit-Contact-Form'
    });
    return sendEmail();
  };

  const toggleValidationFieldError = field => {
    if (field === 'email') {
      if (formState[field] === '') {
        setValidation({ ...validation, email: VALIDATION_MESSAGES.required });
      } else if (!validateEmail(formState[field])) {
        setValidation({ ...validation, email: VALIDATION_MESSAGES.email });
      } else {
        setValidation({ ...validation, email: '' });
      }
    } else {
      setValidation({
        ...validation,
        [field]: formState[field] === '' ? VALIDATION_MESSAGES.required : ''
      });
    }
  };

  const showValidationErrors = () => {
    function setEmailMessage(value) {
      if (value) {
        if (!validateEmail(value)) {
          return VALIDATION_MESSAGES.email;
        }
        return '';
      }

      return VALIDATION_MESSAGES.required;
    }

    setValidation({
      ...validation,
      email: setEmailMessage(formState.email),
      fullName: formState.fullName ? '' : VALIDATION_MESSAGES.required,
      deadline: formState.deadline ? '' : VALIDATION_MESSAGES.deadline
    });
  };

  const handleInputChange = e => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
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

  useEffect(() => {
    setFormInitialized(true);
    return () => {
      setFormInitialized(false);
    };
  }, []);

  // run validation on page load in case the fields were pre-filled
  useEffect(
    () => {
      setValidation({
        ...validation,
        formValid: validateForm()
      });
    },
    [formState]
  );

  useEffect(
    () => {
      if (formInitialized) {
        toggleValidationFieldError('email');
      }
    },
    [formState.email]
  );

  useEffect(
    () => {
      if (formInitialized) {
        toggleValidationFieldError('fullName');
      }
    },
    [formState.fullName]
  );

  useEffect(
    () => {
      if (formInitialized) {
        toggleValidationFieldError('deadline');
      }
    },
    [formState.deadline]
  );

  // check submission state
  // -- if success or error message is currently displayed, run a timeout to hide it
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
                className={`form-control ${validation.email ? 'error' : ''}`}
                placeholder="Email"
                name="email"
                value={formState.email}
                onChange={handleInputChange}
                required
              />
              {validation.email && <div className="error-message">{validation.email}</div>}
            </div>

            <div className="form-group">
              <label className="label--with-hint" htmlFor="full-name">
                Name <span className="hint">Required</span>
              </label>
              <input
                id="full-name"
                type="text"
                className={`form-control ${validation.fullName ? 'error' : ''}`}
                placeholder="Name"
                name="fullName"
                value={formState.fullName}
                onChange={handleInputChange}
                required
              />
              {validation.fullName && <div className="error-message">{validation.fullName}</div>}
            </div>

            <div className="form-group">
              <label className="label--with-hint" htmlFor="deadline">
                When do you need it done? <span className="hint">Required</span>
              </label>
              <select
                className={`custom-select ${validation.deadline ? 'error' : ''}`}
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
              {validation.deadline && <div className="error-message">{validation.deadline}</div>}
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
            <Button disabled={processing} onClick={handleFormSubmit} {...submitButtonProps}>
              Get In Touch
            </Button>
          </div>
        </form>
      </div>
    </React.Fragment>
  );
};

export default ContactForm;
