import { TouchableOpacity, Text, StyleSheet ,Alert} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { logIn } from '../store/redux/Login';
import { CommonActions } from '@react-navigation/native';

const LoginButton = ({ navigation,username, password }) => {

  const dispatch = useDispatch();
  const handleLogin = () => {
   

    if (username === 'admin' && password === 'admin') {
     
      navigation.dispatch(
        CommonActions.reset({
            index: 0,
            routes: [{ name: 'DrawerNavigation' }], 
        })
    );

      dispatch(logIn({username}))
    } else {
   
        Alert.alert(  
            'Invalid user',  
            'kindly check user name or password',  
            [  
                {  
                    text: 'Cancel',  
                    onPress: () => console.log('Cancel Pressed'),  
                    style: 'cancel',  
                },  
                {text: 'OK', onPress: () => console.log('OK Pressed')},  
            ]  
        );  
    
    }
  };
  return (
    <TouchableOpacity style={styles.button} onPress={handleLogin}>
      <Text style={styles.buttonText}>Login</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#BDA6F5',
    height: 35,
    width: 173,
    borderRadius: 8,
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 14,
    fontWeight: 'bold',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default LoginButton;
