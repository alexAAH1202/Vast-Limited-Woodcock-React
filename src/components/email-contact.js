import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './email-contact.css'

const EmailContact = (props) => {
  return (
    <div className="email-contact-contact1 thq-section-padding">
      <div className="thq-section-max-width thq-flex-column">
        <div className="email-contact-section-title thq-flex-column">
          <span className="thq-body-small">
            {props.content2 ?? (
              <Fragment>
                <span className="email-contact-text22">
                  Get in touch with us today!
                </span>
              </Fragment>
            )}
          </span>
          <div className="email-contact-content">
            <h2 className="thq-heading-2">
              {props.heading1 ?? (
                <Fragment>
                  <span className="email-contact-text21">Contact us</span>
                </Fragment>
              )}
            </h2>
            <span className="thq-body-small email-contact-text12">
              {props.content1 ?? (
                <Fragment>
                  <span className="email-contact-text23">
                    <span>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </span>
                </Fragment>
              )}
            </span>
          </div>
        </div>
        <form className="email-contact-form thq-flex-column">
          <div className="email-contact-container1">
            <div className="email-contact-input1">
              <label
                htmlFor="contact-form-5-first-name"
                className="thq-body-small"
              >
                First name
              </label>
              <input
                type="text"
                id="contact-form-5-first-name"
                placeholder="First Name"
                className="thq-input"
              />
            </div>
            <div className="email-contact-input2">
              <label
                htmlFor="contact-form-5-last-name"
                className="thq-body-small"
              >
                Last name
              </label>
              <input
                type="text"
                id="contact-form-5-last-name"
                placeholder="Last Name"
                className="thq-input"
              />
            </div>
          </div>
          <div className="email-contact-container2">
            <div className="email-contact-input3">
              <label htmlFor="contact-form-5-email" className="thq-body-small">
                Email
              </label>
              <input
                type="email"
                id="contact-form-5-email"
                required="true"
                placeholder="Email"
                className="thq-input"
              />
            </div>
            <div className="email-contact-input4">
              <label htmlFor="contact-form-5-phone" className="thq-body-small">
                Phone Number
              </label>
              <input
                type="tel"
                id="contact-form-5-phone"
                placeholder="Phone Number"
                className="thq-input"
              />
            </div>
          </div>
          <div className="email-contact-container3">
            <div className="email-contact-input5">
              <label
                htmlFor="contact-form-5-options"
                className="thq-body-small"
              >
                Choose one topic
              </label>
              <select
                id="contact-form-5-options"
                placeholder="Select one"
                className="thq-select"
              >
                <option value="Option 1">Customer service</option>
                <option value="Option 2">Finance</option>
                <option value="Option 3">Feature request</option>
              </select>
            </div>
          </div>
          <div className="email-contact-container4">
            <label htmlFor="contact-form-5-message" className="thq-body-small">
              Message
            </label>
            <textarea
              id="contact-form-5-message"
              rows="3"
              placeholder="Enter your message"
              className="thq-input email-contact-textarea"
            ></textarea>
          </div>
          <div className="email-contact-checkbox1">
            <input
              type="checkbox"
              id="contact-form-5-check"
              checked="true"
              required="true"
              className="thq-checkbox"
            />
            <label htmlFor="contact-form-5-check" className="thq-body-small">
              I accept the Terms
            </label>
          </div>
          <button
            type="submit"
            className="email-contact-button thq-button-filled"
          >
            <span className="thq-body-small">
              {props.action ?? (
                <Fragment>
                  <span className="email-contact-text20">Submit</span>
                </Fragment>
              )}
            </span>
          </button>
        </form>
      </div>
    </div>
  )
}

EmailContact.defaultProps = {
  action: undefined,
  heading1: undefined,
  content2: undefined,
  content1: undefined,
}

EmailContact.propTypes = {
  action: PropTypes.element,
  heading1: PropTypes.element,
  content2: PropTypes.element,
  content1: PropTypes.element,
}

export default EmailContact
