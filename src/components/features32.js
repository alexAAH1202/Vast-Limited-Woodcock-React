import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './features32.css'

const Features32 = (props) => {
  return (
    <div className="features32-layout253 thq-section-padding">
      <div className="features32-max-width thq-section-max-width thq-flex-row">
        <div className="features32-section-title thq-flex-column">
          <span className="thq-body-small">
            {props.slogan ?? (
              <Fragment>
                <span className="features32-text13">
                  Secure and Seamless Authentication
                </span>
              </Fragment>
            )}
          </span>
          <div className="features32-content1 thq-flex-column">
            <h2 className="thq-heading-2">
              {props.sectionTitle ?? (
                <Fragment>
                  <span className="features32-text21">Key Features</span>
                </Fragment>
              )}
            </h2>
            <p className="thq-body-large">
              {props.sectionDescription ?? (
                <Fragment>
                  <span className="features32-text20">
                    Explore the key features that make our user authentication
                    system stand out.
                  </span>
                </Fragment>
              )}
            </p>
          </div>
          <div className="thq-flex-row features32-actions">
            <button className="thq-button-filled features32-button1">
              <span className="thq-body-small">
                {props.mainAction ?? (
                  <Fragment>
                    <span className="features32-text24">Sign Up Now</span>
                  </Fragment>
                )}
              </span>
            </button>
            <button className="thq-button-outline features32-button2">
              <span className="thq-body-small">
                {props.secondaryAction ?? (
                  <Fragment>
                    <span className="features32-text17">Learn More</span>
                  </Fragment>
                )}
              </span>
            </button>
          </div>
        </div>
        <div className="features32-content2 thq-flex-column">
          <div className="thq-flex-row features32-list1">
            <div className="features32-list-item1 thq-flex-column">
              <img
                alt={props.feature1ImageAlt}
                src={props.feature1ImageSrc}
                className="thq-img-round thq-img-ratio-1-1"
              />
              <div className="features32-content3 thq-flex-column">
                <h3 className="features32-title11 thq-heading-3">
                  {props.feature1Title ?? (
                    <Fragment>
                      <span className="features32-text25">
                        User-Friendly Interface
                      </span>
                    </Fragment>
                  )}
                </h3>
                <span className="features32-description11 thq-body-small">
                  {props.feature1Description ?? (
                    <Fragment>
                      <span className="features32-text23">
                        Intuitive design for easy navigation and interaction.
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
              <div className="features32-content4 thq-flex-column">
                <h3 className="features32-title12 thq-heading-3">
                  {props.feature2Title ?? (
                    <Fragment>
                      <span className="features32-text16">
                        Robust Security Measures
                      </span>
                    </Fragment>
                  )}
                </h3>
                <span className="features32-description12 thq-body-small">
                  {props.feature2Description ?? (
                    <Fragment>
                      <span className="features32-text14">
                        Advanced encryption protocols to safeguard your data.
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
          </div>
          <div className="features32-list2 thq-flex-row">
            <div className="thq-flex-column">
              <img
                alt={props.feature3ImageAlt}
                src={props.feature3ImageSrc}
                className="thq-img-round thq-img-ratio-1-1"
              />
              <div className="features32-content5 thq-flex-column">
                <h3 className="features32-title13 thq-heading-3">
                  {props.feature3Title ?? (
                    <Fragment>
                      <span className="features32-text19">
                        Effortless Account Creation
                      </span>
                    </Fragment>
                  )}
                </h3>
                <span className="features32-description13 thq-body-small">
                  {props.feature3Description ?? (
                    <Fragment>
                      <span className="features32-text18">
                        Streamlined process for creating new accounts in
                        seconds.
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
              <div className="features32-content6 thq-flex-column">
                <h3 className="features32-title14 thq-heading-3">
                  {props.feature4Title ?? (
                    <Fragment>
                      <span className="features32-text15">
                        Password Recovery Options
                      </span>
                    </Fragment>
                  )}
                </h3>
                <span className="features32-description14 thq-body-small">
                  {props.feature4Description ?? (
                    <Fragment>
                      <span className="features32-text22">
                        Multiple ways to reset your password securely.
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

Features32.defaultProps = {
  slogan: undefined,
  feature2Description: undefined,
  feature4Title: undefined,
  feature2Title: undefined,
  secondaryAction: undefined,
  feature4ImageSrc:
    'https://images.unsplash.com/photo-1465343161283-c1959138ddaa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyOTgyNDE0M3w&ixlib=rb-4.0.3&q=80&w=1080',
  feature3Description: undefined,
  feature1ImageAlt: 'User-Friendly Interface Image',
  feature3ImageSrc:
    'https://images.unsplash.com/photo-1680458841442-eeb9951c5fdf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyOTgyNDE0Mnw&ixlib=rb-4.0.3&q=80&w=1080',
  feature3Title: undefined,
  feature1ImageSrc:
    'https://images.unsplash.com/photo-1582046989896-cec660fa27ab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyOTgyNDE0M3w&ixlib=rb-4.0.3&q=80&w=1080',
  feature2ImageAlt: 'Robust Security Measures Image',
  sectionDescription: undefined,
  sectionTitle: undefined,
  feature4Description: undefined,
  feature1Description: undefined,
  feature2ImageSrc:
    'https://images.unsplash.com/photo-1649750525698-755c2398dc96?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyOTgyNDE0Mnw&ixlib=rb-4.0.3&q=80&w=1080',
  mainAction: undefined,
  feature3ImageAlt: 'Effortless Account Creation Image',
  feature1Title: undefined,
  feature4ImageAlt: 'Password Recovery Options Image',
}

Features32.propTypes = {
  slogan: PropTypes.element,
  feature2Description: PropTypes.element,
  feature4Title: PropTypes.element,
  feature2Title: PropTypes.element,
  secondaryAction: PropTypes.element,
  feature4ImageSrc: PropTypes.string,
  feature3Description: PropTypes.element,
  feature1ImageAlt: PropTypes.string,
  feature3ImageSrc: PropTypes.string,
  feature3Title: PropTypes.element,
  feature1ImageSrc: PropTypes.string,
  feature2ImageAlt: PropTypes.string,
  sectionDescription: PropTypes.element,
  sectionTitle: PropTypes.element,
  feature4Description: PropTypes.element,
  feature1Description: PropTypes.element,
  feature2ImageSrc: PropTypes.string,
  mainAction: PropTypes.element,
  feature3ImageAlt: PropTypes.string,
  feature1Title: PropTypes.element,
  feature4ImageAlt: PropTypes.string,
}

export default Features32
