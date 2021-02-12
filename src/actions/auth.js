import axios from 'axios';
import firebase from '../config/firebase';

import {
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    AUTH_ERROR,
    USER_LOADED,
    LOGIN_SUCCESS
} from './types'

import setAuthToken from '../config/setAuthToken';


//TODO middle ware
// export const loadUser = () => async dispatch => {
//     if(localStorage.token) {
//         setAuthToken(localStorage.token);
//     }

//     try {
//         const res = await.
//     } catch (error) {
        
//     }
// }


//Register User
export const register = ({ firstName, lastName, email, password, address, companyName, city, province, country, profilePicUrl, backgroundPicture, location}) => async dispatch => {
    const config = {
        headers: {
            'Content-type': 'application/json'
        }
    }

    const body = JSON.stringify({firstName, lastName, email, password, address ,companyName, city, province, country, profilePicUrl, backgroundPicture, location});

    try {
        const {user} = await firebase.auth().createUserWithEmailAndPassword(email, password);
        const res = await axios.post('/api/auth/register', body, config);
        console.log(res.data);
        dispatch({
            type: REGISTER_SUCCESS,
            payload: res.data,
        });
        await user.sendEmailVerification();
    } catch (error) {
        console.error(error);

        dispatch({
            type: REGISTER_FAIL
        })
    }
}


export const login = ({ email, password}) => async dispatch => {
    try {
        // await firebase.login({email, password});
        await firebase.auth().signInWithEmailAndPassword(email, password);
        console.log('before email')
        const user = firebase.auth().currentUser;
        if(user.emailVerified) {
            const token = await user.getIdToken(true);
            dispatch({
                type: LOGIN_SUCCESS,
                token,
            })
        }
        console.log('after email')
    } catch (error) {
        console.error(error);

        dispatch({
            type: REGISTER_FAIL
        })
    }
}