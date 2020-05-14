import {createAppContainer,createSwitchNavigator} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'
import HomeScreen from './Screens/HomeScreen'
import LoadingScreen from './Screens/LoadingScreen'
import LoginScreen from './Screens/LoginScreen'
import RegisterScreen from './Screens/RegisterScreen'

import * as firebase from 'firebase'

  var firebaseConfig = {
    apiKey: "AIzaSyAuHxyI9bbZIDDC0pCEi_V8s2a7KfEhLNQ",
    authDomain: "reactnativefirebase-69e33.firebaseapp.com",
    databaseURL: "https://reactnativefirebase-69e33.firebaseio.com",
    projectId: "reactnativefirebase-69e33",
    storageBucket: "reactnativefirebase-69e33.appspot.com",
    messagingSenderId: "241164455758",
    appId: "1:241164455758:web:143510063682a067bd581f"
  };

  firebase.initializeApp(firebaseConfig);

  const AppStack = createStackNavigator({
    Home : HomeScreen
  }) 

  const AuthStack = createStackNavigator({
    Login:LoginScreen,
    Register:RegisterScreen
  })

  export default createAppContainer(
    createSwitchNavigator(
      {
        Loading:LoadingScreen,
        App:AppStack,
        Auth:AuthStack
      },
      {
        initialRouteName:'Loading'
      }
    )
  ) 