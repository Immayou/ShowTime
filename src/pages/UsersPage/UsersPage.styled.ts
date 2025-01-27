import styled from 'styled-components';

export const Content = styled.ul<{ $maxHeight: number }>`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  max-height: ${props => `${props.$maxHeight}px`};
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
`;
