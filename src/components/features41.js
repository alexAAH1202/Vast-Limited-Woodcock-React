import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './features41.css'

const Features41 = (props) => {
  return (
    <div className="features41-layout301 thq-section-padding">
      <div className="features41-max-width thq-section-max-width">
        <h2 className="features41-text10 thq-heading-2">
          {props.sectionTitle ?? (
            <Fragment>
              <span className="features41-text11">Features</span>
            </Fragment>
          )}
        </h2>
        <div className="features41-row thq-grid-auto-300">
          <div className="features41-feature1">
            <img
              alt={props.feature1ImageAlt}
              src={props.feature1ImageSrc}
              className="thq-img-ratio-4-3"
            />
            <div className="features41-content1 thq-flex-column">
              <div className="features41-section-title1 thq-flex-column">
                <h3 className="features41-title1 thq-heading-3">
                  {props.feature1Title ?? (
                    <Fragment>
                      <span className="features41-text15">
                        Secure Sign-up Process
                      </span>
                    </Fragment>
                  )}
                </h3>
              </div>
              <div className="features41-action5 thq-flex-row">
                <button className="thq-button-flat">
                  <span className="thq-body-small">
                    {props.feature1Button ?? (
                      <Fragment>
                        <span className="features41-text17">Sign Up Now</span>
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
          <div className="features41-feature2">
            <img
              alt={props.feature2ImageAlt}
              src={props.feature2ImageSrc}
              className="thq-img-ratio-4-3"
            />
            <div className="features41-content2 thq-flex-column">
              <div className="features41-section-title2 thq-flex-column">
                <strong className="features41-title2 thq-heading-3">
                  {props.feature2Title ?? (
                    <Fragment>
                      <span className="features41-text19">
                        Terms of Use Agreement
                      </span>
                    </Fragment>
                  )}
                </strong>
              </div>
              <div className="features41-action6 thq-flex-row">
                <button className="thq-button-flat">
                  <span className="thq-body-small">
                    {props.feature2Button ?? (
                      <Fragment>
                        <span className="features41-text14">Read Terms</span>
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
          <div className="features41-feature3">
            <img
              alt={props.feature3ImageAlt}
              src={props.feature3ImageSrc}
              className="thq-img-ratio-4-3"
            />
            <div className="features41-content3 thq-flex-column">
              <div className="features41-section-title3 thq-flex-column">
                <strong className="features41-title3 thq-heading-3">
                  {props.feature3Title ?? (
                    <Fragment>
                      <span className="features41-text12">
                        Privacy Policy Acceptance
                      </span>
                    </Fragment>
                  )}
                </strong>
              </div>
              <div className="features41-action7 thq-flex-row">
                <button className="thq-button-flat">
                  <span className="thq-body-small">
                    {props.feature3Button ?? (
                      <Fragment>
                        <span className="features41-text16">View Policy</span>
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
          <div className="features41-feature4">
            <img
              alt={props.feature4ImageAlt}
              src={props.feature4ImageSrc}
              className="thq-img-ratio-4-3"
            />
            <div className="features41-content4 thq-flex-column">
              <div className="features41-section-title4 thq-flex-column">
                <strong className="features41-title4 thq-heading-3">
                  {props.feature4Title ?? (
                    <Fragment>
                      <span className="features41-text13">
                        Password Criteria
                      </span>
                    </Fragment>
                  )}
                </strong>
              </div>
              <div className="features41-action8 thq-flex-row">
                <button className="thq-button-flat">
                  <span className="thq-body-small">
                    {props.feature4Button ?? (
                      <Fragment>
                        <span className="features41-text18">
                          Check Criteria
                        </span>
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

Features41.defaultProps = {
  sectionTitle: undefined,
  feature3Title: undefined,
  feature2ImageAlt: 'Terms of Use Agreement Image',
  feature3ImageSrc:
    'https://images.unsplash.com/photo-1595450547833-95af46d7c43a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczMDg2ODQ4N3w&ixlib=rb-4.0.3&q=80&w=1080',
  feature1ImageAlt: 'Secure Sign-up Process Image',
  feature2ImageSrc:
    'https://images.unsplash.com/photo-1628361147079-401dfb375a00?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczMDg2ODQ4N3w&ixlib=rb-4.0.3&q=80&w=1080',
  feature4Title: undefined,
  feature4ImageAlt: 'Password Criteria Image',
  feature1ImageSrc:
    'https://images.unsplash.com/photo-1583947582731-d723bd01499a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczMDg2ODQ4Nnw&ixlib=rb-4.0.3&q=80&w=1080',
  feature2Button: undefined,
  feature1Title: undefined,
  feature3Button: undefined,
  feature1Button: undefined,
  feature4Button: undefined,
  feature4ImageSrc:
    'https://images.unsplash.com/photo-1574333751907-d1df49fde1c3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczMDg2ODQ4Nnw&ixlib=rb-4.0.3&q=80&w=1080',
  feature3ImageAlt: 'Privacy Policy Acceptance Image',
  feature2Title: undefined,
}

Features41.propTypes = {
  sectionTitle: PropTypes.element,
  feature3Title: PropTypes.element,
  feature2ImageAlt: PropTypes.string,
  feature3ImageSrc: PropTypes.string,
  feature1ImageAlt: PropTypes.string,
  feature2ImageSrc: PropTypes.string,
  feature4Title: PropTypes.element,
  feature4ImageAlt: PropTypes.string,
  feature1ImageSrc: PropTypes.string,
  feature2Button: PropTypes.element,
  feature1Title: PropTypes.element,
  feature3Button: PropTypes.element,
  feature1Button: PropTypes.element,
  feature4Button: PropTypes.element,
  feature4ImageSrc: PropTypes.string,
  feature3ImageAlt: PropTypes.string,
  feature2Title: PropTypes.element,
}

export default Features41
