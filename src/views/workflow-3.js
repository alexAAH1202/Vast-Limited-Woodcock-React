import React, { Fragment } from 'react'

import { Helmet } from 'react-helmet'

import Navbar2 from '../components/navbar2'
import Features34 from '../components/features34'
import './workflow-3.css'

const Workflow3 = (props) => {
  return (
    <div className="workflow3-container">
      <Helmet>
        <title>Workflow-3 - Vast Limited Woodcock</title>
        <meta
          property="og:title"
          content="Workflow-3 - Vast Limited Woodcock"
        />
      </Helmet>
      <Navbar2
        link1={
          <Fragment>
            <span className="workflow3-text10">Clients</span>
          </Fragment>
        }
        link2={
          <Fragment>
            <span className="workflow3-text11">Intake Forms</span>
          </Fragment>
        }
        link3={
          <Fragment>
            <span className="workflow3-text12">Workflow Automation</span>
          </Fragment>
        }
        link4={
          <Fragment>
            <span className="workflow3-text13">Document Creation</span>
          </Fragment>
        }
        link5={
          <Fragment>
            <span className="workflow3-text14">Help</span>
          </Fragment>
        }
        logoSrc="/Logo/dall%C3%A2%C2%B7e%202024-10-23%2001.08.51%20-%20a%20cute%20cartoon%20hippo%20head%20drawn%20in%20soft%20shades%20of%20blue%20and%20purple.%20the%20hippo%20has%20a%20friendly%20expression%20with%20rounded%20features%2C%20large%20round%20eyes%2C%20and%20sm-1500h.webp"
        link1Url="/clients"
        link2Url="/intake-forms"
        link3Url="/workflow-builder"
        link4Url="/document-creation"
      ></Navbar2>
      <Features34
        slogan={
          <Fragment>
            <span className="workflow3-text15">
              Secure and Convenient Authentication Solutions
            </span>
          </Fragment>
        }
        mainAction={
          <Fragment>
            <span className="workflow3-text16">Sign Up Now</span>
          </Fragment>
        }
        sectionTitle={
          <Fragment>
            <span className="workflow3-text17">Features</span>
          </Fragment>
        }
        feature1Title={
          <Fragment>
            <span className="workflow3-text18">User-Friendly Interface</span>
          </Fragment>
        }
        feature2Title={
          <Fragment>
            <span className="workflow3-text19">Robust Security Measures</span>
          </Fragment>
        }
        feature3Title={
          <Fragment>
            <span className="workflow3-text20">
              Effortless Password Recovery
            </span>
          </Fragment>
        }
        feature4Title={
          <Fragment>
            <span className="workflow3-text21">
              Customizable Authentication Options
            </span>
          </Fragment>
        }
        secondaryAction={
          <Fragment>
            <span className="workflow3-text22">Learn More</span>
          </Fragment>
        }
        sectionDescription={
          <Fragment>
            <span className="workflow3-text23">
              Explore the key features of our user authentication platform.
            </span>
          </Fragment>
        }
        feature1Description={
          <Fragment>
            <span className="workflow3-text24">
              Intuitive design for seamless account creation and password
              recovery.
            </span>
          </Fragment>
        }
        feature2Description={
          <Fragment>
            <span className="workflow3-text25">
              Advanced encryption techniques to safeguard user data and privacy.
            </span>
          </Fragment>
        }
        feature3Description={
          <Fragment>
            <span className="workflow3-text26">
              Simple process for resetting passwords securely and efficiently.
            </span>
          </Fragment>
        }
        feature4Description={
          <Fragment>
            <span className="workflow3-text27">
              Tailor authentication settings to suit your specific requirements.
            </span>
          </Fragment>
        }
      ></Features34>
    </div>
  )
}

export default Workflow3
