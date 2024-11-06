import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './features42.css'

const Features42 = (props) => {
  return (
    <div className="features42-layout301 thq-section-padding">
      <div className="features42-max-width thq-section-max-width">
        <h2 className="features42-text10 thq-heading-2">
          {props.sectionTitle ?? (
            <Fragment>
              <span className="features42-text19">Features</span>
            </Fragment>
          )}
        </h2>
        <div className="features42-row thq-grid-auto-300">
          <div className="features42-feature1">
            <img
              alt={props.feature1ImageAlt}
              src={props.feature1ImageSrc}
              className="thq-img-ratio-4-3"
            />
            <div className="features42-content1 thq-flex-column">
              <div className="features42-section-title1 thq-flex-column">
                <h3 className="features42-title1 thq-heading-3">
                  {props.feature1Title ?? (
                    <Fragment>
                      <span className="features42-text14">
                        Secure Account Creation
                      </span>
                    </Fragment>
                  )}
                </h3>
              </div>
              <div className="features42-action5 thq-flex-row">
                <button className="thq-button-flat">
                  <span className="thq-body-small">
                    {props.feature1Button ?? (
                      <Fragment>
                        <span className="features42-text17">Learn More</span>
                      </Fragment>
                    )}
                  </span>
                  <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                    <path d="M426 256l256 256-256 256-60-60 196-196-196-196z"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div className="features42-feature2">
            <img
              alt={props.feature2ImageAlt}
              src={props.feature2ImageSrc}
              className="thq-img-ratio-4-3"
            />
            <div className="features42-content2 thq-flex-column">
              <div className="features42-section-title2 thq-flex-column">
                <strong className="features42-title2 thq-heading-3">
                  {props.feature2Title ?? (
                    <Fragment>
                      <span className="features42-text18">
                        Terms of Use Agreement
                      </span>
                    </Fragment>
                  )}
                </strong>
              </div>
              <div className="features42-action6 thq-flex-row">
                <button className="thq-button-flat">
                  <span className="thq-body-small">
                    {props.feature2Button ?? (
                      <Fragment>
                        <span className="features42-text11">Read Now</span>
                      </Fragment>
                    )}
                  </span>
                  <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                    <path d="M426 256l256 256-256 256-60-60 196-196-196-196z"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div className="features42-feature3">
            <img
              alt={props.feature3ImageAlt}
              src={props.feature3ImageSrc}
              className="thq-img-ratio-4-3"
            />
            <div className="features42-content3 thq-flex-column">
              <div className="features42-section-title3 thq-flex-column">
                <strong className="features42-title3 thq-heading-3">
                  {props.feature3Title ?? (
                    <Fragment>
                      <span className="features42-text16">
                        Privacy Policy Acceptance
                      </span>
                    </Fragment>
                  )}
                </strong>
              </div>
              <div className="features42-action7 thq-flex-row">
                <button className="thq-button-flat">
                  <span className="thq-body-small">
                    {props.feature3Button ?? (
                      <Fragment>
                        <span className="features42-text13">Accept Policy</span>
                      </Fragment>
                    )}
                  </span>
                  <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                    <path d="M426 256l256 256-256 256-60-60 196-196-196-196z"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div className="features42-feature4">
            <img
              alt={props.feature4ImageAlt}
              src={props.feature4ImageSrc}
              className="thq-img-ratio-4-3"
            />
            <div className="features42-content4 thq-flex-column">
              <div className="features42-section-title4 thq-flex-column">
                <strong className="features42-title4 thq-heading-3">
                  {props.feature4Title ?? (
                    <Fragment>
                      <span className="features42-text15">
                        Email Verification
                      </span>
                    </Fragment>
                  )}
                </strong>
              </div>
              <div className="features42-action8 thq-flex-row">
                <button className="thq-button-flat">
                  <span className="thq-body-small">
                    {props.feature4Button ?? (
                      <Fragment>
                        <span className="features42-text12">Verify Email</span>
                      </Fragment>
                    )}
                  </span>
                  <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                    <path d="M426 256l256 256-256 256-60-60 196-196-196-196z"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Features42.defaultProps = {
  feature1ImageSrc:
    'https://images.unsplash.com/photo-1591621839477-83880c7ec521?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczMDg2OTAzM3w&ixlib=rb-4.0.3&q=80&w=1080',
  feature2Button: undefined,
  feature4ImageAlt: 'Email Verification Image',
  feature2ImageSrc:
    'https://images.unsplash.com/photo-1589978838416-9fe37be3e6d3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczMDg2OTAzM3w&ixlib=rb-4.0.3&q=80&w=1080',
  feature4ImageSrc:
    'https://images.unsplash.com/photo-1687946942636-9704c1de84f3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczMDg2OTAzM3w&ixlib=rb-4.0.3&q=80&w=1080',
  feature4Button: undefined,
  feature3ImageAlt: 'Privacy Policy Acceptance Image',
  feature3Button: undefined,
  feature1Title: undefined,
  feature4Title: undefined,
  feature3Title: undefined,
  feature1Button: undefined,
  feature2Title: undefined,
  feature1ImageAlt: 'Secure Account Creation Image',
  sectionTitle: undefined,
  feature2ImageAlt: 'Terms of Use Agreement Image',
  feature3ImageSrc:
    'https://images.unsplash.com/photo-1593347894757-3b12ab5e6247?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczMDg2OTAzNHw&ixlib=rb-4.0.3&q=80&w=1080',
}

Features42.propTypes = {
  feature1ImageSrc: PropTypes.string,
  feature2Button: PropTypes.element,
  feature4ImageAlt: PropTypes.string,
  feature2ImageSrc: PropTypes.string,
  feature4ImageSrc: PropTypes.string,
  feature4Button: PropTypes.element,
  feature3ImageAlt: PropTypes.string,
  feature3Button: PropTypes.element,
  feature1Title: PropTypes.element,
  feature4Title: PropTypes.element,
  feature3Title: PropTypes.element,
  feature1Button: PropTypes.element,
  feature2Title: PropTypes.element,
  feature1ImageAlt: PropTypes.string,
  sectionTitle: PropTypes.element,
  feature2ImageAlt: PropTypes.string,
  feature3ImageSrc: PropTypes.string,
}

export default Features42
