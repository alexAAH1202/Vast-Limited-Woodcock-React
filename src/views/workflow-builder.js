import React, { Fragment } from 'react'

import { Helmet } from 'react-helmet'

import Navbar2 from '../components/navbar2'
import Workflow2 from '../components/workflow2'
import Toast33 from '../components/toast33'
import './workflow-builder.css'

const WorkflowBuilder = (props) => {
  return (
    <div className="workflow-builder-container1">
      <Helmet>
        <title>Workflow-Builder - Vast Limited Woodcock</title>
        <meta
          property="og:title"
          content="Workflow-Builder - Vast Limited Woodcock"
        />
      </Helmet>
      <Navbar2
        link1={
          <Fragment>
            <span className="workflow-builder-text10">Clients</span>
          </Fragment>
        }
        link2={
          <Fragment>
            <span className="workflow-builder-text11">Intake Forms</span>
          </Fragment>
        }
        link3={
          <Fragment>
            <span className="workflow-builder-text12">Workflow Automation</span>
          </Fragment>
        }
        link4={
          <Fragment>
            <span className="workflow-builder-text13">Document Creation</span>
          </Fragment>
        }
        link5={
          <Fragment>
            <span className="workflow-builder-text14">Help</span>
          </Fragment>
        }
        logoSrc="/Logo/dall%C3%A2%C2%B7e%202024-10-23%2001.08.51%20-%20a%20cute%20cartoon%20hippo%20head%20drawn%20in%20soft%20shades%20of%20blue%20and%20purple.%20the%20hippo%20has%20a%20friendly%20expression%20with%20rounded%20features%2C%20large%20round%20eyes%2C%20and%20sm-1500h.webp"
        link1Url="/clients"
        link2Url="/intake-forms"
        link3Url="/workflow-builder"
        link4Url="/document-creation"
      ></Navbar2>
      <div className="workflow-builder-container2">
        <Workflow2
          mainAction={
            <Fragment>
              <span className="workflow-builder-text15">Sign Up Now</span>
            </Fragment>
          }
          sectionTitle={
            <Fragment>
              <span className="workflow-builder-text16">Workflow Builder</span>
            </Fragment>
          }
          feature1Title={
            <Fragment>
              <span className="workflow-builder-text17">
                User-Friendly Interface
              </span>
            </Fragment>
          }
          feature2Title={
            <Fragment>
              <span className="workflow-builder-text18">
                Secure Account Creation
              </span>
            </Fragment>
          }
          feature3Title={
            <Fragment>
              <span className="workflow-builder-text19">
                Customizable Profiles
              </span>
            </Fragment>
          }
          feature4Title={
            <Fragment>
              <span className="workflow-builder-text20">
                Terms of Use and Privacy Policy
              </span>
            </Fragment>
          }
          secondaryAction={
            <Fragment>
              <span className="workflow-builder-text21">Learn More</span>
            </Fragment>
          }
          sectionDescription={
            <Fragment>
              <span className="workflow-builder-text22">
                <span>Build and customise workflow automation with ease</span>
                <br></br>
              </span>
            </Fragment>
          }
          feature1Description={
            <Fragment>
              <span className="workflow-builder-text25">
                Easily navigate through our platform with a simple and intuitive
                interface
              </span>
            </Fragment>
          }
          feature2Description={
            <Fragment>
              <span className="workflow-builder-text26">
                Create your account with confidence knowing that your
                information is secure
              </span>
            </Fragment>
          }
          feature3Description={
            <Fragment>
              <span className="workflow-builder-text27">
                Personalize your profile to reflect your unique identity and
                interests
              </span>
            </Fragment>
          }
          feature4Description={
            <Fragment>
              <span className="workflow-builder-text28">
                Review and agree to our terms of use and privacy policy to
                ensure a safe online experience
              </span>
            </Fragment>
          }
        ></Workflow2>
      </div>
      <Toast33
        button1={
          <Fragment>
            <span className="workflow-builder-text29">Default value</span>
          </Fragment>
        }
        button2={
          <Fragment>
            <span className="workflow-builder-text30">Default value</span>
          </Fragment>
        }
        button11={
          <Fragment>
            <span className="workflow-builder-text31">Default value</span>
          </Fragment>
        }
        button12={
          <Fragment>
            <span className="workflow-builder-text32">Default value</span>
          </Fragment>
        }
        button13={
          <Fragment>
            <span className="workflow-builder-text33">Default value</span>
          </Fragment>
        }
        bannerTitle={
          <Fragment>
            <span className="workflow-builder-text34">
              Select Workflow to Automate
            </span>
          </Fragment>
        }
      ></Toast33>
    </div>
  )
}

export default WorkflowBuilder
