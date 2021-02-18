import React, { useState } from 'react'
import { register } from '../../actions/auth'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import styles from './Form.module.css'

const Register = ({ register }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    address: '',
    companyName: '',
    city: '',
    province: '',
    country: '',
    profilePicUrl: '',
    backgroundPicture: '',
    location: ''
  })

  const { firstName, lastName, email, password, confirmPassword } = formData

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value })
  const onSubmit = async e => {
    e.preventDefault()

    if (password !== confirmPassword) {
      console.log('Password do not match')
    } else {
      const newUser = {
        firstName,
        lastName,
        email,
        password,
        address: '',
        companyName: '',
        city: '',
        province: '',
        country: '',
        profilePicUrl: '',
        backgroundPicture: '',
        location: ''
      }
      register(newUser)
    }
  }

  return (
    <div className='container text-center p-3'>
      <h1 className=' text-primary mb-4'>Sign up</h1>
      <form onSubmit={e => onSubmit(e)} className='form'>
        <div className='form-group'>
          <input
            type='text'
            className={styles.inputField}
            placeholder='First Name'
            name='firstName'
            onChange={e => onChange(e)}
            value={firstName}
            required
          />
        </div>
        <div className='form-group'>
          <input
            type='text'
            className={styles.inputField}
            placeholder='Last Name'
            name='lastName'
            onChange={e => onChange(e)}
            value={lastName}
            required
          />
        </div>
        <div className='form-group'>
          <input
            type='email'
            className={styles.inputField}
            placeholder='Email Address'
            name='email'
            onChange={e => onChange(e)}
            value={email}
            required
          />
        </div>
        <div className='form-group'>
          <input
            type='password'
            className={styles.inputField}
            placeholder='Password'
            name='password'
            onChange={e => onChange(e)}
            value={password}
          />
        </div>
        <div className='form-group'>
          <input
            type='password'
            className={styles.inputField}
            placeholder='Confirm Password'
            name='confirmPassword'
            onChange={e => onChange(e)}
            value={confirmPassword}
          />
        </div>
        <input type='submit' className='btn btn-primary m-3' value='Register' />
      </form>
    </div>
  )
}
Register.propTypes = {
  register: PropTypes.func.isRequired
}

export default connect(null, { register })(Register)
