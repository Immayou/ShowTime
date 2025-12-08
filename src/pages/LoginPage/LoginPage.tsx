import React, { useState } from 'react';
import { login } from '../../store/slices/auth/operations';
import { useAppDispatch, useAppSelector } from '../../hooks&funcs/redux';
import {
  BottomTextWrapper,
  ContentBox,
  Form,
  InputWrapper,
  Label,
  NavBtn,
  TextBox,
  TopText,
  Wrapper,
} from './Login.styled';
import RoundButton from '../../components/RoundButton/RoundButton';
import { signInWithGoogle } from './helpers/signInWithGoogle';
import { signInWithApple } from './helpers/signInWithApple';
import testPicture from '../../images/star.jpg';
import useWindowDimensions from '../../hooks&funcs/useWindowDimensions';

import { setIsOpenModal } from '../../store/slices/modals/modalsSlice';
import { RootState } from '../../store/store';
import ModalWrapper from '../../components/ModalWrapper/ModalWrapper';
import PrivacyAndPolicy from '../../components/PrivacyAndPolicy/PrivacyAndPolice';
import { StyledModalTitle } from '../../components/ConfirmDialog/ConfirmDialog';
import CustomInput from '../../components/CustomInput/CustomInput';

const LoginPage = () => {
  const [mode, setMode] = useState<'login' | 'signup'>('signup');
  const [name, setName] = useState<string>('');
  const [nickname, setNickname] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const { isOpenModal } = useAppSelector((state: RootState) => state.modals);
  const windowSize = useWindowDimensions();
  const dispatch = useAppDispatch();

  const buildRequestFromFirebaseUser = (
    firebaseUser: any,
    overrides?: Partial<{
      nickname: string;
      name: string;
      description: string;
    }>
  ) => {
    return {
      id: firebaseUser.uid,
      deviceId: 'web',
      accountType: 1,
      nickname: overrides?.nickname ?? firebaseUser.displayName ?? '',
      name: overrides?.name ?? firebaseUser.displayName ?? '',
      email: firebaseUser.email,
      description: overrides?.description ?? '',
      profileUrl: firebaseUser.photoURL ?? '',
      fieldOfArtId: '',
      links: [],
    };
  };

  const handleGoogleLogin = async () => {
    const firebaseUser = await signInWithGoogle();
    if (!firebaseUser) return;

    if (mode === 'login') {
      const req = buildRequestFromFirebaseUser(firebaseUser);
      await dispatch(login(req));
      return;
    }

    if (!name.trim() || !nickname.trim()) return;

    const req = buildRequestFromFirebaseUser(firebaseUser, {
      name,
      nickname,
      description,
    });

    await dispatch(login(req));
  };

  const handleAppleLogin = async () => {
    const firebaseUser = await signInWithApple();
    if (!firebaseUser) return;

    if (mode === 'login') {
      const req = buildRequestFromFirebaseUser(firebaseUser);
      await dispatch(login(req));
      return;
    }

    if (!name.trim() || !nickname.trim()) return;

    const req = buildRequestFromFirebaseUser(firebaseUser, {
      name,
      nickname,
      description,
    });

    await dispatch(login(req));
  };

  return (
    <>
      <Wrapper>
        <div
          style={{
            width: '50%',
            height: '100%',
            borderRadius: '38px',
            overflow: 'hidden',
          }}
        >
          <img
            src={testPicture}
            alt="Preview_image"
            style={{ objectFit: 'cover', objectPosition: 'center' }}
          />
        </div>
        <ContentBox>
          <TextBox>
            <TopText>
              <NavBtn
                $isActive={mode === 'signup'}
                onClick={() => setMode('signup')}
              >
                Sign up
              </NavBtn>{' '}
              or{' '}
              <NavBtn
                $isActive={mode === 'login'}
                onClick={() => setMode('login')}
              >
                login
              </NavBtn>{' '}
              to start the show
            </TopText>

            <Form
              name="login_form"
              autoComplete="off"
              onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
                e.preventDefault();
              }}
            >
              {mode === 'signup' && (
                <>
                  <InputWrapper>
                    <Label htmlFor="name">Name</Label>
                    <CustomInput
                      id="name"
                      width={100}
                      value={name}
                      placeholder="Enter name"
                      maxLength={100}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        setName(e.target.value)
                      }
                    />
                  </InputWrapper>
                  <InputWrapper>
                    <Label htmlFor="nickname">Nickname</Label>
                    <CustomInput
                      id="nickname"
                      width={100}
                      value={nickname}
                      placeholder="Enter nickname"
                      maxLength={100}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        setNickname(e.target.value)
                      }
                    />
                  </InputWrapper>
                  <InputWrapper>
                    <Label htmlFor="description">Description</Label>
                    <CustomInput
                      id="description"
                      width={100}
                      value={description}
                      placeholder="Enter description"
                      maxLength={100}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        setDescription(e.target.value)
                      }
                    />
                  </InputWrapper>
                </>
              )}
            </Form>
            <div
              style={{
                width: '100%',
                display: 'flex',
                justifyContent: 'space-around',
              }}
            >
              <RoundButton
                value={
                  mode === 'login'
                    ? 'Continue with Google'
                    : 'Sign up with Google'
                }
                handler={handleGoogleLogin}
              />

              <RoundButton
                value={
                  mode === 'login'
                    ? 'Continue with Apple'
                    : 'Sign up with Apple'
                }
                handler={handleAppleLogin}
              />
            </div>
          </TextBox>
          <BottomTextWrapper>
            <p>By signing up, you agree to our &nbsp;</p>
            <span
              style={{
                textDecoration: 'underline',
                fontWeight: 600,
                fontSize: '14px',
                letterSpacing: -0.24,
                lineHeight: 2,
                cursor: 'pointer',
              }}
              onClick={() => dispatch(setIsOpenModal())}
            >
              privacy and policy
            </span>
          </BottomTextWrapper>
        </ContentBox>
        {isOpenModal && (
          <ModalWrapper isCentered paddingLeft={54} maxHeight={523}>
            <StyledModalTitle
              style={{
                fontFamily: 'Hour-Mont',
                fontWeight: '400',
                color: 'var(--text-title)',
              }}
            >
              Privacy and Policy
            </StyledModalTitle>
            <PrivacyAndPolicy height={400} />
          </ModalWrapper>
        )}
      </Wrapper>
    </>
  );
};

export default LoginPage;
LoginPage.displayName = 'LoginPage';
