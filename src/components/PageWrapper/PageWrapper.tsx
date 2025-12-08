import React, { ReactNode } from 'react';
import { useAppSelector } from '../../hooks&funcs/redux';
import { PageWrapper, Title, TopWrapper } from './PageWrapper.styles';
import { RootState } from '../../store/store';

interface MainWrapperProps {
  children: ReactNode;
  title: string;
}

const MainWrapper: React.FC<MainWrapperProps> = ({ children, title }) => {
  // const { bucket, baseProdUrl } = useAppSelector(
  //   (state: RootState) => state.auth
  // );

  return (
    <PageWrapper>
      <TopWrapper>
        <Title>{title}</Title>
        {/* <div>
          <p>Bucket: {bucket}</p>
          <p>WebServer: {REACT_APP_ADMIN_API_URL}</p>
          <p>AuthServer: {REACT_APP_TEST_API_URL}</p>
          <p>ProdServer: {baseProdUrl}</p>
        </div> */}
      </TopWrapper>
      {children}
    </PageWrapper>
  );
};

export default MainWrapper;
