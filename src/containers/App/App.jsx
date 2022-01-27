import { BrowserRouter, Routes, Route } from 'react-router-dom';

import routesConfig from '@routes/routesConfig';

import Header from '@components/Header';
import Footer from '@components/Footer';

import styles from './App.module.css';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <div className={styles.wrapper}>
          <Header />
          <Routes>
            {routesConfig.map((route, index) => (
              <Route
                key={index}
                path={route.path}
                exact={route.exact}
                element={route.element}
              />
            ))}
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </>
  );
};

export default App;
