import React from 'react';
//import PropTypes from 'prop-types';
import Logo from './Logo';
import Form from './Form';
import Wallpaper from './Wallpaper';
import ButtonSubmit from './ButtonSubmit';
import SignupSection from './SignupSection';

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
