import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './features33.css'

const Features33 = (props) => {
  return (
    <div className="features33-layout253 thq-section-padding">
      <div className="features33-max-width thq-section-max-width thq-flex-row">
        <div className="features33-section-title thq-flex-column">
          <span className="thq-body-small">
            {props.slogan ?? (
              <Fragment>
                <span className="features33-text14">
                  Safeguarding Your Identity
                </span>
              </Fragment>
            )}
          </span>
          <div className="features33-content1 thq-flex-column">
            <h2 className="thq-heading-2">
              {props.sectionTitle ?? (
                <Fragment>
                  <span className="features33-text18">Key Features</span>
                </Fragment>
              )}
            </h2>
            <p className="thq-body-large">
              {props.sectionDescription ?? (
                <Fragment>
                  <span className="features33-text13">
                    Explore the key features that make our user authentication
                    system stand out.
                  </span>
                </Fragment>
              )}
            </p>
          </div>
          <div className="thq-flex-row features33-actions">
            <button className="thq-button-filled features33-button1">
              <span className="thq-body-small">
                {props.mainAction ?? (
                  <Fragment>
                    <span className="features33-text16">Sign Up Now</span>
                  </Fragment>
                )}
              </span>
            </button>
            <button className="thq-button-outline features33-button2">
              <span className="thq-body-small">
                {props.secondaryAction ?? (
                  <Fragment>
                    <span className="features33-text22">Learn More</span>
                  </Fragment>
                )}
              </span>
            </button>
          </div>
        </div>
        <div className="features33-content2 thq-flex-column">
          <div className="thq-flex-row features33-list1">
            <div className="features33-list-item1 thq-flex-column">
              <img
                alt={props.feature1ImageAlt}
                src={props.feature1ImageSrc}
                className="thq-img-round thq-img-ratio-1-1"
              />
              <div className="features33-content3 thq-flex-column">
                <h3 className="features33-title11 thq-heading-3">
                  {props.feature1Title ?? (
                    <Fragment>
                      <span className="features33-text25">
                        Secure Account Creation
                      </span>
                    </Fragment>
                  )}
                </h3>
                <span className="features33-description11 thq-body-small">
                  {props.feature1Description ?? (
                    <Fragment>
                      <span className="features33-text19">
                        Create your account with confidence knowing your
                        information is protected.
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
            <div className="thq-flex-column">
              <img
                alt={props.feature2ImageAlt}
                src={props.feature2ImageSrc}
                className="thq-img-round thq-img-ratio-1-1"
              />
              <div className="features33-content4 thq-flex-column">
                <h3 className="features33-title12 thq-heading-3">
                  {props.feature2Title ?? (
                    <Fragment>
                      <span className="features33-text24">
                        Effortless Sign-In
                      </span>
                    </Fragment>
                  )}
                </h3>
                <span className="features33-description12 thq-body-small">
                  {props.feature2Description ?? (
                    <Fragment>
                      <span className="features33-text15">
                        Enjoy a seamless sign-in experience with just a few
                        clicks.
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
          </div>
          <div className="features33-list2 thq-flex-row">
            <div className="thq-flex-column">
              <img
                alt={props.feature3ImageAlt}
                src={props.feature3ImageSrc}
                className="thq-img-round thq-img-ratio-1-1"
              />
              <div className="features33-content5 thq-flex-column">
                <h3 className="features33-title13 thq-heading-3">
                  {props.feature3Title ?? (
                    <Fragment>
                      <span className="features33-text20">
                        Password Recovery
                      </span>
                    </Fragment>
                  )}
                </h3>
                <span className="features33-description13 thq-body-small">
                  {props.feature3Description ?? (
                    <Fragment>
                      <span className="features33-text23">
                        Reset your password easily and regain access to your
                        account in no time.
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
            <div className="thq-flex-column">
              <img
                alt={props.feature4ImageAlt}
                src={props.feature4ImageSrc}
                className="thq-img-round thq-img-ratio-1-1"
              />
              <div className="features33-content6 thq-flex-column">
                <h3 className="features33-title14 thq-heading-3">
                  {props.feature4Title ?? (
                    <Fragment>
                      <span className="features33-text21">
                        Robust Security Measures
                      </span>
                    </Fragment>
                  )}
                </h3>
                <span className="features33-description14 thq-body-small">
                  {props.feature4Description ?? (
                    <Fragment>
                      <span className="features33-text17">
                        Benefit from advanced security protocols to keep your
                        data safe.
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Features33.defaultProps = {
  sectionDescription: undefined,
  slogan: undefined,
  feature4ImageAlt: 'Robust Security Measures Image',
  feature3ImageSrc:
    'https://images.unsplash.com/photo-1633265486064-086b219458ec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyOTgyNDE2MHw&ixlib=rb-4.0.3&q=80&w=1080',
  feature2Description: undefined,
  mainAction: undefined,
  feature4Description: undefined,
  feature2ImageSrc:
    'https://images.unsplash.com/photo-1523289217630-0dd16184af8e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyOTgyNDE2MHw&ixlib=rb-4.0.3&q=80&w=1080',
  sectionTitle: undefined,
  feature1Description: undefined,
  feature1ImageAlt: 'Secure Account Creation Image',
  feature3Title: undefined,
  feature3ImageAlt: 'Password Recovery Image',
  feature4Title: undefined,
  secondaryAction: undefined,
  feature4ImageSrc:
    'https://images.unsplash.com/photo-1471666875520-c75081f42081?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyOTgyNDE2MXw&ixlib=rb-4.0.3&q=80&w=1080',
  feature2ImageAlt: 'Effortless Sign-In Image',
  feature3Description: undefined,
  feature1ImageSrc:
    'https://images.unsplash.com/photo-1604178737174-f1202991ec16?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyOTgyNDE2MHw&ixlib=rb-4.0.3&q=80&w=1080',
  feature2Title: undefined,
  feature1Title: undefined,
}

Features33.propTypes = {
  sectionDescription: PropTypes.element,
  slogan: PropTypes.element,
  feature4ImageAlt: PropTypes.string,
  feature3ImageSrc: PropTypes.string,
  feature2Description: PropTypes.element,
  mainAction: PropTypes.element,
  feature4Description: PropTypes.element,
  feature2ImageSrc: PropTypes.string,
  sectionTitle: PropTypes.element,
  feature1Description: PropTypes.element,
  feature1ImageAlt: PropTypes.string,
  feature3Title: PropTypes.element,
  feature3ImageAlt: PropTypes.string,
  feature4Title: PropTypes.element,
  secondaryAction: PropTypes.element,
  feature4ImageSrc: PropTypes.string,
  feature2ImageAlt: PropTypes.string,
  feature3Description: PropTypes.element,
  feature1ImageSrc: PropTypes.string,
  feature2Title: PropTypes.element,
  feature1Title: PropTypes.element,
}

export default Features33
