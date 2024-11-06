import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './steps11.css'

const Steps11 = (props) => {
  return (
    <div className="steps11-container1 thq-section-padding">
      <div className="steps11-max-width thq-section-max-width">
        <div className="steps11-container2">
          <div className="steps11-container3 thq-card">
            <img
              alt={props.step1ImageAlt}
              src={props.step1ImageSrc}
              className="steps11-image1 thq-img-ratio-1-1"
            />
            <h2 className="thq-heading-2">
              {props.step1Title ?? (
                <Fragment>
                  <span className="steps11-text18">Create an Account</span>
                </Fragment>
              )}
            </h2>
            <label className="steps11-text11 thq-heading-3">01</label>
          </div>
          <div className="steps11-container4 thq-card">
            <img
              alt={props.step2Alt}
              src={props.step2ImageSrc}
              className="steps11-image2 thq-img-ratio-1-1"
            />
            <h2 className="thq-heading-2">
              {props.step2Title ?? (
                <Fragment>
                  <span className="steps11-text19">Sign In</span>
                </Fragment>
              )}
            </h2>
            <label className="steps11-text13 thq-heading-3">02</label>
          </div>
        </div>
        <div className="steps11-container5">
          <div className="steps11-container6 thq-card">
            <img
              alt={props.step3ImageAlt}
              src={props.step3ImageSrc}
              className="steps11-image3 thq-img-ratio-1-1"
            />
            <h2 className="thq-heading-2">
              {props.step3Title ?? (
                <Fragment>
                  <span className="steps11-text20">Input Information</span>
                </Fragment>
              )}
            </h2>
            <label className="steps11-text15 thq-heading-3">03</label>
          </div>
          <div className="steps11-container7 thq-card">
            <img
              alt={props.step4ImageAlt}
              src={props.step4ImageSrc}
              className="steps11-image4 thq-img-ratio-1-1"
            />
            <h2 className="thq-heading-2">
              {props.step4Title ?? (
                <Fragment>
                  <span className="steps11-text21">Get Started</span>
                </Fragment>
              )}
            </h2>
            <label className="steps11-text17 thq-heading-3">04</label>
          </div>
        </div>
      </div>
    </div>
  )
}

Steps11.defaultProps = {
  step4ImageAlt: 'Image for getting started',
  step1Title: undefined,
  step3ImageAlt: 'Image for inputting information',
  step3ImageSrc:
    'https://images.unsplash.com/photo-1477039181047-efb4357d01bd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyOTczNzk0N3w&ixlib=rb-4.0.3&q=80&w=1080',
  step2Title: undefined,
  step3Title: undefined,
  step4ImageSrc:
    'https://images.unsplash.com/photo-1642480504730-3ba4bbfaa0ec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyOTczNzk0N3w&ixlib=rb-4.0.3&q=80&w=1080',
  step2ImageSrc:
    'https://images.unsplash.com/photo-1712571674555-885ad7515d52?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyOTczNzk0Nnw&ixlib=rb-4.0.3&q=80&w=1080',
  step1ImageSrc:
    'https://images.unsplash.com/photo-1603683929454-bdd8eab44116?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyOTczNzk0N3w&ixlib=rb-4.0.3&q=80&w=1080',
  step1ImageAlt: 'Image for creating an account',
  step4Title: undefined,
  step2Alt: 'Image for signing in',
}

Steps11.propTypes = {
  step4ImageAlt: PropTypes.string,
  step1Title: PropTypes.element,
  step3ImageAlt: PropTypes.string,
  step3ImageSrc: PropTypes.string,
  step2Title: PropTypes.element,
  step3Title: PropTypes.element,
  step4ImageSrc: PropTypes.string,
  step2ImageSrc: PropTypes.string,
  step1ImageSrc: PropTypes.string,
  step1ImageAlt: PropTypes.string,
  step4Title: PropTypes.element,
  step2Alt: PropTypes.string,
}

export default Steps11
