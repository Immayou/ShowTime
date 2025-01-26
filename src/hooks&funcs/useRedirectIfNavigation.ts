import { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const useRedirectIfNavigation = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (
      location.pathname === '/navigation' ||
      location.pathname === '/navigation/'
    ) {
      navigate('/navigation/users', { replace: true });
    }
  }, [location.pathname, navigate]);
};

export default useRedirectIfNavigation;
