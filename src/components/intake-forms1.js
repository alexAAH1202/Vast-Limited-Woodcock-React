import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './intake-forms1.css'

const IntakeForms1 = (props) => {
  return (
    <div className="intake-forms1-layout251 thq-section-padding">
      <div className="intake-forms1-max-width thq-section-max-width">
        <div className="thq-flex-row intake-forms1-section-title">
          <div className="intake-forms1-column thq-flex-column">
            <h2 className="thq-heading-2 intake-forms1-text10">
              {props.sectionTitle ?? (
                <Fragment>
                  <span className="intake-forms1-text12">Intake Forms</span>
                </Fragment>
              )}
            </h2>
          </div>
        </div>
        <div className="intake-forms1-content1">
          <div className="intake-forms1-row thq-flex-row">
            <div className="intake-forms1-feature1 thq-flex-column">
              <img
                alt={props.feature1ImageAlt}
                src={props.feature1ImageSrc}
                className="thq-img-ratio-4-3 intake-forms1-feature1-image"
              />
              <div className="intake-forms1-content2 thq-flex-column">
                <h3 className="thq-heading-3">
                  {props.feature1Title ?? (
                    <Fragment>
                      <span className="intake-forms1-text19">
                        Use Our Templates
                      </span>
                    </Fragment>
                  )}
                </h3>
                <span className="thq-body-small">
                  {props.feature1Description ?? (
                    <Fragment>
                      <span className="intake-forms1-text17">
                        Follow our guidelines to create a strong and secure
                        password for your account
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
            <div className="intake-forms1-feature2 thq-flex-column">
              <img
                alt={props.feature2ImageAlt}
                src={props.feature2ImageSrc}
                className="thq-img-ratio-4-3 intake-forms1-feature2-image"
              />
              <div className="intake-forms1-content3 thq-flex-column">
                <h3 className="thq-heading-3">
                  {props.feature2Title ?? (
                    <Fragment>
                      <span className="intake-forms1-text18">
                        Create Your Own
                      </span>
                    </Fragment>
                  )}
                </h3>
                <span className="thq-body-small">
                  {props.feature2Description ?? (
                    <Fragment>
                      <span className="intake-forms1-text14">
                        Gain access to premium content available only to
                        registered users
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
            <div className="intake-forms1-feature3 thq-flex-column">
              <img
                alt={props.feature3ImageAlt}
                src={props.feature3ImageSrc}
                className="thq-img-ratio-4-3 intake-forms1-feature3-image"
              />
              <div className="intake-forms1-content4 thq-flex-column">
                <h3 className="thq-heading-3">
                  {props.feature3Title ?? (
                    <Fragment>
                      <span className="intake-forms1-text16">
                        Terms of Use and Privacy Policy
                      </span>
                    </Fragment>
                  )}
                </h3>
                <span className="thq-body-small">
                  {props.feature3Description ?? (
                    <Fragment>
                      <span className="intake-forms1-text13">
                        Review our terms of use and privacy policy to understand
                        your rights and responsibilities
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="intake-forms1-actions">
          <button className="thq-button-filled intake-forms1-button1">
            <span className="thq-body-small">
              {props.mainAction ?? (
                <Fragment>
                  <span className="intake-forms1-text15">
                    Use Our Templates
                  </span>
                </Fragment>
              )}
            </span>
          </button>
          <button className="thq-button-outline intake-forms1-button2">
            <span className="thq-body-small">
              {props.secondaryAction ?? (
                <Fragment>
                  <span className="intake-forms1-text11">Create Your Own</span>
                </Fragment>
              )}
            </span>
          </button>
        </div>
      </div>
    </div>
  )
}

IntakeForms1.defaultProps = {
  secondaryAction: undefined,
  feature3ImageAlt: 'Terms of Use and Privacy Policy Image',
  sectionTitle: undefined,
  feature3Description: undefined,
  feature2Description: undefined,
  mainAction: undefined,
  feature2ImageSrc:
    'https://images.unsplash.com/photo-1524591431555-cc7876d14adf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyOTc0MTQ5Mnw&ixlib=rb-4.0.3&q=80&w=1080',
  feature3ImageSrc:
    'https://images.unsplash.com/photo-1634609244256-00d1685f89f5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyOTc0MTQ5Mnw&ixlib=rb-4.0.3&q=80&w=1080',
  feature1ImageSrc:
    'https://images.unsplash.com/photo-1637597383775-cf7b69e0a9c2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyOTc0MTQ5M3w&ixlib=rb-4.0.3&q=80&w=1080',
  feature3Title: undefined,
  feature1Description: undefined,
  feature2Title: undefined,
  feature1ImageAlt: 'Secure Account Creation Image',
  feature1Title: undefined,
  feature2ImageAlt: 'Exclusive Content Access Image',
}

IntakeForms1.propTypes = {
  secondaryAction: PropTypes.element,
  feature3ImageAlt: PropTypes.string,
  sectionTitle: PropTypes.element,
  feature3Description: PropTypes.element,
  feature2Description: PropTypes.element,
  mainAction: PropTypes.element,
  feature2ImageSrc: PropTypes.string,
  feature3ImageSrc: PropTypes.string,
  feature1ImageSrc: PropTypes.string,
  feature3Title: PropTypes.element,
  feature1Description: PropTypes.element,
  feature2Title: PropTypes.element,
  feature1ImageAlt: PropTypes.string,
  feature1Title: PropTypes.element,
  feature2ImageAlt: PropTypes.string,
}

export default IntakeForms1
