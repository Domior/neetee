// import styles from './HomePage.module.css';
// import Logo from '@components/Logo';
import { Outlet } from 'react-router';
import Hero from '@components/Home/Hero';
import Tabs from '@components/Home/TabContainer';
const HomePage = () => {
  return (
    <>
      <h1>HomePage</h1>
      <Hero />
      <Tabs />
      <Outlet />
    </>
  );
};

export default HomePage;
