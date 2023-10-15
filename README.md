# Delicious Food Around the World


## Overview

This React Native application is a food explorer app that allows users to explore delicious food from different cultures around the world. Users can discuss, review, and recommend types of food and where to enjoy them. The app features various screens and functionalities, including user check-ins on a map, popular food recommendations, user login and signup, and a feature to recommend food.

## Installation

Before running the app, make sure to install the required dependencies. You can do this using npm or yarn:


This will launch the development server and provide you with options to run the app on an emulator, device, or web browser.

## Screens and Components

### Home Page

The home page is the landing page of the app, where users are introduced to the app's purpose and features.

- Features:
  - Splash screen with an animated logo.
  - Introduction to the app and its purpose.
  - Buttons to navigate to other screens.

### User Check-in Map

This screen allows users to view a map and check in to their locations. They can also drag and drop a pin to specify their location.

- Features:
  - Interactive map with user location.
  - Ability to drag and drop a pin to specify a location.
  - Callout with location details.

### User Login

The user login screen allows users to log in to their accounts.

- Features:
  - Username and password input fields.
  - Login button.
  - Background image.

### Popular Food

This screen displays popular food recommendations. Users can navigate back to the home page or go to the "Recommend Food" screen.

- Features:
  - List of popular food recommendations.
  - Navigation buttons.

### Recommend Food

Users can recommend food on this screen by entering text. The input must be longer than 5 characters, or an alert will be displayed.

- Features:
  - Input field for food recommendations.
  - Submit button.
  - Validation for input length.

### Display

This screen displays a video and information about delicious food from around the world.

- Features:
  - Video player.
  - Information about food.
  - Navigation button to go back to the home page.

### User Signup

The user signup screen allows users to create new accounts.

- Features:
  - User registration form.
  - Sign-up button.
  - Background image.

## Dependencies

This app uses various dependencies, including but not limited to:

- [React Navigation](https://reactnavigation.org/): For navigation between screens.
- [Expo](https://expo.dev/): For development and building the app.
- [React Native Maps](https://github.com/react-native-maps/react-native-maps): For map functionality.
- [Expo Audio](https://docs.expo.dev/versions/latest/sdk/audio/): For playing audio.
- [Expo Video](https://docs.expo.dev/versions/latest/sdk/video/): For video playback.

## Author

- Rachael Savage

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
