import React from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  View,
  Image,
} from 'react-native';

import { KakaoOAuthToken, login, KakaoProfile, getProfile } from "@react-native-seoul/kakao-login";
import { useNavigation } from '@react-navigation/native';
import kakaoBtnImage from '../../../assets/images/kakao-login.png';
import { RootStackNavigationProp } from '../../views/navigator/RootStack';

const MARGIN = 40;

const ButtonKaKao = () => {
  const navigation = useNavigation<RootStackNavigationProp>();

  const signInWithKakao = async (): Promise<void> => {
    const token: KakaoOAuthToken = await login();
    console.log(JSON.stringify(token));

    getKakaoProfile();
  };

  // const signOutWithKakao = async (): Promise<void> => {
  //   const message = await logout();
  
  //   setResult(message);
  // };
  
  const getKakaoProfile = async (): Promise<void> => {
    const profile: KakaoProfile = await getProfile();
  
    console.log("profile : ");
    console.log(JSON.stringify(profile));

    navigation.navigate('ProfileScreen', {userProfile : profile});
  };
  
  // const unlinkKakao = async (): Promise<void> => {
  //   const message = await unlink();
  
  //   setResult(message);
  // };

  return (
    <View style={styles.container}>
        <TouchableOpacity
          style={styles.button}
          onPress={signInWithKakao}
          activeOpacity={1}>
          <Image source={kakaoBtnImage}/>
        </TouchableOpacity>
    </View>
  );
}

export default ButtonKaKao;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    height: MARGIN,
    borderRadius: 20,
    zIndex: 100,
  },
  circle: {
    height: MARGIN,
    width: MARGIN,
    marginTop: -MARGIN,
    borderWidth: 1,
    borderColor: '#F035E0',
    borderRadius: 100,
    alignSelf: 'center',
    zIndex: 99,
    backgroundColor: '#F035E0',
  },
  text: {
    color: 'white',
    backgroundColor: 'transparent',
  },
  image: {
    width: 24,
    height: 24,
  },
});