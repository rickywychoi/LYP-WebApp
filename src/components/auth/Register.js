import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import firebase from '../../config/firebase';
import {register } from '../../actions/auth';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

const Register =({register}) => {
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
        location: '',
    });

    const {firstName, lastName, email, password, confirmPassword} = formData;

    const onChange = e => setFormData({...formData, [e.target.name]: e.target.value})
    const onSubmit = async e => {
        e.preventDefault();

        if(password !== confirmPassword) {
            console.log('Password do not match');
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
                location: '',
            }
            register(newUser);

            // try {
            //     const config = {
            //         headers: {
            //             'Content-Type' : 'application/json'
            //         }
            //     }
            //     const {user} = await firebase.auth().createUserWithEmailAndPassword(email, password);
            //     const body = JSON.stringify(newUser);
            //     const res = await axios.post('/api/auth/register', body, config);
            //     console.log(res.data);

            //     await user.sendEmailVerification();
            // } catch (error) {
            //     console.error(error);
            // }
        }
    }
    return (
        <div className="container  mx-auto">
            <h1 className="large text-primary">Sign up</h1>
            <p className="lead">
                Create Your Account
            </p>
            <form onSubmit={e => onSubmit(e)} className="form">
                <div className="form-group">
                    <input type="text" placeholder="First Name" name='firstName' onChange={e=> onChange(e)} value={firstName} required />
                </div>
                <div className="form-group">
                    <input type="text" placeholder="Last Name" name='lastName' onChange={e=> onChange(e)} value={lastName} required/>
                </div>
                <div className="form-group">
                    <input type="email" placeholder="Email Address" name="email" onChange={e=> onChange(e)} value={email} required/>
                </div>
                <div className="form-group">
                    <input type="password" placeholder="Password" name="password" onChange={e=> onChange(e)} value={password}/>
                </div>
                <div className="form-group">
                    <input type="password" placeholder="Confirm Password" name="confirmPassword" onChange={e=> onChange(e)} value={confirmPassword}/>
                </div>
                <input type="submit" className="btn btn-primary" value="Register"/>
            </form>
            <p className="my-3">
                Already have an account? <Link to="/login">Sign in</Link>
            </p>
        </div>
    )
}
Register.propTypes = {
    register : PropTypes.func.isRequired,
}


export default connect(null, {register}) (Register);