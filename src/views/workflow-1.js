import React, { Fragment } from 'react'

import { Helmet } from 'react-helmet'

import Navbar2 from '../components/navbar2'
import Features32 from '../components/features32'
import './workflow-1.css'

const Workflow1 = (props) => {
  return (
    <div className="workflow1-container">
      <Helmet>
        <title>Workflow-1 - Vast Limited Woodcock</title>
        <meta
          property="og:title"
          content="Workflow-1 - Vast Limited Woodcock"
        />
        <meta name="robots" content="noindex" />
      </Helmet>
      <Navbar2
        link1={
          <Fragment>
            <span className="workflow1-text10">Clients</span>
          </Fragment>
        }
        link2={
          <Fragment>
            <span className="workflow1-text11">Intake Forms</span>
          </Fragment>
        }
        link3={
          <Fragment>
            <span className="workflow1-text12">Workflow Automation</span>
          </Fragment>
        }
        link4={
          <Fragment>
            <span className="workflow1-text13">Document Creation</span>
          </Fragment>
        }
        link5={
          <Fragment>
            <span className="workflow1-text14">Help</span>
          </Fragment>
        }
        logoSrc="/Logo/dall%C3%A2%C2%B7e%202024-10-23%2001.08.51%20-%20a%20cute%20cartoon%20hippo%20head%20drawn%20in%20soft%20shades%20of%20blue%20and%20purple.%20the%20hippo%20has%20a%20friendly%20expression%20with%20rounded%20features%2C%20large%20round%20eyes%2C%20and%20sm-1500h.webp"
        link1Url="/clients"
        link2Url="/intake-forms"
        link3Url="/workflow-builder"
        link4Url="/document-creation"
      ></Navbar2>
      <Features32
        slogan={
          <Fragment>
            <span className="workflow1-text15">
              Secure and Seamless Authentication
            </span>
          </Fragment>
        }
        mainAction={
          <Fragment>
            <span className="workflow1-text16">Sign Up Now</span>
          </Fragment>
        }
        sectionTitle={
          <Fragment>
            <span className="workflow1-text17">WorkFlow 1</span>
          </Fragment>
        }
        feature1Title={
          <Fragment>
            <span className="workflow1-text18">
              Automate onboarding and Client  Interaction
            </span>
          </Fragment>
        }
        feature2Title={
          <Fragment>
            <span className="workflow1-text19">
              Automatically send adaptive Intake Forms
            </span>
          </Fragment>
        }
        feature3Title={
          <Fragment>
            <span className="workflow1-text20">
              Effortless Account Creation
            </span>
          </Fragment>
        }
        feature4Title={
          <Fragment>
            <span className="workflow1-text21">Password Recovery Options</span>
          </Fragment>
        }
        secondaryAction={
          <Fragment>
            <span className="workflow1-text22">Learn More</span>
          </Fragment>
        }
        sectionDescription={
          <Fragment>
            <span className="workflow1-text23">
              Explore the key features that make our user authentication system
              stand out.
            </span>
          </Fragment>
        }
        feature1Description={
          <Fragment>
            <span className="workflow1-text24">
              Sync these forms directly to Cliniko
            </span>
          </Fragment>
        }
        feature2Description={
          <Fragment>
            <span className="workflow1-text25">
              Advanced encryption protocols to safeguard your data.
            </span>
          </Fragment>
        }
        feature3Description={
          <Fragment>
            <span className="workflow1-text26">
              Streamlined process for creating new accounts in seconds.
            </span>
          </Fragment>
        }
        feature4Description={
          <Fragment>
            <span className="workflow1-text27">
              Multiple ways to reset your password securely.
            </span>
          </Fragment>
        }
      ></Features32>
    </div>
  )
}

export default Workflow1
