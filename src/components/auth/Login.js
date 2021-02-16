import React, {useState} from 'react'
import {login} from '../../actions/auth';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Link, Redirect} from 'react-router-dom';

const Login =({login, isAuthenticated}) => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    })

    const {email, password} = formData;

    const onChange = e => setFormData({...formData, [e.target.name]: e.target.value});

    const onSubmit = async e => {
        
        e.preventDefault();
        login(formData);
    }
    if(isAuthenticated) {
        return <Redirect to="/" />
    }

    return (
        <div className="container">
            <h1 className="large text-primary">Sign in</h1>
            <p className="lead">
                Create Your Account
            </p>
            <form onSubmit={e => onSubmit(e)} className="form">
                <div className="form-group">
                    <input type="email" placeholder="Email Address" name="email" value={email} onChange={e=> onChange(e)} required/>
                </div>
                <div className="form-group">
                        <input type="password" placeholder="Password" name="password" value={password} onChange={e=> onChange(e)} required/>
                </div>
                <input type="submit" className="btn btn-primary" value="Login" />
            </form>
        </div>
    )
}

Login.propTypes = {
    login : PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool,
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
})

export default connect(mapStateToProps, {login}) (Login);