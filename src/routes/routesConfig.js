// import HomePage from '@pages/HomePage';
// import MyAnnouncementsPage from '@pages/MyAnnouncementsPage';
// import OrdersPage from '@pages/OrdersPage';
// import FavouritesPage from '@pages/FavouritesPage';
// import SettingsPage from '@pages/SettingsPage';
import ConfirmationOfAnOrder from '../containers/pages/8.1/ConfirmationOfAnOrder';
import HomePage from '../containers/pages/HomePage';
import MyAnnouncementsPage from '../containers/pages/MyAnnouncementsPage';
import OrdersPage from '../containers/pages/OrdersPage';
import FavouritesPage from '../containers/pages/FavouritesPage';
import SettingsPage from '../containers/pages/SettingsPage';

const routesConfig = [
  {
    path: '/',
    exact: true,
    element: <HomePage />,
  },
  {
    path: '/my-announcements',
    exact: true,
    element: <MyAnnouncementsPage />,
  },
  {
    path: '/orders',
    exact: true,
    element: <OrdersPage />,
  },
  {
    path: '/favourites',
    exact: true,
    element: <FavouritesPage />,
  },
  {
    path: '/settings',
    exact: true,
    element: <SettingsPage />,
  },
  {
    path: '/ConfirmationOfAnOrder',
    exact: true,
    element: <ConfirmationOfAnOrder />,
  },
];

export default routesConfig;
