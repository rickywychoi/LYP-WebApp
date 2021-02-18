import axios from 'axios'
import firebase from '../config/firebase'
import setAuthToken from '../config/setAuthToken'
import { useHistory } from 'react-router-dom'
import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  AUTH_ERROR,
  USER_LOADED,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT
} from './types'

//Load User
export const loadUser = () => async dispatch => {
  if (localStorage.token) {
    setAuthToken(localStorage.token)
  }
  try {
    const res = await axios.get('/api/auth/')
    dispatch({
      type: USER_LOADED,
      payload: res.data
    })
  } catch (error) {
    dispatch({
      type: AUTH_ERROR
    })
  }
}

//Register User
export const register = ({
  firstName,
  lastName,
  email,
  password,
  address,
  companyName,
  city,
  province,
  country,
  profilePicUrl,
  backgroundPicture,
  location
}) => async dispatch => {
  const config = {
    headers: {
      'Content-type': 'application/json'
    }
  }

  const body = JSON.stringify({
    firstName,
    lastName,
    email,
    password,
    address,
    companyName,
    city,
    province,
    country,
    profilePicUrl,
    backgroundPicture,
    location
  })

  try {
    const { user } = await firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
    const res = await axios.post('/api/auth/register', body, config)
    console.log(res.data)
    dispatch({
      type: REGISTER_SUCCESS,
      payload: res.data
    })
    await user.sendEmailVerification()
    await firebase.auth().signOut()
  } catch (error) {
    console.error(error)

    dispatch({
      type: REGISTER_FAIL
    })
  }
}

export const login = ({ email, password }) => async dispatch => {
  const config = {
    headers: {
      'Content-type': 'application/json'
    }
  }

  try {
    await firebase.auth().signInWithEmailAndPassword(email, password)
    const user = firebase.auth().currentUser

    if (user.emailVerified) {
      user.getIdToken(true).then(async token => {
        const auth = 'Bearer '.concat(token)
        const res = await axios.get(`/api/auth/`, {
          headers: { Authorization: auth }
        })
        console.log(res)
        dispatch({
          type: LOGIN_SUCCESS,
          payload: res.data,
          token: auth
        })
      })
    }
  } catch (error) {
    console.error(error)

    dispatch({
      type: LOGIN_FAIL
    })
  }
}

// LOGOUT
export const logout = () => async dispatch => {
  await firebase.auth().signOut()
  dispatch({ type: LOGOUT })
}
