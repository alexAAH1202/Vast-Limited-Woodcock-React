import React, { Fragment } from 'react'

import { Helmet } from 'react-helmet'

import Navbar2 from '../components/navbar2'
import Features33 from '../components/features33'
import './workflow-2.css'

const Workflow2 = (props) => {
  return (
    <div className="workflow2-container">
      <Helmet>
        <title>Workflow-2 - Vast Limited Woodcock</title>
        <meta
          property="og:title"
          content="Workflow-2 - Vast Limited Woodcock"
        />
      </Helmet>
      <Navbar2
        link1={
          <Fragment>
            <span className="workflow2-text10">Clients</span>
          </Fragment>
        }
        link2={
          <Fragment>
            <span className="workflow2-text11">Intake Forms</span>
          </Fragment>
        }
        link3={
          <Fragment>
            <span className="workflow2-text12">Workflow Automation</span>
          </Fragment>
        }
        link4={
          <Fragment>
            <span className="workflow2-text13">Document Creation</span>
          </Fragment>
        }
        link5={
          <Fragment>
            <span className="workflow2-text14">Help</span>
          </Fragment>
        }
        logoSrc="/Logo/dall%C3%A2%C2%B7e%202024-10-23%2001.08.51%20-%20a%20cute%20cartoon%20hippo%20head%20drawn%20in%20soft%20shades%20of%20blue%20and%20purple.%20the%20hippo%20has%20a%20friendly%20expression%20with%20rounded%20features%2C%20large%20round%20eyes%2C%20and%20sm-1500h.webp"
        link1Url="/clients"
        link2Url="/intake-forms"
        link3Url="/workflow-builder"
        link4Url="/document-creation"
      ></Navbar2>
      <Features33
        slogan={
          <Fragment>
            <span className="workflow2-text15">Safeguarding Your Identity</span>
          </Fragment>
        }
        mainAction={
          <Fragment>
            <span className="workflow2-text16">Sign Up Now</span>
          </Fragment>
        }
        sectionTitle={
          <Fragment>
            <span className="workflow2-text17">Key Features</span>
          </Fragment>
        }
        feature1Title={
          <Fragment>
            <span className="workflow2-text18">Secure Account Creation</span>
          </Fragment>
        }
        feature2Title={
          <Fragment>
            <span className="workflow2-text19">Effortless Sign-In</span>
          </Fragment>
        }
        feature3Title={
          <Fragment>
            <span className="workflow2-text20">Password Recovery</span>
          </Fragment>
        }
        feature4Title={
          <Fragment>
            <span className="workflow2-text21">Robust Security Measures</span>
          </Fragment>
        }
        secondaryAction={
          <Fragment>
            <span className="workflow2-text22">Learn More</span>
          </Fragment>
        }
        sectionDescription={
          <Fragment>
            <span className="workflow2-text23">
              Explore the key features that make our user authentication system
              stand out.
            </span>
          </Fragment>
        }
        feature1Description={
          <Fragment>
            <span className="workflow2-text24">
              Create your account with confidence knowing your information is
              protected.
            </span>
          </Fragment>
        }
        feature2Description={
          <Fragment>
            <span className="workflow2-text25">
              Enjoy a seamless sign-in experience with just a few clicks.
            </span>
          </Fragment>
        }
        feature3Description={
          <Fragment>
            <span className="workflow2-text26">
              Reset your password easily and regain access to your account in no
              time.
            </span>
          </Fragment>
        }
        feature4Description={
          <Fragment>
            <span className="workflow2-text27">
              Benefit from advanced security protocols to keep your data safe.
            </span>
          </Fragment>
        }
      ></Features33>
    </div>
  )
}

export default Workflow2
