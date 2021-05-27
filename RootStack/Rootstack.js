import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';

// import HomeScreen from '../screen/HomeScreen';
// import DetailsScreen from '../screen/DetailsScreen';
import SplashScreen from '../screen/SplashScreen';
import SignInScreen from '../screen/SignInScreen';

const RootStack = createStackNavigator();

const RootStackScreen = ({navigation}) => (
    <RootStack.Navigator headerMode='none'>
      <RootStack.Screen name="Splash" component={SplashScreen}/>
      <RootStack.Screen name="SignInScreen" component={SignInScreen}/>
    </RootStack.Navigator>
  
);

export default RootStackScreen;
