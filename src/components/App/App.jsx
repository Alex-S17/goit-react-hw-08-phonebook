import { useEffect } from 'react';
// import { useEffect, lazy } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { Layout } from '../Layout/Layout';
import { PrivateRoute } from '../PrivateRoute';
import { RestrictedRoute } from '../RestrictedRoute';
import { refreshUser } from 'redux/auth/operations';
import { useAuth } from '../../hooks/useAuth';

// const HomePage = lazy(() => import('../../pages/Home/HomePage'));
// const RegisterPage = lazy(() => import('../../pages/Register/RegisterPage'));
// const LoginPage = lazy(() => import('../../pages/Login/LoginPage'));
// const ContactsPage = lazy(() => import('../../pages/Contacts/ContactsPage'));

import { HomePage } from '../../pages/Home/HomePage';
import { RegisterPage } from '../../pages/Register/RegisterPage';
import { LoginPage } from '../../pages/Login/LoginPage';
import { ContactsPage } from '../../pages/Contacts/ContactsPage';

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route
          path="/register"
          element={
            <RestrictedRoute redirectTo="/tasks" component={<RegisterPage />} />
          }
        />
        <Route
          path="/login"
          element={
            <RestrictedRoute redirectTo="/tasks" component={<LoginPage />} />
          }
        />
        <Route
          path="/contacts"
          element={
            <PrivateRoute redirectTo="/login" component={<ContactsPage />} />
          }
        />
      </Route>
    </Routes>
  );
};

//MY OLD APP

// import { Route, Routes } from 'react-router-dom';
// import { Layout } from '../Layout/Layout';

// import css from './App.module.css';
// import { HomePage } from '../../pages/Home/HomePage';
// import { RegisterPage } from '../../pages/Register/RegisterPage';
// import { LoginPage } from '../../pages/Login/LoginPage';
// import { ContactsPage } from '../../pages/Contacts/ContactsPage';

// export function App() {
//   return (
//     <div className={css.wrapper}>
//       <Routes>
//         <Route path="/" element={<Layout />}>
//           <Route index element={<HomePage />} />
//           <Route path="/register" element={<RegisterPage />} />
//           <Route path="/login" element={<LoginPage />} />
//           <Route path="/contacts" element={<ContactsPage />} />
//         </Route>
//       </Routes>
//     </div>
//   );
// }
