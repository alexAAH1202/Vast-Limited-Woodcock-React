import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './account-info.css'

const AccountInfo = (props) => {
  return (
    <div className="account-info-contact1 thq-section-padding">
      <div className="thq-section-max-width thq-flex-column">
        <div className="account-info-section-title thq-flex-column">
          <div className="account-info-content">
            <h2 className="thq-heading-2">
              {props.heading1 ?? (
                <Fragment>
                  <span className="account-info-text37">
                    Account Information
                  </span>
                </Fragment>
              )}
            </h2>
          </div>
        </div>
        <form className="account-info-user-details thq-flex-column">
          <div className="account-info-container1">
            <div className="account-info-given-name-container">
              <label
                htmlFor="contact-form-5-first-name"
                className="thq-body-small"
              >
                First name
              </label>
              <input
                type="text"
                id="name"
                name="given_name"
                required="true"
                placeholder="First Name"
                className="thq-input"
              />
            </div>
            <div className="account-info-family-name-container">
              <label
                htmlFor="contact-form-5-last-name"
                className="thq-body-small"
              >
                Last name
              </label>
              <input
                type="text"
                id="lastname"
                name="family_name"
                required="true"
                placeholder="Last Name"
                className="thq-input"
              />
            </div>
          </div>
          <div className="account-info-container2">
            <div className="account-info-preferred-username">
              <label htmlFor="contact-form-5-email" className="thq-body-small">
                Preferred User Name
              </label>
              <input
                type="text"
                id="username"
                name="preferred_username"
                required="true"
                placeholder="User Name"
                className="thq-input input"
              />
            </div>
            <div className="account-info-birthdate-container">
              <label htmlFor="contact-form-5-phone" className="thq-body-small">
                Date of Birth
              </label>
              <input
                type="date"
                id="birthdate"
                name="birthdate"
                required="true"
                placeholder="Business Address"
                className="thq-input"
              />
            </div>
          </div>
        </form>
        <form className="account-info-contact thq-flex-column">
          <div className="account-info-contact-details-container">
            <div className="account-info-email-address">
              <label
                htmlFor="contact-form-5-first-name"
                className="thq-body-small"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required="true"
                placeholder="Email Address"
                className="thq-input"
              />
            </div>
            <div className="account-info-phone-number-details">
              <label
                htmlFor="contact-form-5-last-name"
                className="thq-body-small"
              >
                Contact Phone Nu,mber
              </label>
              <input
                type="tel"
                id="phone_number"
                name="phone_number"
                required="true"
                placeholder="Phone Number"
                className="thq-input"
              />
            </div>
          </div>
          <div className="account-info-business-details">
            <div className="account-info-business-name">
              <label htmlFor="contact-form-5-email" className="thq-body-small">
                Business Name
              </label>
              <input
                type="text"
                id="business-name"
                name="business-name"
                required="true"
                placeholder="Business Name"
                className="thq-input"
              />
            </div>
            <div className="account-info-business-address">
              <label htmlFor="contact-form-5-phone" className="thq-body-small">
                Business Address
              </label>
              <input
                type="text"
                id="business_address"
                multiple="business_address"
                required="true"
                placeholder="Business Address"
                className="thq-input"
              />
            </div>
          </div>
        </form>
        <form className="account-info-role thq-flex-column">
          <div className="account-info-container3">
            <div className="account-info-user-role-container">
              <label
                htmlFor="contact-form-5-options"
                className="thq-body-small"
              >
                Role
              </label>
              <div className="account-info-container4">
                <input type="radio" name="radio" />
                <span className="account-info-text20">
                  {props.text ?? (
                    <Fragment>
                      <span className="account-info-text35">Provider</span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
          </div>
        </form>
        <form className="account-info-practice thq-flex-column">
          <div className="account-info-container5">
            <div className="account-info-provider-type-container">
              <label
                htmlFor="contact-form-5-first-name"
                className="thq-body-small"
              >
                Area of Practice (Please write in full)
              </label>
              <input
                type="text"
                id="service_type"
                required="true"
                placeholder="Occupational Therapist/Physiotherapist/Speech Pathologist etc"
                className="thq-input"
              />
            </div>
            <div className="account-info-provider-details">
              <label
                htmlFor="contact-form-5-last-name"
                className="thq-body-small"
              >
                Provider Number
              </label>
              <input
                type="text"
                id="prov_number"
                required="true"
                placeholder="Provider Number"
                className="thq-input"
              />
            </div>
          </div>
          <div className="account-info-container6">
            <div className="account-info-ndis-provider-num">
              <label htmlFor="contact-form-5-email" className="thq-body-small">
                NDIS Provider Number
              </label>
              <input
                type="text"
                id="ndis-prov-num"
                required="true"
                placeholder="NDIS Provider Number"
                className="thq-input"
              />
            </div>
            <div className="account-info-ahpra-reg">
              <label htmlFor="contact-form-5-phone" className="thq-body-small">
                AHPRA Registration Number
              </label>
              <input
                type="text"
                id="ahpra-registration"
                required="true"
                placeholder="AHPRA registration"
                className="thq-input"
              />
            </div>
          </div>
          <div className="account-info-preferred-notification-container">
            <div className="account-info-pref-notification">
              <label
                htmlFor="contact-form-5-options"
                className="thq-body-small"
              >
                Preferred Notification Method
              </label>
              <select
                id="pref-notification"
                name="pref-notification"
                required="true"
                placeholder="SMS"
                className="thq-select"
              >
                <option id="pref-notification" value="email">
                  Email
                </option>
                <option id="pref-notification" value="SMS">
                  SMS
                </option>
                <option id="pref-notification" value="Email &amp; SMS">
                  Email &amp; SMS
                </option>
              </select>
            </div>
          </div>
          <div className="account-info-checkbox1">
            <input
              type="checkbox"
              id="pref_notification"
              checked="true"
              required="true"
              className="thq-checkbox"
            />
            <label
              htmlFor="contact-form-5-check"
              className="account-info-text26 thq-body-small"
            >
              I accept for notifications to be sent via my preferred
              Notification Method
            </label>
          </div>
        </form>
        <form className="account-info-consent thq-flex-column">
          <div className="account-info-container7">
            <div className="account-info-cliniko-api">
              <label
                htmlFor="contact-form-5-first-name"
                className="thq-body-small"
              >
                Cliniko API (Needed to collect information about Clients for use
                of this Software, in line with the Privacy Act and relevant
                Health Acts
              </label>
              <input
                type="text"
                id="cliniko_acces_tok"
                required="true"
                placeholder="Cliniko API"
                className="thq-input"
              />
            </div>
            <div className="account-info-input1">
              <label
                htmlFor="contact-form-5-last-name"
                className="thq-body-small"
              >
                Consent for Hippo Health to Collect Data for use of Software in
                line with the Privacy Act and relevant Health Acts
              </label>
              <input
                type="text"
                id="data_hand_consent"
                required="true"
                placeholder="Yes/No"
                className="thq-input"
              />
            </div>
          </div>
          <div className="account-info-container8">
            <div className="account-info-input2">
              <label htmlFor="contact-form-5-email" className="thq-body-small">
                Consent for Sharing of Data with Third Parties
                (Cliniko/NDIS/TAC/WorkSafe/Medicare as required) in line with
                the Privacy Act and relevant Health Acts
              </label>
              <input
                type="text"
                id="data_sharing_consent"
                required="true"
                placeholder="Yes/No"
                className="thq-input"
              />
            </div>
            <div className="account-info-input3">
              <label htmlFor="contact-form-5-phone" className="thq-body-small">
                <span>
                  Consent for Hippo Health to Store Data on Your Behalf for use
                  of Software in line with the Privacy Act and relevant Health
                  Acts
                </span>
                <br></br>
              </label>
              <input
                type="text"
                id="data_store_consent"
                required="true"
                placeholder="Yes/No"
                className="thq-input"
              />
            </div>
          </div>
          <div className="account-info-container9">
            <div className="account-info-payment-method">
              <label
                htmlFor="contact-form-5-options"
                className="thq-body-small"
              >
                Payment Type
              </label>
              <select
                id="payment-method"
                name="payment-method"
                required="true"
                placeholder="Credit Card"
                className="thq-select"
              >
                <option id="payment-method" value="credit-card">
                  Credit Card
                </option>
                <option id="payment-method" value="debit-card">
                  Debit Card
                </option>
              </select>
            </div>
          </div>
          <div className="account-info-checkbox3">
            <input
              type="checkbox"
              id="terms_conditions"
              checked="true"
              required="true"
              className="thq-checkbox"
            />
            <label
              htmlFor="contact-form-5-check"
              className="account-info-text34 thq-body-small"
            >
              I accept the Term and Conditions for use of this Software,
            </label>
          </div>
          <button
            type="submit"
            className="account-info-submit-account-info thq-button-filled"
          >
            <span className="thq-body-small">
              {props.submit ?? (
                <Fragment>
                  <span className="account-info-text36">Submit</span>
                </Fragment>
              )}
            </span>
          </button>
        </form>
      </div>
    </div>
  )
}

AccountInfo.defaultProps = {
  text: undefined,
  submit: undefined,
  heading1: undefined,
}

AccountInfo.propTypes = {
  text: PropTypes.element,
  submit: PropTypes.element,
  heading1: PropTypes.element,
}

export default AccountInfo
