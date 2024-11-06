import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './search-clients.css'

const SearchClients = (props) => {
  return (
    <div className="search-clients-container">
      <form className="search-clients-form">
        <h1>
          {props.heading ?? (
            <Fragment>
              <span className="search-clients-text2">
                <span>Search Existing Clients</span>
                <br></br>
                <br></br>
              </span>
            </Fragment>
          )}
        </h1>
      </form>
      <div className="search-clients-inputs">
        <div className="search-clients-date"></div>
        <div className="search-clients-lower"></div>
      </div>
    </div>
  )
}

SearchClients.defaultProps = {
  heading: undefined,
}

SearchClients.propTypes = {
  heading: PropTypes.element,
}

export default SearchClients
