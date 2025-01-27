import React, { FC, ChangeEvent } from 'react';
import { Input, InputWrapper } from './CustomInput.styled';

interface CustomInputProps {
  id?: string;
  width?: number;
  value: string | number;
  placeholder?: string;
  maxLength?: number;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  onClick?: (e: React.MouseEvent<HTMLInputElement>) => void;
  isReadOnly?: boolean;
}

const CustomInput: FC<CustomInputProps> = ({
  id,
  width,
  value,
  placeholder,
  isReadOnly = false,
  maxLength,
  onChange,
  onKeyDown = e => {
    if (e.key === 'Enter') {
      e.preventDefault();
      return;
    }
  },
  onClick,
}) => {
  return (
    <InputWrapper width={width}>
      <Input
        type="text"
        id={id}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        onKeyDown={onKeyDown}
        onClick={onClick}
        maxLength={maxLength}
        autoComplete="off"
        readOnly={isReadOnly}
      />
    </InputWrapper>
  );
};

export default CustomInput;
