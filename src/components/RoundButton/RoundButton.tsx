import React from 'react';
import styled from 'styled-components';

interface IRoundButton {
  value: string;
  type?: 'submit' | 'reset';
  handler?: () => void;
  isActive?: boolean;
  paddingTop?: number;
  paddingLeft?: number;
  fontSize?: number;
  isDisabled?: boolean;
}

const RoundButton: React.FC<IRoundButton> = ({
  value,
  type,
  handler,
  isActive,
  paddingLeft,
  paddingTop,
  fontSize,
  isDisabled,
}) => {
  return (
    <Button
      onClick={handler}
      type={type ? type : 'button'}
      $isActive={isActive}
      $paddingTop={paddingTop ? paddingTop : 11}
      $paddingLeft={paddingLeft ? paddingLeft : 20}
      $fontSize={fontSize ? fontSize : 12}
      disabled={isDisabled}
      $isDisabled={isDisabled}
    >
      {value}
    </Button>
  );
};

export default RoundButton;

const Button = styled.button<{
  $isActive?: boolean;
  $paddingTop: number;
  $paddingLeft: number;
  $fontSize: number;
  $isDisabled: boolean | undefined;
}>`
  font-size: ${props => `${props.$fontSize}px`};
  line-height: 1.2;
  padding-top: ${props => `${props.$paddingTop}px`};
  padding-bottom: ${props => `${props.$paddingTop}px`};
  padding-left: ${props => `${props.$paddingLeft}px`};
  padding-right: ${props => `${props.$paddingLeft}px`};
  background-color: ${props => (props.$isActive ? '#e5e5e5' : 'transparent')};
  border-radius: 72px;
  color: ${props =>
    props.$isActive ? 'black' : 'var(--colors-text-button-notactive)'};
  outline: none;
  border: ${props => (props.$isActive ? 'none' : '0.5px solid #343434')};
  font-family: var(--font-main);
  font-weight: bold;
  opacity: ${props => (props.$isDisabled ? 0.6 : 1)};
  cursor: pointer;
  border: 0.5px solid transparent;
  transition: background-color var(--transition), font-family var(--transition),
    border var(--transition), color var(--transition);

  &:hover {
    border: 0.5px solid transparent;
    background-color: #8f9191;
    font-family: var(--font-main);
    color: var(--colors-text-button);
  }

  ${props =>
    !props.$isActive &&
    `
    background-color: transparent;
    border: 0.5px solid #343434;
    color: var(--colors-text-button-notactive);
    font-family: var(--font-main);
    transition: background-color var(--transition);

    &:hover {
      background-color: #8f9191;
    }
  `}
`;
