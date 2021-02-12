import React from 'react'
import LYPNavbar from '../components/LYPNavbar/LYPNavbar'

function WithNavBar ( WrappingComponent ) {
  return (props) => (
    <div className="container">
      <LYPNavbar />
      <WrappingComponent {...props}/>
    </div>
  )
}

export default WithNavBar
