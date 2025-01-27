import React, { Fragment, lazy, Suspense, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import LoadingFallback from './LoadingFallback/LoadingFallback';
import PrivateRoute from './PrivateRoute';
import RestrictedRoute from './RestrictedRoute';
import AnimatedNotification from './AnimatedNotification/AnimatedNotification';
import { RootState } from '../store/store';
import { useAppDispatch, useAppSelector } from '../hooks&funcs/redux';
import { refreshUser } from '../store/slices/auth/operations';
import Header from './Header/Header';
import useRedirectIfNavigation from '../hooks&funcs/useRedirectIfNavigation';
import SideBarNavigationPage from '../pages/SideBarNavigationPage/SideBarNavigationPage';
import UsersPage from '../pages/UsersPage/UsersPage';

const LoginPage = lazy(() => import('../pages/LoginPage/LoginPage'));

export const App = () => {
  const dispatch = useAppDispatch();

  useRedirectIfNavigation();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <>
      <AnimatedNotification />
      <Suspense fallback={<LoadingFallback />}>
        <Routes>
          <Route path="/" element={<Header />}>
            <Route
              index
              element={
                <RestrictedRoute redirectTo="/navigation/users">
                  <LoginPage />
                </RestrictedRoute>
              }
            />
            <Route
              path="/login"
              element={
                <RestrictedRoute redirectTo="/navigation/users">
                  <LoginPage />
                </RestrictedRoute>
              }
            />
            <Route
              path="/navigation"
              element={
                <PrivateRoute redirectTo="/login">
                  <SideBarNavigationPage />
                </PrivateRoute>
              }
            >
              <Route path="users" element={<UsersPage />} />
            </Route>
            <Route path="*" element={<p>Not found</p>} />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
};
