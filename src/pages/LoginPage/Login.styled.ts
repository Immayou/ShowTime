import styled from 'styled-components';

export const Wrapper = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const Title = styled.h1`
  font-family: var(--font-main-medium);
  margin-top: 0;
  margin-bottom: 46px;
  font-size: 24px;
  font-weight: 500;
  line-height: 1;
  letter-spacing: 0em;
  text-align: center;
  color: rgba(229, 229, 229, 1);
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
