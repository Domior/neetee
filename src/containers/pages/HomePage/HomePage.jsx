import * as React from 'react';

import Banner from '@components/Banner/Banner';

import { ReactComponent as AllItemsIcon } from '@icons/allItems.svg';
import { ReactComponent as TrendingItemsIcon } from '@icons/trendingItems.svg';
import { ReactComponent as ShopItemsIcon } from '@icons/shopItemsIcon.svg';
import { ReactComponent as WholesaleItemsIcon } from '@icons/shopItemsIcon.svg';
// import { ReactComponent as WholesaleItemsIcon } from '@icons/wholesaleItemsIcon.svg';

import styles from './HomePage.module.css';

const tabsItems = [
  { title: 'Все товары', value: 'all', img: <AllItemsIcon /> },
  { title: 'Трендовые товары', value: 'trending', img: <TrendingItemsIcon /> },
  { title: 'Товары 1688.com', value: '1688', img: <ShopItemsIcon /> },
  { title: 'Оптовые товары', value: 'wholesale', img: <WholesaleItemsIcon /> },
];

// const list = [
//   'Одежда, обувь, аксессуары',
//   'Товары для детей и игрушки',
//   'Одежда, обувь, аксессуары1',
//   'Детская одежда и обувь',
//   'Часы и украшения',
//   'Детская одежда и обувь1',
// ];

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
          {tabsItems.map((item, index) => (
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
      </div>
    </>
  );
};

export default HomePage;
