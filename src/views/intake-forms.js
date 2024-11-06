import React, { Fragment } from 'react'

import { Helmet } from 'react-helmet'

import Navbar2 from '../components/navbar2'
import IntakeForms1 from '../components/intake-forms1'
import Steps2 from '../components/steps2'
import './intake-forms.css'

const IntakeForms = (props) => {
  return (
    <div className="intake-forms-container">
      <Helmet>
        <title>Intake-Forms - Vast Limited Woodcock</title>
        <meta
          property="og:title"
          content="Intake-Forms - Vast Limited Woodcock"
        />
      </Helmet>
      <Navbar2
        link1={
          <Fragment>
            <span className="intake-forms-text10">Clients</span>
          </Fragment>
        }
        link2={
          <Fragment>
            <span className="intake-forms-text11">Intake Forms</span>
          </Fragment>
        }
        link3={
          <Fragment>
            <span className="intake-forms-text12">Workflow Automation</span>
          </Fragment>
        }
        link4={
          <Fragment>
            <span className="intake-forms-text13">Document Creation</span>
          </Fragment>
        }
        link5={
          <Fragment>
            <span className="intake-forms-text14">Help</span>
          </Fragment>
        }
        logoSrc="/Logo/dall%C3%A2%C2%B7e%202024-10-23%2001.08.51%20-%20a%20cute%20cartoon%20hippo%20head%20drawn%20in%20soft%20shades%20of%20blue%20and%20purple.%20the%20hippo%20has%20a%20friendly%20expression%20with%20rounded%20features%2C%20large%20round%20eyes%2C%20and%20sm-1500h.webp"
        link1Url="/clients"
        link2Url="/intake-forms"
        link3Url="/workflow-builder"
        link4Url="/document-creation"
      ></Navbar2>
      <IntakeForms1
        mainAction={
          <Fragment>
            <span className="intake-forms-text15">Use Our Templates</span>
          </Fragment>
        }
        sectionTitle={
          <Fragment>
            <span className="intake-forms-text16">Intake Forms</span>
          </Fragment>
        }
        feature1Title={
          <Fragment>
            <span className="intake-forms-text17">Use Our Templates</span>
          </Fragment>
        }
        feature2Title={
          <Fragment>
            <span className="intake-forms-text18">Create Your Own</span>
          </Fragment>
        }
        feature3Title={
          <Fragment>
            <span className="intake-forms-text19">
              Save Your Templates for Later
            </span>
          </Fragment>
        }
        secondaryAction={
          <Fragment>
            <span className="intake-forms-text20">Create Your Own</span>
          </Fragment>
        }
        feature1ImageSrc="https://images.unsplash.com/photo-1507208773393-40d9fc670acf?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczMDg2NzcyNXw&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=1080"
        feature3ImageSrc="https://images.unsplash.com/1/work-stations-plus-espresso.jpg?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczMDg2Nzc2NXw&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=1080"
        feature1Description={
          <Fragment>
            <span className="intake-forms-text21">
              Jumpstart your forms with ready-to-use templates designed to adapt
              to your clients’ needs!
            </span>
          </Fragment>
        }
        feature2Description={
          <Fragment>
            <span className="intake-forms-text22">
              Create forms that guide clients effortlessly through every detail,
              your way.
            </span>
          </Fragment>
        }
        feature3Description={
          <Fragment>
            <span className="intake-forms-text23">
              Keep templates at your fingertips — store now, customise later
            </span>
          </Fragment>
        }
      ></IntakeForms1>
      <Steps2
        step1Title={
          <Fragment>
            <span className="intake-forms-text24">
              Create a Template or Use Ours
            </span>
          </Fragment>
        }
        step2Title={
          <Fragment>
            <span className="intake-forms-text25">
              Add as many questions as you like
            </span>
          </Fragment>
        }
        step3Title={
          <Fragment>
            <span className="intake-forms-text26">
              Add a link to your Cliniko email or SMS reminders
            </span>
          </Fragment>
        }
        step4Title={
          <Fragment>
            <span className="intake-forms-text27">
              Get Notified when Forms are Filled In
            </span>
          </Fragment>
        }
        step1Description={
          <Fragment>
            <span className="intake-forms-text28">
              Sign up for a new account using your email address and creating a
              secure password.
            </span>
          </Fragment>
        }
        step2Description={
          <Fragment>
            <span className="intake-forms-text29">
              Once your account is created, you can log in to access exclusive
              content available only to registered users.
            </span>
          </Fragment>
        }
        step3Description={
          <Fragment>
            <span className="intake-forms-text30">
              Follow our guidelines to create a strong and secure password to
              protect your account.
            </span>
          </Fragment>
        }
        step4Description={
          <Fragment>
            <span className="intake-forms-text31">
              Review and agree to our Terms of Use and Privacy Policy to
              understand your rights and responsibilities while using our
              platform.
            </span>
          </Fragment>
        }
      ></Steps2>
    </div>
  )
}

export default IntakeForms
