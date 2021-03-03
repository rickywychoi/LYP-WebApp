import axios from 'axios';
import {
    GET_POSTS,
    POST_ERROR,
} from './types'


// Get Posts
export const getPosts = () => async dispatch => {
    try {
        const res = await axios.get('/api/posts');
        dispatch({
            type: GET_POSTS
        })
    } catch (error) {
        
    }
}