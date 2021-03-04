import React, { useState, useEffect, forwardRef } from 'react'
import axios from 'axios'
import { Popover } from 'react-bootstrap'

// const NotificationList = forwardRef((props, ref) => {
//   console.log(props)
//   console.log(ref)
//   return (
//     <Popover id='popover-basic' >
//       <Popover.Content>
//         And here's some <strong>amazing</strong> content. It's very engaging.
//         right?
//       </Popover.Content>
//     </Popover>
//   )
// })

const NotificationList = (props) => (
  <Popover id='popover-positioned-bottom' {...props} style={{...props.style}}>
    <Popover.Content>
      And here's some <strong>amazing</strong> content. It's very engaging.
      right?
    </Popover.Content>
  </Popover>
)

export default NotificationList
