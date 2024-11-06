import React, { Fragment } from 'react'

import { Helmet } from 'react-helmet'

import SignIn from '../components/sign-in'
import SignUp13 from '../components/sign-up13'
import './sign-in.css'

const SignIn = (props) => {
  return (
    <div className="sign-in-container">
      <Helmet>
        <title>Vast Limited Woodcock</title>
        <meta property="og:title" content="Vast Limited Woodcock" />
      </Helmet>
      <SignIn
        action1={
          <Fragment>
            <span className="sign-in-text1">
              <span className="sign-in-text2">Sign In</span>
              <br></br>
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="sign-in-text4">Sign In</span>
          </Fragment>
        }
      ></SignIn>
      <SignUp13
        action1={
          <Fragment>
            <span className="sign-in-text5">Sign Up</span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="sign-in-text6">
              I agree to the Terms of Use and Privacy Policy
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="sign-in-text7">Create an Account</span>
          </Fragment>
        }
        image1Src="/Images/signin2-600w.jpg"
      ></SignUp13>
    </div>
  )
}

export default SignIn
