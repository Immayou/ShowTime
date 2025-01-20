import styled from 'styled-components';

export const Content = styled.ul<{ $maxHeight: number }>`
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

export const TableRowHead = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 10px;
  align-items: center;
  margin-bottom: 10px;
  background-color: var(--colors-bg-item-property-description);
  padding: 12px;
`;

export const TableRow = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 10px;
  align-items: center;
  margin-bottom: 10px;
`;

export const TableHeading = styled.div`
  text-align: center;
  font-weight: bold;
`;

export const TableContent = styled.div`
  padding: 12px;
  text-align: start;
  background-color: #2e2e2e;
`;

export const InputSecondaryWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  justify-content: center;
`;

export const Input = styled.p`
  width: 100%;
  max-height: 200px;
  padding: 0 16px;
  font-size: 16px;
  font-weight: 457;
  line-height: 1.5;
  text-align: left;
  color: var(--colors-text-input);
  box-sizing: border-box;
  white-space: pre-wrap;
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
