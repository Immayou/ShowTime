import styled, { keyframes } from 'styled-components';

const slideInFromRight = keyframes`
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0);
  }
`;

const slideOutToRight = keyframes`
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(100%);
  }
`;

export const SlidingMenu = styled.div<{ $isVisible: boolean }>`
  position: absolute;
  background-color: var(--colors-bg-sidebar);
  top: 0;
  right: 0;
  transform: ${({ $isVisible }) =>
    $isVisible ? 'translateX(0)' : 'translateX(101%)'};
  animation: ${({ $isVisible }) =>
      $isVisible ? slideInFromRight : slideOutToRight}
    0.5s ease forwards;
  border-radius: 12px;
  height: 100vh;
`;

export const StaticMenu = styled.div`
  position: relative;
`;

export const Title = styled.h1`
  padding-left: 24px;
  margin-bottom: 24px;
  font-size: 24px;
  font-weight: 500;
  line-height: 1;
  text-align: left;
  color: #ffffff;
`;

export const ContentContainer = styled.main`
  display: flex;
  width: auto;
  height: 100vh;
  padding: 75px 0px 0px 0px;
`;

export const Sidebar = styled.div`
  position: relative;
  padding: 41px 0;
  border-radius: 12px;
  width: auto;
  background-color: var(--colors-bg-sidebar);
`;

export const NavigationList = styled.ul<{
  $listHeight: number;
}>`
  width: 250px;
  background-color: #121212;
  max-height: ${({ $listHeight }) => `${$listHeight}px`};
  overflow-y: auto;
  &::-webkit-scrollbar {
    width: 1px;
  }
  &::-webkit-scrollbar-thumb {
    color: #ccc;
    background-color: #ccc;
    border-radius: 10px;
    height: 20px;
  }
  &::-webkit-scrollbar-track-piece {
    background-color: #ccc;
    color: #ccc;
  }
  @media (min-width: 1500px) {
    width: 380px;
  }
`;

export const List = styled.ul<{
  $listHeight: number;
  $categoriesAmount?: number;
}>`
  width: 250px;
  background-color: #121212;
  max-height: ${({ $listHeight }) => `${$listHeight}px`};
  /* height: ${({ $listHeight, $categoriesAmount }) =>
    $categoriesAmount
      ? `${
          $categoriesAmount * 71 > $listHeight
            ? $listHeight
            : $categoriesAmount * 71
        }px`
      : 'auto'}; */
  overflow-y: ${({ $listHeight, $categoriesAmount }) =>
    $categoriesAmount && $categoriesAmount * 72 > $listHeight
      ? 'auto'
      : 'visible'};
  &::-webkit-scrollbar {
    width: 1px;
  }
  &::-webkit-scrollbar-thumb {
    color: #ccc;
    background-color: #ccc;
    border-radius: 10px;
    height: 20px;
  }
  &::-webkit-scrollbar-track-piece {
    background-color: #ccc;
    color: #ccc;
  }
  @media (min-width: 1500px) {
    width: 380px;
  }
`;

export const ListItem = styled.li<{ $isActive: boolean }>`
  cursor: pointer;
  padding-left: 24px;
  display: flex;
  align-items: center;
  width: 100%;
  height: 62px;
  font-size: 16px;
  font-weight: 600;
  line-height: 1.1;
  text-align: left;
  color: var(--colors-text-navigation);
  background-color: ${({ $isActive }) =>
    $isActive ? 'var(--colors-bg-listitem-active)' : 'transparent'};
  transition: background-color var(--transition);
  &:hover {
    background-color: var(--colors-bg-listitem-hover);
  }
`;

export const StyledLink = styled.button`
  margin-left: 16px;
  background-color: transparent;
  color: var(--colors-text-navigation);
  cursor: pointer;
  border: none;
`;
