import React from 'react';
// import styles from './DashboardHome.module.css'
import LYPColumns from '../../../hoc/LYPColumns/LYPColumns';

import SideWidget from '../../../containers/SideWidget/SideWidget';
import AdSection from '../../../containers/AdSection/AdSection';
import NewsFeed from '../../../containers/Dashboard/NewsFeed/NewsFeed';
import PopUpForm from '../../../components/PostForm/PostForm';

function DashboardHome() {
  return (
    <LYPColumns>
      <SideWidget />
      <NewsFeed />
      <AdSection />
    </LYPColumns>
  );
}

export default DashboardHome;
