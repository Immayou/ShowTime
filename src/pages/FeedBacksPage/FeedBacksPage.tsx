import React, { Fragment, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks&funcs/redux';
import { RootState } from '../../store/store';
import useWindowDimensions from '../../hooks&funcs/useWindowDimensions';
import styled from 'styled-components';
import MainWrapper from '../../components/PageWrapper/PageWrapper';

import {
  Content,
  Input,
  TableContent,
  TableHeading,
  TableRow,
  TableRowHead,
} from './FeedBacksPage.styled';

const FeedbacksPage = () => {
  const windowSize = useWindowDimensions();
  const listHeight =
    windowSize.height - (75 + 7 + 41 + 41 + 64 + 30 + 12 + 12 + 16 + 10);

  const dispatch = useAppDispatch();

  return (
    <MainWrapper title="Feedbacks">
      <div>
        <TableRowHead>
          <TableHeading>Element preview</TableHeading>
          <TableHeading>Likes</TableHeading>
          <TableHeading>User name</TableHeading>
          <TableHeading>User email</TableHeading>
          <TableHeading>Feedback</TableHeading>
        </TableRowHead>
        <Content $maxHeight={listHeight}>
          {/* {feedbacks?.map((el: IFeedbacksData) => (
            <TableRow key={el.id}>
              <TableContent>
                <img
                  src={el.full_preview_url}
                  alt="preview"
                  style={{
                    width: '100%',
                    height: '200px',
                    objectFit: 'cover',
                  }}
                />
              </TableContent>
              <TableContent>
                <Input>{el.likes}</Input>
              </TableContent>
              {el.feedbacks.map((feedback: IFeedbackItem) => (
                <Fragment key={feedback.id}>
                  <TableContent>
                    <Input>{feedback.display_name || '...'}</Input>
                  </TableContent>
                  <TableContent>
                    <Input>{feedback.email || '...'}</Input>
                  </TableContent>
                  <TableContent>
                    <Input>{feedback.feedback}</Input>
                  </TableContent>
                </Fragment>
              ))}
            </TableRow>
          ))} */}
        </Content>
      </div>
    </MainWrapper>
  );
};

export default FeedbacksPage;
