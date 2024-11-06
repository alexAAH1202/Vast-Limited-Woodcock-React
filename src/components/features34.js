import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './features34.css'

const Features34 = (props) => {
  return (
    <div className="features34-layout253 thq-section-padding">
      <div className="features34-max-width thq-section-max-width thq-flex-row">
        <div className="features34-section-title thq-flex-column">
          <span className="thq-body-small">
            {props.slogan ?? (
              <Fragment>
                <span className="features34-text14">
                  Secure and Convenient Authentication Solutions
                </span>
              </Fragment>
            )}
          </span>
          <div className="features34-content1 thq-flex-column">
            <h2 className="thq-heading-2">
              {props.sectionTitle ?? (
                <Fragment>
                  <span className="features34-text18">Features</span>
                </Fragment>
              )}
            </h2>
            <p className="thq-body-large">
              {props.sectionDescription ?? (
                <Fragment>
                  <span className="features34-text22">
                    Explore the key features of our user authentication
                    platform.
                  </span>
                </Fragment>
              )}
            </p>
          </div>
          <div className="thq-flex-row features34-actions">
            <button className="thq-button-filled features34-button1">
              <span className="thq-body-small">
                {props.mainAction ?? (
                  <Fragment>
                    <span className="features34-text24">Sign Up Now</span>
                  </Fragment>
                )}
              </span>
            </button>
            <button className="thq-button-outline features34-button2">
              <span className="thq-body-small">
                {props.secondaryAction ?? (
                  <Fragment>
                    <span className="features34-text25">Learn More</span>
                  </Fragment>
                )}
              </span>
            </button>
          </div>
        </div>
        <div className="features34-content2 thq-flex-column">
          <div className="thq-flex-row features34-list1">
            <div className="features34-list-item1 thq-flex-column">
              <img
                alt={props.feature1ImageAlt}
                src={props.feature1ImageSrc}
                className="thq-img-round thq-img-ratio-1-1"
              />
              <div className="features34-content3 thq-flex-column">
                <h3 className="features34-title11 thq-heading-3">
                  {props.feature1Title ?? (
                    <Fragment>
                      <span className="features34-text16">
                        User-Friendly Interface
                      </span>
                    </Fragment>
                  )}
                </h3>
                <span className="features34-description11 thq-body-small">
                  {props.feature1Description ?? (
                    <Fragment>
                      <span className="features34-text23">
                        Intuitive design for seamless account creation and
                        password recovery.
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
              <div className="features34-content4 thq-flex-column">
                <h3 className="features34-title12 thq-heading-3">
                  {props.feature2Title ?? (
                    <Fragment>
                      <span className="features34-text15">
                        Robust Security Measures
                      </span>
                    </Fragment>
                  )}
                </h3>
                <span className="features34-description12 thq-body-small">
                  {props.feature2Description ?? (
                    <Fragment>
                      <span className="features34-text13">
                        Advanced encryption techniques to safeguard user data
                        and privacy.
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
          </div>
          <div className="features34-list2 thq-flex-row">
            <div className="thq-flex-column">
              <img
                alt={props.feature3ImageAlt}
                src={props.feature3ImageSrc}
                className="thq-img-round thq-img-ratio-1-1"
              />
              <div className="features34-content5 thq-flex-column">
                <h3 className="features34-title13 thq-heading-3">
                  {props.feature3Title ?? (
                    <Fragment>
                      <span className="features34-text21">
                        Effortless Password Recovery
                      </span>
                    </Fragment>
                  )}
                </h3>
                <span className="features34-description13 thq-body-small">
                  {props.feature3Description ?? (
                    <Fragment>
                      <span className="features34-text19">
                        Simple process for resetting passwords securely and
                        efficiently.
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
              <div className="features34-content6 thq-flex-column">
                <h3 className="features34-title14 thq-heading-3">
                  {props.feature4Title ?? (
                    <Fragment>
                      <span className="features34-text20">
                        Customizable Authentication Options
                      </span>
                    </Fragment>
                  )}
                </h3>
                <span className="features34-description14 thq-body-small">
                  {props.feature4Description ?? (
                    <Fragment>
                      <span className="features34-text17">
                        Tailor authentication settings to suit your specific
                        requirements.
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

Features34.defaultProps = {
  feature2Description: undefined,
  slogan: undefined,
  feature2Title: undefined,
  feature1Title: undefined,
  feature4ImageSrc:
    'https://images.unsplash.com/photo-1620401537422-905dd2ec07e7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyOTgyNDE5NHw&ixlib=rb-4.0.3&q=80&w=1080',
  feature4Description: undefined,
  sectionTitle: undefined,
  feature1ImageAlt: 'User-Friendly Interface Image Alt Text',
  feature3Description: undefined,
  feature4Title: undefined,
  feature3Title: undefined,
  sectionDescription: undefined,
  feature3ImageSrc:
    'https://images.unsplash.com/photo-1541929866681-94eb7c9a4c7d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyOTgyNDE5M3w&ixlib=rb-4.0.3&q=80&w=1080',
  feature1Description: undefined,
  mainAction: undefined,
  feature2ImageSrc:
    'https://images.unsplash.com/photo-1583473361352-c440fc3400ed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyOTgyNDE5NHw&ixlib=rb-4.0.3&q=80&w=1080',
  feature2ImageAlt: 'Robust Security Measures Image Alt Text',
  feature1ImageSrc:
    'https://images.unsplash.com/photo-1529321044792-949d1f03e61e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyOTgyNDE5NHw&ixlib=rb-4.0.3&q=80&w=1080',
  feature4ImageAlt: 'Customizable Authentication Options Image Alt Text',
  secondaryAction: undefined,
  feature3ImageAlt: 'Effortless Password Recovery Image Alt Text',
}

Features34.propTypes = {
  feature2Description: PropTypes.element,
  slogan: PropTypes.element,
  feature2Title: PropTypes.element,
  feature1Title: PropTypes.element,
  feature4ImageSrc: PropTypes.string,
  feature4Description: PropTypes.element,
  sectionTitle: PropTypes.element,
  feature1ImageAlt: PropTypes.string,
  feature3Description: PropTypes.element,
  feature4Title: PropTypes.element,
  feature3Title: PropTypes.element,
  sectionDescription: PropTypes.element,
  feature3ImageSrc: PropTypes.string,
  feature1Description: PropTypes.element,
  mainAction: PropTypes.element,
  feature2ImageSrc: PropTypes.string,
  feature2ImageAlt: PropTypes.string,
  feature1ImageSrc: PropTypes.string,
  feature4ImageAlt: PropTypes.string,
  secondaryAction: PropTypes.element,
  feature3ImageAlt: PropTypes.string,
}

export default Features34
