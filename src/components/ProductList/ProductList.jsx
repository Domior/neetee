import * as React from 'react';

import ProductItem from '@components/ProductItem';
import LoadMoreButton from '@components/Buttons/LoadMoreButton';

import data from './data';

// import styles from './ProductList.module.css';

const ProductList = () => {
  const [itemData, setItemData] = React.useState(data);

  return (
    <>
      {itemData.map((item) => {
        return <ProductItem data={item} key={item.id} />;
      })}
      <LoadMoreButton />
    </>
  );
};

export default ProductList;
