import HomePage from '@pages/HomePage';
import MyAnnouncementsPage from '@pages/MyAnnouncementsPage';
import OrdersPage from '@pages/OrdersPage';
import FavouritesPage from '@pages/FavouritesPage';
import SettingsPage from '@pages/SettingsPage';

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
];

export default routesConfig;
