import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './hero91.css'

const Hero91 = (props) => {
  return (
    <div className="hero91-header30 thq-section-padding">
      <img
        alt={props.image1Alt}
        src={props.image1Src}
        className="hero91-image"
      />
      <div className="hero91-container"></div>
      <div className="hero91-max-width thq-section-max-width">
        <div className="hero91-content">
          <h1 className="hero91-text1 thq-heading-1">
            {props.heading1 ?? (
              <Fragment>
                <span className="hero91-text7">Welcome to our platform!</span>
              </Fragment>
            )}
          </h1>
          <p className="hero91-text2 thq-body-large">
            {props.content1 ?? (
              <Fragment>
                <span className="hero91-text8">
                  Sign in or create an account to access exclusive features.
                </span>
              </Fragment>
            )}
          </p>
          <div className="hero91-actions">
            <button className="thq-button-filled hero91-button1">
              <span className="hero91-text3 thq-body-small">
                {props.action1 ?? (
                  <Fragment>
                    <span className="hero91-text5">Sign In</span>
                  </Fragment>
                )}
              </span>
            </button>
            <button className="thq-button-outline hero91-button2">
              <span className="hero91-text4 thq-body-small">
                {props.action2 ?? (
                  <Fragment>
                    <span className="hero91-text6">Create an Account</span>
                  </Fragment>
                )}
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

Hero91.defaultProps = {
  action1: undefined,
  action2: undefined,
  image1Alt: 'Illustration of a secure login',
  heading1: undefined,
  content1: undefined,
  image1Src:
    'https://images.unsplash.com/photo-1557597774-9d273605dfa9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczMDg2MjUwNXw&ixlib=rb-4.0.3&q=80&w=1080',
}

Hero91.propTypes = {
  action1: PropTypes.element,
  action2: PropTypes.element,
  image1Alt: PropTypes.string,
  heading1: PropTypes.element,
  content1: PropTypes.element,
  image1Src: PropTypes.string,
}

export default Hero91
