import axios from 'axios';
import { GET_POSTS, POST_ERROR } from './types';

// Get Posts
export const getPosts = () => async (dispatch) => {
  try {
    const res = await axios.get('/api/posts');
    dispatch({
      type: GET_POSTS,
    });
  } catch (error) {}
};

export const addPost = ({ email, body, token, selectedFiles }) => async (
  dispatch
) => {
  console.log('hello');
  const config = {
    headers: {
      Authorization: token,
      'Content-Type': 'application/json',
    },
  };
  try {
    const res = await axios.post(
      `/api/posts/${email}`,
      { text: body, files: selectedFiles },
      config
    );
    console.log(res);
    dispatch({
      type: ADD_POST,
      payload: res.data,
    });
  } catch (error) {
    console.log(error);
  }
};
