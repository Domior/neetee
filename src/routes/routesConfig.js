import HomePage from '@pages/HomePage';
import ViewedPage from '@pages/ViewedPage';

const routesConfig = [
    {
        path: '/',
        exact: true,
        element: <HomePage />
    },
    {
        path: '/viewed',
        exact: true,
        element: <ViewedPage />
    },

]

export default routesConfig;
