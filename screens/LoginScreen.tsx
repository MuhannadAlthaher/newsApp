import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native';
import LoginButton from '../componants/Button'; 


const LoginScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  
  
  
  return (
    <SafeAreaView style={styles.container}> 
      <View style={styles.pageStyle}>
        <View>
          <Text style={styles.textStyle}>Welcome Back!</Text>
          <Text style={styles.subTitlestyle}>Glad to see you again</Text>
        </View>
        <View style={styles.logInContainer}>
          <Text style={styles.userNameAndPasswordText}>User name</Text>
          <TextInput
            placeholder="User name"
           
            onChangeText={setUsername}
            style={[styles.inputTextStyleUsername,{color:'#ffffff'}]}
            placeholderTextColor={'#A9A9A9'}
          />
          <Text style={styles.userNameAndPasswordText}>Password</Text>
          <TextInput
            placeholder="Password"
            
            
            underlineColorAndroid={'#FFF'}
            onChangeText={setPassword}
            secureTextEntry={true}
            style={[styles.inputTextStyleUsername,{color:'#ffffff'}]}
            placeholderTextColor={'#A9A9A9'}
          />
          <TouchableOpacity>
            <Text style={styles.foGetPassword}>Forget Password</Text>
          </TouchableOpacity>
          <LoginButton navigation={navigation} username={username} password={password} />
          <TouchableOpacity>
             <Text style={styles.sihnUp}>New User sign up</Text>
          </TouchableOpacity>
          
        </View>
      </View>
    </SafeAreaView>  
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0E0E0E',
  },
  pageStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logInContainer: {
    height: 337,
    width: 337,
    backgroundColor: '#1E1E1E',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textStyle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  subTitlestyle: {
    paddingBottom: 49,
    fontSize: 14,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  inputTextStyleUsername: {
    width: 303,
    height: 41,
    backgroundColor: '#2B2B2B',
    borderWidth: 1,
    borderRadius: 8,
    borderColor: '#2B2B2B',
    marginBottom: 40,
  },
  inputTextStylePassword: {
    color:'#ffffff',
    width: 303,
    height: 41,
    backgroundColor: '#2B2B2B',
    borderWidth: 1,
    borderRadius: 8,
    borderColor: '#2B2B2B',
  },
  userNameAndPasswordText: {
    color: '#ffffff',
    marginBottom: 13,
  },
  foGetPassword: {
    color: '#7C69A8',
    paddingLeft: 200,
  },
  sihnUp:{
    marginTop:10,
    marginLeft:8,
    color:'#fff',
    fontWeight:'bold'
  }
});

export default LoginScreen;
