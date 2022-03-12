// import HomePage from '@pages/HomePage';
// import MyAnnouncementsPage from '@pages/MyAnnouncementsPage';
// import OrdersPage from '@pages/OrdersPage';
// import FavouritesPage from '@pages/FavouritesPage';
// import SettingsPage from '@pages/SettingsPage';
import Tabs from '@components/Home/TabContainer';
import ConfirmationOfAnOrder from '../containers/pages/8.1/ConfirmationOfAnOrder';
import HomePage from '../containers/pages/HomePage';
import MyAnnouncementsPage from '../containers/pages/MyAnnouncementsPage';
import OrdersPage from '../containers/pages/OrdersPage';
import FavouritesPage from '../containers/pages/FavouritesPage';
import SettingsPage from '../containers/pages/SettingsPage';

const routesConfig = [
  {
    path: '/',
    element: <HomePage />,
    // children: [
    //   { index: true, element: <Tabs /> },
    //   { path: 'products', element: <div>hi</div> },
    //   { path: 'trending', element: <div>hi</div> },
    //   { path: 'products1688', element: <div>hi</div> },
    //   { path: 'wholesale', element: <div>hi</div> },
    // ],
  },
  {
    path: '/my-announcements',

    element: <MyAnnouncementsPage />,
  },
  {
    path: '/orders',

    element: <OrdersPage />,
  },
  {
    path: '/favourites',

    element: <FavouritesPage />,
  },
  {
    path: '/settings',

    element: <SettingsPage />,
  },
  {
    path: '/ConfirmationOfAnOrder',
    exact: true,
    element: <ConfirmationOfAnOrder />,
  },
];

export default routesConfig;
