import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Dimensions, FlatList, StyleSheet, Text } from 'react-native';
import Logo from '../components/login/Logo';
import Form from '../components/login/Form';
import Wallpaper from '../components/login/Wallpaper';
import ButtonSubmit from '../components/login/ButtonSubmit';
import ButtonKaKao from '../components/login/ButtonKaKao';
import ButtonApple from '../components/login/ButtonApple';
import ButtonGoogle from '../components/login/ButtonGoogle';


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const LoginScreen = () => {
  return (
    // <Wallpaper>
    <SafeAreaView style={styles.container}>
      {/* <Logo /> */}
      <Form />
      {/* <FlatList data={}/> */}
      {/* <ButtonSubmit /> */}
      <Text style={styles.text1}>그러면 이제 라플을 만들어볼까요?</Text>
      <Text style={styles.text2}>아래 소셜 로그인을 하시면</Text>
      <Text style={styles.text3}>자동으로 회원가입이 진행됩니다!</Text>
      <ButtonGoogle />
      <ButtonApple />
      {/* <ButtonKaKao /> */}
    </SafeAreaView>
    // </Wallpaper>

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: (windowHeight),
    alignItems: 'center',
    backgroundColor: "white",
   // position: "absolute"
  },
  text1: {
    paddingBottom: 30,
    fontFamily: 'LeeSeoyun',
    fontSize:16
  }, //
  text2: {
    paddingBottom: 10,
    fontFamily: 'LeeSeoyun',
    fontSize:16
  },
  text3: {
    paddingBottom: 21,
    fontFamily: 'LeeSeoyun',
    fontSize:16
  }
})

export default LoginScreen;
