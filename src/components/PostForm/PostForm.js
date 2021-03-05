import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Profile_avatar_placeholder from '../../assets/images/Profile_avatar_placeholder.png';
import { Modal, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { addPost } from '../../actions/post';

const PostForm = ({ user, token, addPost }) => {
  const [show, setShow] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    body: '',
    token: '',
    selectedFiles: [],
  });
  const { body } = formData;
  const handleClose = () => setShow(false);
  const handleShow = () => {
    setFormData({ ...formData, email: user.email, token: token });
    setShow(true);
  };
  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    addPost(formData);
    setShow(false);
  };

  return (
    <>
      <div className='form-row' onClick={handleShow}>
        <div className='form-group col-md-2'>
          <img src={Profile_avatar_placeholder} className='rounded-circle' />
        </div>
        <div className='form-group col-md-10 mt-2'>
          <input className='form-control' type='text' />
        </div>
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Create a Post</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <img src={Profile_avatar_placeholder} className='rounded-circle' />
            <span> {user && user.firstName + ' ' + user.lastName}</span>
          </div>
          <div className='form-group mt-2'>
            <textarea
              className='form-control'
              value={body}
              name='body'
              onChange={(e) => onChange(e)}
            ></textarea>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant='primary' onClick={(e) => onSubmit(e)}>
            Post
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

PostForm.propTypes = {
  token: PropTypes.string.isRequired,
  user: PropTypes.object.isRequired,
  addPost: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  token: state.auth.token,
  user: state.auth.user,
});

export default connect(mapStateToProps, { addPost })(PostForm);
