import React, { useState, Fragment } from 'react'

import PropTypes from 'prop-types'

import './faq.css'

const FAQ = (props) => {
  const [faq4Visible, setFaq4Visible] = useState(false)
  const [faq3Visible, setFaq3Visible] = useState(false)
  const [faq1Visible, setFaq1Visible] = useState(false)
  const [faq5Visible, setFaq5Visible] = useState(false)
  const [faq2Visible, setFaq2Visible] = useState(false)
  return (
    <div className="faqfaq8 thq-section-padding">
      <div className="faq-max-width thq-section-max-width">
        <div className="faq-container10 thq-flex-column">
          <div className="faq-section-title thq-section-max-width thq-flex-column">
            <div className="faq-content1">
              <h2 className="thq-heading-2">
                {props.heading1 ?? (
                  <Fragment>
                    <span className="faq-text20">
                      Frequently Asked Questions
                    </span>
                  </Fragment>
                )}
              </h2>
            </div>
          </div>
          <div className="thq-section-max-width thq-flex-column">
            <div className="thq-divider-horizontal"></div>
            <div className="faq-faq1">
              <div
                onClick={() => setFaq1Visible(!faq1Visible)}
                className="faq-trigger1"
              >
                <p className="faq-faq1-question1 thq-body-large">
                  {props.faq1Question ?? (
                    <Fragment>
                      <span className="faq-text18">
                        How can I access exclusive content?
                      </span>
                    </Fragment>
                  )}
                </p>
                <div className="faq-icons-container1">
                  {!faq1Visible && (
                    <div>
                      <svg viewBox="0 0 1024 1024" className="faq-icon10">
                        <path d="M316 366l196 196 196-196 60 60-256 256-256-256z"></path>
                      </svg>
                    </div>
                  )}
                  {faq1Visible && (
                    <div>
                      <svg viewBox="0 0 1024 1024" className="faq-icon12">
                        <path d="M316 658l-60-60 256-256 256 256-60 60-196-196z"></path>
                      </svg>
                    </div>
                  )}
                </div>
              </div>
              {faq1Visible && (
                <div className="faq-container13">
                  <span className="thq-body-small">
                    Lorem ipsum dolor sit amet. Est eaque sint ut blanditiis
                    sunt aut deleniti illum non repudiandae voluptatem. Aut
                    praesentium doloribus qui distinctio neque ut unde
                    temporibus. Cum exercitationem eveniet in omnis animi in
                    corporis nulla. Sed tempora excepturi et voluptatem modi et
                    exercitationem voluptate cum illum quisquam 33 quia
                    blanditiis eos minus consequatur.Ut neque quam qui
                    dignissimos voluptates ut voluptate totam aut consequuntur
                    quod. Ut voluptas incidunt ut fuga nostrum ut quaerat enim
                    eum earum tenetur? Est esse harum et Quis officiis et enim
                    amet.Et minima tempore et neque voluptatem eos amet officiis
                    et temporibus Quis. Et suscipit esse id nemo sunt At nihil
                    earum et consequatur fuga aut sapiente voluptate est
                    cupiditate esse non dolor cumque. Ut obcaecati recusandae et
                    beatae quae qui doloremque eligendi sit eaque labore.
                  </span>
                </div>
              )}
            </div>
            <div className="thq-divider-horizontal"></div>
            <div className="faq-faq2">
              <div
                onClick={() => setFaq2Visible(!faq2Visible)}
                className="faq-trigger2"
              >
                <p className="faq-faq2-question1 thq-body-large">
                  {props.faq2Question ?? (
                    <Fragment>
                      <span className="faq-text21">
                        What do I need to agree to when creating an account?
                      </span>
                    </Fragment>
                  )}
                </p>
                <div className="faq-icons-container2">
                  {!faq2Visible && (
                    <div>
                      <svg viewBox="0 0 1024 1024" className="faq-icon14">
                        <path d="M316 366l196 196 196-196 60 60-256 256-256-256z"></path>
                      </svg>
                    </div>
                  )}
                  {faq2Visible && (
                    <div>
                      <svg viewBox="0 0 1024 1024" className="faq-icon16">
                        <path d="M316 658l-60-60 256-256 256 256-60 60-196-196z"></path>
                      </svg>
                    </div>
                  )}
                </div>
              </div>
              {faq2Visible && (
                <div className="faq-container16">
                  <span className="thq-body-small">
                    Et minima tempore et neque voluptatem eos amet officiis et
                    temporibus Quis. Et suscipit esse id nemo sunt At nihil
                    earum et consequatur fuga aut sapiente voluptate est
                    cupiditate esse non dolor cumque. Ut obcaecati recusandae et
                    beatae quae qui doloremque eligendi sit eaque labore.
                  </span>
                </div>
              )}
            </div>
            <div className="thq-divider-horizontal"></div>
            <div className="faq-faq3">
              <div
                onClick={() => setFaq3Visible(!faq3Visible)}
                className="faq-trigger3"
              >
                <p className="faq-faq2-question2 thq-body-large">
                  {props.faq3Question ?? (
                    <Fragment>
                      <span className="faq-text19">
                        What are the password criteria for creating an account?
                      </span>
                    </Fragment>
                  )}
                </p>
                <div className="faq-icons-container3">
                  {!faq3Visible && (
                    <div>
                      <svg viewBox="0 0 1024 1024" className="faq-icon18">
                        <path d="M316 366l196 196 196-196 60 60-256 256-256-256z"></path>
                      </svg>
                    </div>
                  )}
                  {faq3Visible && (
                    <div>
                      <svg viewBox="0 0 1024 1024" className="faq-icon20">
                        <path d="M316 658l-60-60 256-256 256 256-60 60-196-196z"></path>
                      </svg>
                    </div>
                  )}
                </div>
              </div>
              {faq3Visible && (
                <div className="faq-container19">
                  <span className="thq-body-small">
                    A quia temporibus aut ullam assumenda vel eius sapiente ut
                    eligendi molestias. Ex ipsum incidunt ut excepturi eaque sed
                    nulla quia qui exercitationem alias aut consequuntur nihil
                    et animi voluptas.
                  </span>
                </div>
              )}
            </div>
            <div className="thq-divider-horizontal"></div>
            <div className="faq-faq4">
              <div
                onClick={() => setFaq4Visible(!faq4Visible)}
                className="faq-trigger4"
              >
                <p className="faq-faq2-question3 thq-body-large">
                  {props.faq4Question ?? (
                    <Fragment>
                      <span className="faq-text17">
                        Can I change my password after creating an account?
                      </span>
                    </Fragment>
                  )}
                </p>
                <div className="faq-icons-container4">
                  {!faq4Visible && (
                    <div>
                      <svg viewBox="0 0 1024 1024" className="faq-icon22">
                        <path d="M316 366l196 196 196-196 60 60-256 256-256-256z"></path>
                      </svg>
                    </div>
                  )}
                  {faq4Visible && (
                    <div>
                      <svg viewBox="0 0 1024 1024" className="faq-icon24">
                        <path d="M316 658l-60-60 256-256 256 256-60 60-196-196z"></path>
                      </svg>
                    </div>
                  )}
                </div>
              </div>
              {faq4Visible && (
                <div className="faq-container22">
                  <span className="thq-body-small">
                    A quia temporibus aut ullam assumenda vel eius sapiente ut
                    eligendi molestias. Ex ipsum incidunt ut excepturi eaque sed
                    nulla quia qui exercitationem alias aut consequuntur nihil
                    et animi voluptas.
                  </span>
                </div>
              )}
            </div>
            <div className="thq-divider-horizontal"></div>
            <div className="faq-faq5">
              <div
                onClick={() => setFaq5Visible(!faq5Visible)}
                className="faq-trigger5"
              >
                <p className="faq-faq1-question2 thq-body-large">
                  {props.faq5Question ?? (
                    <Fragment>
                      <span className="faq-text16">
                        How can I contact support if I have issues with my
                        account?
                      </span>
                    </Fragment>
                  )}
                </p>
                <div className="faq-icons-container5">
                  {!faq5Visible && (
                    <div>
                      <svg viewBox="0 0 1024 1024" className="faq-icon26">
                        <path d="M316 366l196 196 196-196 60 60-256 256-256-256z"></path>
                      </svg>
                    </div>
                  )}
                  {faq5Visible && (
                    <div>
                      <svg viewBox="0 0 1024 1024" className="faq-icon28">
                        <path d="M316 658l-60-60 256-256 256 256-60 60-196-196z"></path>
                      </svg>
                    </div>
                  )}
                </div>
              </div>
              {faq5Visible && (
                <div className="faq-container25">
                  <span className="thq-body-small">
                    Lorem ipsum dolor sit amet. Est eaque sint ut blanditiis
                    sunt aut deleniti illum non repudiandae voluptatem. Aut
                    praesentium doloribus qui distinctio neque ut unde
                    temporibus. Cum exercitationem eveniet in omnis animi in
                    corporis nulla. Sed tempora excepturi et voluptatem modi et
                    exercitationem voluptate cum illum quisquam 33 quia
                    blanditiis eos minus consequatur.Ut neque quam qui
                    dignissimos voluptates ut voluptate totam aut consequuntur
                    quod. Ut voluptas incidunt ut fuga nostrum ut quaerat enim
                    eum earum tenetur? Est esse harum et Quis officiis et enim
                    amet.Et minima tempore et neque voluptatem eos amet officiis
                    et temporibus Quis. Et suscipit esse id nemo sunt At nihil
                    earum et consequatur fuga aut sapiente voluptate est
                    cupiditate esse non dolor cumque. Ut obcaecati recusandae et
                    beatae quae qui doloremque eligendi sit eaque labore.
                  </span>
                </div>
              )}
            </div>
            <div className="thq-divider-horizontal"></div>
          </div>
        </div>
        <div className="faq-content2 thq-section-max-width thq-flex-column"></div>
      </div>
    </div>
  )
}

FAQ.defaultProps = {
  faq5Question: undefined,
  faq4Question: undefined,
  faq1Question: undefined,
  faq3Question: undefined,
  heading1: undefined,
  faq2Question: undefined,
}

FAQ.propTypes = {
  faq5Question: PropTypes.element,
  faq4Question: PropTypes.element,
  faq1Question: PropTypes.element,
  faq3Question: PropTypes.element,
  heading1: PropTypes.element,
  faq2Question: PropTypes.element,
}

export default FAQ
