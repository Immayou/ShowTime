import React from 'react';
import styled from 'styled-components';
import { closeAnimationModals } from '../../store/slices/modals/modalsSlice';
import { AppDispatch } from '../../store/store';

type ConfirmDialogProps = {
  title: string;
  content: string;
  dispatch: AppDispatch;
  onConfirm: () => void;
};

const ConfirmDialog: React.FC<ConfirmDialogProps> = ({
  title,
  content,
  onConfirm,
  dispatch,
}) => {
  const onCancel = () => {
    dispatch(closeAnimationModals());
  };
  return (
    <>
      <StyledModalTitle>Delete {title}?</StyledModalTitle>
      <StyledModalText>{content}</StyledModalText>
      <StyledButton type="button" onClick={onConfirm}>
        Delete
      </StyledButton>
      <StyledButton type="button" onClick={onCancel}>
        Cancel
      </StyledButton>
    </>
  );
};

export default ConfirmDialog;

export const StyledModalTitle = styled.p`
  text-align: center;
  font-weight: 556;
  font-size: 20px;
  line-height: 1;
  color: var(--text-modal);
  margin-bottom: 30px;
`;

export const StyledModalText = styled.p`
  font-weight: 457;
  line-height: 1.2;
  text-align: center;
  color: var(--text-modal);
  margin-bottom: 30px;
`;

export const StyledButton = styled.button<{ $isActive?: boolean }>`
  display: block;
  width: 100%;
  height: 52px;
  border-radius: 100px;
  background-color: ${({ $isActive }) =>
    $isActive
      ? 'var(--bg-calendar-top-filter-active)'
      : 'var(--bg-calendar-top-filter)'};
  color: ${({ $isActive }) =>
    $isActive ? 'var(--text-accent-btn-active)' : 'var(--text-accent-btn)'};
  transition: background-color var(--transition), color var(--transition);
  &:not(:last-child) {
    margin-bottom: 12px;
  }
  &:hover {
    background-color: var(--bg-calendar-top-filter-active);
    color: var(--text-accent-btn-active);
  }
`;
