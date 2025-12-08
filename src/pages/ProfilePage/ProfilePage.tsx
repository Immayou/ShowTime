import React, { useState } from 'react';
import {
  Wrapper,
  UserCard,
  Avatar,
  UserName,
  UploadBox,
  VideoPreview,
  VideoList,
  RightSideContainer,
  UserDescription,
} from './ProfilePage.styled';
import { useAppSelector } from '../../hooks&funcs/redux';
import { RootState } from '../../store/store';
import photo from '../../images/star.jpg';

export interface IUserProfile {
  id: string;
  name: string;
  email: string;
  photoURL: string;
}

const ProfilePage = () => {
  const [videos, setVideos] = useState<string[]>([]);

  const { profile } = useAppSelector((state: RootState) => state.auth);

  const handleVideoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const url = URL.createObjectURL(file);
    setVideos(prev => [...prev, url]);
  };

  return (
    <Wrapper>
      <UserCard>
        <Avatar src={photo} alt="User avatar" />
        <UserName>{'Johnny'}</UserName>
        <UserDescription>
          {"I like singing. I'm sure you'll be amazed by my talent."}
        </UserDescription>
      </UserCard>
      <RightSideContainer>
        <UploadBox>
          <label htmlFor="video-upload">Upload video</label>
          <input
            id="video-upload"
            type="file"
            accept="video/*"
            onChange={handleVideoUpload}
          />
        </UploadBox>
        {videos.length > 0 && (
          <VideoList>
            {videos.map((video, index) => (
              <VideoPreview key={index} controls src={video} />
            ))}
          </VideoList>
        )}
      </RightSideContainer>
    </Wrapper>
  );
};

export default ProfilePage;
ProfilePage.displayName = 'ProfilePage';
