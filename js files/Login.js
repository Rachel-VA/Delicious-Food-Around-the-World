//import libraries to use for this appli

import {
  StyleSheet,
  SafeAreaView,
  Text,
  View,
  Button,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  ScrollView,
  TouchableNativeFeedback,
  Alert,
  Keyboard,
  ImageBackground,
} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import React, { useState, useEffect } from 'react';

//create a func and name it same as the js file
export default function Login() {
  //local var for validation
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState({ field: '', message: '' });

  // func for validating email and pass
  const validate = () => {
    let loginError = { field: '', message: '' };
    if (email === '') {
      loginError.field = 'email';
      loginError.message = 'Email is required';
      setError(loginError);
    } else if (password === '') {
      loginError.field = 'password';
      loginError.message = 'Password is required';
      setError(loginError);
    } else {
      setError({ field: '', message: '' });
      alert('Login successfully');
    }
  };

  return (
    <SafeAreaView style={loginStyle.container}>
      {/*Touchablewithoutfeedback and keyboardavoiding view, either one can be use only one. In order to use both must import Keyboard and pass in it in as below */}
      <TouchableNativeFeedback onPress={Keyboard.dismiss}>
        <KeyboardAvoidingView behavior="padding" style={{ flex: 1 }}>
          {/* craete  a view for log in form, textInput, and styling for each element*/}

          <View style={loginStyle.loginForm}>
            <FontAwesome
              name="user"
              size={24}
              color="black"
              style={{
                position: 'absolute',
                top: 50,
                left: 20,
                zIndex: 10,
              }}
            />
            {/** set value for the userInput and onChangeText prop to valida*/}
            <Text style={loginStyle.loginText}>Email</Text>
            <TextInput
              style={loginStyle.inputUserName}
              placeholder="Type in your email"
              placeholderTextColor="black"
              textAlign="center"
              fontSize="18"
              autoCorrect={true}
              autoFocus={true}
              onChangeText={(value) => setEmail(value)}
              value={email}
            />

            {error.field === 'email' && (
              <Text
                style={{
                  color: 'chartreuse',
                  textAlign: 'center',
                  fontSize: 25,
                  fontWeight: 'bold',
                }}>
                {error.message}
              </Text>
            )}
            {/*import and use touchableOpacity button and styling for it */}
          </View>

          {/* create another view for the password, textinput and syling for it*/}

          <View style={loginStyle.loginForm}>
            <MaterialCommunityIcons
              name="lock"
              size={24}
              color="black"
              style={{
                position: 'absolute',
                top: 80,
                left: 20,
                zIndex: 10,
              }}
            />
            <Text>{'\n'}</Text>
            {/** user input password*/}
            <Text style={loginStyle.loginPW}>PASSWORD</Text>
            <TextInput
              onChangeText={(value) => setPassword(value)}
              value={password}
              keyboardType="numeric"
              secureTextEntry={true}
              placeholder="Enter password"
              placeholderTextColor="orange"
              textAlign="center"
              fontSize="20"
              autoFocus={true}
              style={loginStyle.inputUserPW}
            />
            {/**call the condition for the condition that set inside the validate func */}
            {error.field === 'password' && (
              <Text
                style={{
                  color: 'chartreuse',
                  textAlign: 'center',
                  fontSize: 25,
                  fontWeight: 'bold',
                }}>
                {error.message}
              </Text>
            )}
          </View>

          {/* button*/}
          <View>
            <Button onPress={validate} title="SUBMIT" color="white"></Button>

            {/**extra decorative text */}
          </View>
          <Text>{'\n\n\n'}</Text>
          <Text style={loginStyle.forgotMyPW}> Forgot my userName</Text>
          <Text style={loginStyle.forgotUserName}> Forgot my password</Text>
        </KeyboardAvoidingView>
      </TouchableNativeFeedback>
    </SafeAreaView>
  );
}
//create a text prop to inherant same values
const TEXT = {
  color: 'deeppink',
  textAlign: 'center',
};

const loginStyle = StyleSheet.create({
  container: {
    flex: 1,
  },

  loginForm: {
    textAlign: 'center',
    justifyContent: 'center',
  },
  inputUserName: {
    height: 60,
    backgroundColor: 'aquamarine',
    borderRadius: 50,
  },
  inputUserPW: {
    height: 60,
    backgroundColor: 'white',
    borderRadius: 50,
  },

  loginText: {
    ...TEXT,
    fontSize: 25,
    fontWeight: 'bold',
  },
  loginPW: {
    ...TEXT,
    fontSize: 25,
    fontWeight: 'bold',
  },
  forgotUserName: {
    textAlign: 'center',
    color: 'deeppink',
    fontSize: 15,
    fontWeight: 'bold',
    marginBottom: 45,
  },
  forgotMyPW: {
    textAlign: 'center',
    marginBottom: 0,
    color: 'deeppink',
    fontSize: 15,
    fontWeight: 'bold',
  },
});
