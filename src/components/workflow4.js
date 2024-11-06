import React, { Fragment } from 'react'

import Workplace3 from './workplace3'
import './workflow4.css'

const Workflow4 = (props) => {
  return (
    <div className="workflow4-container">
      <Workplace3
        slogan={
          <Fragment>
            <span className="workflow4-text10">Unlock Premium Content</span>
          </Fragment>
        }
        mainAction={
          <Fragment>
            <span className="workflow4-text11">Sign Up Now</span>
          </Fragment>
        }
        sectionTitle={
          <Fragment>
            <span className="workflow4-text12">Features</span>
          </Fragment>
        }
        feature1Title={
          <Fragment>
            <span className="workflow4-text13">Secure Account Creation</span>
          </Fragment>
        }
        feature2Title={
          <Fragment>
            <span className="workflow4-text14">Exclusive Content Access</span>
          </Fragment>
        }
        feature3Title={
          <Fragment>
            <span className="workflow4-text15">Terms of Use</span>
          </Fragment>
        }
        feature4Title={
          <Fragment>
            <span className="workflow4-text16">Privacy Policy</span>
          </Fragment>
        }
        secondaryAction={
          <Fragment>
            <span className="workflow4-text17">Learn More</span>
          </Fragment>
        }
        sectionDescription={
          <Fragment>
            <span className="workflow4-text18">
              Explore the exclusive features available on our platform.
            </span>
          </Fragment>
        }
        feature1Description={
          <Fragment>
            <span className="workflow4-text19">
              Follow our guidelines to create a strong and secure password for
              your account.
            </span>
          </Fragment>
        }
        feature2Description={
          <Fragment>
            <span className="workflow4-text20">
              Gain access to premium content available only to registered users.
            </span>
          </Fragment>
        }
        feature3Description={
          <Fragment>
            <span className="workflow4-text21">
              Read and agree to our terms of use to enjoy all the benefits of
              our platform.
            </span>
          </Fragment>
        }
        feature4Description={
          <Fragment>
            <span className="workflow4-text22">
              Understand how we handle your data by reviewing our privacy
              policy.
            </span>
          </Fragment>
        }
      ></Workplace3>
    </div>
  )
}

export default Workflow4
