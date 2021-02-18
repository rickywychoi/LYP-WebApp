import React, { useState, Fragment } from 'react';
import { useHistory } from 'react-router-dom';
import { Navbar, Nav, Form, FormControl, Image } from 'react-bootstrap';
import styles from './LYPNavbar.module.css';
import logo from '../../assets/images/LYP-Logo-no-link.png';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../../actions/auth';

const LYPNavbar = ({ auth: { isAuthenticated, loading }, logout }) => {
  const [query, setQuery] = useState('');
  const history = useHistory();

  const handleChange = (e) => {
    e.preventDefault();
    setQuery(e.target.value);
  };

  const handleSubmit = (target) => {
    if (target.charCode === 13) {
      history.push(`/search?q=${query}`);
    }
  };

  
  const authLink = (
    <Nav className={styles.menus}>
      <Nav.Link href='#home'>Home</Nav.Link>
      <Nav.Link href='#features'>Features</Nav.Link>
      <Nav.Link onClick={logout}>Logout</Nav.Link>
    </Nav>
  );

  return (
    <div className={`sticky-top`}>
      <Navbar bg='light' variant='light' className={styles.navbar}>
        <Form
          inline
          onSubmit={(e) => {
            e.preventDefault();
            return false;
          }}
        >
          <FormControl
            type='text'
            placeholder='Search'
            className={(!loading && isAuthenticated) ? 'mr-sm-2': `${styles.hide}`}
            onChange={handleChange}
            onKeyPress={handleSubmit}
          />
        </Form>
        <Navbar.Brand href='/home' className={styles.brand}>
          <Image src={logo} className={styles.logo} />
        </Navbar.Brand>
        {!loading && (<Fragment>{isAuthenticated? authLink : (<Fragment></Fragment>)}</Fragment>)}
      </Navbar>
    </div>
  );
};

LYPNavbar.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logout })(LYPNavbar);
