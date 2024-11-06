import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './cta15.css'

const CTA15 = (props) => {
  return (
    <div className="cta15-container thq-section-padding">
      <img
        alt={props.backgroundImageAlt}
        src={props.backgroundImageSrc}
        className="cta15-background-image thq-img-ratio-16-9"
      />
      <div className="cta15-max-width thq-section-max-width">
        <div className="cta15-column">
          <div className="cta15-content">
            <h2 className="thq-heading-2">
              {props.heading1 ?? (
                <Fragment>
                  <span className="cta15-text6">Join our platform today!</span>
                </Fragment>
              )}
            </h2>
            <p className="thq-body-large">
              {props.content1 ?? (
                <Fragment>
                  <span className="cta15-text7">
                    Sign up now to access exclusive features and content.
                  </span>
                </Fragment>
              )}
            </p>
          </div>
          <div className="cta15-actions">
            <button type="button" className="thq-button-filled">
              <span>
                {props.action1 ?? (
                  <Fragment>
                    <span className="cta15-text8">Sign Up</span>
                  </Fragment>
                )}
              </span>
            </button>
            <button type="button" className="thq-button-outline">
              <span>
                {props.action2 ?? (
                  <Fragment>
                    <span className="cta15-text5">Learn More</span>
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

CTA15.defaultProps = {
  action2: undefined,
  heading1: undefined,
  content1: undefined,
  backgroundImageAlt: 'Image of people signing up',
  backgroundImageSrc:
    'https://images.unsplash.com/photo-1680458841507-5bc5aba30a9c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczMDg2MjkzMXw&ixlib=rb-4.0.3&q=80&w=1080',
  action1: undefined,
}

CTA15.propTypes = {
  action2: PropTypes.element,
  heading1: PropTypes.element,
  content1: PropTypes.element,
  backgroundImageAlt: PropTypes.string,
  backgroundImageSrc: PropTypes.string,
  action1: PropTypes.element,
}

export default CTA15
