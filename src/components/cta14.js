import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './cta14.css'

const CTA14 = (props) => {
  return (
    <div
      className={`cta14-container thq-section-padding ${props.rootClassName} `}
    >
      <div className="cta14-max-width thq-section-max-width">
        <div className="cta14-column">
          <div className="cta14-content">
            <h2 className="thq-heading-2">
              {props.heading1 ?? (
                <Fragment>
                  <span className="cta14-text6">Create an account now</span>
                </Fragment>
              )}
            </h2>
          </div>
          <div className="cta14-actions">
            <button type="button" className="thq-button-filled">
              <span>
                {props.action1 ?? (
                  <Fragment>
                    <span className="cta14-text5">Sign Up</span>
                  </Fragment>
                )}
              </span>
            </button>
            <button type="button" className="thq-button-outline">
              <span>
                {props.action2 ?? (
                  <Fragment>
                    <span className="cta14-text4">Learn More</span>
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

CTA14.defaultProps = {
  action2: undefined,
  action1: undefined,
  heading1: undefined,
  rootClassName: '',
}

CTA14.propTypes = {
  action2: PropTypes.element,
  action1: PropTypes.element,
  heading1: PropTypes.element,
  rootClassName: PropTypes.string,
}

export default CTA14
