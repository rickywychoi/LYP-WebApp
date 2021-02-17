import React from 'react'
import LYPNavbar from '../../components/LYPNavbar/LYPNavbar'

function WithNavbar ( WrappingComponent ) {
  return (props) => (
    <div className="container">
      <LYPNavbar {...props} />
      <WrappingComponent {...props}/>
    </div>
  )
}

export default WithNavbar
