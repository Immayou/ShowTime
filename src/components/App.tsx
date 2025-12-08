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

const LoginPage = lazy(() => import('../pages/LoginPage/LoginPage'));
const ProfilePage = lazy(() => import('../pages/ProfilePage/ProfilePage'));

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
                <RestrictedRoute redirectTo="/profile">
                  <LoginPage />
                </RestrictedRoute>
              }
            />
            <Route
              path="/login"
              element={
                <RestrictedRoute redirectTo="/profile">
                  <LoginPage />
                </RestrictedRoute>
              }
            />
            <Route
              path="/profile"
              element={
                <PrivateRoute redirectTo="/login">
                  <ProfilePage />
                </PrivateRoute>
              }
            />

            <Route path="*" element={<p>Not found</p>} />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
};
