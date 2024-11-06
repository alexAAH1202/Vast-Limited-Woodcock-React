import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './workplace3.css'

const Workplace3 = (props) => {
  return (
    <div className="workplace3-layout253 thq-section-padding">
      <div className="workplace3-max-width thq-section-max-width thq-flex-row">
        <div className="workplace3-section-title thq-flex-column">
          <span className="thq-body-small">
            {props.slogan ?? (
              <Fragment>
                <span className="workplace3-text25">
                  Unlock Premium Content
                </span>
              </Fragment>
            )}
          </span>
          <div className="workplace3-content1 thq-flex-column">
            <h2 className="thq-heading-2">
              {props.sectionTitle ?? (
                <Fragment>
                  <span className="workplace3-text20">Features</span>
                </Fragment>
              )}
            </h2>
            <p className="thq-body-large">
              {props.sectionDescription ?? (
                <Fragment>
                  <span className="workplace3-text13">
                    Explore the exclusive features available on our platform.
                  </span>
                </Fragment>
              )}
            </p>
          </div>
          <div className="thq-flex-row workplace3-actions">
            <button className="thq-button-filled workplace3-button1">
              <span className="thq-body-small">
                {props.mainAction ?? (
                  <Fragment>
                    <span className="workplace3-text14">Sign Up Now</span>
                  </Fragment>
                )}
              </span>
            </button>
            <button className="thq-button-outline workplace3-button2">
              <span className="thq-body-small">
                {props.secondaryAction ?? (
                  <Fragment>
                    <span className="workplace3-text16">Learn More</span>
                  </Fragment>
                )}
              </span>
            </button>
          </div>
        </div>
        <div className="workplace3-content2 thq-flex-column">
          <div className="thq-flex-row workplace3-list1">
            <div className="workplace3-list-item1 thq-flex-column">
              <img
                alt={props.feature1ImageAlt}
                src={props.feature1ImageSrc}
                className="thq-img-round thq-img-ratio-1-1"
              />
              <div className="workplace3-content3 thq-flex-column">
                <h3 className="workplace3-title11 thq-heading-3">
                  {props.feature1Title ?? (
                    <Fragment>
                      <span className="workplace3-text23">
                        Secure Account Creation
                      </span>
                    </Fragment>
                  )}
                </h3>
                <span className="workplace3-description11 thq-body-small">
                  {props.feature1Description ?? (
                    <Fragment>
                      <span className="workplace3-text24">
                        Follow our guidelines to create a strong and secure
                        password for your account.
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
              <div className="workplace3-content4 thq-flex-column">
                <h3 className="workplace3-title12 thq-heading-3">
                  {props.feature2Title ?? (
                    <Fragment>
                      <span className="workplace3-text18">
                        Exclusive Content Access
                      </span>
                    </Fragment>
                  )}
                </h3>
                <span className="workplace3-description12 thq-body-small">
                  {props.feature2Description ?? (
                    <Fragment>
                      <span className="workplace3-text22">
                        Gain access to premium content available only to
                        registered users.
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
          </div>
          <div className="workplace3-list2 thq-flex-row">
            <div className="thq-flex-column">
              <img
                alt={props.feature3ImageAlt}
                src={props.feature3ImageSrc}
                className="thq-img-round thq-img-ratio-1-1"
              />
              <div className="workplace3-content5 thq-flex-column">
                <h3 className="workplace3-title13 thq-heading-3">
                  {props.feature3Title ?? (
                    <Fragment>
                      <span className="workplace3-text19">Terms of Use</span>
                    </Fragment>
                  )}
                </h3>
                <span className="workplace3-description13 thq-body-small">
                  {props.feature3Description ?? (
                    <Fragment>
                      <span className="workplace3-text21">
                        Read and agree to our terms of use to enjoy all the
                        benefits of our platform.
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
              <div className="workplace3-content6 thq-flex-column">
                <h3 className="workplace3-title14 thq-heading-3">
                  {props.feature4Title ?? (
                    <Fragment>
                      <span className="workplace3-text17">Privacy Policy</span>
                    </Fragment>
                  )}
                </h3>
                <span className="workplace3-description14 thq-body-small">
                  {props.feature4Description ?? (
                    <Fragment>
                      <span className="workplace3-text15">
                        Understand how we handle your data by reviewing our
                        privacy policy.
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

Workplace3.defaultProps = {
  feature3ImageSrc:
    'https://images.unsplash.com/photo-1617676481549-911664e1f2f8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyOTc0MTQ0NHw&ixlib=rb-4.0.3&q=80&w=1080',
  sectionDescription: undefined,
  mainAction: undefined,
  feature4Description: undefined,
  secondaryAction: undefined,
  feature1ImageSrc:
    'https://images.unsplash.com/photo-1529331087390-ad87a5408be4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyOTc0MTQ0NXw&ixlib=rb-4.0.3&q=80&w=1080',
  feature1ImageAlt: 'Secure Account Creation Image',
  feature4Title: undefined,
  feature2Title: undefined,
  feature3Title: undefined,
  feature2ImageSrc:
    'https://images.unsplash.com/photo-1582139329536-e7284fece509?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyOTc0MTQ0NHw&ixlib=rb-4.0.3&q=80&w=1080',
  feature2ImageAlt: 'Exclusive Content Access Image',
  sectionTitle: undefined,
  feature3Description: undefined,
  feature4ImageSrc:
    'https://images.unsplash.com/photo-1512813498716-3e640fed3f39?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyOTc0MTQ0NXw&ixlib=rb-4.0.3&q=80&w=1080',
  feature2Description: undefined,
  feature1Title: undefined,
  feature4ImageAlt: 'Privacy Policy Image',
  feature3ImageAlt: 'Terms of Use Image',
  feature1Description: undefined,
  slogan: undefined,
}

Workplace3.propTypes = {
  feature3ImageSrc: PropTypes.string,
  sectionDescription: PropTypes.element,
  mainAction: PropTypes.element,
  feature4Description: PropTypes.element,
  secondaryAction: PropTypes.element,
  feature1ImageSrc: PropTypes.string,
  feature1ImageAlt: PropTypes.string,
  feature4Title: PropTypes.element,
  feature2Title: PropTypes.element,
  feature3Title: PropTypes.element,
  feature2ImageSrc: PropTypes.string,
  feature2ImageAlt: PropTypes.string,
  sectionTitle: PropTypes.element,
  feature3Description: PropTypes.element,
  feature4ImageSrc: PropTypes.string,
  feature2Description: PropTypes.element,
  feature1Title: PropTypes.element,
  feature4ImageAlt: PropTypes.string,
  feature3ImageAlt: PropTypes.string,
  feature1Description: PropTypes.element,
  slogan: PropTypes.element,
}

export default Workplace3
