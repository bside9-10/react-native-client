import React, { useEffect } from 'react';

import { View } from 'react-native';
import { AppleButton , appleAuth } from '@invertase/react-native-apple-authentication';
import { useNavigation } from '@react-navigation/native';
import { RootStackNavigationProp } from '../../views/navigator/RootStack';


const ButtonApple = () => {
    const navigation = useNavigation<RootStackNavigationProp>();

    async function onAppleButtonPress() {
         // performs login request
        const appleAuthRequestResponse = await appleAuth.performRequest({
        requestedOperation: appleAuth.Operation.LOGIN,
        requestedScopes: [appleAuth.Scope.EMAIL, appleAuth.Scope.FULL_NAME],
        });
    
        // get current authentication state for user
        // /!\ This method must be tested on a real device. On the iOS simulator it always throws an error.
        const credentialState = await appleAuth.getCredentialStateForUser(appleAuthRequestResponse.user);
        
        navigation.navigate('ProfileScreen2', { userProfile2: appleAuthRequestResponse });
        // use credentialState response to ensure the user is authenticated
        if (credentialState === appleAuth.State.AUTHORIZED) {
            console.log('user is authenticated');
        }
    }
    useEffect(() => {
        return appleAuth.onCredentialRevoked(async () => {
            console.warn('If this function executes, User Credentials have been Revoked');
        });
    }, []); 
    
  return (
    <View>
      <AppleButton
        buttonStyle={AppleButton.Style.WHITE}
        buttonType={AppleButton.Type.SIGN_IN}
        style={{
          width: 200, // You must specify a width
          height: 45, // You must specify a height
        }}
        onPress={() => onAppleButtonPress()}
      />
    </View>
  );
}

export default ButtonApple;

