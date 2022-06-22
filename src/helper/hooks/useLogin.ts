import {useNavigation} from '@react-navigation/native';
import {useMutation} from 'react-query';
import {useUserState} from '../context/UserContext';
import {RootStackNavigationProp} from '../../views/navigator/RootStack';
import getAppleAuthResponse from '../api/appleAuthAPI';

export default function useLogin() {
  const [, setUser] = useUserState();
  const navigation = useNavigation<RootStackNavigationProp>();

  const mutation = useMutation(getAppleAuthResponse, {
    onSuccess: (data: any) => {
      setUser(data.user);
      navigation.pop();
    },
    onError: (error: any) => {
      console.log(error);
    },
  });
  return mutation;
}
