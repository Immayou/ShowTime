import React, { useEffect } from 'react';
import RoundButton from '../RoundButton/RoundButton';
import { Outlet, useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks&funcs/redux';
import {
  logout,
  toggleProdTestServer,
} from '../../store/slices/auth/authSlice';
import { RootState } from '../../store/store';
import { HeaderTag, Wrapper } from './Header.styled';
import { toggleServer } from '../../api/aws_config';

interface IHeaderProps {}

const Header: React.FC<IHeaderProps> = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { isLoggedIn, isProdServerActive } = useAppSelector(
    (state: RootState) => state.auth
  );

  const onLogoutHandler = () => {
    dispatch(logout());
    navigate('/login');
  };

  const onToggleProdServerHandler = () => {
    dispatch(toggleProdTestServer(!isProdServerActive));
  };

  useEffect(() => {
    toggleServer(isProdServerActive);
  }, [isProdServerActive]);

  return (
    <Wrapper>
      <HeaderTag $isLoggined={isLoggedIn}>
        <RoundButton value="Logout" handler={onLogoutHandler} />
      </HeaderTag>
      <Outlet />
    </Wrapper>
  );
};

export default Header;
