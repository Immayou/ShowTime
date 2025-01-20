import styled from 'styled-components';

export const PageWrapper = styled.section`
  position: relative;
  width: 90%;
  height: auto;
  overflow: hidden;
  background-color: var(--colors-bg);
  padding: 41px 35px 41px 35px;
  @media (min-width: 1500px) {
    padding: 41px 65px 41px 65px;
  }
`;

export const Title = styled.h1`
  font-family: var(--font-main);
  font-size: 24px;
  font-weight: 500;
  line-height: 1;
  text-align: left;
  color: #ffffff;
`;

export const TopWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
`;
