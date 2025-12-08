import React, { ReactNode, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import styled, { keyframes } from 'styled-components';
import { useAppSelector, useAppDispatch } from '../../hooks&funcs/redux';
import { RootState } from '../../store/store';
import { closeAnimationModals } from '../../store/slices/modals/modalsSlice';
import { anulateNotificationData } from '../../store/slices/notifications/notificationsSlice';
import RoundButton from '../RoundButton/RoundButton';

interface IModalWrapperProps {
  children: ReactNode;
  isModalSecondary?: boolean;
  isCentered?: boolean;
  paddingLeft?: number;
  maxHeight?: number;
}

const modalRoot = document.querySelector('#modal-root');

const ModalBackdrop = styled.div<{
  $animationState: string;
}>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--bg-modal);
  z-index: 10000;
`;

const ModalWhiteBackdrop = styled.div<{
  $animationState: string;
}>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--bg);
  z-index: 10000;
`;

const ModalContent = styled.div<{
  $isCentered?: boolean;
  $paddingLeft?: number;
  $maxHeight?: number;
}>`
  position: absolute;
  top: 50%;
  left: ${props =>
    props.$isCentered
      ? '50%'
      : 'calc(238px + (100% - 238px - 339px - 30%) / 2)'};
  transform: ${props =>
    props.$isCentered ? 'translate(-50%, -50%)' : 'translateY(-50%)'};
  padding: ${props =>
    props.$paddingLeft ? `32px ${props.$paddingLeft}px` : '32px 30px'};
  width: 30%;
  max-height: ${props => (props.$maxHeight ? `${props.$maxHeight}px` : '80%')};
  background: var(--bg-modal-content);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  backdrop-filter: blur(164px);
  border-radius: 32px;
  @media screen and (min-width: 1728px) {
    left: ${props =>
      props.$isCentered
        ? '50%'
        : 'calc(320px + (100% - 320px - 440px - 30%) / 2)'};
  }
  /* overflow-y: auto;
  &::-webkit-scrollbar {
    width: 1px;
  }
  &::-webkit-scrollbar-thumb {
    color: transparent;
    background-color: transparent;
    border-radius: 10px;
    height: 20px;
  }
  &::-webkit-scrollbar-track-piece {
    background-color: transparent;
    color: transparent;
  } */
`;

const ModalWrapper: React.FC<IModalWrapperProps> = ({
  children,
  isModalSecondary,
  isCentered,
  paddingLeft,
  maxHeight,
}) => {
  const animationRef = useRef<HTMLDivElement>(null);
  const dispatch = useAppDispatch();

  const { animationState, animationSecondaryState, isOpenModal } =
    useAppSelector((state: RootState) => state.modals);

  useEffect(() => {
    const handleKeydown = (e: any) => {
      if (e.code === 'Escape') {
        handleClose();
      }
    };

    window.addEventListener('keydown', handleKeydown);

    return () => {
      window.removeEventListener('keydown', handleKeydown);
    };
  }, []);

  const handleClose = () => {
    dispatch(closeAnimationModals());
    dispatch(anulateNotificationData());
  };

  return createPortal(
    !isModalSecondary ? (
      <ModalBackdrop ref={animationRef} $animationState={animationState}>
        <ModalContent
          $isCentered={isCentered}
          $paddingLeft={paddingLeft}
          $maxHeight={maxHeight}
        >
          {children}
          <CloseBtnWrapper>
            <RoundButton handler={handleClose} value="Close" />
          </CloseBtnWrapper>
        </ModalContent>
      </ModalBackdrop>
    ) : (
      <ModalBackdrop
        ref={animationRef}
        $animationState={animationSecondaryState}
      >
        <ModalContent $isCentered={isCentered} $maxHeight={maxHeight}>
          {children}
          <CloseBtnWrapper>
            <RoundButton handler={handleClose} value="Close" />
          </CloseBtnWrapper>
        </ModalContent>
      </ModalBackdrop>
    ),
    modalRoot || document.createElement('div')
  );
};

export default ModalWrapper;

const CloseBtnWrapper = styled.div`
  cursor: pointer;
  position: absolute;
  top: 24px;
  right: 24px;
`;
