import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './stats17.css'

const Stats17 = (props) => {
  return (
    <div className={`thq-section-padding ${props.rootClassName} `}>
      <div className="stats17-max-width thq-section-max-width">
        <div className="stats17-container2">
          <h2 className="stats17-title thq-heading-2">
            {props.heading1 ?? (
              <Fragment>
                <span className="stats17-text23">Community Benefits</span>
              </Fragment>
            )}
          </h2>
          <span className="stats17-content thq-body-small">
            {props.content1 ?? (
              <Fragment>
                <span className="stats17-text24">
                  Join our community to unlock a world of exclusive content and
                  special offers.
                </span>
              </Fragment>
            )}
          </span>
        </div>
        <div className="stats17-container3 thq-grid-3">
          <div className="stats17-container4">
            <h2 className="thq-heading-2 stats17-text10">
              {props.stat1 ?? (
                <Fragment>
                  <span className="stats17-text26">99%</span>
                </Fragment>
              )}
            </h2>
            <span className="stats17-text11 thq-body-small">
              {props.stat1ShortDescription ?? (
                <Fragment>
                  <span className="stats17-text32">Customer satisfaction</span>
                </Fragment>
              )}
            </span>
            <span className="stats17-text12 thq-body-small">
              {props.stat1Description ?? (
                <Fragment>
                  <span className="stats17-text30">
                    Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.
                  </span>
                </Fragment>
              )}
            </span>
            <button name="Read more" type="button" className="thq-button-flat">
              <span className="stats17-text13 thq-body-small">Read more</span>
              <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                <path d="M512 170l342 342-342 342-60-60 238-240h-520v-84h520l-238-240z"></path>
              </svg>
            </button>
          </div>
          <div className="stats17-container5">
            <h2 className="thq-heading-2 stats17-text14">
              {props.stat2 ?? (
                <Fragment>
                  <span className="stats17-text29">44%</span>
                </Fragment>
              )}
            </h2>
            <span className="stats17-text15 thq-body-small">
              {props.stat2ShortDescription ?? (
                <Fragment>
                  <span className="stats17-text31">Active users</span>
                </Fragment>
              )}
            </span>
            <span className="stats17-text16 thq-body-small">
              {props.stat2Description ?? (
                <Fragment>
                  <span className="stats17-text27">
                    Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.
                  </span>
                </Fragment>
              )}
            </span>
            <button name="Read more" type="button" className="thq-button-flat">
              <span className="stats17-text17 thq-body-small">Read more</span>
              <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                <path d="M512 170l342 342-342 342-60-60 238-240h-520v-84h520l-238-240z"></path>
              </svg>
            </button>
          </div>
          <div className="stats17-container6">
            <h2 className="thq-heading-2 stats17-text18">
              {props.stat3 ?? (
                <Fragment>
                  <span className="stats17-text25">99%</span>
                </Fragment>
              )}
            </h2>
            <span className="stats17-text19 thq-body-small">
              {props.stat3ShortDescription ?? (
                <Fragment>
                  <span className="stats17-text22">Customer satisfaction</span>
                </Fragment>
              )}
            </span>
            <span className="stats17-text20 thq-body-small">
              {props.stat3Description ?? (
                <Fragment>
                  <span className="stats17-text28">
                    Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.
                  </span>
                </Fragment>
              )}
            </span>
            <button name="Read more" type="button" className="thq-button-flat">
              <span className="stats17-text21 thq-body-small">Read more</span>
              <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                <path d="M512 170l342 342-342 342-60-60 238-240h-520v-84h520l-238-240z"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

Stats17.defaultProps = {
  stat3ShortDescription: undefined,
  heading1: undefined,
  content1: undefined,
  stat3: undefined,
  stat1: undefined,
  stat2Description: undefined,
  stat3Description: undefined,
  stat2: undefined,
  stat1Description: undefined,
  stat2ShortDescription: undefined,
  stat1ShortDescription: undefined,
  rootClassName: '',
}

Stats17.propTypes = {
  stat3ShortDescription: PropTypes.element,
  heading1: PropTypes.element,
  content1: PropTypes.element,
  stat3: PropTypes.element,
  stat1: PropTypes.element,
  stat2Description: PropTypes.element,
  stat3Description: PropTypes.element,
  stat2: PropTypes.element,
  stat1Description: PropTypes.element,
  stat2ShortDescription: PropTypes.element,
  stat1ShortDescription: PropTypes.element,
  rootClassName: PropTypes.string,
}

export default Stats17
