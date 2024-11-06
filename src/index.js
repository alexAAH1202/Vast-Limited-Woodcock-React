import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'

import './style.css'
import FormTemplates from './views/form-templates'
import WorkflowOverview from './views/workflow-overview'
import Workflow2 from './views/workflow-2'
import SignIn from './views/sign-in'
import DocumentSelection from './views/document-selection'
import Clients from './views/clients'
import Workflow1 from './views/workflow-1'
import IntakeForms from './views/intake-forms'
import WorkflowBuilder from './views/workflow-builder'
import DocumentCreation from './views/document-creation'
import AccountCreationInformation from './views/account-creation-information'
import Workflow3 from './views/workflow-3'
import NotFound from './views/not-found'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route component={FormTemplates} exact path="/form-templates" />
        <Route component={WorkflowOverview} exact path="/workflow-overview" />
        <Route component={Workflow2} exact path="/workflow-2" />
        <Route component={SignIn} exact path="/" />
        <Route component={DocumentSelection} exact path="/document-selection" />
        <Route component={Clients} exact path="/clients" />
        <Route component={Workflow1} exact path="/workflow-1" />
        <Route component={IntakeForms} exact path="/intake-forms" />
        <Route component={WorkflowBuilder} exact path="/workflow-builder" />
        <Route component={DocumentCreation} exact path="/document-creation" />
        <Route
          component={AccountCreationInformation}
          exact
          path="/account-creation-information"
        />
        <Route component={Workflow3} exact path="/workflow-3" />
        <Route component={NotFound} path="**" />
        <Redirect to="**" />
      </Switch>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
