import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import './intake-forms-main.css'

const IntakeFormsMain = (props) => {
  return (
    <div className="intake-forms-main-header77">
      <div className="intake-forms-main-max-width thq-section-max-width">
        <div className="intake-forms-main-document-container thq-section-padding">
          <div className="intake-forms-main-content1">
            <h1 className="thq-heading-1 intake-forms-main-text10">
              {props.heading1 ?? (
                <Fragment>
                  <span className="intake-forms-main-text17">Intake Forms</span>
                </Fragment>
              )}
            </h1>
            <p className="thq-body-large intake-forms-main-text11">
              {props.content1 ?? (
                <Fragment>
                  <span className="intake-forms-main-text19">
                    <span className="intake-forms-main-text20">
                      Create personalised forms for your clients
                    </span>
                    <br></br>
                  </span>
                </Fragment>
              )}
            </p>
            <div className="intake-forms-main-actions">
              <Link
                to="/document-selection"
                className="intake-forms-main-use-ours thq-button-filled"
              >
                <span className="thq-body-small">
                  {props.action1 ?? (
                    <Fragment>
                      <span className="intake-forms-main-text18">
                        Create New Form
                      </span>
                    </Fragment>
                  )}
                </span>
              </Link>
              <button className="intake-forms-main-use-existing thq-button-outline">
                <span className="thq-body-small">
                  {props.action2 ?? (
                    <Fragment>
                      <span className="intake-forms-main-text16">
                        Use Existing Form
                      </span>
                    </Fragment>
                  )}
                </span>
              </button>
              <button className="intake-forms-main-create-new thq-button-outline">
                <span className="thq-body-small">
                  {props.action21 ?? (
                    <Fragment>
                      <span className="intake-forms-main-text15">
                        Default value
                      </span>
                    </Fragment>
                  )}
                </span>
              </button>
            </div>
          </div>
        </div>
        <div className="intake-forms-main-content2">
          <div className="intake-forms-main-row1">
            <img
              alt={props.image1Alt}
              src={props.image1Src}
              className="intake-forms-main-placeholder-image1 thq-img-ratio-1-1"
            />
            <img
              alt={props.image2Alt}
              src={props.image2Src}
              className="intake-forms-main-placeholder-image2 thq-img-ratio-1-1"
            />
            <img
              alt={props.image3Alt}
              src={props.image3Src}
              className="intake-forms-main-placeholder-image3 thq-img-ratio-1-1"
            />
          </div>
          <div className="intake-forms-main-row2">
            <img
              alt={props.image4Alt}
              src={props.image4Src}
              className="intake-forms-main-placeholder-image4 thq-img-ratio-1-1"
            />
            <img
              alt={props.image5Alt}
              src={props.image5Src}
              className="intake-forms-main-placeholder-image5 thq-img-ratio-1-1"
            />
            <img
              alt={props.image6Alt}
              src={props.image6Src}
              className="intake-forms-main-placeholder-image6 thq-img-ratio-1-1"
            />
            <img
              alt={props.image7Alt}
              src={props.image7Src}
              className="intake-forms-main-placeholder-image7 thq-img-ratio-1-1"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

IntakeFormsMain.defaultProps = {
  action21: undefined,
  image7Alt: 'Hero Image',
  image7Src:
    'https://images.unsplash.com/photo-1634609243986-d83054a19711?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyOTgyMzg2OHw&ixlib=rb-4.0.3&q=80&w=1080',
  action2: undefined,
  image3Alt: 'Hero Image',
  image5Alt: 'Hero Image',
  image3Src:
    'https://images.unsplash.com/photo-1674049405160-9b800f5645f5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyOTgyMzg2N3w&ixlib=rb-4.0.3&q=80&w=1080',
  image6Alt: 'Hero Image',
  image4Src:
    'https://images.unsplash.com/photo-1630568087753-18e474066e50?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyOTgyMzg2N3w&ixlib=rb-4.0.3&q=80&w=1080',
  image5Src:
    'https://images.unsplash.com/photo-1498751041763-40284fe1eb66?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyOTgyMzg2OHw&ixlib=rb-4.0.3&q=80&w=1080',
  image2Src:
    'https://images.unsplash.com/photo-1478012237172-93bd483bb540?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyOTgyMzg2OHw&ixlib=rb-4.0.3&q=80&w=1080',
  image2Alt: 'Hero Image',
  heading1: undefined,
  image4Alt: 'Hero Image',
  image6Src:
    'https://images.unsplash.com/photo-1674049405160-9b800f5645f5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyOTgyMzg2OHw&ixlib=rb-4.0.3&q=80&w=1080',
  action1: undefined,
  image1Alt: 'User Accounts Management',
  content1: undefined,
  image1Src:
    'https://images.unsplash.com/photo-1514561064005-2bac60d9f7ea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyOTgyMzc2NXw&ixlib=rb-4.0.3&q=80&w=1080',
}

IntakeFormsMain.propTypes = {
  action21: PropTypes.element,
  image7Alt: PropTypes.string,
  image7Src: PropTypes.string,
  action2: PropTypes.element,
  image3Alt: PropTypes.string,
  image5Alt: PropTypes.string,
  image3Src: PropTypes.string,
  image6Alt: PropTypes.string,
  image4Src: PropTypes.string,
  image5Src: PropTypes.string,
  image2Src: PropTypes.string,
  image2Alt: PropTypes.string,
  heading1: PropTypes.element,
  image4Alt: PropTypes.string,
  image6Src: PropTypes.string,
  action1: PropTypes.element,
  image1Alt: PropTypes.string,
  content1: PropTypes.element,
  image1Src: PropTypes.string,
}

export default IntakeFormsMain
