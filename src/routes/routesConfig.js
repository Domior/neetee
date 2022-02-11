import HomePage from '@pages/HomePage';
import MyAnnouncementsPage from '@pages/MyAnnouncementsPage';
import OrdersPage from '@pages/OrdersPage';
import FavouritesPage from '@pages/FavouritesPage';
import SettingsPage from '@pages/SettingsPage';
import Tabs from '../components/Home/TabContainer';
const routesConfig = [
  {
    path: '/',
    element: <HomePage />,
    children: [
      { index: true, element: <Tabs /> },
      { path: 'products', element: <div>hi</div> },
      { path: 'trending', element: <div>hi</div> },
      { path: 'products1688', element: <div>hi</div> },
      { path: 'wholesale', element: <div>hi</div> },
    ],
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
];

export default routesConfig;
