import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './toast33.css'

const Toast33 = (props) => {
  return (
    <div className="toast33-container">
      <div className="toast33-header">
        <div className="toast33-content">
          <h2 className="thq-heading-2">
            {props.bannerTitle ?? (
              <Fragment>
                <span className="toast33-text16">Default value</span>
              </Fragment>
            )}
          </h2>
        </div>
        <div className="toast33-buttons">
          <button type="button" className="thq-button-filled">
            <span>
              {props.button1 ?? (
                <Fragment>
                  <span className="toast33-text19">Default value</span>
                </Fragment>
              )}
            </span>
          </button>
          <button type="button" className="thq-button-filled">
            <span>
              {props.button11 ?? (
                <Fragment>
                  <span className="toast33-text15">Default value</span>
                </Fragment>
              )}
            </span>
          </button>
          <button type="button" className="thq-button-filled">
            <span>
              {props.button13 ?? (
                <Fragment>
                  <span className="toast33-text20">Default value</span>
                </Fragment>
              )}
            </span>
          </button>
          <button type="button" className="thq-button-filled">
            <span>
              {props.button12 ?? (
                <Fragment>
                  <span className="toast33-text17">Default value</span>
                </Fragment>
              )}
            </span>
          </button>
          <button type="button" className="thq-button-outline">
            <span>
              {props.button2 ?? (
                <Fragment>
                  <span className="toast33-text18">Default value</span>
                </Fragment>
              )}
            </span>
          </button>
        </div>
      </div>
      <button type="button" aria-label="Close" className="toast33-close-button">
        <svg viewBox="0 0 804.5714285714286 1024" className="toast33-icon1">
          <path d="M741.714 755.429c0 14.286-5.714 28.571-16 38.857l-77.714 77.714c-10.286 10.286-24.571 16-38.857 16s-28.571-5.714-38.857-16l-168-168-168 168c-10.286 10.286-24.571 16-38.857 16s-28.571-5.714-38.857-16l-77.714-77.714c-10.286-10.286-16-24.571-16-38.857s5.714-28.571 16-38.857l168-168-168-168c-10.286-10.286-16-24.571-16-38.857s5.714-28.571 16-38.857l77.714-77.714c10.286-10.286 24.571-16 38.857-16s28.571 5.714 38.857 16l168 168 168-168c10.286-10.286 24.571-16 38.857-16s28.571 5.714 38.857 16l77.714 77.714c10.286 10.286 16 24.571 16 38.857s-5.714 28.571-16 38.857l-168 168 168 168c10.286 10.286 16 24.571 16 38.857z"></path>
        </svg>
      </button>
    </div>
  )
}

Toast33.defaultProps = {
  button11: undefined,
  bannerTitle: undefined,
  button12: undefined,
  button2: undefined,
  button1: undefined,
  button13: undefined,
}

Toast33.propTypes = {
  button11: PropTypes.element,
  bannerTitle: PropTypes.element,
  button12: PropTypes.element,
  button2: PropTypes.element,
  button1: PropTypes.element,
  button13: PropTypes.element,
}

export default Toast33
