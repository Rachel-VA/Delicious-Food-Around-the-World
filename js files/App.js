/** Rachael Savage
CSC342
1/19/23
*/
//The App.json file contains code for rotate screen
//must import libraries first.

import { Video } from 'expo-video';
import React, { useState } from 'react';

import {
  Button,
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Image,
  ScrollView,
  StatusBar,
  SafeAreaView,
  TextInput,
  Alert,
  FlatList,
  TouchableWithoutFeedback,
  Keyboard,
  Pressable,
} from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer'; //import drawer
import { NavigationContainer } from '@react-navigation/native';
import { Audio } from 'expo-av';

//import props for the map, pin, marker
import MapView, {
  PROVIDER_GOOGLE,
  Marker,
  Callout,
  Circle,
  Permission,
} from 'react-native-maps';
import * as Location from 'expo-location';

//import all the new js files into the App.js, similar to link classes
//Header is the name of the function in HearBar.js file
import Header from './components/HeaderBar';
import ListOfFood from './components/ListOfFood';
import AddFoodName from './components/AddFoodName';
import Map from './components/Map';
import Login from './components/Login';
import DisplayFood from './components/DisplayFood';
import SignUp from './components/SignUp';
//import ReadAloud from './components/ReadAloud';
//import PlaySound from './components/PlaySound';
//import ReadAloud from './components/ReadAloud';

//create a func for sound then call it to play. It's called inside the MainPage
function playSound() {
  (async () => {
    try {
      await Audio.setIsEnabledAsync(true);
      //create a sound object
      const sound = new Audio.Sound();
      await sound.loadAsync(require('./assets/introFood.mp3'));

      //loop it for bg sound maybe
      await sound.setIsLoopingAsync(false);
      await sound.setVolumeAsync(1);
      //tell the sound to start playing
      await sound.playAsync(true);

      //to switch to another sound
      //unload from memmory
      //await sound.unloadAsync();
    } catch {
      console.error(error);
    }
  })();
}

//************************************** DISPLAY PAGE*************************************************************************** */

function Display({ navigation }) {
  const video = React.useRef(null);
  const [status, setStatus] = React.useState({});
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'deeppink',
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'stretch',
      }}>
      <View style={{ flex: 0.9, backgroundColor: '', width: '100%' }}>
        <Text
          style={{
            color: 'white',
            fontSize: 20,
            fontWeight: 'bold',
            textAlign: 'center',
            fontStyle: 'algerian',
          }}>
          DELICIOUS FOOD AROUND THE WORLD
        </Text>

        <Button
          onPress={() => navigation.goBack()}
          title="Click Here to Go Home"
          color="white"
        />
      </View>

      <Video
        source={require('./assets/mySmallVideo.mp4')}
        ref={(ref) => {
          this.player = ref;
        }}
        onBuffer={this.onBuffer} // Callback when remote video is buffering
        onError={this.videoError} // Callback when video cannot be loaded
        style={PlayVideo.videoResizedCanvas} //video name
        muted={true}
        repeat={true}
        resizeMode={'cover'}
        rate={1.0}
        ignoreSilentSwitch={'obey'} //no sound. it can also use isMute
        isLooping
        positionMillis={500}
      />
    </View>
  );
}
// control the video using stylesheet
const PlayVideo = StyleSheet.create({
  videoResizedCanvas: {
    position: 'center',
    top: 40,
    left: 0,
    alignItems: 'stretch',
    bottom: 0,
    right: 0,
    width: '100%',
    height: '95%',
  },
});

//////////////////////////////////////////////////////////////////  HOME PAGE  /////////////////////////////////////////////////////////////////import useState method to use for the splashscreen. useState must be used op top right after the function before the return method

function HomeScreen({ navigation }) {
  const [logoImage, setlogoImage] = useState('center');
  const [alignsecond, setlogoImagesecond] = useState(false);

  setTimeout(() => {
    setlogoImage('flex-start'), setlogoImagesecond(true);
  }, 1000);

  return (
    <View style={{ flex: 1, backgroundColor: 'deeppink' }}>
      <View style={{ flex: 0.3, backgroundColor: 'yellow' }}>
        <ImageBackground
          source={require('./assets/trai-tri-mon-an-ngon.jpg')}
          style={{ height: 230, width: '100%' }}>
          <Text> </Text>
        </ImageBackground>
      </View>

      {!alignsecond ? null : (
        <View style={{ flex: 0.8, backgroundColor: 'white' }}>
          <Image
            source={require('./assets/RSLogo.jpg')}
            style={{ width: 54, height: 35 }}
          />
          <View>
            <Text
              style={{
                color: 'crimson',
                fontSize: 20,
                fontWeight: 'bold',
                textAlign: 'center',
              }}>
              {'\n'}DELICIOUS FOOD AROUND THE WORLD
            </Text>
          </View>
          <Text>{'\n'}</Text>
          <View style={{ flex: 0.5, backgroundColor: 'green' }}>
            <Text
              style={{
                fontSize: 20,
                fontWeight: 'bold',
                color: 'white',
                textAlign: 'center',
              }}>
              Welcome food lovers! In this community, we can explore delicious
              food from different cultures around the world. We can discuss,
              review, and recommend types of food and where you think is the
              best place to enjoy them. {'\n'}
            </Text>
            <Button
              title="Read Aloud"
              color="coral"
              onPress={playSound}></Button>
          </View>

          {/**yellow view is cover all the way to the end after the Read aloud */}
          <View style={{ flex: 0.5, backgroundColor: 'yellow' }}>
            {/**white background contain 4 nested views for each image and flexdirection row to set side by side */}
            <View
              style={{
                flex: 0.5,
                backgroundColor: 'white',
                flexDirection: 'row',
              }}>
              <Image
                source={require('./components/pho.jpg')}
                style={{ width: 100, height: '100%', marginLeft: 5 }}></Image>
              <View>
                <Image
                  source={require('./components/huefood200.jpg')}
                  style={{ width: 100, height: '100%', marginLeft: 5 }}></Image>
              </View>

              <View>
                <Image
                  source={require('./components/shushi200.jpg')}
                  style={{ width: 100, height: '100%', marginLeft: 5 }}></Image>
              </View>
              <View>
                <Image
                  source={require('./components/chaPhuong200.jpg')}
                  style={{ width: 100, height: '100%', marginLeft: 5 }}></Image>
              </View>
            </View>

            <View
              style={{
                flex: 0.2,
                backgroundColor: 'bisque',
                flexDirection: 'row',
              }}>
              <View>
                <Text style={{ marginLeft: 60, textAlign: 'bottom' }}>
                  {'\n'}Login
                </Text>
              </View>

              <View>
                <Text style={{ marginLeft: 200, textAlign: 'bottom' }}>
                  {'\n'}Popular Food
                </Text>
              </View>
            </View>

            {/**the nested views with button linked to other pages link to other page */}
            <View
              style={{
                flex: 0.5,
                backgroundColor: 'bisque',
                flexDirection: 'row',
                justifyContent: 'center',
              }}>
              <Pressable onPress={() => navigation.navigate('LOG IN')}>
                <Image
                  source={require('./components/imgLogin.png')}
                  style={{
                    width: 50,
                    height: 50,
                    marginTop: 10,
                    marginRight: 30,
                    marginLeft: 5,
                  }}
                />
              </Pressable>

              <View>
                <Pressable
                  onPress={() => navigation.navigate('USERS CHECK IN')}>
                  <Image
                    source={require('./components/map200.jpg')}
                    style={{
                      width: 50,
                      height: 50,
                      marginLeft: 5,
                      marginTop: 10,
                      marginRight: 30,
                    }}
                  />
                </Pressable>
                <Text style={{ fontSize: 12 }}> Checkin</Text>
              </View>

              <View>
                <Pressable
                  onPress={() => navigation.navigate('RECOMMEND FOOD')}>
                  <Image
                    source={require('./components/like200.png')}
                    style={{
                      width: 50,
                      height: 50,
                      marginLeft: 5,
                      marginTop: 10,
                      marginRight: 30,
                    }}
                  />
                </Pressable>
                <Text style={{ fontSize: 10 }}>
                  Food reccomend{'\n'} by users
                </Text>
              </View>
              <Pressable onPress={() => navigation.navigate('POPPULAR FOOD')}>
                <Image
                  source={require('./components/banhkem200.jpg')}
                  style={{
                    width: 50,
                    height: 50,
                    marginLeft: 5,
                    marginTop: 10,
                    marginRight: 10,
                  }}
                />
              </Pressable>

              <View></View>
            </View>
          </View>
        </View>
      )}
    </View>
  );
}

//22222222222222222222222222222222222222222222222222    ASIA PAGE 222222222222222222222222222222222222222222222222222222222222222
//copy/create a function for different screen/page. import and use scrollview tag to make scrollview bar

function UserCheckinMap({ navigation }) {
  const [pin, setPin] = React.useState({
    latitude: 36.85293,
    longitude: -75.97799,
  });
  return (
    <View style={styleMap.container}>
      <Button
        onPress={() => navigation.goBack()}
        title="Click here to go Home"
      />

      <MapView
        style={styleMap.map}
        showUserLocation={true}
        showsCompass={true}
        rotateEnabled={false}
        initialRegion={{
          latitude: 36.85293,
          longitude: -75.97799,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        >
        {/* Marker must be imported on top. use marker tags to wrap props for the pin. dragable/nativeEvent etc are c built-in props to use*/}
        <Marker
          coordinate={pin}
          pinColor="green"
          draggable={true}
          onDragStart={(event) => {
            console.log('Drag start', event.nativeEvent.coordinates);
          }}
          onDragEnd={(event) => {
            setPin({
              latitude: event.nativeEvent.coordinate.latitude,
              longitude: event.nativeEvent.coordinate.longitude,
            });
          }}>
          {/* Callout prop but me import on top. It must be put in betwwen marker. Image must be put inside component (same file with the map.js.  Circle prop also need to import on top. Circle does not need an end tag but a closing self tag*/}
          <Callout>
            <Image
              source={require('./assets/putonmapsmall.jpg')}
              style={{ width: 65, height: 67 }}></Image>
            <Text style={{ color: 'red' }}>I'm@</Text>
            <Text style={{ color: 'red' }}>Eurasia Cafe</Text>
          </Callout>
        </Marker>
        <Circle center={pin} radius={1000} />
      </MapView>
    </View>
  );
}
//create a stylesheet for styling
const styleMap = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: '100%',
    height: '100%',
  },
});

//3333333333333333333333333333333333333333333    SOUTH AMERICA PAGE      33333333333333333333333333333333333333333333333333333333
//we can desire each page as we want and link the home button for easy nav
function UserLogin({ navigation }) {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'black',
        alignItems: 'center',
        justifyContent: 'top',
      }}>
      <ImageBackground
        source={require('./assets/lamHinhNen.jpeg')}
        style={{ height: '100%', width: '100%' }}>
        <Button
          onPress={() => navigation.goBack()}
          title="Click Here to Go Home"
          color="deeppink"
        />
        <Login />
      </ImageBackground>
    </View>
  );
}

//4444444444444444444444444444444444444444444444     NORTH AMERICA PAGE    44444444444
function PopularFood({ navigation }) {
  return (
    <View style={{ flex: 1, backgroundColor: 'black' }}>
      <Button onPress={() => navigation.goBack()} title="" />
      <Button
        onPress={() => navigation.goBack()}
        title="Click here to go Home"
        color="gold"
      />
      <Button
        onPress={() => navigation.navigate('RECOMMEND FOOD')}
        title="Go to RECOMMEND FOOD "
        color="yellow"
      />

      <DisplayFood />
    </View>
  );
}

///55555555555555555555555555555555555555       AFRICA PAGE     55555555555555555555555555
//this is is in progress to get the user input functions
function FindFood({ navigation }) {
  //local variables for this function: set useState = array and pass in objects
  const [foodName, setFoodName] = useState([
    {
      text: 'SHUSHI is very popular food in Korean and japan. In Korea, sushi is called "Korean-style sushi" or "K-sushi" and it often incorporates Korean ingredients and flavors into the dish, such as pickled vegetables and spicy sauces. In Japan, sushi is considered a high-end cuisine and is traditionally made with the freshest and highest quality ingredients, with a strong emphasis on presentation and respect for the traditional methods of preparation.',
      key: '1',
    },
    {
      text: 'PIRI-PIRI CHICKEN, MOZAMBIQUE,Piri-piri chicken is a spicy dish that originates from Mozambique in southern Africa. It is made by marinating chicken in a mixture of chili peppers, lemon juice, garlic, and other spices before grilling or roasting to perfection. The resulting dish is tangy, spicy, and packed full of flavor, making it a popular choice for those who love bold and spicy cuisine ',
      key: '2',
    },
    {
      text: 'RENDANG, INDONESIA,Rendang is a rich and flavorful dish that is a staple of Indonesian cuisine. It is made by slowly simmering beef in a mixture of coconut milk, spices, and seasonings for several hours, until the sauce has thickened and the meat has become tender and infused with the flavors of the sauce. The dish is traditionally served with rice and is known for its deep and complex flavor profile, as well as its tender and juicy meat. ',
      key: '3',
    },
  ]);
  //create a handler func to handle delete content feature, pass in the key
  const pressHandler = (key) => {
    setFoodName((prevFoodName) => {
      return prevFoodName.filter((foodName) => foodName.key != key);
    });
  };

  //create a func to take use input text and return it on screen and call the submitHandler func in the AddFoodName file. create an alert inside the submitHandler to let user know the condition that set
  const submitHandler = (text) => {
    if (text.length > 5) {
      setFoodName((prevFoodName) => {
        return [{ text: text, key: Math.random().toString() }, ...prevFoodName];
      });
    } else {
      Alert.alert('OOPS!', 'Name of food must be longer than 5 characters', [
        { text: 'Understand', onPress: () => console.log('close alert') },
      ]);
    }
  };
  {
    /* import TouchableWithoutFeedback and keyborad props and use the tags to wrape on the content on screen to dismiss the keyboard after done typing*/
  }
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
        console.log('dismissed keyboard');
      }}>
      <View style={userInput.container}>
        <ScrollView>
          {/* main view */}
          {/*after import the Headerbar file, we now can call it and nest it into the main view to display on top of the screen */}
          <Header />
          <Button
            onPress={() => navigation.goBack()}
            title=" Click here to go Home"
          />

          <Image
            source={require('./assets/RSLogo.jpg')}
            style={{ width: 200, height: 100, alignSelf: 'center' }}></Image>

          <View style={userInput.content}>
            <AddFoodName submitHandler={submitHandler} />
            <View style={userInput.flatlist}>
              <FlatList
                data={foodName}
                renderItem={({ item }) => (
                  <ListOfFood item={item} pressHandler={pressHandler} />
                )}
              />
            </View>
          </View>
        </ScrollView>
      </View>
    </TouchableWithoutFeedback>
  );
}
//styling for the user input
const userInput = StyleSheet.create({
  container: {
    paddingTop: 0,
    justifyContent: 'bottom',
    margin: 10,
    backgroundColor: 'white',
  },

  //call the content object input for styling
  content: {
    padding: 40,
    backgroundColor: 'pink',
  },
  //call flatlist object for styling
  flatlist: {
    marginTop: 20,
  },
});

//666666666666666666666666666666666666666     EUROPEAN PAGE    6666666666666666666666666666
//import safeAreaView , StatusBar, and ScrollView to create a scroll view for this page
function UserSignUp({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <Button
        onPress={() => navigation.goBack()}
        title=" Click here to go Home"
        color="green"
      />

      <Image
        source={require('./assets/RSLogo.jpg')}
        style={{ width: 200, height: 100, alignSelf: 'center' }}></Image>
      <SignUp/>
    </SafeAreaView>
  );
}

//--------------------------------------------- STYLE SHEET CONTROL EUROPEAN PAGE FOR SCROLLING FUNCS  ----------------------------------
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
});

//must import a drawer func on top in order to use it to contain multi screens
const Drawer = createDrawerNavigator();

//+++++++++++++++++++++++++++++++++++++++++  EXPORT DISPLAY CONTENT  ++++++++++++++++++++++++++++
//must export the default app to display the content. the Nav container must import first
//each time a function create for a screen/page, it must be created in the nav container and drawer
export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator useLegacyImplementation initialRouteName="HOME PAGE">
        <Drawer.Screen name="HOME PAGE" component={HomeScreen} />
        <Drawer.Screen name="USERS CHECK IN" component={UserCheckinMap} />
        <Drawer.Screen name="POPPULAR FOOD" component={PopularFood} />
        <Drawer.Screen name="LOG IN" component={UserLogin} />
        <Drawer.Screen name="SIGN UP" component={UserSignUp} />
        <Drawer.Screen name="RECOMMEND FOOD" component={FindFood} />
        <Drawer.Screen name="DISPLAY" component={Display} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
