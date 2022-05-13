import React, { useEffect } from 'react';
import { GoogleSignin, GoogleSigninButton, statusCodes } from '@react-native-community/google-signin';
import { useNavigation } from '@react-navigation/native';
import { Dimensions, StyleSheet, ImageBackground, Image, View, TouchableOpacity } from 'react-native';
import { RootStackNavigationProp } from '../../views/navigator/RootStack';
import googleButtonImage from '../../../assets/images/googleButton.png';


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const ButtonGoogle = () => { 
    const navigation = useNavigation<RootStackNavigationProp>();
    useEffect(() => { 
    GoogleSignin.configure({
      webClientId: '1046890239097-jda2ad2vf5eopkns0l73uqpobunukavk.apps.googleusercontent.com', // client ID of type WEB for your server (needed to verify user ID and offline access)
      offlineAccess: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER
      // hostedDomain: '', // specifies a hosted domain restriction
      // forceCodeForRefreshToken: true, // [Android] related to `serverAuthCode`, read the docs link below *.
      // accountName: '', // [Android] specifies an account name on the device that should be used
      iosClientId: '1046890239097-jda2ad2vf5eopkns0l73uqpobunukavk.apps.googleusercontent.com', // [iOS] if you want to specify the client ID of type iOS (otherwise, it is taken from GoogleService-Info.plist)
      // googleServicePlistPath: '', // [iOS] if you renamed your GoogleService-Info file, new name here, e.g. GoogleService-Info-Staging
      // openIdRealm: '', // [iOS] The OpenID2 realm of the home web server. This allows Google to include the user's OpenID Identifier in the OpenID Connect ID token.
      // profileImageSize: 120, // [iOS] The desired height (and width) of the profile image. Defaults to 120px
    });
  })
    const signIn = async () => {
        try {
          await GoogleSignin.hasPlayServices();
            const userInfo = await GoogleSignin.signIn();
            navigation.navigate('ProfileScreen3', {userProfile3: userInfo })
          // this.setState({ userInfo, loggedIn: true });
        } catch (error : any) {
          if (error.code === statusCodes.SIGN_IN_CANCELLED) {
            // user cancelled the login flow
          } else if (error.code === statusCodes.IN_PROGRESS) {
            // operation (f.e. sign in) is in progress already
          } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
            // play services not available or outdated
          } else {
            // some other error happened
          }
        }
    };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={signIn}
        activeOpacity={1}>
        <Image source={googleButtonImage}/>
      </TouchableOpacity>
    </View>
        // <GoogleSigninButton
        // style={styles.googleButton}
        // size={GoogleSigninButton.Size.Wide}
        // color={GoogleSigninButton.Color.Dark}
        // onPress={signIn}
        // />
    );
}

const styles = StyleSheet.create({
  container: {
    // top: (windowHeight /1.4),
    alignItems: 'center',
    marginBottom: 10
  
  },
})

export default ButtonGoogle;