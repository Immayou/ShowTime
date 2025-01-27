import React from 'react';
import {
  BottomContentWrapper,
  CardBottomBox,
  CardImg,
  CardText,
  CardWrapper,
  ImgThumb,
  PropertyCheckbox,
  StyledCard,
} from './ItemCard.styled';
import { IUserData } from '../../store/slices/users/types';
import { UserTypes } from '../../enums/General';

interface BaseItemProps {
  dataItem: IUserData;
  onClick: (id: string) => void;
  children?: React.ReactNode;
}

const ItemCard = ({ dataItem, onClick, children }: BaseItemProps) => {
  return (
    <StyledCard>
      <CardWrapper
        style={{
          marginBottom: '12px',
        }}
        onClick={() => onClick(dataItem.id)}
      >
        <ImgThumb>
          <CardImg
            width="147"
            height="263"
            src={dataItem.cover_url}
            alt="item_image"
            className="card_img"
          />
        </ImgThumb>
        {children}
        <BottomContentWrapper>
          {dataItem.banned && (
            <CardBottomBox>
              <span style={{ marginRight: '5px' }}>Banned: </span>
              <PropertyCheckbox
                type="checkbox"
                checked={dataItem.banned}
                disabled
              />
            </CardBottomBox>
          )}

          <CardBottomBox>
            <span>Artist:</span>
            <PropertyCheckbox
              type="checkbox"
              checked={dataItem.type === UserTypes.ARTIST}
              disabled
            />
          </CardBottomBox>
        </BottomContentWrapper>
      </CardWrapper>

      <CardText>{dataItem.name}</CardText>
      {dataItem.fields_of_activity.map(el => (
        <CardText>{el}</CardText>
      ))}
    </StyledCard>
  );
};

export default ItemCard;
