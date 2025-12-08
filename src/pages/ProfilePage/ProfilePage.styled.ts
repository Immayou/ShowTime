import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  padding: 40px;
  display: flex;
`;

export const RightSideContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: flex-start;
`;

export const UserCard = styled.div`
  width: 350px;
  height: fit-content;
  padding: 24px;
  border-radius: 20px;
  background: #ffffff;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  margin-right: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
`;

export const Avatar = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 100px;
  object-fit: cover;
`;

export const UserName = styled.h2`
  font-size: 22px;
  font-weight: 600;
  margin: 0;
`;

export const UserDescription = styled.p`
  font-size: 14px;
  color: #666;
  margin: 0;
  text-align: center;
`;

export const UploadBox = styled.div`
  margin-bottom: 30px;
  label {
    display: inline-block;
    padding: 10px 16px;
    background: var(--colors-bg-button-active);
    color: var(--colors-text-button);
    border-radius: 72px;
    cursor: pointer;
  }

  input {
    display: none;
  }
`;

export const VideoList = styled.div`
  width: 100%;

  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  /* justify-content: center; */
`;

export const VideoPreview = styled.video`
  width: 260px;
  height: 160px;
  border-radius: 12px;
  object-fit: cover;
  background: black;
`;
