import React from 'react';
// import { useNavigation } from '@react-navigation/native';
// import { RootStackNavigationProp } from './navigator/RootStack';
import Logo from '../components/login/Logo';
import Form from '../components/login/Form';
import Wallpaper from '../components/login/Wallpaper';
import ButtonSubmit from '../components/login/ButtonSubmit';
import ButtonKaKao from '../components/login/ButtonKaKao';
import ButtonApple from '../components/login/ButtonApple';
import ButtonGoogle from '../components/login/ButtonGoogle';

const LoginScreen = () => {
  // const navigation = useNavigation<RootStackNavigationProp>();

  return (
    <Wallpaper>
      <Logo />
      <Form />

      <ButtonSubmit />
      <ButtonGoogle />
      <ButtonApple />
      <ButtonKaKao />
    </Wallpaper>
  );
};

export default LoginScreen;
