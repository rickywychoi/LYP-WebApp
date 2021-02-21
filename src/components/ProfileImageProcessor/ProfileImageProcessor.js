import React from 'react'
import profilePlaceholder from '../../assets/images/Profile_avatar_placeholder.png'

// Processes image centered in a circle frame
function ProfileImageProcessor ({ src, id, style }) {
  console.log(style)

  const imgStyle = {
    width: style.width,
    height: style.height,
    objectFit: 'cover',
    borderRadius: '50%'
  }

  return (
    <div>
      <img src={src ? src : profilePlaceholder} alt={id} style={imgStyle} />
    </div>
  )
}

export default ProfileImageProcessor
