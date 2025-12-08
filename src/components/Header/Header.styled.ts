import styled from 'styled-components';

export const Wrapper = styled.div`
  height: 100hv;
  display: flex;
  flex-direction: column;
  position: relative;
  padding: 7px 12px 12px 12px;
`;

export const HeaderTag = styled.header<{ $isLoggined: boolean }>`
  position: absolute;
  top: 7px;
  left: 50%;
  transform: translateX(-50%);
  padding: 0 72px 0 24px;
  width: calc(100% - (24px));
  height: 68px;
  display: ${({ $isLoggined }) => ($isLoggined ? 'flex' : 'none')};
  align-items: center;
  justify-content: flex-end;
  border-radius: 12px;
  background-color: var(--colors-bg-header);
`;
