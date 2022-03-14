import * as React from 'react';

import Banner from '@components/Banner/Banner';
import MainFilterButtons from '@components/MainFilterButtons/MainFilterButtons';
import SubFilterButtons from '@components/SubFilterButtons/SubFilterButtons';
import Breadcrumbs from '@components/Breadcrumbs/Breadcrumbs';

import FilteredProductsList from '../../../components/filteredProductsList/filteredProductsList';

import styles from './HomePage.module.css';

const breadcrumbs = [
  { title: 'Главная', link: '#/' },
  { title: 'Категории', link: '#/' },
  { title: 'Товар', link: '#/' },
  { title: 'Красота и здоровье', link: '#/' },
];

const HomePage = () => {
  return (
    <>
      <Banner link1="/" link2="/" />
      <div className={styles.container}>
        <MainFilterButtons />
        <SubFilterButtons />
        <Breadcrumbs data={breadcrumbs} />
        <FilteredProductsList />
      </div>
    </>
  );
};

export default HomePage;
