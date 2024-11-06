import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './features4.css'

const Features4 = (props) => {
  return (
    <div className="features4-layout301 thq-section-padding">
      <div className="features4-max-width thq-section-max-width">
        <h2 className="features4-text10 thq-heading-2">
          {props.sectionTitle ?? (
            <Fragment>
              <span className="features4-text15">Features</span>
            </Fragment>
          )}
        </h2>
        <div className="features4-row thq-grid-auto-300">
          <div className="features4-feature1">
            <img
              alt={props.feature1ImageAlt}
              src={props.feature1ImageSrc}
              className="thq-img-ratio-4-3"
            />
            <div className="features4-content1 thq-flex-column">
              <div className="features4-section-title1 thq-flex-column">
                <h3 className="features4-title1 thq-heading-3">
                  {props.feature1Title ?? (
                    <Fragment>
                      <span className="features4-text11">Default value</span>
                    </Fragment>
                  )}
                </h3>
              </div>
              <div className="features4-action5 thq-flex-row">
                <button className="thq-button-flat">
                  <span className="thq-body-small">
                    {props.feature1Button ?? (
                      <Fragment>
                        <span className="features4-text13">
                          Secure Sign-up Process
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
          <div className="features4-feature2">
            <img
              alt={props.feature2ImageAlt}
              src={props.feature2ImageSrc}
              className="thq-img-ratio-4-3"
            />
            <div className="features4-content2 thq-flex-column">
              <div className="features4-section-title2 thq-flex-column">
                <strong className="features4-title2 thq-heading-3">
                  {props.feature2Title ?? (
                    <Fragment>
                      <span className="features4-text17">Default value</span>
                    </Fragment>
                  )}
                </strong>
              </div>
              <div className="features4-action6 thq-flex-row">
                <button className="thq-button-flat">
                  <span className="thq-body-small">
                    {props.feature2Button ?? (
                      <Fragment>
                        <span className="features4-text19">
                          Customizable User Accounts
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
          <div className="features4-feature3">
            <img
              alt={props.feature3ImageAlt}
              src={props.feature3ImageSrc}
              className="thq-img-ratio-4-3"
            />
            <div className="features4-content3 thq-flex-column">
              <div className="features4-section-title3 thq-flex-column">
                <strong className="features4-title3 thq-heading-3">
                  {props.feature3Title ?? (
                    <Fragment>
                      <span className="features4-text18">Default value</span>
                    </Fragment>
                  )}
                </strong>
              </div>
              <div className="features4-action7 thq-flex-row">
                <button className="thq-button-flat">
                  <span className="thq-body-small">
                    {props.feature3Button ?? (
                      <Fragment>
                        <span className="features4-text16">
                          Agree to Terms of Use and Privacy Policy
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
          <div className="features4-feature4">
            <img
              alt={props.feature4ImageAlt}
              src={props.feature4ImageSrc}
              className="thq-img-ratio-4-3"
            />
            <div className="features4-content4 thq-flex-column">
              <div className="features4-section-title4 thq-flex-column">
                <strong className="features4-title4 thq-heading-3">
                  {props.feature4Title ?? (
                    <Fragment>
                      <span className="features4-text14">Default value</span>
                    </Fragment>
                  )}
                </strong>
              </div>
              <div className="features4-action8 thq-flex-row">
                <button className="thq-button-flat">
                  <span className="thq-body-small">
                    {props.feature4Button ?? (
                      <Fragment>
                        <span className="features4-text12">
                          Password Protection
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

Features4.defaultProps = {
  feature1ImageAlt: 'Secure Sign-up Process Image',
  feature1ImageSrc:
    'https://images.unsplash.com/photo-1520611084738-c4ad1e2e1903?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczMDg2ODAyOXw&ixlib=rb-4.0.3&q=80&w=1080',
  feature1Title: undefined,
  feature4Button: undefined,
  feature2ImageAlt: 'Terms of Use Agreement Image',
  feature4ImageSrc:
    'https://images.unsplash.com/photo-1515007971234-a22b7fba9914?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczMDg2ODAzMHw&ixlib=rb-4.0.3&q=80&w=1080',
  feature3ImageSrc:
    'https://images.unsplash.com/photo-1563762270340-3f5fde3243cd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczMDg2ODAzMXw&ixlib=rb-4.0.3&q=80&w=1080',
  feature1Button: undefined,
  feature4Title: undefined,
  feature2ImageSrc:
    'https://images.unsplash.com/photo-1599326506758-e2d00afda717?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczMDg2ODAzMHw&ixlib=rb-4.0.3&q=80&w=1080',
  sectionTitle: undefined,
  feature3Button: undefined,
  feature2Title: undefined,
  feature3Title: undefined,
  feature3ImageAlt: 'Privacy Policy Acceptance Image',
  feature4ImageAlt: 'image',
  feature2Button: undefined,
}

Features4.propTypes = {
  feature1ImageAlt: PropTypes.string,
  feature1ImageSrc: PropTypes.string,
  feature1Title: PropTypes.element,
  feature4Button: PropTypes.element,
  feature2ImageAlt: PropTypes.string,
  feature4ImageSrc: PropTypes.string,
  feature3ImageSrc: PropTypes.string,
  feature1Button: PropTypes.element,
  feature4Title: PropTypes.element,
  feature2ImageSrc: PropTypes.string,
  sectionTitle: PropTypes.element,
  feature3Button: PropTypes.element,
  feature2Title: PropTypes.element,
  feature3Title: PropTypes.element,
  feature3ImageAlt: PropTypes.string,
  feature4ImageAlt: PropTypes.string,
  feature2Button: PropTypes.element,
}

export default Features4
