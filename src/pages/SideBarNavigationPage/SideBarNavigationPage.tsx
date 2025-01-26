import React, { useState, useEffect, useMemo } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import buttonData from '../../data/buttonData.json';
import IconSVG from '../../components/IconSVG/IconSVG';
import sprite from '../../sprite/sprite.svg';
import useWindowDimensions from '../../hooks&funcs/useWindowDimensions';
import { useAppDispatch, useAppSelector } from '../../hooks&funcs/redux';
import {
  ContentContainer,
  List,
  ListItem,
  NavigationList,
  Sidebar,
  SlidingMenu,
  StaticMenu,
  StyledLink,
  Title,
} from './SideBarNavigationPath.styled';

interface ButtonData {
  [key: string]: string;
}

const SideBarNavigationPage: React.FC = () => {
  const typedButtonData: ButtonData = buttonData;
  const [activeMenuItem, setActiveMenuItem] = useState<string>('');
  const windowSize = useWindowDimensions();
  const listHeight = useMemo(
    () => windowSize.height - (75 + 7 + 41 + 41 + 24 + 24),
    [windowSize.height]
  );
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useAppDispatch();

  useEffect(() => {
    const path = location.pathname.split('/').pop();
    const activePath = Object.values(typedButtonData).find(
      value => value === path
    );
    if (activePath) {
      setActiveMenuItem(activePath);
    }
  }, [location.pathname]);

  const handleClick = (menuItem: string) => {
    navigate(menuItem);
  };

  const handleBackToMenu = () => {
    navigate('users');
  };

  const sidebarContent = useMemo(() => {
    return (
      <>
        <StaticMenu>
          <Title>Menu</Title>
          <NavigationList $listHeight={listHeight}>
            {Object.entries(typedButtonData).map(([key, value], index) => (
              <ListItem
                key={index}
                onClick={() => handleClick(value)}
                $isActive={activeMenuItem === value}
              >
                <IconSVG
                  width="32"
                  height="32"
                  href={`${sprite}#icon-${value}`}
                />
                <StyledLink>{key}</StyledLink>
              </ListItem>
            ))}
          </NavigationList>
        </StaticMenu>
      </>
    );
  }, [activeMenuItem, listHeight]);

  return (
    <ContentContainer>
      <Sidebar>{sidebarContent}</Sidebar>
      <Outlet />
    </ContentContainer>
  );
};

export default SideBarNavigationPage;
