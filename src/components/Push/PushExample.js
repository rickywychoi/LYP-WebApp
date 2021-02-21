import React from 'react'
import serviceWorker from '../../util/serviceWorker'

const publicVapidKey = "BJih9sKk7e_8jxB2qdGYjMC6gI4e0ANWvIN8JqGsvQTuefCe-c-8-AI3tYWtayzCGiLltcxWCx2Iu8hWVZ_2z20"

function PushExample () {
  const handleSend = () => {
    if ("serviceWorker" in navigator) {
      send().catch(err => console.error(err))
    }
  }

  const send = async () => {
    // Register Service Worker
    console.log('Registering service worker...')
    const register = await navigator.serviceWorker.register(serviceWorker, {
      scope: '/'
    })
    console.log('Service Worker Registered...')

    // Register Push
    console.log('Registering Push...')
    const subscription = await register.pushManager.subscribe({
      userVisibleOnly: true,
      applicationServerKey: urlBase64ToUint8Array(publicVapidKey)
    })
    console.log('Push Registered...')

    // Send Push Notification
    console.log('Sending Push...')
    await fetch('/api/subscribe', {
      method: 'POST',
      body: JSON.stringify(subscription),
      headers: {
        'content-type': 'application/json'
      }
    })
    console.log('Push Sent...')
  }

  return (
    <div>
      <button onClick={handleSend}>Send Push</button>
    </div>
  )
}

function urlBase64ToUint8Array(base64String) {
  const padding = "=".repeat((4 - base64String.length % 4) % 4);
  const base64 = (base64String + padding)
    .replace(/\-/g, "+")
    .replace(/_/g, "/");

  const rawData = window.atob(base64);
  const outputArray = new Uint8Array(rawData.length);

  for (let i = 0; i < rawData.length; ++i) {
    outputArray[i] = rawData.charCodeAt(i);
  }
  return outputArray;
}

export default PushExample
