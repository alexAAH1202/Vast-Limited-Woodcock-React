import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { AmplifySignIn, AmplifySignUp } from '@aws-amplify/ui-react';

import './sign-in.css'

const SignIn = (props) => {
  return (
    <div className="sign-in-container1 thq-section-padding">
      <div className="sign-in-max-width thq-section-max-width">
        <div className="sign-in-sign-in-container">
          <div className="sign-in-sign-in-form-box">
            <div className="sign-in-sign-in-title-root">
              <h2 className="thq-heading-2">
                {props.heading1 ?? (
                  <Fragment>
                    <span className="sign-in-text7">Sign In</span>
                  </Fragment>
                )}
              </h2>
              <div className="sign-in-have-an-account-login"></div>
            </div>
            <AmplifySignIn />
            <AmplifySignUp
              slot="sign-up"
              formFields={[
                {
                  type: "username",
                  label: "Username",
                  placeholder: "Enter your username",
                  required: true,
                },
                {
                  type: "password",
                  label: "Password",
                  placeholder: "Enter your password",
                  required: true,
                },
                {
                  type: "email",
                  label: "Email",
                  placeholder: "Enter your email",
                  required: true,
                },
              ]}
            />
            <div className="sign-in-container2">
              <div className="sign-in-sign-in-button-container">
                <button
                  type="submit"
                  className="sign-in-sign-in-button thq-button-filled"
                >
                  <span className="sign-in-text3 thq-body-small">
                    {props.action1 ?? (
                      <Fragment>
                        <span className="sign-in-text8">Sign In</span>
                      </Fragment>
                    )}
                  </span>
                </button>
                <div className="sign-in-terms-agree">
                  <p className="thq-body-large">
                    <span>
                      By continuing, you agree to the Terms of use and Privacy
                      Policy.
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
                  </p>
                </div>
              </div>
              <div className="sign-in-sign-in-issues-container">
                <a
                  href="https://teleporthq.io/"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="sign-in-forgot-password-link thq-body-small"
                >
                  Forgot password
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

SignIn.defaultProps = {
  heading1: undefined,
  action1: undefined,
}

SignIn.propTypes = {
  heading1: PropTypes.element,
  action1: PropTypes.element,
}

export default SignIn
