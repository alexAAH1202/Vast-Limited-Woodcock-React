import React, { Fragment } from 'react'

import { Helmet } from 'react-helmet'

import Navbar2 from '../components/navbar2'
import AccountInfo from '../components/account-info'
import './account-creation-information.css'

const AccountCreationInformation = (props) => {
  return (
    <div className="account-creation-information-container">
      <Helmet>
        <title>Account-Creation-Information - Vast Limited Woodcock</title>
        <meta
          property="og:title"
          content="Account-Creation-Information - Vast Limited Woodcock"
        />
      </Helmet>
      <Navbar2
        link1={
          <Fragment>
            <span className="account-creation-information-text1">Clients</span>
          </Fragment>
        }
        link2={
          <Fragment>
            <span className="account-creation-information-text2">
              Intake Forms
            </span>
          </Fragment>
        }
        link3={
          <Fragment>
            <span className="account-creation-information-text3">
              Workflow Automation
            </span>
          </Fragment>
        }
        link4={
          <Fragment>
            <span className="account-creation-information-text4">
              Document Creation
            </span>
          </Fragment>
        }
        link5={
          <Fragment>
            <span className="account-creation-information-text5">Help</span>
          </Fragment>
        }
        logoSrc="/Logo/dall%C3%A2%C2%B7e%202024-10-23%2001.08.51%20-%20a%20cute%20cartoon%20hippo%20head%20drawn%20in%20soft%20shades%20of%20blue%20and%20purple.%20the%20hippo%20has%20a%20friendly%20expression%20with%20rounded%20features%2C%20large%20round%20eyes%2C%20and%20sm-1500h.webp"
        link1Url="/clients"
        link2Url="/intake-forms"
        link3Url="/workflow-builder"
        link4Url="/document-creation"
      ></Navbar2>
      <AccountInfo
        text={
          <Fragment>
            <span className="account-creation-information-text6">Provider</span>
          </Fragment>
        }
        submit={
          <Fragment>
            <span className="account-creation-information-text7">Submit</span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="account-creation-information-text8">
              Account Details
            </span>
          </Fragment>
        }
      ></AccountInfo>
    </div>
  )
}

export default AccountCreationInformation
