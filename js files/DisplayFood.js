//import libraries to use for this appli

import {
  StyleSheet,
  SafeAreaView,
  Text,
  View,
  Button,
  TextInput,
  Image,
  Pressable,
  TouchableOpacity,
  KeyboardAvoidingView,
  ScrollView,
  TouchableNativeFeedback,
  Keyboard,
} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import React, { useState, useEffect } from 'react';
import Random from './Random';
import { Entypo } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import * as Linking from 'expo-linking';
import { createDrawerNavigator } from '@react-navigation/drawer'; //import drawer
import { NavigationContainer } from '@react-navigation/native';

//export func and name it same as the file name in component
export default function DisplayFood({ navigation }) {
  const [food, setFood] = useState([
    {
      name: 'Korean BiBimbap kkkkkkkkkkkkk',
      url: 'https://myhubsdotorg.files.wordpress.com/2014/04/food2_bibimbap.jpg',
      Rating: 'Very high',
      country: 'Korea',
      detail: 'here',
      website:
        'https://mykoreankitchen.com/bibimbap-korean-mixed-rice-with-meat-and-assorted-vegetables/',
      socialNetWork: [
        {
          facebook: 'https://www.facebook.com/',
          twitter: 'https://twitter.com/?lang=en',
          instagram: 'https://www.instagram.com/',
        },
      ],
    },
    {
      name: 'kebab and kofta',
      url: 'https://www.healthylifetrainer.com/wp-content/uploads/2020/10/Kofta-Kebab-Recipe-3.jpg',
      Rating: 'High',
      country: 'Egypt',
      detail: 'read here',
      website: 'https://www.allrecipes.com/recipe/106030/kofta-kebabs/',
      socialNetWork: [
        {
          facebook: 'https://www.facebook.com/',
          twitter: 'https://twitter.com/?lang=en',
          instagram: 'https://www.instagram.com/',
        },
      ],
    },

    {
      name: 'The boeuf bourguignon',
      url: 'https://hips.hearstapps.com/hmg-prod/images/delish-190828-beef-bourguignon-0159-landscape-pf-1568132096.jpg?resize=1200:*',
      Rating: 'Medium high',
      country: 'Japan',
      detail: 'click here',
      website: 'https://cafedelites.com/beef-bourguignon/',
      socialNetWork: [
        {
          instagram: 'https://www.instagram.com/',
          facebook: 'https://www.facebook.com/',
          twitter: 'https://twitter.com/?lang=en',
        },
      ],
    },

    {
      name: 'Hot Pot',
      url: 'https://i.ebayimg.com/images/g/mYsAAOSwKY1ixw6M/s-l400.jpg',
      Rating: 'Average High',
      country: 'Germany',
      detail: 'read more',
      website: 'https://thewoksoflife.com/chinese-hot-pot-at-home/',
      socialNetWork: [
        {
          facebook: 'https://www.facebook.com/',
          twitter: 'https://twitter.com/?lang=en',
          instagram: 'https://www.instagram.com/',
        },
      ],
    },

    {
      name: 'AAAAAAAAAAAAAAAAAAAA',
      url: 'https://i.ebayimg.com/images/g/mYsAAOSwKY1ixw6M/s-l400.jpg',
      Rating: 'Very high',
      country: 'France',
      detail: 'read more',
      website: 'https://thewoksoflife.com/chinese-hot-pot-at-home/',
      socialNetWork: [
        {
          facebook: 'https://www.facebook.com/',
          twitter: 'https://twitter.com/?lang=en',
          instagram: 'https://www.instagram.com/',
        },
      ],
    },

    {
      name: 'BBBBBBBBBBBBBBBBBBBB',
      url: 'https://i.ebayimg.com/images/g/mYsAAOSwKY1ixw6M/s-l400.jpg',
      Rating: 'Average high',
      country: 'China',
      detail: 'read more',
      website: 'https://thewoksoflife.com/chinese-hot-pot-at-home/',
      socialNetWork: [
        {
          facebook: 'https://www.facebook.com/',
          twitter: 'https://twitter.com/?lang=en',
          instagram: 'https://www.instagram.com/',
        },
      ],
    },

    {
      name: 'CCCCCCCCCCCCCCCCCCCCCCC',
      url: 'https://i.ebayimg.com/images/g/mYsAAOSwKY1ixw6M/s-l400.jpg',
      Rating: 'High',
      country: 'Egypt',
      detail: 'read more',
      website: 'https://thewoksoflife.com/chinese-hot-pot-at-home/',
      socialNetWork: [
        {
          facebook: 'https://www.facebook.com/',
          twitter: 'https://twitter.com/?lang=en',
          instagram: 'https://www.instagram.com/',
        },
      ],
    },
  ]);

  return (
    //use scrollview to see all list. design complete for one type of food then copy

    <ScrollView style={{ flex: 1, backgroundColor: 'black' }}>
      <Text
        style={{
          fontSize: 25,
          fontWeight: 'bold',
          color: 'gold',
          textAlign: 'center',
        }}>
        {' '}
        POPULAR FOOD{'\n'}
      </Text>

      <View
        style={{
          flex: 0.25,
          flexDirection: 'row',
          heigt: 150,
          backgroundColor: 'black',
          paddingStart: 10,
          paddingTop: 20,
          borderColor: 'gold',
          borderWidth: 3,
        }}>
        <Image
          style={{
            width: 110,
            height: 110,
            resizeMode: 'cover',
            borderRadius: 10,
            marginRight: 10,
            margin: 10,
          }}
          source={require('./hotpotsmll.jpg')}></Image>
        <View
          style={{
            flex: 1,
            backgroundColor: 'brown',
            marginBottom: 5,
            marginRight: 5,
            marginTop: 0,
          }}>
          <Text
            style={{
              fontSize: 15,
              fontWeight: 'bold',
              textAlign: 'center',
              color: 'gold',
            }}>
            {' '}
            Hot Pots
          </Text>

          <View style={{ flex: 0.1, backgroundColor: 'gold' }} />
          <View style={{ flexDirection: 'row' }}>
            <Text
              style={{
                color: 'gold',
                fontSize: 12,

                marginLeft: 10,
              }}>
              {' '}
              Country: Popular in Asia
            </Text>
            {/*the colors are defined in random file and ready to use when call it */}
          </View>

          <View style={{ flexDirection: 'row' }}>
            <Text
              style={{
                color: 'gold',
                fontSize: 10,
                fontWeight: 'bold',
                marginLeft: 10,
              }}>
              {' '}
              Rating:
            </Text>
            {/*the colors are defined in random file and ready to use when call it */}
            <Text
              style={{
                color: Random.veryHigh,
                fontSize: 11,
                fontWeight: 'bold',
              }}>
              {' '}
              Very High
            </Text>
          </View>

          {/**second line of text. wrap the view in flexdirection to make content side by side*/}
          <View style={{ flexDirection: 'row' }}>{/* */}</View>
          {/* Website*/}
          <Text style={{ color: 'gold', fontSize: 10, fontWeight: 'bold' }}>
            <Button
              title="Click here for more info"
              color="gold"
              onPress={() =>
                Linking.openURL(
                  'https://www.zmenu.com/hot-pot-757-virginia-beach-online-menu/'
                )
              }
            />
          </Text>
          <View style={{ flexDirection: 'row' }}>
            <Text
              style={{
                color: 'gold',
                fontSize: 10,
                fontWeight: 'bold',
                marginLeft: 10,
              }}>
              ///link map here
            </Text>
          </View>

          {/** import icon props on top and styling for them. wrap in flexdirection view to keep them side by side*/}
          <View style={{ flexDirection: 'row' }}>
            <Text
              style={{
                color: 'gold',
                fontSize: 10,
                fontWeight: 'bold',
                marginLeft: 10,
              }}>
              Share to:
            </Text>

            <Entypo
              style={{ marginLeft: 10 }}
              name="facebook-with-circle"
              size={15}
              color="gold"
            />
            <Entypo
              style={{ marginLeft: 10 }}
              name="instagram-with-circle"
              size={15}
              color="gold"
            />
            <AntDesign
              style={{ marginLeft: 10 }}
              name="twitter"
              size={15}
              color="gold"
            />
          </View>
        </View>
      </View>

      {/***************************************         TACO   *************************************/}
      <Text></Text>
      <View
        style={{
          flex: 0.25,
          flexDirection: 'row',
          heigt: 150,
          backgroundColor: 'black',
          paddingStart: 10,
          paddingTop: 20,
          borderColor: 'gold',
          borderWidth: 3,
        }}>
        <Image
          style={{
            width: 110,
            height: 110,
            resizeMode: 'cover',
            borderRadius: 10,
            marginRight: 10,
            margin: 10,
          }}
          source={require('./tacoresized.jpg')}></Image>
        <View
          style={{
            flex: 1,
            backgroundColor: 'green',
            marginBottom: 15,
            marginRight: 5,
          }}>
          <Text
            style={{
              fontSize: 15,
              fontWeight: 'bold',
              textAlign: 'center',
              color: 'gold',
            }}>
            {' '}
            TACO
          </Text>
          {/*this view to make an underline. Notice no end View tag. set flexDirection view = row to make content side by side */}
          <View style={{ flex: 0.1, backgroundColor: 'gold' }} />
          <View style={{ flexDirection: 'row' }}>
            <Text
              style={{
                color: 'gold',
                fontSize: 10,
                fontWeight: 'bold',
                marginLeft: 10,
              }}>
              {' '}
              Rating:
            </Text>
            {/*the colors are defined in random file and read to use */}
            <Text
              style={{
                color: Random.mediumHigh,
                fontSize: 11,
                fontWeight: 'bold',
                marginLeft: 10,
              }}>
              {' '}
              Medium High
            </Text>
          </View>

          {/**second line of text. wrap the view in flexdirection to make content side by side*/}
          <View style={{ flexDirection: 'row' }}>
            <Text
              style={{
                color: 'gold',
                fontSize: 10,
                fontWeight: 'bold',
                marginLeft: 10,
              }}>
              {' '}
              Country: Mexico
            </Text>

            {/* */}
          </View>
          {/* Website*/}
          <Text style={{ color: 'gold', fontSize: 10, fontWeight: 'bold' }}>
            <Button
              title="Click here for more info"
              color="gold"
              onPress={() => Linking.openURL('https://deltaco.com/')}
            />
          </Text>

          {/** import icon props on top and styling for them. wrap in flexdirection view to keep them side by side*/}
          <View style={{ flexDirection: 'row' }}>
            <Text
              style={{
                color: 'gold',
                fontSize: 10,
                fontWeight: 'bold',
                marginLeft: 10,
              }}>
              Share to:
            </Text>

            <Entypo
              style={{ marginLeft: 10 }}
              name="facebook-with-circle"
              size={15}
              color="gold"
            />
            <Entypo
              style={{ marginLeft: 10 }}
              name="instagram-with-circle"
              size={15}
              color="gold"
            />
            <AntDesign
              style={{ marginLeft: 10 }}
              name="twitter"
              size={15}
              color="gold"
            />
          </View>
        </View>
      </View>
      {/***********************    Falafel, also known as Ta’meya        ******************** */}
      <Text></Text>

      <View
        style={{
          flex: 0.25,
          flexDirection: 'row',
          heigt: 150,
          backgroundColor: 'black',
          paddingStart: 10,
          paddingTop: 20,
          borderColor: 'gold',
          borderWidth: 3,
        }}>
        <Image
          style={{
            width: 110,
            height: 110,
            resizeMode: 'cover',
            borderRadius: 10,
            marginRight: 10,
            margin: 10,
          }}
          source={require('./egyptian-falafelsmll2.jpg')}></Image>
        <View
          style={{
            flex: 1,
            backgroundColor: 'darkmagenta',
            marginBottom: 15,
            marginRight: 5,
          }}>
          <Text
            style={{
              fontSize: 15,
              fontWeight: 'bold',
              textAlign: 'center',
              color: 'gold',
            }}>
            {' '}
            Falafel, also known as Ta’meya
          </Text>
          {/*this view to make an underline. Notice no end View tag. set flexDirection view = row to make content side by side */}
          <View style={{ flex: 0.1, backgroundColor: 'gold' }} />
          <View style={{ flexDirection: 'row' }}>
            <Text
              style={{
                color: 'gold',
                fontSize: 10,
                fontWeight: 'bold',
                marginLeft: 10,
              }}>
              {' '}
              Rating:
            </Text>
            {/*the colors are defined in random file and read to use */}
            <Text
              style={{
                color: Random.high1,
                fontSize: 11,
                fontWeight: 'bold',
                marginLeft: 10,
              }}>
              {' '}
              High
            </Text>
          </View>

          {/**second line of text. wrap the view in flexdirection to make content side by side*/}
          <View style={{ flexDirection: 'row' }}>
            <Text
              style={{
                color: 'gold',
                fontSize: 10,
                fontWeight: 'bold',
                marginLeft: 10,
              }}>
              {' '}
              Country: Egypt
            </Text>

            {/* */}
          </View>
          {/* Website*/}
          <Text style={{ color: 'gold', fontSize: 15, fontWeight: 'bold' }}>
            <Button
              title="Click here for more info"
              color="gold"
              onPress={() =>
                Linking.openURL(
                  'https://eztouregypt.com/best-traditional-egyptian-food/'
                )
              }
            />
          </Text>

          {/** import icon props on top and styling for them. wrap in flexdirection view to keep them side by side*/}
          <View style={{ flexDirection: 'row' }}>
            <Text
              style={{
                color: 'gold',
                fontSize: 10,
                fontWeight: 'bold',
                marginLeft: 10,
              }}>
              Share to:
            </Text>

            <Entypo
              style={{ marginLeft: 10 }}
              name="facebook-with-circle"
              size={15}
              color="gold"
            />
            <Entypo
              style={{ marginLeft: 10 }}
              name="instagram-with-circle"
              size={15}
              color="gold"
            />
            <AntDesign
              style={{ marginLeft: 10 }}
              name="twitter"
              size={15}
              color="gold"
            />
          </View>
        </View>
      </View>
      {/**************************           CHILLI CRAB      ************************* */}
      <Text></Text>

      <View
        style={{
          flex: 0.25,
          flexDirection: 'row',
          heigt: 150,
          backgroundColor: 'black',
          paddingStart: 10,
          paddingTop: 20,
          borderColor: 'gold',
          borderWidth: 3,
        }}>
        <Image
          style={{
            width: 110,
            height: 110,
            resizeMode: 'cover',
            borderRadius: 10,
            marginRight: 10,
            margin: 10,
          }}
          source={require('./chili-crab200.jpg')}></Image>
        <View
          style={{
            flex: 1,
            backgroundColor: 'royalblue',
            marginBottom: 15,
            marginRight: 5,
          }}>
          <Text
            style={{
              fontSize: 15,
              fontWeight: 'bold',
              textAlign: 'center',
              color: 'gold',
            }}>
            {' '}
            Chili Crab
          </Text>
          {/*this view to make an underline. Notice no end View tag. set flexDirection view = row to make content side by side */}
          <View style={{ flex: 0.1, backgroundColor: 'gold' }} />
          <View style={{ flexDirection: 'row' }}>
            <Text
              style={{
                color: 'gold',
                fontSize: 10,
                fontWeight: 'bold',
                marginLeft: 10,
              }}>
              {' '}
              Rating:
            </Text>
            {/*the colors are defined in random file and read to use */}
            <Text
              style={{
                color: Random.averageHigh,
                fontSize: 11,
                fontWeight: 'bold',
                marginLeft: 10,
              }}>
              {' '}
              Average High
            </Text>
          </View>

          {/**second line of text. wrap the view in flexdirection to make content side by side*/}
          <View style={{ flexDirection: 'row' }}>
            <Text
              style={{
                color: 'gold',
                fontSize: 10,
                fontWeight: 'bold',
                marginLeft: 10,
              }}>
              {' '}
              Country: Singapore
            </Text>

            {/* */}
          </View>
          {/* Website*/}
          <Text style={{ color: 'gold', fontSize: 10, fontWeight: 'bold' }}>
            <Button
              title="Click here for more info"
              color="gold"
              onPress={() =>
                Linking.openURL(
                  'https://www.cnn.com/travel/article/world-best-food-dishes/index.html'
                )
              }
            />
          </Text>

          {/** import icon props on top and styling for them. wrap in flexdirection view to keep them side by side*/}
          <View style={{ flexDirection: 'row' }}>
            <Text
              style={{
                color: 'gold',
                fontSize: 10,
                fontWeight: 'bold',
                marginLeft: 10,
              }}>
              Share to:
            </Text>

            <Entypo
              style={{ marginLeft: 10 }}
              name="facebook-with-circle"
              size={15}
              color="gold"
            />
            <Entypo
              style={{ marginLeft: 10 }}
              name="instagram-with-circle"
              size={15}
              color="gold"
            />
            <AntDesign
              style={{ marginLeft: 10 }}
              name="twitter"
              size={10}
              color="gold"
            />
          </View>
        </View>
      </View>
      {/************************              BUNNY CHOW     ****************************************************************** */}
      <Text></Text>

      <View
        style={{
          flex: 0.25,
          flexDirection: 'row',
          heigt: 150,
          backgroundColor: 'black',
          paddingStart: 10,
          paddingTop: 20,
          borderColor: 'gold',
          borderWidth: 3,
        }}>
        <Image
          style={{
            width: 110,
            height: 110,
            resizeMode: 'cover',
            borderRadius: 10,
            marginRight: 10,
            margin: 10,
          }}
          source={require('./bunnychowsmll.jpg')}></Image>
        <View
          style={{
            flex: 1,
            backgroundColor: 'sienna',
            marginBottom: 15,
            marginRight: 5,
          }}>
          <Text
            style={{
              fontSize: 15,
              fontWeight: 'bold',
              textAlign: 'center',
              color: 'gold',
            }}>
            {' '}
            Bunny Chow
          </Text>
          {/*this view to make an underline. Notice no end View tag. set flexDirection view = row to make content side by side */}
          <View style={{ flex: 0.1, backgroundColor: 'gold' }} />
          <View style={{ flexDirection: 'row' }}>
            <Text
              style={{
                color: 'gold',
                fontSize: 10,
                fontWeight: 'bold',
                marginLeft: 10,
              }}>
              {' '}
              Rating:
            </Text>
            {/*the colors are defined in random file and read to use */}
            <Text
              style={{
                color: Random.mediumHigh,
                fontSize: 11,
                fontWeight: 'bold',
                marginLeft: 10,
              }}>
              {' '}
              Medium High
            </Text>
          </View>

          {/**second line of text. wrap the view in flexdirection to make content side by side*/}
          <View style={{ flexDirection: 'row' }}>
            <Text
              style={{
                color: 'gold',
                fontSize: 10,
                fontWeight: 'bold',
                marginLeft: 10,
              }}>
              {' '}
              Country: South Africa
            </Text>

            {/* */}
          </View>
          {/* Website*/}
          <Text style={{ color: 'gold', fontSize: 15, fontWeight: 'bold' }}>
            <Button
              title="Click here for more info"
              color="gold"
              onPress={() =>
                Linking.openURL('https://www.africanbites.com/bunny-chow/')
              }
            />
          </Text>

          {/** import icon props on top and styling for them. wrap in flexdirection view to keep them side by side*/}
          <View style={{ flexDirection: 'row' }}>
            <Text
              style={{
                color: 'gold',
                fontSize: 10,
                fontWeight: 'bold',
                marginLeft: 10,
              }}>
              Share to:
            </Text>

            <Entypo
              style={{ marginLeft: 10 }}
              name="facebook-with-circle"
              size={15}
              color="gold"
            />
            <Entypo
              style={{ marginLeft: 10 }}
              name="instagram-with-circle"
              size={15}
              color="gold"
            />
            <AntDesign
              style={{ marginLeft: 10 }}
              name="twitter"
              size={15}
              color="gold"
            />
          </View>
        </View>
      </View>
      {/****************************************   Pierogi      *********************************************************** */}
      {/*keep the text tag for small gap*/}
      <Text></Text>

      <View
        style={{
          flex: 0.25,
          flexDirection: 'row',
          heigt: 150,
          backgroundColor: 'black',
          paddingStart: 10,
          paddingTop: 20,
          borderColor: 'gold',
          borderWidth: 3,
        }}>
        <Image
          style={{
            width: 110,
            height: 110,
            resizeMode: 'cover',
            borderRadius: 10,
            marginRight: 10,
            margin: 10,
          }}
          source={require('./poland-pierogi200.jpg')}></Image>
        <View
          style={{
            flex: 1,
            backgroundColor: 'midnightblue',
            marginBottom: 15,
            marginRight: 5,
          }}>
          <Text
            style={{
              fontSize: 15,
              fontWeight: 'bold',
              textAlign: 'center',
              color: 'gold',
            }}>
            {' '}
            Pierogi
          </Text>
          {/*this view to make an underline. Notice no end View tag. set flexDirection view = row to make content side by side */}
          <View style={{ flex: 0.1, backgroundColor: 'gold' }} />
          <View style={{ flexDirection: 'row' }}>
            <Text
              style={{
                color: 'gold',
                fontSize: 10,
                fontWeight: 'bold',
                marginLeft: 10,
              }}>
              {' '}
              Rating:
            </Text>
            {/*the colors are defined in random file and read to use */}
            <Text
              style={{
                color: Random.veryHigh,
                fontSize: 11,
                fontWeight: 'bold',
                marginLeft: 10,
              }}>
              {' '}
              Very High
            </Text>
          </View>

          {/**second line of text. wrap the view in flexdirection to make content side by side*/}
          <View style={{ flexDirection: 'row' }}>
            <Text
              style={{
                color: 'gold',
                fontSize: 10,
                fontWeight: 'bold',
                marginLeft: 10,
              }}>
              {' '}
              Country: Poland
            </Text>

            {/* */}
          </View>
          {/* Website*/}
          <Text style={{ color: 'gold', fontSize: 10, fontWeight: 'bold' }}>
            <Button
              title="Click here for more info"
              color="gold"
              onPress={() =>
                Linking.openURL('https://www.africanbites.com/bunny-chow/')
              }
            />
          </Text>

          {/** import icon props on top and styling for them. wrap in flexdirection view to keep them side by side*/}
          <View style={{ flexDirection: 'row' }}>
            <Text
              style={{
                color: 'gold',
                fontSize: 10,
                fontWeight: 'bold',
                marginLeft: 10,
              }}>
              Share to:
            </Text>

            <Entypo
              style={{ marginLeft: 10 }}
              name="facebook-with-circle"
              size={15}
              color="gold"
            />
            <Entypo
              style={{ marginLeft: 10 }}
              name="instagram-with-circle"
              size={15}
              color="gold"
            />
            <AntDesign
              style={{ marginLeft: 10 }}
              name="twitter"
              size={15}
              color="gold"
            />
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
