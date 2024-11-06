import React, { Fragment } from 'react'

import { Helmet } from 'react-helmet'

import Navbar2 from '../components/navbar2'
import Features4 from '../components/features4'
import Features41 from '../components/features41'
import './form-templates.css'

const FormTemplates = (props) => {
  return (
    <div className="form-templates-container">
      <Helmet>
        <title>Form-Templates - Vast Limited Woodcock</title>
        <meta
          property="og:title"
          content="Form-Templates - Vast Limited Woodcock"
        />
      </Helmet>
      <Navbar2
        link1={
          <Fragment>
            <span className="form-templates-text10">Clients</span>
          </Fragment>
        }
        link2={
          <Fragment>
            <span className="form-templates-text11">Intake Forms</span>
          </Fragment>
        }
        link3={
          <Fragment>
            <span className="form-templates-text12">Workflow Automation</span>
          </Fragment>
        }
        link4={
          <Fragment>
            <span className="form-templates-text13">Document Creation</span>
          </Fragment>
        }
        link5={
          <Fragment>
            <span className="form-templates-text14">Help</span>
          </Fragment>
        }
        logoSrc="/Logo/dall%C3%A2%C2%B7e%202024-10-23%2001.08.51%20-%20a%20cute%20cartoon%20hippo%20head%20drawn%20in%20soft%20shades%20of%20blue%20and%20purple.%20the%20hippo%20has%20a%20friendly%20expression%20with%20rounded%20features%2C%20large%20round%20eyes%2C%20and%20sm-1500h.webp"
        link1Url="/clients"
        link2Url="/intake-forms"
        link3Url="/workflow-builder"
        link4Url="/document-creation"
      ></Navbar2>
      <Features4
        sectionTitle={
          <Fragment>
            <span className="form-templates-text15">Intake Form Templates</span>
          </Fragment>
        }
        feature1Title={
          <Fragment>
            <span className="form-templates-text16">
              Intake Form for Occupational Therapists
            </span>
          </Fragment>
        }
        feature2Title={
          <Fragment>
            <span className="form-templates-text17">
              Intake Form for Physiotherapists
            </span>
          </Fragment>
        }
        feature3Title={
          <Fragment>
            <span className="form-templates-text18">
              Intake Form for Osteopaths
            </span>
          </Fragment>
        }
        feature4Title={
          <Fragment>
            <span className="form-templates-text19">
              Intake Form for Psychologists
            </span>
          </Fragment>
        }
        feature1Button={
          <Fragment>
            <span className="form-templates-text20">See More</span>
          </Fragment>
        }
        feature2Button={
          <Fragment>
            <span className="form-templates-text21">See More</span>
          </Fragment>
        }
        feature3Button={
          <Fragment>
            <span className="form-templates-text22">See More</span>
          </Fragment>
        }
        feature4Button={
          <Fragment>
            <span className="form-templates-text23">See More</span>
          </Fragment>
        }
        feature1ImageSrc="/Images/othippo-600w.jpg"
        feature2ImageSrc="/Images/physiohippo-600w.jpg"
        feature4ImageSrc="/Images/psychhippo-600w.jpg"
      ></Features4>
      <Features41
        sectionTitle={
          <Fragment>
            <span className="form-templates-text24">
              Outcome Measure Templates
            </span>
          </Fragment>
        }
        feature1Title={
          <Fragment>
            <span className="form-templates-text25">Outcome Measure 1</span>
          </Fragment>
        }
        feature2Title={
          <Fragment>
            <span className="form-templates-text26">Outcome Measure 2</span>
          </Fragment>
        }
        feature3Title={
          <Fragment>
            <span className="form-templates-text27">Outcome Measure 3</span>
          </Fragment>
        }
        feature4Title={
          <Fragment>
            <span className="form-templates-text28">Outcome Measure 4</span>
          </Fragment>
        }
        feature1Button={
          <Fragment>
            <span className="form-templates-text29">See More</span>
          </Fragment>
        }
        feature2Button={
          <Fragment>
            <span className="form-templates-text30">See More</span>
          </Fragment>
        }
        feature3Button={
          <Fragment>
            <span className="form-templates-text31">See More</span>
          </Fragment>
        }
        feature4Button={
          <Fragment>
            <span className="form-templates-text32">See More</span>
          </Fragment>
        }
        feature1ImageSrc="https://images.unsplash.com/photo-1616259833982-734c62ac69ae?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczMDg2ODkxM3w&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=1080"
      ></Features41>
    </div>
  )
}

export default FormTemplates
