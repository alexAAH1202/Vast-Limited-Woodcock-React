import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import './hero9.css'

const Hero9 = (props) => {
  return (
    <div className="hero9-header30 thq-section-padding">
      <img
        alt={props.image1Alt}
        src={props.image1Src}
        className="hero9-image"
      />
      <div className="hero9-container"></div>
      <div className="hero9-max-width thq-section-max-width">
        <div className="hero9-content">
          <h1 className="hero9-text1 thq-heading-1">
            {props.heading1 ?? (
              <Fragment>
                <span className="hero9-text5">
                  Welcome to our Exclusive Content Platform!
                </span>
              </Fragment>
            )}
          </h1>
          <p className="hero9-text2 thq-body-large">
            {props.content1 ?? (
              <Fragment>
                <span className="hero9-text8">
                  Sign in to access special offers and reset your password if
                  needed.
                </span>
              </Fragment>
            )}
          </p>
          <div className="hero9-actions">
            <Link to="/" className="hero9-button1 thq-button-filled">
              <span className="hero9-text3 thq-body-small">
                {props.action1 ?? (
                  <Fragment>
                    <span className="hero9-text6">Sign in</span>
                  </Fragment>
                )}
              </span>
            </Link>
            <Link to="/" className="hero9-button2 thq-button-outline">
              <span className="hero9-text4 thq-body-small">
                {props.action2 ?? (
                  <Fragment>
                    <span className="hero9-text7">Create an account now</span>
                  </Fragment>
                )}
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

Hero9.defaultProps = {
  heading1: undefined,
  action1: undefined,
  image1Alt: 'Exclusive Content Platform Image',
  action2: undefined,
  content1: undefined,
  image1Src:
    'https://images.unsplash.com/photo-1505317748522-0dcd2747c86b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyOTc0MDIyMnw&ixlib=rb-4.0.3&q=80&w=1080',
}

Hero9.propTypes = {
  heading1: PropTypes.element,
  action1: PropTypes.element,
  image1Alt: PropTypes.string,
  action2: PropTypes.element,
  content1: PropTypes.element,
  image1Src: PropTypes.string,
}

export default Hero9
