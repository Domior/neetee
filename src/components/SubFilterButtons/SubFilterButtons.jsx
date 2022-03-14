import * as React from 'react';

import styles from './SubFilterButtons.module.css';

const subFilterButtons = [
  { title: 'Одежда, обувь, аксессуары', link: '#/', value: '1' },
  { title: 'Часы и украшения', link: '#/', value: '2' },
  { title: 'Товары для детей и игрушки', link: '#/', value: '3' },
  { title: 'Детская одежда и обувь', link: '#/', value: '4' },
  { title: 'Товары для детей и игрушки', link: '#/', value: '5' },
  { title: 'Часы и украшения', link: '#/', value: '6' },
];

const SubFilterButtons = () => {
  return (
    <div className={styles.subFilterButtonsContainer}>
      <ul className={styles.subFilterButtonsList}>
        {subFilterButtons.map((item) => (
          <li key={item.value}>
            <a href={item.link}>{item.title}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SubFilterButtons;
