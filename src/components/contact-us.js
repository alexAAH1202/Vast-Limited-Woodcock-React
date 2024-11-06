import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './contact-us.css'

const ContactUs = (props) => {
  return (
    <div className="contact-us-contact20 thq-section-padding">
      <div className="contact-us-max-width thq-section-max-width">
        <div className="contact-us-section-title">
          <span className="thq-body-small">
            {props.content1 ?? (
              <Fragment>
                <span className="contact-us-text24">
                  Get in touch with us today!
                </span>
              </Fragment>
            )}
          </span>
          <div className="contact-us-content1">
            <h2 className="thq-heading-2">
              {props.heading1 ?? (
                <Fragment>
                  <span className="contact-us-text17">Contact Us</span>
                </Fragment>
              )}
            </h2>
            <p className="contact-us-text12 thq-body-large">
              {props.content2 ?? (
                <Fragment>
                  <span className="contact-us-text18">
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
            </p>
          </div>
        </div>
        <div className="contact-us-row">
          <div className="contact-us-content2">
            <svg viewBox="0 0 1024 1024" className="thq-icon-medium">
              <path d="M854 342v-86l-342 214-342-214v86l342 212zM854 170q34 0 59 26t25 60v512q0 34-25 60t-59 26h-684q-34 0-59-26t-25-60v-512q0-34 25-60t59-26h684z"></path>
            </svg>
            <div className="contact-us-contact-info1">
              <div className="contact-us-content3">
                <h3 className="contact-us-text13 thq-heading-3">Email</h3>
              </div>
              <span className="contact-us-email1 thq-body-small">
                {props.email1 ?? (
                  <Fragment>
                    <span className="contact-us-text25">info@example.com</span>
                  </Fragment>
                )}
              </span>
            </div>
          </div>
          <div className="contact-us-content4">
            <svg viewBox="0 0 1024 1024" className="thq-icon-medium">
              <path d="M768 342v-86h-512v86h512zM768 470v-86h-512v86h512zM768 598v-86h-512v86h512zM854 86q34 0 59 25t25 59v512q0 34-25 60t-59 26h-598l-170 170v-768q0-34 25-59t59-25h684z"></path>
            </svg>
            <div className="contact-us-contact-info2">
              <div className="contact-us-content5">
                <h3 className="contact-us-text14 thq-heading-3">Live Chat</h3>
              </div>
              <span className="contact-us-email2 thq-body-small">
                {props.link1 ?? (
                  <Fragment>
                    <span className="contact-us-text21">Start new chat</span>
                  </Fragment>
                )}
              </span>
            </div>
          </div>
          <div className="contact-us-content6">
            <svg viewBox="0 0 1024 1024" className="thq-icon-medium">
              <path d="M282 460q96 186 282 282l94-94q20-20 44-10 72 24 152 24 18 0 30 12t12 30v150q0 18-12 30t-30 12q-300 0-513-213t-213-513q0-18 12-30t30-12h150q18 0 30 12t12 30q0 80 24 152 8 26-10 44z"></path>
            </svg>
            <div className="contact-us-contact-info3">
              <div className="contact-us-content7">
                <h3 className="contact-us-text15 thq-heading-3">Phone</h3>
              </div>
              <span className="contact-us-phone thq-body-small">
                {props.phone1 ?? (
                  <Fragment>
                    <span className="contact-us-text22">+123-456-7890</span>
                  </Fragment>
                )}
              </span>
            </div>
          </div>
          <div className="contact-us-content8">
            <svg viewBox="0 0 1024 1024" className="thq-icon-medium">
              <path d="M512 0c-176.732 0-320 143.268-320 320 0 320 320 704 320 704s320-384 320-704c0-176.732-143.27-320-320-320zM512 512c-106.040 0-192-85.96-192-192s85.96-192 192-192 192 85.96 192 192-85.96 192-192 192z"></path>
            </svg>
            <div className="contact-us-contact-info4">
              <div className="contact-us-content9">
                <h3 className="contact-us-text16 thq-heading-3">Office</h3>
              </div>
              <span className="contact-us-address thq-body-small">
                {props.address1 ?? (
                  <Fragment>
                    <span className="contact-us-text23">
                      123 Main Street, City, Country
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

ContactUs.defaultProps = {
  heading1: undefined,
  content2: undefined,
  link1: undefined,
  phone1: undefined,
  address1: undefined,
  content1: undefined,
  email1: undefined,
}

ContactUs.propTypes = {
  heading1: PropTypes.element,
  content2: PropTypes.element,
  link1: PropTypes.element,
  phone1: PropTypes.element,
  address1: PropTypes.element,
  content1: PropTypes.element,
  email1: PropTypes.element,
}

export default ContactUs
