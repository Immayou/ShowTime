import React, { useEffect, useState, useRef } from 'react';
import styled from 'styled-components';
import IconSVG from '../IconSVG/IconSVG';
import sprite from '../../sprite/sprite.svg';

interface IInputSelectProps {
  isOpenSelectOptions: boolean;
  onChangeIsOpenSelectOptions: React.Dispatch<React.SetStateAction<boolean>>;
  onChangeSelcectedOption: React.Dispatch<React.SetStateAction<string>>;
  placeholder: string;
  dataToRender?: any[] | undefined;
}

const InputSelect: React.FC<IInputSelectProps> = ({
  isOpenSelectOptions,
  onChangeIsOpenSelectOptions,
  onChangeSelcectedOption,
  placeholder,
  dataToRender,
}) => {
  const [selectedOption, setSelectedOption] = useState<string>('');
  const selectOptionsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        selectOptionsRef.current &&
        !selectOptionsRef.current.contains(event.target as Node)
      ) {
        onChangeIsOpenSelectOptions(false);
      }
    };

    if (isOpenSelectOptions) {
      document.addEventListener('click', handleClickOutside);
    } else {
      document.removeEventListener('click', handleClickOutside);
    }

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isOpenSelectOptions, onChangeIsOpenSelectOptions]);

  const toggleOptions = () => {
    onChangeIsOpenSelectOptions(!isOpenSelectOptions);
  };

  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
    onChangeSelcectedOption(option);
    onChangeIsOpenSelectOptions(false);
  };

  return (
    <SelectInputBox ref={selectOptionsRef}>
      <SelectInput
        value={selectedOption}
        placeholder={placeholder}
        onClick={toggleOptions}
        readOnly
      />
      <IconSVG
        width="10"
        height="5"
        href={`${sprite}#icon-arrow_drop_down`}
        className={isOpenSelectOptions ? '' : 'closed'}
      />
      {isOpenSelectOptions && (
        <SelectOptionsList>
          {dataToRender &&
            dataToRender?.length > 0 &&
            dataToRender.map(option => (
              <SelectOptionsItem
                key={option}
                onClick={() => handleOptionClick(option)}
              >
                {option}
              </SelectOptionsItem>
            ))}
        </SelectOptionsList>
      )}
    </SelectInputBox>
  );
};

export default InputSelect;

// Styled-components

const SelectInputBox = styled.div`
  position: relative;
  width: 100%;
`;

const SelectInput = styled.input`
  width: 100%;
  border: none;
  background-color: rgba(33, 33, 33, 1);
  font-size: 16px;
  font-weight: 350;
  color: rgba(255, 255, 255, 1);
  transition: border var(--transition), outline fill var(--transition);

  &::placeholder {
    color: rgba(255, 255, 255, 1);
    opacity: 0.5;
  }

  &:focus,
  &:hover {
    outline: none;
  }
`;

const SelectOptionsList = styled.ul`
  position: absolute;
  top: 45px;
  left: 0;
  width: 200px;
  max-height: 300px;
  overflow-y: auto;
  margin: 0;
  padding: 16px 0 0;
  list-style: none;
  background-color: rgba(33, 33, 33, 1);
  color: rgba(255, 255, 255, 1);
  box-shadow: 0px 4px 94px rgba(0, 0, 0, 1);
  z-index: 999;
`;

const SelectOptionsItem = styled.li`
  padding: 0 24px;
  cursor: pointer;
  transition: color var(--transition);

  &:hover {
    color: #8f9191;
  }

  &:not(:last-child) {
    margin-bottom: 13px;
  }
`;
