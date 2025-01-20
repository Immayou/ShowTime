import React, { useMemo } from 'react';
import styled from 'styled-components';

interface ISwitch {
  isOn: boolean;
  handleToggle: () => void;
  colorOne: string;
  colorTwo: string;
}

const SwitchCheckbox = styled.input`
  height: 0;
  width: 0;
  visibility: hidden;
`;

const SwitchLabel = styled.label<{
  $isOn: boolean;
  $colorOne: string;
  $colorTwo: string;
}>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  width: 50px;
  height: 29px;
  background: ${props => (props.$isOn ? props.$colorOne : props.$colorTwo)};
  border-radius: 100px;
  position: relative;
  transition: background-color 0.2s;
`;

const SwitchButton = styled.span`
  content: '';
  position: absolute;
  top: 2px;
  left: 2px;
  width: 25px;
  height: 25px;
  border-radius: 45px;
  transition: 0.2s;
  background: #fff;
  box-shadow: 0 0 2px 0 rgba(10, 10, 10, 0.29);

  ${SwitchCheckbox}:checked + ${SwitchLabel} & {
    left: calc(100% - 2px);
    transform: translateX(-100%);
  }

  ${SwitchLabel}:active & {
    width: 30px;
  }
`;

export const Switch: React.FC<ISwitch> = ({
  isOn,
  handleToggle,
  colorOne,
  colorTwo,
}) => {
  // Используем useMemo для генерации id один раз
  const switchId = useMemo(
    () => `switch-${Math.random().toString(36).substr(2, 9)}`,
    []
  );

  return (
    <>
      <SwitchCheckbox
        checked={isOn}
        onChange={handleToggle}
        id={switchId}
        type="checkbox"
      />
      <SwitchLabel
        $isOn={isOn}
        $colorOne={colorOne}
        $colorTwo={colorTwo}
        htmlFor={switchId}
      >
        <SwitchButton />
      </SwitchLabel>
    </>
  );
};
