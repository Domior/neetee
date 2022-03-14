import * as React from 'react';

import { ReactComponent as AllItemsIcon } from '@icons/allItems.svg';
import { ReactComponent as TrendingItemsIcon } from '@icons/trendingItems.svg';
import { ReactComponent as ShopItemsIcon } from '@icons/shopItemsIcon.svg';
import { ReactComponent as WholesaleItemsIcon } from '@icons/shopItemsIcon.svg';
// import { ReactComponent as WholesaleItemsIcon } from '@icons/wholesaleItemsIcon.svg';

import styles from './MainFilterButtons.module.css';

const mainFilterButtons = [
  { title: 'Все товары', value: 'all', img: <AllItemsIcon /> },
  { title: 'Трендовые товары', value: 'trending', img: <TrendingItemsIcon /> },
  { title: 'Товары 1688.com', value: '1688', img: <ShopItemsIcon /> },
  { title: 'Оптовые товары', value: 'wholesale', img: <WholesaleItemsIcon /> },
];

const MainFilterButtons = () => {
  const [activeIndex, setActiveIndex] = React.useState(0);

  const handleClick = (index) => {
    setActiveIndex(index);
  };

  return (
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
  );
};

export default MainFilterButtons;
