import AsyncStorage from '@react-native-community/async-storage';
import * as Navigation from '../routes/outsideRoute';

const Logout = async () => {

  const userData = await AsyncStorage.removeItem('@ValarTamil:userData');
  if (userData === null) {
    Navigation.navigate('Login');
  }

}

export default Logout;