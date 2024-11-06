import React, { Fragment } from 'react'

import { Helmet } from 'react-helmet'

import Navbar2 from '../components/navbar2'
import IntakeFormsMain from '../components/intake-forms-main'
import './document-creation.css'

const DocumentCreation = (props) => {
  return (
    <div className="document-creation-container">
      <Helmet>
        <title>Document-Creation - Vast Limited Woodcock</title>
        <meta
          property="og:title"
          content="Document-Creation - Vast Limited Woodcock"
        />
      </Helmet>
      <Navbar2
        link1={
          <Fragment>
            <span className="document-creation-text10">Clients</span>
          </Fragment>
        }
        link2={
          <Fragment>
            <span className="document-creation-text11">Intake Forms</span>
          </Fragment>
        }
        link3={
          <Fragment>
            <span className="document-creation-text12">
              Workflow Automation
            </span>
          </Fragment>
        }
        link4={
          <Fragment>
            <span className="document-creation-text13">Document Creation</span>
          </Fragment>
        }
        link5={
          <Fragment>
            <span className="document-creation-text14">Help</span>
          </Fragment>
        }
        logoSrc="/Logo/dall%C3%A2%C2%B7e%202024-10-23%2001.08.51%20-%20a%20cute%20cartoon%20hippo%20head%20drawn%20in%20soft%20shades%20of%20blue%20and%20purple.%20the%20hippo%20has%20a%20friendly%20expression%20with%20rounded%20features%2C%20large%20round%20eyes%2C%20and%20sm-1500h.webp"
        link1Url="/clients"
        link2Url="/intake-forms"
        link3Url="/workflow-builder"
        link4Url="/document-creation"
      ></Navbar2>
      <IntakeFormsMain
        action1={
          <Fragment>
            <span className="document-creation-text15">Use Ours</span>
          </Fragment>
        }
        action2={
          <Fragment>
            <span className="document-creation-text16">Use Yours</span>
          </Fragment>
        }
        action21={
          <Fragment>
            <span className="document-creation-text17">Create New</span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="document-creation-text18">
              Easily Generate Reports
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="document-creation-text19">Document Creation</span>
          </Fragment>
        }
        image1Src="/Images/hipporeport-1400w.jpg"
        image2Src="/Images/clinicalhippo-1400w.jpg"
        image3Src="/Images/hippoai-1400w.jpg"
        image5Src="/Images/ai%20writing%20report-1400w.jpg"
        image6Src="/Images/writingreporthippo-1400w.jpg"
      ></IntakeFormsMain>
    </div>
  )
}

export default DocumentCreation
