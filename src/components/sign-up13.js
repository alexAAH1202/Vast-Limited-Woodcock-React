import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import './sign-up13.css'

const SignUp13 = (props) => {
  return (
    <div className="sign-up13-container1">
      <div className="sign-up13-max-width thq-section-max-width">
        <div className="sign-up13-form-root thq-section-padding">
          <div className="sign-up13-create-account">
            <div className="sign-up13-create-account-text-root">
              <h2 className="thq-heading-2">
                {props.heading1 ?? (
                  <Fragment>
                    <span className="sign-up13-text20">Create an Account</span>
                  </Fragment>
                )}
              </h2>
              <div className="sign-up13-have-an-account-login"></div>
            </div>
            <form className="sign-up13-create-account-form">
              <div className="sign-up13-email">
                <label htmlFor="thq-sign-up-1-email" className="thq-body-large">
                  Email address (used with Cliniko)
                </label>
                <input
                  type="email"
                  id="thq-sign-up-1-email"
                  required="true"
                  placeholder="Email address"
                  className="sign-up13-email-input thq-body-large thq-input"
                />
              </div>
              <div className="sign-up13-username">
                <label
                  htmlFor="thq-sign-up-1-username"
                  className="thq-body-large"
                >
                  Username
                </label>
                <input
                  type="text"
                  id="thq-sign-up-1-username"
                  required="true"
                  placeholder="Username"
                  className="sign-up13-user-name-input thq-body-large thq-input"
                />
              </div>
              <div className="sign-up13-password">
                <div className="sign-up13-password-text-field">
                  <div className="sign-up13-password-container">
                    <label
                      htmlFor="thq-sign-up-1-password"
                      className="thq-body-large"
                    >
                      Password
                    </label>
                    <div className="sign-up13-hide-password">
                      <svg
                        viewBox="0 0 1024 1024"
                        className="sign-up13-hide-password-icon"
                      >
                        <path d="M317.143 762.857l44.571-80.571c-66.286-48-105.714-125.143-105.714-206.857 0-45.143 12-89.714 34.857-128.571-89.143 45.714-163.429 117.714-217.714 201.714 59.429 92 143.429 169.143 244 214.286zM539.429 329.143c0-14.857-12.571-27.429-27.429-27.429-95.429 0-173.714 78.286-173.714 173.714 0 14.857 12.571 27.429 27.429 27.429s27.429-12.571 27.429-27.429c0-65.714 53.714-118.857 118.857-118.857 14.857 0 27.429-12.571 27.429-27.429zM746.857 220c0 1.143 0 4-0.571 5.143-120.571 215.429-240 432-360.571 647.429l-28 50.857c-3.429 5.714-9.714 9.143-16 9.143-10.286 0-64.571-33.143-76.571-40-5.714-3.429-9.143-9.143-9.143-16 0-9.143 19.429-40 25.143-49.714-110.857-50.286-204-136-269.714-238.857-7.429-11.429-11.429-25.143-11.429-39.429 0-13.714 4-28 11.429-39.429 113.143-173.714 289.714-289.714 500.571-289.714 34.286 0 69.143 3.429 102.857 9.714l30.857-55.429c3.429-5.714 9.143-9.143 16-9.143 10.286 0 64 33.143 76 40 5.714 3.429 9.143 9.143 9.143 15.429zM768 475.429c0 106.286-65.714 201.143-164.571 238.857l160-286.857c2.857 16 4.571 32 4.571 48zM1024 548.571c0 14.857-4 26.857-11.429 39.429-17.714 29.143-40 57.143-62.286 82.857-112 128.571-266.286 206.857-438.286 206.857l42.286-75.429c166.286-14.286 307.429-115.429 396.571-253.714-42.286-65.714-96.571-123.429-161.143-168l36-64c70.857 47.429 142.286 118.857 186.857 192.571 7.429 12.571 11.429 24.571 11.429 39.429z"></path>
                      </svg>
                      <span className="thq-body-small">Hide</span>
                    </div>
                  </div>
                  <input
                    type="password"
                    id="thq-sign-up-1-password"
                    required="true"
                    placeholder="Password"
                    className="sign-up13-password-input thq-body-large thq-input"
                  />
                </div>
                <div className="sign-up13-pass-requirements">
                  <div className="sign-up13-pass-conditions1">
                    <div className="sign-up13-bulletpoint1">
                      <div className="sign-up13-container2"></div>
                      <span className="sign-up13-text11 thq-body-small">
                        Use 8 or more characters
                      </span>
                    </div>
                    <div className="sign-up13-bulletpoint2">
                      <div className="sign-up13-container3"></div>
                      <span className="sign-up13-text12 thq-body-small">
                        One special character
                      </span>
                    </div>
                  </div>
                  <div className="sign-up13-pass-conditions2">
                    <div className="sign-up13-bulletpoint3">
                      <div className="sign-up13-container4"></div>
                      <span className="sign-up13-text13 thq-body-small">
                        One Uppercase character
                      </span>
                    </div>
                    <div className="sign-up13-bulletpoint4">
                      <div className="sign-up13-container5"></div>
                      <span className="sign-up13-text14 thq-body-small">
                        One number
                      </span>
                    </div>
                  </div>
                  <div className="sign-up13-pass-conditions3">
                    <div className="sign-up13-bulletpoint5">
                      <div className="sign-up13-container6"></div>
                      <span className="sign-up13-text15 thq-body-small">
                        One lowercase character
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </form>
            <div className="sign-up13-create-account-container">
              <input
                type="checkbox"
                id="thq-sign-up-1-newsletter"
                checked="true"
                className="thq-checkbox"
              />
              <label
                htmlFor="thq-sign-up-1-password"
                className="thq-body-large"
              >
                {props.content1 ?? (
                  <Fragment>
                    <span className="sign-up13-text19">
                      I agree to the Terms of Use and Privacy Policy
                    </span>
                  </Fragment>
                )}
              </label>
            </div>
            <Link
              to="/account-creation-information"
              className="sign-up13-sign-up-button thq-button-filled"
            >
              <span className="sign-up13-text17 thq-body-small">
                {props.action1 ?? (
                  <Fragment>
                    <span className="sign-up13-text18">Sign Up</span>
                  </Fragment>
                )}
              </span>
            </Link>
          </div>
        </div>
        <div className="sign-up13-sign-up-container">
          <img
            alt={props.image1Alt}
            src={props.image1Src}
            className="sign-up13-sign-up-image thq-img-ratio-4-6"
          />
        </div>
      </div>
    </div>
  )
}

SignUp13.defaultProps = {
  action1: undefined,
  image1Alt: 'Sign Up Image',
  content1: undefined,
  heading1: undefined,
  image1Src:
    '/Images/dall%C3%A2%C2%B7e%202024-10-28%2012.25.58%20-%20a%20friendly%20cartoon%20hippo%20in%20shades%20of%20purple%20and%20blue%2C%20standing%20with%20open%20arms%20and%20a%20welcoming%20smile%2C%20inviting%20a%20new%20adult%20human%20friend%20to%20join%20a%20chee-600w.webp',
}

SignUp13.propTypes = {
  action1: PropTypes.element,
  image1Alt: PropTypes.string,
  content1: PropTypes.element,
  heading1: PropTypes.element,
  image1Src: PropTypes.string,
}

export default SignUp13
