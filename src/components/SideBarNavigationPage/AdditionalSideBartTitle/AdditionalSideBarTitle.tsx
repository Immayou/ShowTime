import React from 'react';
import sprite from '../../../sprite/sprite.svg';
import { useNavigate } from 'react-router-dom';
import { setIsOpenAddCategoryModal } from '../../../store/slices/modals/modalsSlice';
import {
  AddButton,
  AddIcon,
  MenuTitle,
  TitleWrapper,
  TopLeftWrapper,
} from './AdditionalSideBarTitle.styled';
import { useAppDispatch } from '../../../hooks&funcs/redux';

interface AdditionalSideBarTitleProps {
  title: string;
  onBack: () => void;
}

const AdditionalSideBarTitle: React.FC<AdditionalSideBarTitleProps> = ({
  title,
  onBack,
}) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handleBackToMenu = () => {
    onBack();
    navigate('banners');
  };

  return (
    <TitleWrapper>
      <TopLeftWrapper>
        <AddButton type="button" onClick={handleBackToMenu}>
          <AddIcon width="32" height="32" href={`${sprite}#icon-arrow_back`} />
        </AddButton>
        <MenuTitle>{title}</MenuTitle>
      </TopLeftWrapper>
      <AddButton
        type="button"
        onClick={() => dispatch(setIsOpenAddCategoryModal())}
      >
        <AddIcon width="17" height="17" href={`${sprite}#icon-add`} />
      </AddButton>
    </TitleWrapper>
  );
};

export default AdditionalSideBarTitle;
