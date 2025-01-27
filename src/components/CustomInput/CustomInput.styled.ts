import styled from 'styled-components';

export const InputWrapper = styled.div<{ width?: number }>`
  width: ${({ width }) => (width ? `${width}%` : 'auto')};
  flex-grow: 0;
  display: flex;
  flex-direction: column;
  position: relative;
  &:not(:last-child) {
    margin-right: 10px;
  }
`;

export const Input = styled.input`
  width: 100%;
  height: 42px;
  background-color: #212121;
  padding-left: 16px;
  padding-right: 16px;
  flex-shrink: 0;
  font-size: 16px;
  font-weight: 457;
  line-height: 1.5;
  text-align: left;
  color: var(--colors-text-input);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  &::placeholder {
    color: rgba(255, 255, 255, 1);
    opacity: 0.5;
    transition: opacity var(--transition);
  }

  &:focus:not([readOnly])::placeholder {
    opacity: 0;
  }
`;
