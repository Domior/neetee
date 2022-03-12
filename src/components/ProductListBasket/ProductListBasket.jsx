import * as React from 'react';

import ProductItemCheckbox from '@components/ProductItemCheckbox';

import data from './data';

import styles from './ProductListBasket.module.css';

const ProductListBasket = () => {
  const [itemData, setItemData] = React.useState(data);

  return (
    <div className={styles.container}>
      {itemData.map((item) => {
        return <ProductItemCheckbox data={item} key={item.id} />;
      })}
    </div>
  );
};

export default ProductListBasket;
