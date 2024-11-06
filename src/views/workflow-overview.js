import React, { Fragment } from 'react'

import { Helmet } from 'react-helmet'

import Navbar2 from '../components/navbar2'
import Stats17 from '../components/stats17'
import './workflow-overview.css'

const WorkflowOverview = (props) => {
  return (
    <div className="workflow-overview-container">
      <Helmet>
        <title>Workflow-Overview - Vast Limited Woodcock</title>
        <meta
          property="og:title"
          content="Workflow-Overview - Vast Limited Woodcock"
        />
      </Helmet>
      <Navbar2
        link1={
          <Fragment>
            <span className="workflow-overview-text10">Clients</span>
          </Fragment>
        }
        link2={
          <Fragment>
            <span className="workflow-overview-text11">Intake Forms</span>
          </Fragment>
        }
        link3={
          <Fragment>
            <span className="workflow-overview-text12">
              Workflow Automation
            </span>
          </Fragment>
        }
        link4={
          <Fragment>
            <span className="workflow-overview-text13">Document Creation</span>
          </Fragment>
        }
        link5={
          <Fragment>
            <span className="workflow-overview-text14">Help</span>
          </Fragment>
        }
        logoSrc="/Logo/dall%C3%A2%C2%B7e%202024-10-23%2001.08.51%20-%20a%20cute%20cartoon%20hippo%20head%20drawn%20in%20soft%20shades%20of%20blue%20and%20purple.%20the%20hippo%20has%20a%20friendly%20expression%20with%20rounded%20features%2C%20large%20round%20eyes%2C%20and%20sm-1500h.webp"
        link1Url="/clients"
        link2Url="/intake-forms"
        link3Url="/workflow-builder"
        link4Url="/document-creation"
      ></Navbar2>
      <Stats17
        stat1={
          <Fragment>
            <span className="workflow-overview-text15">99%</span>
          </Fragment>
        }
        stat2={
          <Fragment>
            <span className="workflow-overview-text16">44%</span>
          </Fragment>
        }
        stat3={
          <Fragment>
            <span className="workflow-overview-text17">99%</span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="workflow-overview-text18">
              Join our community to unlock a world of exclusive content and
              special offers.
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="workflow-overview-text19">Workflow Overview</span>
          </Fragment>
        }
        rootClassName="stats17root-class-name"
        stat1Description={
          <Fragment>
            <span className="workflow-overview-text20">
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit anim id est laborum.
            </span>
          </Fragment>
        }
        stat2Description={
          <Fragment>
            <span className="workflow-overview-text21">
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit anim id est laborum.
            </span>
          </Fragment>
        }
        stat3Description={
          <Fragment>
            <span className="workflow-overview-text22">
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit anim id est laborum.
            </span>
          </Fragment>
        }
        stat1ShortDescription={
          <Fragment>
            <span className="workflow-overview-text23">
              Customer satisfaction
            </span>
          </Fragment>
        }
        stat2ShortDescription={
          <Fragment>
            <span className="workflow-overview-text24">Active users</span>
          </Fragment>
        }
        stat3ShortDescription={
          <Fragment>
            <span className="workflow-overview-text25">
              Customer satisfaction
            </span>
          </Fragment>
        }
      ></Stats17>
    </div>
  )
}

export default WorkflowOverview
