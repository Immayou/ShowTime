import styled from 'styled-components';

export const MainWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const BtnWrapper = styled.div`
  &:not(:last-child) {
    margin-right: 10px;
  }
`;
