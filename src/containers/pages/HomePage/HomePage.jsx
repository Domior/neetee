// import styles from './HomePage.module.css';
// import Logo from '@components/Logo';
import { Outlet } from 'react-router';
import Hero from '@components/Home/Hero';
import Tabs from '@components/Home/TabContainer';
import FilteredProductsList from '../../../components/filteredProductsList/filteredProductsList';

const HomePage = () => {
  return (
    <>
      {/*<h1>HomePage</h1>*/}
      <Hero />
      <Tabs />
      {/*<Outlet />*/}
      <FilteredProductsList/>
    </>
  );
};

export default HomePage;
