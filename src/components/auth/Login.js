import React, { useState, useEffect } from 'react';
import { login } from '../../actions/auth';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import styles from './Form.module.css';

const Login = ({ login, isAuthenticated, location }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [credentialError, setCredentialError] = useState('Errror');

  const { email, password } = formData;

  useEffect(() => {
    setTimeout(() => {
      setCredentialError('');
    }, 3000);
  }, [credentialError]);

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    const res = await login(formData);
    if (res.status === false) {
      setCredentialError('Invalid Credentials');
    }
    else if(res.emailVerified === false){
      setCredentialError('Your email has not verified yet');
    }
  };
  if (isAuthenticated) {
    return <Redirect to='/home' />;
  }

  return (
    <div className='container text-center p-3 '>
      <h1 className='text-primary mb-4'>Sign in</h1>
      <form onSubmit={(e) => onSubmit(e)} className='form'>
        <div className='form-group'>
          <input
            type='email'
            className={styles.inputField}
            placeholder='Email Address'
            name='email'
            value={email}
            onChange={(e) => onChange(e)}
            required
          />
        </div>
        <div className='form-group'>
          <input
            type='password'
            className={styles.inputField}
            placeholder='Password'
            name='password'
            value={password}
            onChange={(e) => onChange(e)}
            required
          />
        </div>
        <input type='submit' className='btn btn-primary m-3' value='Login' />
        <p className='text-danger'>{credentialError}</p>
      </form>
      <p className='text-dark mt-5'>
        Forgot your password?{' '}
        <a className='text-primary' href='/'>
          Click here
        </a>
      </p>
      {location && location.pathname.localeCompare('/login') === 0 ? (
        <a href='/'>Redirect to home</a>
      ) : null}
    </div>
  );
};

Login.propTypes = {
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { login })(Login);
