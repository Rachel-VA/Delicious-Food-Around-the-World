//create a new js file inside component. copied the imported libraries from App.js
import { Button,  View,Text,StyleSheet, ImageBackground,Image,ScrollView, StatusBar,SafeAreaView,TextInput, Alert,FlatList
  } from 'react-native';
import { createDrawerNavigator} from '@react-navigation/drawer';//import drawer
import { NavigationContainer } from '@react-navigation/native';

//create an export function for this file
export default function Header(){
return(
  <View style={HeaderStyle.header}>
  <Text style={HeaderStyle.title}>Food recommend by users</Text>
  
  </View>
)
}

//create a stylesheet to styling content inside the view
const HeaderStyle = StyleSheet.create({
header:{
height: 60,
paddingTop: 20,
backgroundColor:'deeppink',

},
//call the title object for styling
title:{
textAlign: 'center',
color: 'white',
fontSize: 25,
fontWeight: 'bold',
},

});