import React, { Fragment } from 'react'

import { Helmet } from 'react-helmet'

import Navbar2 from '../components/navbar2'
import './clients.css'

const Clients = (props) => {
  return (
    <section className="clients-container1">
      <Helmet>
        <title>Clients - Vast Limited Woodcock</title>
        <meta property="og:title" content="Clients - Vast Limited Woodcock" />
      </Helmet>
      <Navbar2
        link1={
          <Fragment>
            <span className="clients-text1">Clients</span>
          </Fragment>
        }
        link2={
          <Fragment>
            <span className="clients-text2">Intake Forms</span>
          </Fragment>
        }
        link3={
          <Fragment>
            <span className="clients-text3">Workflow Automation</span>
          </Fragment>
        }
        link4={
          <Fragment>
            <span className="clients-text4">Document Creation</span>
          </Fragment>
        }
        link5={
          <Fragment>
            <span className="clients-text5">Help</span>
          </Fragment>
        }
        logoSrc="/Logo/dall%C3%A2%C2%B7e%202024-10-23%2001.08.51%20-%20a%20cute%20cartoon%20hippo%20head%20drawn%20in%20soft%20shades%20of%20blue%20and%20purple.%20the%20hippo%20has%20a%20friendly%20expression%20with%20rounded%20features%2C%20large%20round%20eyes%2C%20and%20sm-1500h.webp"
        link1Url="/clients"
        link2Url="/intake-forms"
        link3Url="/workflow-builder"
        link4Url="/document-creation"
      ></Navbar2>
      <div className="clients-container2">
        <h1 className="clients-text6">Search Cliniko Clients: </h1>
        <input
          type="text"
          id="search-bar"
          placeholder="Search by Name"
          className="clients-textinput thq-input input"
        />
        <button
          id="search-button"
          type="submit"
          className="clients-button button-main thq-button-filled button"
        >
          <span>
            <span>Submit</span>
            <br></br>
          </span>
        </button>
      </div>
      <div id="results-container" className="clients-container3">
        <div id="clients-list-container" className="clients-container4"></div>
      </div>
    </section>
  )
}

export default Clients
