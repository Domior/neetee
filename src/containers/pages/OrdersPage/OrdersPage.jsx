import DrawerMenu from '@components/DrawerMenu';
import OrderTabs from '@components/OrderTabs';

import styles from './OrdersPage.module.css';

const OrdersPage = () => {
  return (
    <>
      <div className={styles.wrapper}>
        <DrawerMenu />
        <OrderTabs />
      </div>
    </>
  );
};

export default OrdersPage;
