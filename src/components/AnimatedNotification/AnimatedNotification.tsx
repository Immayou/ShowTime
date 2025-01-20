import React, { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import IconSVG from '../IconSVG/IconSVG';
import sprite from '../../sprite/sprite.svg';
import { useAppDispatch, useAppSelector } from '../../hooks&funcs/redux';
import { RootState } from '../../store/store';
import {
  hideNotification,
  setNotificationAcception,
} from '../../store/slices/notifications/notificationsSlice';
import RoundButton from '../RoundButton/RoundButton';

interface IAnimatedNotificationProps {}

const AnimatedNotification: React.FC<IAnimatedNotificationProps> = () => {
  const dispatch = useAppDispatch();
  const { message, isVisible, isAcceptionNeeded, acceptionValue, errorType } =
    useAppSelector((state: RootState) => state.notification);

  const [isLeaving, setIsLeaving] = useState(false);

  useEffect(() => {
    if (isVisible && !isAcceptionNeeded) {
      const timer = setTimeout(() => {
        setIsLeaving(true);
        setTimeout(() => {
          dispatch(hideNotification());
          setIsLeaving(false);
        }, 500);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [isVisible, isAcceptionNeeded, dispatch]);

  const onAcceptionBtnHandler = (value: boolean) => {
    setIsLeaving(true);
    setTimeout(() => {
      dispatch(setNotificationAcception(value));
      dispatch(hideNotification());
      setIsLeaving(false);
    }, 500);
  };

  if (!isVisible && !isLeaving) return null;

  return (
    <Wrapper id="notificationWrapper" $isLeaving={isLeaving}>
      <TopWrapper>
        <IconWrapper>
          <IconSVG
            width={'44'}
            height={'44'}
            href={`${sprite}#icon-${errorType ? 'attention' : 'check'}`}
          />
        </IconWrapper>
        <Text>{message}</Text>
      </TopWrapper>
      {isAcceptionNeeded && (
        <BottomWrapper>
          <RoundButton
            value="Cancel"
            handler={() => onAcceptionBtnHandler(false)}
          />
          <RoundButton
            value="Save"
            handler={() => onAcceptionBtnHandler(true)}
          />
        </BottomWrapper>
      )}
    </Wrapper>
  );
};

export default AnimatedNotification;

const slideInFromRight = keyframes`
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0);
  }
`;

const slideOutToRight = keyframes`
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(100%);
  }
`;

const Wrapper = styled.div<{ $isLeaving: boolean }>`
  position: fixed;
  max-width: 500px;
  top: 82px;
  right: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 26px 34px;
  background-color: var(--colors-bg-sidebar);
  border-radius: 25px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  z-index: 1999;
  animation: ${props => (props.$isLeaving ? slideOutToRight : slideInFromRight)}
    0.5s ease forwards;
  white-space: wrap;
  display: -webkit-flex;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const TopWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 12px;
  white-space: wrap;
  display: -webkit-flex;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const BottomWrapper = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Text = styled.p`
  color: var(--colors-text-title);
  font-size: 20px;
  line-height: 1.2;
`;

const IconWrapper = styled.div`
  margin-right: 20px;
`;
