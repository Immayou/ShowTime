import React from 'react';

interface IIconButtonProps {
  type: 'button' | 'submit' | 'reset';
  className?: string;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  children?: React.ReactNode;
  isDisabled?: boolean;
}

const IconButton: React.FC<IIconButtonProps> = ({
  children,
  type,
  className,
  onClick,
  isDisabled,
}) => {
  return (
    <button
      disabled={isDisabled}
      className={className}
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default IconButton;
