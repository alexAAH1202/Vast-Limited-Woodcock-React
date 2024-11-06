import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './features16.css'

const Features16 = (props) => {
  return (
    <div className="features16-layout300 thq-section-padding">
      <div className="features16-max-width thq-section-max-width">
        <div className="features16-section-title">
          <span className="features16-text10 thq-body-small">
            {props.slogan1 ?? (
              <Fragment>
                <span className="features16-text18">Slogan</span>
              </Fragment>
            )}
          </span>
          <div className="features16-content1">
            <h2 className="features16-text11 thq-heading-2">
              {props.heading1 ?? (
                <Fragment>
                  <span className="features16-text21">
                    Discover the Key Features
                  </span>
                </Fragment>
              )}
            </h2>
            <span className="features16-text12 thq-body-large">
              {props.content1 ?? (
                <Fragment>
                  <span className="features16-text19">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse varius enim in eros elementum tristique. Duis
                    cursus, mi quis viverra ornare, eros dolor interdum nulla,
                    ut commodo diam libero vitae erat. Suspendisse varius enim
                    in eros elementum tristique. Duis cursus, mi quis viverra
                    ornare, eros dolor interdum nulla.
                  </span>
                </Fragment>
              )}
            </span>
          </div>
        </div>
        <div className="features16-content2">
          <div className="features16-row thq-flex-row">
            <div className="features16-feature1">
              <img
                alt={props.feature1ImageAlt}
                src={props.feature1ImageSrc}
                className="thq-img-ratio-4-3"
              />
              <div className="features16-content3">
                <h3 className="features16-feature1-title thq-heading-3">
                  {props.feature1Title ?? (
                    <Fragment>
                      <span className="features16-text17">
                        Secure Account Creation
                      </span>
                    </Fragment>
                  )}
                </h3>
                <span className="thq-body-small">
                  {props.feature1Description ?? (
                    <Fragment>
                      <span className="features16-text20">
                        Create an account with strong password criteria and
                        email verification.
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
            <div className="features16-feature2">
              <img
                alt={props.feature2ImageAlt}
                src={props.feature2ImageSrc}
                className="thq-img-ratio-4-3"
              />
              <div className="features16-content4">
                <h3 className="thq-heading-3">
                  {props.feature2Title ?? (
                    <Fragment>
                      <span className="features16-text16">
                        Terms of Use Agreement
                      </span>
                    </Fragment>
                  )}
                </h3>
                <span className="thq-body-small">
                  {props.feature2Description ?? (
                    <Fragment>
                      <span className="features16-text13">
                        Users must agree to the Terms of Use before creating an
                        account.
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
            <div className="features16-feature3">
              <img
                alt={props.feature3ImageAlt}
                src={props.feature3ImageSrc}
                className="thq-img-ratio-4-3"
              />
              <div className="features16-content5">
                <h3 className="thq-heading-3">
                  {props.feature3Title ?? (
                    <Fragment>
                      <span className="features16-text14">
                        Privacy Policy Acceptance
                      </span>
                    </Fragment>
                  )}
                </h3>
                <span className="thq-body-small">
                  {props.feature3Description ?? (
                    <Fragment>
                      <span className="features16-text15">
                        Users need to accept the Privacy Policy to proceed with
                        their account creation.
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

Features16.defaultProps = {
  feature2Description: undefined,
  feature2ImageAlt: 'Terms of Use Agreement Image',
  feature3Title: undefined,
  feature3ImageSrc:
    'https://images.unsplash.com/photo-1677459324353-a81c8ce9bde2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczMDg2MjkzMXw&ixlib=rb-4.0.3&q=80&w=1080',
  feature3Description: undefined,
  feature1ImageSrc:
    'https://images.unsplash.com/photo-1687720657052-c026be7f388c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczMDg2MjkzMXw&ixlib=rb-4.0.3&q=80&w=1080',
  feature2Title: undefined,
  feature1Title: undefined,
  slogan1: undefined,
  feature1ImageAlt: 'Secure Account Creation Image',
  feature2ImageSrc:
    'https://images.unsplash.com/photo-1520757054960-d60bc90c6d79?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczMDg2MjkzMXw&ixlib=rb-4.0.3&q=80&w=1080',
  content1: undefined,
  feature3ImageAlt: 'Privacy Policy Acceptance Image',
  feature1Description: undefined,
  heading1: undefined,
}

Features16.propTypes = {
  feature2Description: PropTypes.element,
  feature2ImageAlt: PropTypes.string,
  feature3Title: PropTypes.element,
  feature3ImageSrc: PropTypes.string,
  feature3Description: PropTypes.element,
  feature1ImageSrc: PropTypes.string,
  feature2Title: PropTypes.element,
  feature1Title: PropTypes.element,
  slogan1: PropTypes.element,
  feature1ImageAlt: PropTypes.string,
  feature2ImageSrc: PropTypes.string,
  content1: PropTypes.element,
  feature3ImageAlt: PropTypes.string,
  feature1Description: PropTypes.element,
  heading1: PropTypes.element,
}

export default Features16
