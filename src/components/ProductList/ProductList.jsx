import * as React from 'react';

import ProductItemMain from '@components/ProductItemMain';
import LoadMoreButton from '@components/Buttons/LoadMoreButton';

import data from './data';

// import styles from './ProductList.module.css';

const ProductList = (props) => {
  const [itemData, setItemData] = React.useState(data);

  return (
    <>
      {itemData.map((item) => {
        return <ProductItemMain type={props.type} data={item} key={item.id} />;
      })}
      <LoadMoreButton />
    </>
  );
};

export default ProductList;
