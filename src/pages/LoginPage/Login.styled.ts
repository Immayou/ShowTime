import styled from 'styled-components';

export const Wrapper = styled.main`
  padding: 36px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100vh;
`;

export const ContentBox = styled.div`
  flex-grow: 1;
  height: 100vh;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const InputWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  &:not(:last-child) {
    margin-bottom: 15px;
  }
`;

export const Label = styled.label`
  flex-direction: column;
  justify-content: start;
  align-items: center;
  font-size: 16px;
  margin-bottom: 10px;
`;

export const TopText = styled.p`
  width: 100%;
  font-family: 'hourMont';
  font-weight: 500;
  font-size: 25px;
  line-height: 1.3;
  color: var(--text-title);
  text-align: center;
`;

export const BottomTextWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  bottom: 10%;
  left: 50%;
  transform: translateX(-50%);
  font-weight: 400;
  font-size: 14px;
  line-height: 1.2;
  letter-spacing: -0.24px;

  & a {
    font-weight: 600;
    text-decoration: underline;
  }
`;

export const Form = styled.form<{ $isVisible: boolean }>`
  width: 100%;
  display: ${({ $isVisible }) => ($isVisible ? 'flex' : 'none')};
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
`;

export const NavBtn = styled.span<{ $isActive: boolean }>`
  text-decoration: ${({ $isActive }) => ($isActive ? 'underline' : 'none')};
  cursor: pointer;
`;
