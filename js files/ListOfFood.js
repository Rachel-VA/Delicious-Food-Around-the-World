//copied the imported libraries
import {
  Text,
  StyleSheet,
  Image,
  ScrollView,
  StatusBar,
  TextInput,
  Alert,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer'; //import drawer
import { NavigationContainer } from '@react-navigation/native';

//create an export function, must have the same name as the file inside the component. then pass in a prop/item that defined in renderItem prop (must use item, it doesn't take other name)
//pass in the presshandler here as it desifned in App.js for ListOfFood comp. Then within the onpress handler, exten the presshandler comp, and pass in item
export default function ListOfFood({ item, pressHandler }) {
  return (
    
    <TouchableOpacity onPress={() => pressHandler(item.key)}>
      {/*the text line below is used to out put the item name */}
      <Text style={Foodstyles.item}>{item.text}</Text>
    </TouchableOpacity>
  );
}

//create a stylesheet for styling the display content
const Foodstyles = StyleSheet.create({
  item: {
    padding: 10,
    marginTop: 16,
    borderColor: 'blue',
    borderWidth: 1,
    borderStyle: 'dashed',
    borderRadius: 10,
    backgroundColor: 'khaki',

  },
});
