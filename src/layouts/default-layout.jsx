import React from 'react'
import PropTypes from 'prop-types'
import Header from 'components/block/header'
import Sidebar from 'components/block/sidebar'
import Feed from 'components/block/feed'

export default function DefaultLayout({ children }) {
  return (
    <React.Fragment>
      <Header />
      <div className='root'>
        <div className='flex gap-x-2 justify-between'>
          {children}
          <Sidebar />
          <Feed />
        </div>
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
