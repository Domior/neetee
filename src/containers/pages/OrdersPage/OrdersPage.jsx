import Menu from '@components/Menu';
import OrderTabs from '@components/OrderTabs';

import styles from './OrdersPage.module.css';

const OrdersPage = () => {
  return (
    <>
      <div className={styles.wrapper}>
        <Menu />
        <OrderTabs />
      </div>
    </>
  );
};

export default OrdersPage;
