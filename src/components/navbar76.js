import React, { useState, Fragment } from 'react'

import PropTypes from 'prop-types'

import './navbar76.css'

const Navbar76 = (props) => {
  const [link5DropdownVisible, setLink5DropdownVisible] = useState(false)
  const [link5AccordionOpen, setLink5AccordionOpen] = useState(false)
  return (
    <header className="navbar76-container1">
      <header data-thq="thq-navbar" className="navbar76-navbar-interactive">
        <img
          alt={props.logoAlt}
          src={props.logoSrc}
          className="navbar76-image1"
        />
        {link5DropdownVisible && (
          <div className="navbar76-container2 thq-box-shadow">
            <a href={props.linkUrlPage1}>
              <div className="navbar76-menu-item1">
                <img
                  alt={props.page1ImageAlt}
                  src={props.page1ImageSrc}
                  className="navbar76-page1-image1 thq-img-ratio-1-1"
                />
                <div className="navbar76-content1">
                  <span className="navbar76-page11 thq-body-large">
                    {props.page1 ?? (
                      <Fragment>
                        <span className="navbar76-text17">Page One</span>
                      </Fragment>
                    )}
                  </span>
                  <span className="thq-body-small">
                    {props.page1Description ?? (
                      <Fragment>
                        <span className="navbar76-text18">
                          Lorem ipsum dolor sit amet consectetur elit
                        </span>
                      </Fragment>
                    )}
                  </span>
                </div>
              </div>
            </a>
            <a href={props.linkUrlPage2}>
              <div className="navbar76-menu-item2">
                <img
                  alt={props.page2ImageAlt}
                  src={props.page2ImageSrc}
                  className="navbar76-page2-image1 thq-img-ratio-1-1"
                />
                <div className="navbar76-content2">
                  <span className="navbar76-page21 thq-body-large">
                    {props.page2 ?? (
                      <Fragment>
                        <span className="navbar76-text16">Page Two</span>
                      </Fragment>
                    )}
                  </span>
                  <span className="thq-body-small">
                    {props.page2Description ?? (
                      <Fragment>
                        <span className="navbar76-text22">
                          Lorem ipsum dolor sit amet consectetur elit
                        </span>
                      </Fragment>
                    )}
                  </span>
                </div>
              </div>
            </a>
            <a href={props.linkUrlPage3}>
              <div className="navbar76-menu-item3">
                <img
                  alt={props.page3ImageAlt}
                  src={props.page3ImageSrc}
                  className="navbar76-page3-image1 thq-img-ratio-1-1"
                />
                <div className="navbar76-content3">
                  <span className="navbar76-page31 thq-body-large">
                    {props.page3 ?? (
                      <Fragment>
                        <span className="navbar76-text14">Page Three</span>
                      </Fragment>
                    )}
                  </span>
                  <span className="thq-body-small">
                    {props.page3Description ?? (
                      <Fragment>
                        <span className="navbar76-text12">
                          Lorem ipsum dolor sit amet consectetur elit
                        </span>
                      </Fragment>
                    )}
                  </span>
                </div>
              </div>
            </a>
            <a href={props.linkUrlPage4}>
              <div className="navbar76-menu-item4">
                <img
                  alt={props.page4ImageAlt}
                  src={props.page4ImageSrc}
                  className="navbar76-page4-image1 thq-img-ratio-1-1"
                />
                <div className="navbar76-content4">
                  <span className="navbar76-page41 thq-body-large">
                    {props.page4 ?? (
                      <Fragment>
                        <span className="navbar76-text19">Page Four</span>
                      </Fragment>
                    )}
                  </span>
                  <span className="thq-body-small">
                    {props.page4Description ?? (
                      <Fragment>
                        <span className="navbar76-text21">
                          Lorem ipsum dolor sit amet consectetur elit
                        </span>
                      </Fragment>
                    )}
                  </span>
                </div>
              </div>
            </a>
          </div>
        )}
        <div data-thq="thq-navbar-nav" className="navbar76-desktop-menu">
          <nav className="navbar76-links1">
            <a href={props.link1Url} className="thq-body-small thq-link">
              {props.link1 ?? (
                <Fragment>
                  <span className="navbar76-text11">Home</span>
                </Fragment>
              )}
            </a>
            <a href={props.link2Url} className="thq-body-small thq-link">
              {props.link2 ?? (
                <Fragment>
                  <span className="navbar76-text10">Sign In</span>
                </Fragment>
              )}
            </a>
            <a href={props.link3Url} className="thq-body-small thq-link">
              {props.link3 ?? (
                <Fragment>
                  <span className="navbar76-text15">Create Account</span>
                </Fragment>
              )}
            </a>
            <a href={props.link4Url} className="thq-body-small thq-link">
              {props.link4 ?? (
                <Fragment>
                  <span className="navbar76-text20">Reset Password</span>
                </Fragment>
              )}
            </a>
            <div
              onClick={() => setLink5DropdownVisible(!link5DropdownVisible)}
              className="navbar76-link5-dropdown-trigger"
            >
              <span className="thq-body-small thq-link">
                {props.link5 ?? (
                  <Fragment>
                    <span className="navbar76-text13">Terms of Use</span>
                  </Fragment>
                )}
              </span>
              <div className="navbar76-icon-container1">
                {link5DropdownVisible && (
                  <div className="navbar76-container3">
                    <svg viewBox="0 0 1024 1024" className="navbar76-icon10">
                      <path d="M298 426h428l-214 214z"></path>
                    </svg>
                  </div>
                )}
                {!link5DropdownVisible && (
                  <div className="navbar76-container4">
                    <svg viewBox="0 0 1024 1024" className="navbar76-icon12">
                      <path d="M426 726v-428l214 214z"></path>
                    </svg>
                  </div>
                )}
              </div>
            </div>
          </nav>
        </div>
        <div data-thq="thq-burger-menu" className="navbar76-burger-menu">
          <svg viewBox="0 0 1024 1024" className="navbar76-icon14">
            <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
          </svg>
        </div>
        {link5AccordionOpen && (
          <thq-mobile-menu className="navbar76-thq-mobile-menu">
            <div className="navbar76-nav">
              <div className="navbar76-top">
                <img
                  alt={props.logoAlt}
                  src={props.logoSrc}
                  className="navbar76-logo"
                />
                <div data-thq="thq-close-menu" className="navbar76-close-menu">
                  <svg viewBox="0 0 1024 1024" className="navbar76-icon16">
                    <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                  </svg>
                </div>
              </div>
              <nav className="navbar76-links2">
                <a href={props.link1Url} className="thq-body-small thq-link">
                  {props.link1 ?? (
                    <Fragment>
                      <span className="navbar76-text11">Home</span>
                    </Fragment>
                  )}
                </a>
                <a href={props.link2Url} className="thq-body-small thq-link">
                  {props.link2 ?? (
                    <Fragment>
                      <span className="navbar76-text10">Sign In</span>
                    </Fragment>
                  )}
                </a>
                <a href={props.link3Url} className="thq-body-small thq-link">
                  {props.link3 ?? (
                    <Fragment>
                      <span className="navbar76-text15">Create Account</span>
                    </Fragment>
                  )}
                </a>
                <a href={props.link4Url} className="thq-body-small thq-link">
                  {props.link4 ?? (
                    <Fragment>
                      <span className="navbar76-text20">Reset Password</span>
                    </Fragment>
                  )}
                </a>
                <div className="navbar76-link5-accordion">
                  <div
                    onClick={() => setLink5AccordionOpen(!link5AccordionOpen)}
                    className="navbar76-trigger"
                  >
                    <span className="thq-body-small thq-link">
                      {props.link5 ?? (
                        <Fragment>
                          <span className="navbar76-text13">Terms of Use</span>
                        </Fragment>
                      )}
                    </span>
                    <div className="navbar76-icon-container2">
                      {link5AccordionOpen && (
                        <div className="navbar76-container5">
                          <svg
                            viewBox="0 0 1024 1024"
                            className="navbar76-icon18"
                          >
                            <path d="M298 426h428l-214 214z"></path>
                          </svg>
                        </div>
                      )}
                      {!link5AccordionOpen && (
                        <div className="navbar76-container6">
                          <svg
                            viewBox="0 0 1024 1024"
                            className="navbar76-icon20"
                          >
                            <path d="M426 726v-428l214 214z"></path>
                          </svg>
                        </div>
                      )}
                    </div>
                  </div>
                  {link5AccordionOpen && (
                    <div className="navbar76-container7">
                      <a href={props.linkUrlPage1}>
                        <div className="navbar76-menu-item5">
                          <img
                            alt={props.page1ImageAlt}
                            src={props.page1ImageSrc}
                            className="navbar76-page1-image2"
                          />
                          <div className="navbar76-content5">
                            <span className="navbar76-page12 thq-body-large">
                              {props.page1 ?? (
                                <Fragment>
                                  <span className="navbar76-text17">
                                    Page One
                                  </span>
                                </Fragment>
                              )}
                            </span>
                            <span className="thq-body-small">
                              Lorem ipsum dolor sit amet consectetur elit
                            </span>
                          </div>
                        </div>
                      </a>
                      <a href={props.linkUrlPage2}>
                        <div className="navbar76-menu-item6">
                          <img
                            alt={props.page2ImageAlt}
                            src={props.page2ImageSrc}
                            className="navbar76-page2-image2"
                          />
                          <div className="navbar76-content6">
                            <span className="navbar76-page22 thq-body-large">
                              {props.page2 ?? (
                                <Fragment>
                                  <span className="navbar76-text16">
                                    Page Two
                                  </span>
                                </Fragment>
                              )}
                            </span>
                            <span className="thq-body-small">
                              {props.page2Description ?? (
                                <Fragment>
                                  <span className="navbar76-text22">
                                    Lorem ipsum dolor sit amet consectetur elit
                                  </span>
                                </Fragment>
                              )}
                            </span>
                          </div>
                        </div>
                      </a>
                      <a href={props.linkUrlPage3}>
                        <div className="navbar76-menu-item7">
                          <img
                            alt={props.page3ImageAlt}
                            src={props.page3ImageSrc}
                            className="navbar76-page3-image2"
                          />
                          <div className="navbar76-content7">
                            <span className="navbar76-page32 thq-body-large">
                              {props.page3 ?? (
                                <Fragment>
                                  <span className="navbar76-text14">
                                    Page Three
                                  </span>
                                </Fragment>
                              )}
                            </span>
                            <span className="thq-body-small">
                              {props.page3Description ?? (
                                <Fragment>
                                  <span className="navbar76-text12">
                                    Lorem ipsum dolor sit amet consectetur elit
                                  </span>
                                </Fragment>
                              )}
                            </span>
                          </div>
                        </div>
                      </a>
                      <a href={props.linkUrlPage4}>
                        <div className="navbar76-menu-item8">
                          <img
                            alt={props.page4ImageAlt}
                            src={props.page4ImageSrc}
                            className="navbar76-page4-image2"
                          />
                          <div className="navbar76-content8">
                            <span className="navbar76-page42 thq-body-large">
                              Page Four
                            </span>
                            <span className="thq-body-small">
                              Lorem ipsum dolor sit amet consectetur elit
                            </span>
                          </div>
                        </div>
                      </a>
                    </div>
                  )}
                </div>
              </nav>
            </div>
            <div className="navbar76-icon-group">
              <svg
                viewBox="0 0 950.8571428571428 1024"
                className="thq-icon-x-small"
              >
                <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
              </svg>
              <svg
                viewBox="0 0 877.7142857142857 1024"
                className="thq-icon-x-small"
              >
                <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
              </svg>
              <svg
                viewBox="0 0 602.2582857142856 1024"
                className="thq-icon-x-small"
              >
                <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
              </svg>
            </div>
          </thq-mobile-menu>
        )}
      </header>
      {link5DropdownVisible && (
        <div
          onClick={() => setLink5DropdownVisible(false)}
          className="navbar76-container8"
        ></div>
      )}
    </header>
  )
}

Navbar76.defaultProps = {
  linkUrlPage3: 'https://www.teleporthq.io',
  link2: undefined,
  link1: undefined,
  page3Description: undefined,
  link5: undefined,
  page3: undefined,
  link3: undefined,
  page1ImageAlt: 'image',
  page2: undefined,
  page3ImageAlt: 'image',
  link4Url: 'https://www.teleporthq.io',
  page3ImageSrc:
    'https://images.unsplash.com/photo-1510163066363-4de373e921e1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyOTc0MDIyM3w&ixlib=rb-4.0.3&q=80&w=1080',
  page2ImageAlt: 'image',
  link2Url: 'https://www.teleporthq.io',
  logoSrc:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/84ec08e8-34e9-42c7-9445-d2806d156403/fac575ac-7a41-484f-b7ac-875042de11f8?org_if_sml=1&force_format=original',
  page1: undefined,
  logoAlt: 'logo',
  link3Url: 'https://www.teleporthq.io',
  linkUrlPage1: 'https://www.teleporthq.io',
  link1Url: 'https://www.teleporthq.io',
  linkUrlPage2: 'https://www.teleporthq.io',
  page1Description: undefined,
  page4ImageAlt: 'image',
  page4: undefined,
  linkUrlPage4: 'https://www.teleporthq.io',
  page1ImageSrc:
    'https://images.unsplash.com/photo-1523111567642-f71bebeb173f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyOTc0MDIyMnw&ixlib=rb-4.0.3&q=80&w=1080',
  link4: undefined,
  page4Description: undefined,
  page2Description: undefined,
  page2ImageSrc:
    'https://images.unsplash.com/photo-1610994909643-d28dc407cdb0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyOTc0MDIyMnw&ixlib=rb-4.0.3&q=80&w=1080',
  page4ImageSrc:
    'https://images.unsplash.com/photo-1617391875568-0871c58f1751?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyOTc0MDIyM3w&ixlib=rb-4.0.3&q=80&w=1080',
}

Navbar76.propTypes = {
  linkUrlPage3: PropTypes.string,
  link2: PropTypes.element,
  link1: PropTypes.element,
  page3Description: PropTypes.element,
  link5: PropTypes.element,
  page3: PropTypes.element,
  link3: PropTypes.element,
  page1ImageAlt: PropTypes.string,
  page2: PropTypes.element,
  page3ImageAlt: PropTypes.string,
  link4Url: PropTypes.string,
  page3ImageSrc: PropTypes.string,
  page2ImageAlt: PropTypes.string,
  link2Url: PropTypes.string,
  logoSrc: PropTypes.string,
  page1: PropTypes.element,
  logoAlt: PropTypes.string,
  link3Url: PropTypes.string,
  linkUrlPage1: PropTypes.string,
  link1Url: PropTypes.string,
  linkUrlPage2: PropTypes.string,
  page1Description: PropTypes.element,
  page4ImageAlt: PropTypes.string,
  page4: PropTypes.element,
  linkUrlPage4: PropTypes.string,
  page1ImageSrc: PropTypes.string,
  link4: PropTypes.element,
  page4Description: PropTypes.element,
  page2Description: PropTypes.element,
  page2ImageSrc: PropTypes.string,
  page4ImageSrc: PropTypes.string,
}

export default Navbar76
