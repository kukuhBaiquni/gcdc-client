import React from 'react'
import PropTypes from 'prop-types'
import Header from 'components/block/header'

export default function DefaultLayout({ children }) {
  return (
    <React.Fragment>
      <Header />
      <div className='root'>
        {children}
      </div>
      {/* <div className='root'>
        {children}
      </div> */}
    </React.Fragment>
  )
}

DefaultLayout.propTypes = {
  children: PropTypes.node,
}
