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
