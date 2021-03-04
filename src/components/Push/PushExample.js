import React, { useEffect, useState } from 'react'
import axios from 'axios'
import propTypes from 'prop-types'
import { connect } from 'react-redux'
// import sw from '../../util/serviceWorker'

// const publicVapidKey = "BJih9sKk7e_8jxB2qdGYjMC6gI4e0ANWvIN8JqGsvQTuefCe-c-8-AI3tYWtayzCGiLltcxWCx2Iu8hWVZ_2z20"

function PushExample ({ user }) {
  const [notifications, setNotifications] = useState([])
  const [inputMessage, setInputMessage] = useState('')
  const [recipients, setRecipients] = useState([])

  useEffect(() => {
    axios.get('/api/notification/receive')
    .then(res => {
      setNotifications(res.data)
    })
    .catch(e => console.error(e))
  }, [])

  const trigger = () => {
    if (user) {
      axios.post('/api/notification/send', {
        date: new Date(),
        fromUid: user._id,
        toUid: recipients,
        checked: false,
        message: inputMessage
      })
      .then(res => console.log(res))
      .catch(e => console.error(e))
    }
  }

  const handleInputChange = e => {
    e.preventDefault()
    setInputMessage(e.target.value)
  }

  return (
    <div style={{ padding: '5%' }}>
      <p>I am {user ? user.email : ''}</p>
      {/* <p>Hello, I got {response ? response.message : 'nothing'} from api!</p> */}
      <span>
        <button onClick={() => setRecipients([...recipients, 'bVIgGqWBbdS4dMo2FEs1DgjhxW23'])}>cchaff0105@gmail.com</button>
        <button onClick={() => setRecipients([...recipients, 'h0vNbQHgcJXGxTpqMZv5KxqD2m62'])}>wonyoung0105@naver.com</button>
      </span>
      <p>Sending to: {recipients.map(r => (r + ', '))}</p>
      <input onChange={handleInputChange} />
      <button onClick={trigger}>Trigger</button>
    </div>
  )
}

PushExample.propTypes = {
  user: propTypes.object.isRequired
}

const mapStateToProps = state => ({
  user: state.auth.user
})

export default connect(mapStateToProps)(PushExample)
