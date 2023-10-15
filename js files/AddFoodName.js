//copied the imported libraries, add in useState hook
import {
  Text, View,
  StyleSheet,
  Image,
  ScrollView,
  StatusBar,
  TextInput,
  Button,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer'; //import drawer
import { NavigationContainer } from '@react-navigation/native';
import React, {useState} from 'react';

//create a function to send the content to the display screen. The name of the func must be the same name as the file.js                 func must start with uppercase letter                              pass the AddFoodName prop inside the func
export default function AddFoodName({submitHandler }){
  //create local var and set it = to useState
  const [text, setText] = useState('');
  //create a local var and set it equal to a func, then set it to interact to useState
  const changeHandler= (val) => {
   setText(val)

  }
  return(
    <View>
    {/*to hind password: secureTextEntry={true} */}
    <TextInput
    
    multiline
    autoCorrect={true}
    style={styles.input}
    placeholder= 'Write your reccomend here..'
    onChangeText={(val)=> changeHandler(val)}
    
    />
    <Button onPress={() => submitHandler(text)} title='SUBMIT'color='red' />
    </View>
  )
}

//create stylesheet for styling
const styles = StyleSheet.create({
input: {
marginBottom: 10,
paddingHorizontal: 8,
paddingVertical: 6,
borderBottomWidth: 1,
borderBottomColor:'red',


},

})



