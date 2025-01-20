import React, { useState } from 'react';
import { login } from '../../store/slices/auth/operations';
import { useAppDispatch } from '../../hooks&funcs/redux';
import { Form, Title, Wrapper } from './Login.styled';
import InputWithLabel from '../../components/InputWithLabel/InputWithLabel';
import RoundButton from '../../components/RoundButton/RoundButton';
import { InputTypes } from '../../enums/General';
import { loginTest } from '../../store/slices/auth/authSlice';

const LoginPage = () => {
  const [enteredLogin, setEnteredLogin] = useState('');
  const [enteredPassword, setEnteredPassword] = useState('');
  const dispatch = useAppDispatch();

  const onSubmitFormHandler = async (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    if (enteredLogin.trim() === '' || enteredPassword.trim() === '') {
      return;
    }
    // await dispatch(
    //   login({
    //     name: enteredLogin.trim(),
    //     password: enteredPassword.trim(),
    //   })
    // );
    dispatch(loginTest());
    setEnteredLogin('');
    setEnteredPassword('');
  };

  return (
    <Wrapper>
      <Title>Login</Title>
      <Form name="login_form" autoComplete="off" onSubmit={onSubmitFormHandler}>
        <InputWithLabel
          id={InputTypes.TEXT}
          type={InputTypes.TEXT}
          placeholder="Enter login"
          labelText="Login"
          onChange={e => setEnteredLogin(e.target.value)}
        />
        <InputWithLabel
          id={InputTypes.PASSWORD}
          type={InputTypes.PASSWORD}
          placeholder="Enter password"
          labelText="Password"
          onChange={e => setEnteredPassword(e.target.value)}
        />
        <RoundButton value={'Ok'} handler={() => {}} type={'submit'} />
      </Form>
    </Wrapper>
  );
};

export default LoginPage;
LoginPage.displayName = 'LoginPage';
