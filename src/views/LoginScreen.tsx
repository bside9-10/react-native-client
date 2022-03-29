import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { RootStackNavigationProp } from './navigator/RootStack';
import Logo from '../components/login/Logo';
import Form from '../components/login/Form';
import Wallpaper from '../components/login/Wallpaper';
import ButtonSubmit from '../components/login/ButtonSubmit';
import SignupSection from '../components/login/SignupSection';
import ButtonKaKao from '../components/login/ButtonKaKao';

const LoginScreen = () => {
  const navigation = useNavigation<RootStackNavigationProp>();

  return (
    <Wallpaper>
      <Logo />
      <Form />

      <ButtonSubmit />
      <ButtonKaKao />
    </Wallpaper>
  );
};

export default LoginScreen;
