import React, { useEffect } from 'react';

import { Dimensions, Image, StyleSheet, TouchableOpacity, View } from 'react-native';
import { AppleButton , appleAuth } from '@invertase/react-native-apple-authentication';
import { useNavigation } from '@react-navigation/native';
import { useQuery } from 'react-query';
import jwtDecode from 'jwt-decode';
import { useSelector , useDispatch } from 'react-redux';
import { RootStackNavigationProp } from '../../views/navigator/RootStack';
import appleButtonImage from '../../../assets/images/appleButton.png';
import getAppleAuthResponse, { appleAuthRequest } from '../../helper/api/appleAuthAPI';
import { RootState } from '../../slices';
// const windowWidth = Dimensions.get('window').width;
// const windowHeight = Dimensions.get('window').height;

interface tokenType {
  aud: string,
  authTime: number,
  cHash: string,
  email: string,
  emailVerified: string,
  exp: number,
  iat: number,
  isPrivateEmail: string,
  iss: string,
  nonce: string,
  nonceSupported: boolean,
  sub: string
}

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

interface tokenType {
  aud: string,
  authTime: number,
  cHash: string,
  email: string,
  emailVerified: string,
  exp: number,
  iat: number,
  isPrivateEmail: string,
  iss: string,
  nonce: string,
  nonceSupported: boolean,
  sub: string
}

const AuthStatus = () => {
  const user = useSelector((state: RootState) => state.auth.user);

  return (
      <View>
        {/* {console.log("로그인하세요:", user.displayName)} */}
      </View>
  );
}


const ButtonApple = () => {
  const navigation = useNavigation<RootStackNavigationProp>();

  // const dispatch = useDispatch();
  // const onPressLogin = () => { 
    
  // }
  
  const onAppleButtonPress = async () => {
    // async function onAppleButtonPress() {
    // performs login request
    const appleAuthRequestResponse = await appleAuth.performRequest({
      requestedOperation: appleAuth.Operation.LOGIN,
      requestedScopes: [appleAuth.Scope.EMAIL, appleAuth.Scope.FULL_NAME],
    });

    // get current authentication state for user
    // /!\ This method must be tested on a real device. On the iOS simulator it always throws an error.
    const credentialState = await appleAuth.getCredentialStateForUser(appleAuthRequestResponse.user);
   
   // const resultQuery = useQuery('appleAuthUser', getAppleAuthResponse);
  //   const navigation = useNavigation<RootStackNavigationProp>();

  // const onAppleButtonPress = async () => {
  //   // async function onAppleButtonPress() {
  //        // performs login request
  //       const appleAuthRequestResponse = await appleAuth.performRequest({
  //       requestedOperation: appleAuth.Operation.LOGIN,
  //       requestedScopes: [appleAuth.Scope.EMAIL, appleAuth.Scope.FULL_NAME],
  //       });

    
    // 로그인 완료 후 넘어가는 화면
    navigation.navigate('AvailableTimeScreen', { appleUser: appleAuthRequestResponse });

    // use credentialState response to ensure the user is authenticated
    if (credentialState === appleAuth.State.AUTHORIZED) {      
      // console.log(`identityToken : ${appleAuthRequestResponse.identityToken}`);
      const { identityToken, email, user } = appleAuthRequestResponse;
      const decodedToken: tokenType = jwtDecode(identityToken!);
      console.log('email_from_decodedToken', decodedToken.email);
      console.log('email', email);
      console.log('user', user);
     // resultQuery.data
    }
  }

  // 로그아웃 하고자 하는 경우에는 전달받은 사용자 정보를 clear하는 방식을 recommand하고 있음
  
  useEffect(() => {
      return appleAuth.onCredentialRevoked(async () => {
          console.warn('If this function executes, User Credentials have been Revoked');
      });
  }, []); 
    
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={onAppleButtonPress}
        activeOpacity={1}>
        <Image source={appleButtonImage}/>
      </TouchableOpacity>
    </View>
    // <View>
    //   <AppleButton
    //     buttonStyle={AppleButton.Style.WHITE}
    //     buttonType={AppleButton.Type.SIGN_IN}
    //     style={{
    //       width: 200, // You must specify a width
    //       height: 45, // You must specify a height
    //     }}
    //     onPress={() => onAppleButtonPress()}
    //   />
    // </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // top: (windowHeight /1.25),
    alignItems: 'center',
  
  },
})

export default ButtonApple;

