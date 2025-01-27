import React, { FC } from 'react';
import styled from 'styled-components';
import RoundButton from '../RoundButton/RoundButton';

const FlexBox = styled.div`
  display: flex;
  gap: 10px;
`;

interface FilterButtonsGroupProps {
  buttons: { value: string; handler: () => void; isActive: boolean }[];
}

const FilterButtonsGroup: FC<FilterButtonsGroupProps> = ({ buttons }) => {
  return (
    <FlexBox>
      {buttons.map(({ value, handler, isActive }) => (
        <RoundButton
          key={value}
          value={value}
          handler={handler}
          isActive={isActive}
        />
      ))}
    </FlexBox>
  );
};

export default FilterButtonsGroup;
