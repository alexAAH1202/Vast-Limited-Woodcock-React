import React, { Fragment } from 'react'

import { Helmet } from 'react-helmet'

import Navbar2 from '../components/navbar2'
import Features42 from '../components/features42'
import './document-selection.css'

const DocumentSelection = (props) => {
  return (
    <div className="document-selection-container10">
      <Helmet>
        <title>Document-Selection - Vast Limited Woodcock</title>
        <meta
          property="og:title"
          content="Document-Selection - Vast Limited Woodcock"
        />
      </Helmet>
      <Navbar2
        link1={
          <Fragment>
            <span className="document-selection-text10">Clients</span>
          </Fragment>
        }
        link2={
          <Fragment>
            <span className="document-selection-text11">Intake Forms</span>
          </Fragment>
        }
        link3={
          <Fragment>
            <span className="document-selection-text12">
              Workflow Automation
            </span>
          </Fragment>
        }
        link4={
          <Fragment>
            <span className="document-selection-text13">Document Creation</span>
          </Fragment>
        }
        link5={
          <Fragment>
            <span className="document-selection-text14">Help</span>
          </Fragment>
        }
        logoSrc="/Logo/dall%C3%A2%C2%B7e%202024-10-23%2001.08.51%20-%20a%20cute%20cartoon%20hippo%20head%20drawn%20in%20soft%20shades%20of%20blue%20and%20purple.%20the%20hippo%20has%20a%20friendly%20expression%20with%20rounded%20features%2C%20large%20round%20eyes%2C%20and%20sm-1500h.webp"
        link1Url="/clients"
        link2Url="/intake-forms"
        link3Url="/workflow-builder"
        link4Url="/document-creation"
      ></Navbar2>
      <div className="document-selection-container11">
        <h1>Create Your Documents</h1>
      </div>
      <div className="document-selection-container12">
        <div className="document-selection-container13">
          <h2 className="document-selection-text16">Select a File or Files:</h2>
          <div className="document-selection-container14">
            <input
              type="file"
              name="fileupload"
              accept="application/pdf, application/vnd.openxmlformats-officedocument.wordprocessingml.document, image/*"
              placeholder="placeholder"
              className="document-selection-textinput input"
            />
            <button
              type="submit"
              id="uploadFile"
              className="button document-selection-button"
            >
              Upload
            </button>
          </div>
          <div className="document-selection-container15">
            <div className="document-selection-container16">
              <div className="document-selection-container17">
                <div className="document-selection-container18"></div>
              </div>
            </div>
          </div>
          <h2 className="document-selection-text17">
            Click The Link To See Your Document:
          </h2>
          <div
            id="documentDisplaybox"
            className="document-selection-container19"
          >
            <textarea
              id="documenLink"
              placeholder="View Here"
              className="textarea document-selection-textarea"
            ></textarea>
          </div>
        </div>
      </div>
      <Features42
        sectionTitle={
          <Fragment>
            <span className="document-selection-text18">Our Templates</span>
          </Fragment>
        }
        feature1Title={
          <Fragment>
            <span className="document-selection-text19">Letter for GP</span>
          </Fragment>
        }
        feature2Title={
          <Fragment>
            <span className="document-selection-text20">Discharge Summary</span>
          </Fragment>
        }
        feature3Title={
          <Fragment>
            <span className="document-selection-text21">NDIS Report</span>
          </Fragment>
        }
        feature4Title={
          <Fragment>
            <span className="document-selection-text22">Create Your Own</span>
          </Fragment>
        }
        feature1Button={
          <Fragment>
            <span className="document-selection-text23">Adapt Now</span>
          </Fragment>
        }
        feature2Button={
          <Fragment>
            <span className="document-selection-text24">Adapt Now</span>
          </Fragment>
        }
        feature3Button={
          <Fragment>
            <span className="document-selection-text25">Adapt Now</span>
          </Fragment>
        }
        feature4Button={
          <Fragment>
            <span className="document-selection-text26">Create Your Own</span>
          </Fragment>
        }
      ></Features42>
    </div>
  )
}

export default DocumentSelection
