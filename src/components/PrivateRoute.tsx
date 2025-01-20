import React, { ReactNode, Suspense } from 'react';
import { Navigate } from 'react-router-dom';
import { RootState } from '../store/store';
import { useAppSelector } from '../hooks&funcs/redux';
import LoadingFallback from '../components/LoadingFallback/LoadingFallback';

export interface IRouteProps {
  children: ReactNode;
  redirectTo: string;
}

const PrivateRoute: React.FC<IRouteProps> = ({
  children,
  redirectTo = '/',
}) => {
  const { isLoggedIn } = useAppSelector((state: RootState) => state.auth);

  if (isLoggedIn === undefined) {
    return <LoadingFallback />;
  }

  return isLoggedIn ? (
    <Suspense fallback={<LoadingFallback />}>{children}</Suspense>
  ) : (
    <Navigate to={redirectTo} />
  );
};

export default PrivateRoute;
