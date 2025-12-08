import styled from 'styled-components';

export const ScrollWrapper = styled.div<{ $listHeight: number }>`
  height: ${({ $listHeight }) =>
    $listHeight === 0 ? 'auto' : `${$listHeight}px`};
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 1px;
  }

  &::-webkit-scrollbar-thumb {
    color: transparent;
    background-color: transparent;
    border-radius: 10px;
    height: 20px;
  }

  &::-webkit-scrollbar-track-piece {
    background-color: transparent;
    color: transparent;
  }
`;
