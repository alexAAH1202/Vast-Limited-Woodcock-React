import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './workflow2.css'

const Workflow2 = (props) => {
  return (
    <div className="workflow2-layout253 thq-section-padding">
      <div className="workflow2-max-width thq-section-max-width thq-flex-row">
        <div className="workflow2-section-title thq-flex-column">
          <div className="workflow2-content1 thq-flex-column">
            <h2 className="thq-heading-2">
              {props.sectionTitle ?? (
                <Fragment>
                  <span className="workflow2-text13">Features</span>
                </Fragment>
              )}
            </h2>
            <p className="thq-body-large">
              {props.sectionDescription ?? (
                <Fragment>
                  <span className="workflow2-text17">
                    Explore the key features of our platform
                  </span>
                </Fragment>
              )}
            </p>
          </div>
          <div className="thq-flex-row workflow2-actions">
            <button
              type="button"
              className="thq-button-filled workflow2-button1"
            >
              <span className="thq-body-small">
                {props.mainAction ?? (
                  <Fragment>
                    <span className="workflow2-text16">Sign Up Now</span>
                  </Fragment>
                )}
              </span>
            </button>
            <button className="thq-button-outline workflow2-button2">
              <span className="thq-body-small">
                {props.secondaryAction ?? (
                  <Fragment>
                    <span className="workflow2-text23">Learn More</span>
                  </Fragment>
                )}
              </span>
            </button>
          </div>
        </div>
        <div className="workflow2-content2 thq-flex-column">
          <div className="thq-flex-row workflow2-list1">
            <div className="workflow2-list-item1 thq-flex-column">
              <img
                alt={props.feature1ImageAlt}
                src={props.feature1ImageSrc}
                className="thq-img-round thq-img-ratio-1-1"
              />
              <div className="workflow2-content3 thq-flex-column">
                <h3 className="workflow2-title11 thq-heading-3">
                  {props.feature1Title ?? (
                    <Fragment>
                      <span className="workflow2-text20">
                        User-Friendly Interface
                      </span>
                    </Fragment>
                  )}
                </h3>
                <span className="workflow2-description11 thq-body-small">
                  {props.feature1Description ?? (
                    <Fragment>
                      <span className="workflow2-text19">
                        Easily navigate through our platform with a simple and
                        intuitive interface
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
              <div className="workflow2-content4 thq-flex-column">
                <h3 className="workflow2-title12 thq-heading-3">
                  {props.feature2Title ?? (
                    <Fragment>
                      <span className="workflow2-text14">
                        Secure Account Creation
                      </span>
                    </Fragment>
                  )}
                </h3>
                <span className="workflow2-description12 thq-body-small">
                  {props.feature2Description ?? (
                    <Fragment>
                      <span className="workflow2-text18">
                        Create your account with confidence knowing that your
                        information is secure
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
          </div>
          <div className="workflow2-list2 thq-flex-row">
            <div className="thq-flex-column">
              <img
                alt={props.feature3ImageAlt}
                src={props.feature3ImageSrc}
                className="thq-img-round thq-img-ratio-1-1"
              />
              <div className="workflow2-content5 thq-flex-column">
                <h3 className="workflow2-title13 thq-heading-3">
                  {props.feature3Title ?? (
                    <Fragment>
                      <span className="workflow2-text12">
                        Customizable Profiles
                      </span>
                    </Fragment>
                  )}
                </h3>
                <span className="workflow2-description13 thq-body-small">
                  {props.feature3Description ?? (
                    <Fragment>
                      <span className="workflow2-text21">
                        Personalize your profile to reflect your unique identity
                        and interests
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
              <div className="workflow2-content6 thq-flex-column">
                <h3 className="workflow2-title14 thq-heading-3">
                  {props.feature4Title ?? (
                    <Fragment>
                      <span className="workflow2-text22">
                        Terms of Use and Privacy Policy
                      </span>
                    </Fragment>
                  )}
                </h3>
                <span className="workflow2-description14 thq-body-small">
                  {props.feature4Description ?? (
                    <Fragment>
                      <span className="workflow2-text15">
                        Review and agree to our terms of use and privacy policy
                        to ensure a safe online experience
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

Workflow2.defaultProps = {
  feature2ImageSrc:
    'https://images.unsplash.com/photo-1497005367839-6e852de72767?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyOTczODc4NHw&ixlib=rb-4.0.3&q=80&w=1080',
  feature1ImageSrc:
    'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyOTczODc4NXw&ixlib=rb-4.0.3&q=80&w=1080',
  feature2ImageAlt: 'Secure Account Creation Image Alt Text',
  feature3Title: undefined,
  sectionTitle: undefined,
  feature2Title: undefined,
  feature3ImageAlt: 'Customizable Profiles Image Alt Text',
  feature4Description: undefined,
  mainAction: undefined,
  sectionDescription: undefined,
  feature2Description: undefined,
  feature1Description: undefined,
  feature4ImageSrc:
    'https://images.unsplash.com/photo-1674295648290-45ec85bfc95d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyOTczODc4NXw&ixlib=rb-4.0.3&q=80&w=1080',
  feature1Title: undefined,
  feature3Description: undefined,
  feature3ImageSrc:
    'https://images.unsplash.com/photo-1667453466805-75bbf36e8707?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyOTczODc4NHw&ixlib=rb-4.0.3&q=80&w=1080',
  feature4ImageAlt: 'Terms of Use and Privacy Policy Image Alt Text',
  feature1ImageAlt: 'User-Friendly Interface Image Alt Text',
  feature4Title: undefined,
  secondaryAction: undefined,
}

Workflow2.propTypes = {
  feature2ImageSrc: PropTypes.string,
  feature1ImageSrc: PropTypes.string,
  feature2ImageAlt: PropTypes.string,
  feature3Title: PropTypes.element,
  sectionTitle: PropTypes.element,
  feature2Title: PropTypes.element,
  feature3ImageAlt: PropTypes.string,
  feature4Description: PropTypes.element,
  mainAction: PropTypes.element,
  sectionDescription: PropTypes.element,
  feature2Description: PropTypes.element,
  feature1Description: PropTypes.element,
  feature4ImageSrc: PropTypes.string,
  feature1Title: PropTypes.element,
  feature3Description: PropTypes.element,
  feature3ImageSrc: PropTypes.string,
  feature4ImageAlt: PropTypes.string,
  feature1ImageAlt: PropTypes.string,
  feature4Title: PropTypes.element,
  secondaryAction: PropTypes.element,
}

export default Workflow2
