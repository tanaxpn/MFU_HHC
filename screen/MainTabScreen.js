import React, {useEffect} from 'react';

import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';

import HomeScreen from './HomeScreen';
import DetailsScreen from './DetailsScreen';
import ProfileScreen from './ProfileScreen';
import ExploreScreen from './ExploreScreen';
import SignInScreen from './SignUpScreen';
import assessmentmenu from './assessmentmenu';
import assessmentbody from './assessment/assessment-body';
import HomepersonScreen from './homeperson';
import villageScreen from './villagescreen';
import Cardhome from '../components/cardhome';
import assessmentbodypart2 from '../screen/assessment/assessment-bodypart2'
import Barthel from '../screen/assessment/barthelactivity'
import EditMapscreen from './mapedit'
import assessmentbodyresult from './treatmentresult/aseessmentresult'
import assessmentbodypart2result from './treatmentresult/aseessmentresultpart2'
import roundassetp1 from './treatmentresult/assetp1round'
import roundassetp2 from './treatmentresult/assetp2round'

import treatmentmenu from '../screen/treatmentresult/treatmentmenu'
import resultbarthel from '../screen/treatmentresult/barthelresult'

import Mapscreen from './map';

import Ionicons from 'react-native-vector-icons/Ionicons';

const HomeStack = createStackNavigator();
const DetailsStack = createStackNavigator();
const ProfileStack = createStackNavigator();
const ExploreStack = createStackNavigator();

const Tab = createMaterialBottomTabNavigator();

const MainTabScreen = () => (
  <Tab.Navigator
    initialRouteName="Home"
    activeColor="#e91e63"
    style={{backgroundColor: 'tomato'}}>
    <Tab.Screen
      name="Home"
      component={HomeStackScreen}
      options={{
        tabBarLabel: 'Home',
        tabBarIcon: ({color}) => (
          <Ionicons name="ios-home" color={color} size={26} />
        ),
      }}
    />
    <Tab.Screen
      name="Maps"
      component={DetailsStackScreen}
      options={{
        tabBarLabel: 'Maps',
        tabBarIcon: ({color}) => (
          <Ionicons name="md-map" color={color} size={26} />
        ),
      }}
    />
    <Tab.Screen
      name="Profile"
      component={ProfileStackScreen}
      options={{
        tabBarLabel: 'Profile',
        tabBarIcon: ({color}) => (
          <Ionicons name="ios-person" color={color} size={26} />
        ),
      }}
    />
    <Tab.Screen
      name="Explore"
      component={ExploreStackScreen}
      options={{
        tabBarLabel: 'การประเมิน',
        tabBarIcon: ({color}) => (
          <Ionicons name="ios-aperture" color={color} size={26} />
        ),
      }}
    />
  </Tab.Navigator>
);

export default MainTabScreen;

const HomeStackScreen = ({navigation}, props) => (
  <HomeStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: '#3F82DC',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }}>
    <HomeStack.Screen
      name="village"
      component={villageScreen}
      options={{
        title: 'MFU_HHC',
        headerLeft: () => (
          <Ionicons.Button
            name="ios-menu"
            size={25}
            backgroundColor="#3F82DC"
            onPress={() => {
              navigation.openDrawer();
            }}
          />
        ),
      }}
    />

    <HomeStack.Screen
      name="Deatailss1"
      component={DetailsScreen}
      options={{
        title: 'MFU_HHC',
      }}
    />

    <HomeStack.Screen
      name="assetmenu"
      component={assessmentmenu}
      options={{
        title: 'MFU_HHC',
      }}
    />

    <HomeStack.Screen
      name="assetbody"
      component={assessmentbody}
      options={{
        title: 'MFU_HHC',
      }}
    />

    <HomeStack.Screen
      name="assetbody2"
      component={assessmentbodypart2}
      options={{
        title: 'MFU_HHC',
      }}
    />

    <HomeStack.Screen
      name="homeperson"
      component={HomepersonScreen}
      options={{
        title: 'MFU_HHC',
      }}
    />

    <HomeStack.Screen
      name="mapscreen"
      component={Mapscreen}
      options={{
        title: 'MFU_HHC',
      }}
    />

    <HomeStack.Screen
      name="Home"
      component={HomeScreen}
      options={{
        title: 'MFU_HHC',
      }}
    />

  <HomeStack.Screen
      name="barthel"
      component={Barthel}
      options={{
        title: 'MFU_HHC',
      }}
    />

  <HomeStack.Screen
      name="treatresult"
      component={treatmentmenu}
      options={{
        title: 'MFU_HHC',
      }}
    />

<HomeStack.Screen
      name="resultbar"
      component={resultbarthel}
      options={{
        title: 'MFU_HHC',
      }}
    />
<HomeStack.Screen
      name="editmap"
      component={EditMapscreen}
      options={{
        title: 'MFU_HHC',
      }}
    />

<HomeStack.Screen
      name="assetp1result"
      component={assessmentbodyresult}
      options={{
        title: 'MFU_HHC',
      }}
    />

<HomeStack.Screen
      name="assetp2result"
      component={assessmentbodypart2result}
      options={{
        title: 'MFU_HHC',
      }}
    />

    <HomeStack.Screen
    name="roundassetp1"
    component={roundassetp1}
    options={{
      title: 'MFU_HHC',
    }}/>

    <HomeStack.Screen
    name="roundassetp2"
    component={roundassetp2}
    options={{
      title: 'MFU_HHC',
    }}/>

  </HomeStack.Navigator>
);

const DetailsStackScreen = ({navigation}) => (
  <DetailsStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: '#3F82DC',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }}>
    <DetailsStack.Screen
      name="Profiles"
      component={ProfileScreen}
      options={{
        title: 'MFU_HHC',
        headerLeft: () => (
          <Ionicons.Button
            name="ios-menu"
            size={25}
            backgroundColor="#3F82DC"
            onPress={() => {
              navigation.openDrawer();
            }}
          />
        ),
      }}
    />
  </DetailsStack.Navigator>
);

const ProfileStackScreen = ({navigation}) => (
  <ProfileStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: '#3F82DC',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }}>
    <ProfileStack.Screen
      name="Profiles"
      component={ProfileScreen}
      options={{
        title: 'MFU_HHC',
        headerLeft: () => (
          <Ionicons.Button
            name="ios-menu"
            size={25}
            backgroundColor="#3F82DC"
            onPress={() => {
              navigation.openDrawer();
            }}
          />
        ),
      }}
    />
  </ProfileStack.Navigator>
);

const ExploreStackScreen = ({navigation}) => (
  <ExploreStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: '#3F82DC',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }}>
    <ExploreStack.Screen
      name="Explores"
      component={ExploreScreen}
      options={{
        title: 'MFU_HHC',
        headerLeft: () => (
          <Ionicons.Button
            name="ios-menu"
            size={25}
            backgroundColor="#3F82DC"
            onPress={() => {
              navigation.openDrawer();
            }}
          />
        ),
      }}
    />
  </ExploreStack.Navigator>
);
