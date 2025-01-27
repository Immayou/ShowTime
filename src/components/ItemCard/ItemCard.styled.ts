import styled from 'styled-components';
import IconButton from '../IconButton/IconButton';
import IconSVG from '../IconSVG/IconSVG';

export const StyledCard = styled.li`
  position: relative;
  list-style-type: none;
  box-sizing: border-box;
  height: fit-content;
  border-radius: 12px;
  width: 200px;
`;

export const CardWrapper = styled.div`
  position: relative;
  border: 0.5px solid #343434;
  border-radius: 12px;
`;

export const ImgThumb = styled.div`
  width: 200px;
  height: 263px;
  cursor: pointer;
`;

export const CardImg = styled.img`
  border-radius: 12px;
  object-fit: cover;
  object-position: center;
`;

export const CardTopText = styled.p`
  position: absolute;
  left: 10%;
  top: 12px;
  margin: 0;
  font-family: var(--font-main-regular);
  font-size: 17px;
  font-weight: 400;
  line-height: 1.35;
  letter-spacing: 0em;
  color: #ffffff;
`;

export const BottomContentWrapper = styled.div`
  position: absolute;
  left: 5%;
  bottom: 5%;
`;
export const CardBottomBox = styled.div`
  display: flex;
  align-items: center;
`;

export const PropertyCheckbox = styled.input`
  width: 20px;
  height: 20px;
`;

export const TopOptionsBtn = styled(IconButton)`
  position: absolute;
  top: 9px;
  right: 9px;
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background-color: transparent;
  background-color: #272727;
  border: 0.5px solid #343434;
  &:hover {
    .icon {
      fill: #8f9191;
    }
  }
`;

export const Icon = styled(IconSVG)`
  fill: #e5e5e5;
  transition: fill var(--transition);
`;

export const CardText = styled.p`
  margin: 0;
  font-family: var(--font-main-regular);
  font-size: 17px;
  font-weight: 400;
  line-height: 1.35;
  letter-spacing: 0em;
  color: #ffffff;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
