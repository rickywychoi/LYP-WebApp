import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import videoBackground from '../../assets/videos/background_v2.mp4'
import Card from '../../components/layout/Card'
import { logout } from '../../actions/auth'
import { Tab, Tabs } from 'react-bootstrap'
import Register from '../../components/auth/Register'
import Login from '../../components/auth/Login'
import styles from './Landing.module.css'

const Landing = ({ auth: { isAuthenticated, loading }, logout }) => {
  return (
    <Fragment>
      <div className={styles.vHeader}>
        <div className={styles.fullscreenVideoWrap}>
          <video autoPlay muted loop className={styles.videoSection}>
            <source src={videoBackground} type='video/mp4' />
          </video>
        </div>
        <div className={`${styles.headerContent} w-25 p-1`}>
          <Tabs defaultActiveKey='register'>
            <Tab eventKey='register' title='Register'>
              <Register />
            </Tab>
            <Tab eventKey='login' title='login'>
              <Login />
            </Tab>
          </Tabs>
        </div>
      </div>
      <div className='container'>
        <div className='row my-5'>
          <div className='col-lg-4 col-sm-6'>
            <Card
              image='https://assets.change.org/photos/2/to/hy/DhTOhYZZNwoxBOF-800x450-noPad.jpg?1486512065'
              title='Canadian Environmental Network'
              body="The Canadian Environmental Network (RCEN) facilitates cooperation and networking among non-profit, non-governmental environmental organisations across Canada and internationally. Since 1977, we have been enabling and enhancing our members' work of protecting, conserving, restoring and promoting a clean, healthy, sustainable environment."
              link='https://rcen.ca'
            />
          </div>
          <div className='col-lg-4 col-sm-6'>
            <Card
              image='https://resilient-health.ca/wp-content/uploads/2020/08/frh-logo-transparent.png'
              title='Canadian Network for Human Health and the Environment'
              body='TAs a member of CNA’s Canadian Network of Nursing Specialties, CANE works to facilitate knowledge sharing and transfer of environmental health principles and nursing best practices. This webinar will help you gain an understanding of the current CANE/AIIE and CNA work underway to support Canadian nurses’ ecoliteracy in relation to climate change. You’ll learn about climate change and its related health impacts and how you can take action.'
              link='https://cnhhe.nb.lung.ca'
            />
          </div>
          <div className='col-lg-4 col-sm-6'>
            <Card
              image='https://charityvillage.com/wp-content/uploads/2019/11/Charity-Village-Logo-300-1.png'
              title='Charity Village'
              body='We have become the Canadian nonprofit sector’s largest and most popular online resource for recruiting, news and how-to information. CharityVillage® recognizes and showcases the richness and diversity of Canada’s nonprofit sector. CharityVillage® officially launched on July 13, 1995 and is one of the largest and most popular websites in the world devoted exclusively to the nonprofit and charitable sector issues. '
              link='https://charityvillage.com'
            />
          </div>
        </div>
      </div>
    </Fragment>
  )
}

Landing.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  auth: state.auth
})

export default connect(mapStateToProps, { logout })(Landing)
