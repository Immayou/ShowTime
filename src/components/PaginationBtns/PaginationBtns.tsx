import React, { FC } from 'react';
import RoundButton from '../RoundButton/RoundButton';
import { BtnWrapper, MainWrapper } from './PaginationBtns.styled';

interface PaginationButtonsProps {
  onGet: () => void;
  onPrev: () => void;
  onNext: () => void;
}

const PaginationButtons: FC<PaginationButtonsProps> = ({
  onGet,
  onPrev,
  onNext,
}) => {
  return (
    <MainWrapper>
      <BtnWrapper>
        <RoundButton value="Get" handler={onGet} />
      </BtnWrapper>
      <BtnWrapper>
        <RoundButton value="Prev" handler={onPrev} />
      </BtnWrapper>
      <BtnWrapper>
        <RoundButton value="Next" handler={onNext} />
      </BtnWrapper>
    </MainWrapper>
  );
};

export default PaginationButtons;
