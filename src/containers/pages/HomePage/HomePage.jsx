import * as React from 'react';

import Banner from '@components/Banner/Banner';
import Breadcrumbs from '@components/Breadcrumbs/Breadcrumbs';

import { ReactComponent as AllItemsIcon } from '@icons/allItems.svg';
import { ReactComponent as TrendingItemsIcon } from '@icons/trendingItems.svg';
import { ReactComponent as ShopItemsIcon } from '@icons/shopItemsIcon.svg';
import { ReactComponent as WholesaleItemsIcon } from '@icons/shopItemsIcon.svg';
// import { ReactComponent as WholesaleItemsIcon } from '@icons/wholesaleItemsIcon.svg';

import styles from './HomePage.module.css';

const mainFilterButtons = [
  { title: 'Все товары', value: 'all', img: <AllItemsIcon /> },
  { title: 'Трендовые товары', value: 'trending', img: <TrendingItemsIcon /> },
  { title: 'Товары 1688.com', value: '1688', img: <ShopItemsIcon /> },
  { title: 'Оптовые товары', value: 'wholesale', img: <WholesaleItemsIcon /> },
];

const subFilterButtons = [
  { title: 'Одежда, обувь, аксессуары', link: '#/', value: '1' },
  { title: 'Часы и украшения', link: '#/', value: '2' },
  { title: 'Товары для детей и игрушки', link: '#/', value: '3' },
  { title: 'Детская одежда и обувь', link: '#/', value: '4' },
  { title: 'Товары для детей и игрушки', link: '#/', value: '5' },
  { title: 'Часы и украшения', link: '#/', value: '6' },
];

const breadcrumbs = [
  { title: 'Главная', link: '#/' },
  { title: 'Категории', link: '#/' },
  { title: 'Товар', link: '#/' },
  { title: 'Красота и здоровье', link: '#/' },
];

const HomePage = () => {
  const [activeIndex, setActiveIndex] = React.useState(0);

  const handleClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <>
      <Banner link1="/" link2="/" />
      <div className={styles.container}>
        <div className={styles.mainFilterButtonsContainer}>
          {mainFilterButtons.map((item, index) => (
            <button
              className={`${styles.mainFilterButton} ${
                activeIndex === index ? styles.mainFilterButtonActive : ''
              }`}
              onClick={() => handleClick(index)}
              key={item.title}
              value={item.value}
            >
              {item.img}
              <p>{item.title}</p>
            </button>
          ))}
        </div>
        <div className={styles.subFilterButtonsContainer}>
          <ul className={styles.subFilterButtonsList}>
            {subFilterButtons.map((item) => (
              <li key={item.value}>
                <a href={item.link}>{item.title}</a>
              </li>
            ))}
          </ul>
        </div>
        <Breadcrumbs data={breadcrumbs} />
      </div>
    </>
  );
};

export default HomePage;
