import styled from 'styled-components';
import IconButton from '../../../components/IconButton/IconButton';
import IconSVG from '../../../components/IconSVG/IconSVG';

export const Title = styled.h1`
  padding-left: 24px;
  margin-bottom: 24px;
  font-size: 24px;
  font-weight: 500;
  line-height: 1;
  text-align: left;
  color: #ffffff;
`;

export const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 41px 24px 22px 24px;
`;

export const TopLeftWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const MenuTitle = styled.p`
  margin-left: 5px;
  font-size: 24px;
  font-weight: 500;
  line-height: 1;
  text-align: left;
  color: #ffffff;
`;

export const AddButton = styled(IconButton)`
  cursor: pointer;
  border: none;
  outline: none;
  background-color: transparent;
`;

export const AddIcon = styled(IconSVG)`
  fill: rgba(255, 255, 255, 1);
  transition: fill var(--transition);
  &:hover {
    fill: #8f9191;
  }
`;
