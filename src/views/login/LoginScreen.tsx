import React from 'react';
import Logo from '../../components/login/Logo';
import Form from '../../components/login/Form';
import Wallpaper from '../../components/login/Wallpaper';
import ButtonSubmit from '../../components/login/ButtonSubmit';
import SignupSection from '../../components/login/SignupSection';

const LoginScreen = () => {
  return (
    <Wallpaper>
      <Logo />
      <Form />

      <ButtonSubmit />
      <SignupSection />
    </Wallpaper>
  );
};

export default LoginScreen;
