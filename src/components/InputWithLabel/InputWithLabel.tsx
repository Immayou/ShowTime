import React, { useState, ChangeEvent } from 'react';
import styled from 'styled-components';
import InputSelect from '../InputSelect/InputSelect';
import { guid } from '../../hooks&funcs/idGenerator';
import { InputTypes } from '../../enums/General';
import sprite from '../../sprite/sprite.svg';

interface IInputWithLabelProps {
  placeholder: string;
  labelText: string;
  type: InputTypes;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  dataSelect?: any[];
  value?: string;
  id: string;
}

const InputWithLabel: React.FC<IInputWithLabelProps> = ({
  placeholder,
  labelText,
  type,
  onChange,
  dataSelect,
  value,
  id,
}) => {
  const [isOpenSelectOptions, setIsOpenSelectOptions] =
    useState<boolean>(false);
  const [, setSelectedOption] = useState<string>('');
  const inputId = guid();

  return (
    <InputWrapper>
      <Label htmlFor={`input-${inputId}`}>{labelText}</Label>
      {type === InputTypes.TEXTAREA && (
        <Textarea
          id={`input-${inputId}`}
          name={labelText}
          rows={9}
          placeholder={placeholder}
        />
      )}
      {type === InputTypes.SELECT && (
        <InputSelect
          isOpenSelectOptions={isOpenSelectOptions}
          onChangeIsOpenSelectOptions={setIsOpenSelectOptions}
          onChangeSelcectedOption={setSelectedOption}
          placeholder={placeholder}
          dataToRender={dataSelect}
        />
      )}
      {type === InputTypes.TEXT && (
        <Input
          id={`input-${inputId}`}
          type="text"
          placeholder={placeholder}
          autoComplete="off"
          onChange={onChange}
          value={value}
          // required
        />
      )}
      {type === InputTypes.READ_ONLY && (
        <Input id={`input-${inputId}`} type="text" value={value} readOnly />
      )}
      {type === InputTypes.PASSWORD && (
        <Input
          id={`input-${inputId}`}
          type="password"
          placeholder={placeholder}
          onChange={onChange}
          autoComplete="off"
          // required
        />
      )}
    </InputWrapper>
  );
};

export default InputWithLabel;

const InputWrapper = styled.div`
  width: 375px;
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin-bottom: 17px;
`;

const Label = styled.label`
  margin: 0;
  font-family: var(--font-main-bold);
  font-size: 14px;
  font-weight: 700;
  line-height: 1.25;
  color: rgba(255, 255, 255, 1);
`;

const Input = styled.input`
  box-sizing: border-box;
  margin: 0;
  padding: 7px 13px;
  width: 271px;
  border: none;
  background-color: rgba(33, 33, 33, 1);
  font-family: var(--font-main-regular);
  font-size: 16px;
  font-weight: 350;
  line-height: 1.5;
  color: rgba(255, 255, 255, 1);
  transition: border var(--transition), outline fill var(--transition);

  &::placeholder {
    color: rgba(255, 255, 255, 1);
    opacity: 0.5;
    transition: opacity var(--transition);
  }

  &:focus,
  &:hover {
    border: none;
    outline: none;
  }

  &:focus::placeholder {
    opacity: 0;
  }
`;

const Textarea = styled.textarea`
  box-sizing: border-box;
  margin: 0;
  padding: 7px 13px;
  width: 271px;
  border: none;
  background-color: rgba(33, 33, 33, 1);
  font-family: var(--font-main-regular);
  font-size: 16px;
  font-weight: 350;
  line-height: 1.5;
  color: rgba(255, 255, 255, 1);
  resize: vertical;
  transition: border var(--transition), outline fill var(--transition);

  &::placeholder {
    color: rgba(255, 255, 255, 1);
    opacity: 0.5;
    transition: opacity var(--transition);
  }

  &:focus,
  &:hover {
    border: none;
    outline: none;
  }

  &:focus::placeholder {
    opacity: 0;
  }
`;
