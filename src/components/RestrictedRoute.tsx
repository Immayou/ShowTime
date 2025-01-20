import React, { Suspense } from 'react';
import { Navigate } from 'react-router-dom';
import { RootState } from '../store/store';
import { useAppSelector } from '../hooks&funcs/redux';
import { IRouteProps } from './PrivateRoute';
import LoadingFallback from '../components/LoadingFallback/LoadingFallback';

const RestrictedRoute: React.FC<IRouteProps> = ({
  children,
  redirectTo = '/',
}) => {
  const { isLoggedIn } = useAppSelector((state: RootState) => state.auth);

  if (isLoggedIn === undefined) {
    return <LoadingFallback />;
  }

  return isLoggedIn ? (
    <Navigate to={redirectTo} />
  ) : (
    <Suspense fallback={<LoadingFallback />}>{children}</Suspense>
  );
};

export default RestrictedRoute;
