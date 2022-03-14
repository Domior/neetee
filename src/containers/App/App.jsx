import { BrowserRouter, Route, Routes } from 'react-router-dom';

// import Header from '../../components/Header';
import Footer from '../../components/Footer';

import routesConfig from '../../routes/routesConfig';

import styles from './App.module.css';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <div className={styles.wrapper}>
          {/* <Header /> */}
          <Routes>
            {routesConfig.map((route, index) => (
              <Route key={index} path={route.path} element={route.element} />
            ))}
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </>
  );
};

export default App;
