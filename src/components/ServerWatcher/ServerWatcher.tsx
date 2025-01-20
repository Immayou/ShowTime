import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { RootState } from '../../store/store';
import { updateAxiosBaseUrl } from '../../api/aws_config';

const ServerWatcher = () => {
  const isProdServerActive = useSelector(
    (state: RootState) => state.auth.isProdServerActive
  );

  useEffect(() => {
    updateAxiosBaseUrl();
  }, [isProdServerActive]);

  return null;
};

export default ServerWatcher;
