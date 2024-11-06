import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './hero1.css'

const Hero1 = (props) => {
  return (
    <div className="thq-section-padding">
      <div className="hero1-max-width thq-section-max-width">
        <div className="thq-flex-row hero1-container1">
          <div className="hero1-column">
            <div className="hero1-content">
              <h1 className="thq-heading-1 hero1-heading1">
                {props.heading1 ?? (
                  <Fragment>
                    <span className="hero1-text4">
                      Manage Your User Accounts with Ease
                    </span>
                  </Fragment>
                )}
              </h1>
              <p className="thq-body-large hero1-content1">
                {props.content1 ?? (
                  <Fragment>
                    <span className="hero1-text1">
                      Sign in, create accounts, and reset passwords hassle-free.
                      Ensure your data is secure and easily accessible.
                    </span>
                  </Fragment>
                )}
              </p>
            </div>
            <div className="hero1-actions">
              <button className="thq-button-filled hero1-button1">
                <span className="thq-body-small">
                  {props.action1 ?? (
                    <Fragment>
                      <span className="hero1-text3">Sign In</span>
                    </Fragment>
                  )}
                </span>
              </button>
              <button className="thq-button-outline hero1-button2">
                <span className="thq-body-small">
                  {props.action2 ?? (
                    <Fragment>
                      <span className="hero1-text2">Secondary action</span>
                    </Fragment>
                  )}
                </span>
              </button>
            </div>
          </div>
          <div className="hero1-container2">
            <img
              alt={props.image1Alt}
              src={props.image1Src}
              className="hero1-image1 thq-img-ratio-4-3"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

Hero1.defaultProps = {
  content1: undefined,
  action2: undefined,
  action1: undefined,
  image1Alt: 'User Accounts Management',
  heading1: undefined,
  image1Src:
    'https://images.unsplash.com/photo-1514561064005-2bac60d9f7ea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyOTgyMzc2NXw&ixlib=rb-4.0.3&q=80&w=1080',
}

Hero1.propTypes = {
  content1: PropTypes.element,
  action2: PropTypes.element,
  action1: PropTypes.element,
  image1Alt: PropTypes.string,
  heading1: PropTypes.element,
  image1Src: PropTypes.string,
}

export default Hero1
