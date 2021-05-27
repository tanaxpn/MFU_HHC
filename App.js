// In App.js in a new project

import React, { useEffect } from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

// import Ionicons from 'react-native-vector-icons/Ionicons';

// import HomeScreen from './screen/HomeScreen';
// import DetailsScreen from './screen/DetailsScreen';


import RootStackScreen from './RootStack/Rootstack';

import { View } from 'react-native-animatable';
import { ActivityIndicator } from 'react-native';

import {AuthContext} from './components/context';
import MainTabScreen from './screen/MainTabScreen';

import {DrawerContent} from './screen/DrawerCotent';



const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();





const App = () => {
  
  const [isloading, setIsLoading] = React.useState(true);
  const [userToken, setUserToken] = React.useState(null);

  
  // const initailLoginState = {
  //   isloading:true,
  //   userName:null,
  //   userToken:null
  // };

  // const loginReducer = (prevState,action) => {
  //   switch(action.type){
  //     case 'RETRIEVE_TOKEN':
  //       return{
  //         ...prevState,
  //         userToken:action.token,
  //         isloading:false,
  //       };
  //     case 'LOGIN':
  //         return{
  //           ...prevState,
  //           userName:action.id,
  //           userToken:action.token,
  //           isloading:false,
  //         };
  //     case 'LOGOUT':
  //       return{
  //         ...prevState,
  //         userName:null,
  //         userToken:null,
  //         isloading:false,
  //       };
  //       case 'REGISTER':
  //       return{
  //         ...prevState,
  //         userName:action.id,
  //         userToken:action.token,
  //         isloading:false,
  //       };
  //   }
  // };

  // const [LoginState, dispatch] = React.useReducer(loginReducer,initailLoginState);

  const authContext = React.useMemo(() => ({
    signIn: (users,email,password) => {
      const targetUser = users.find(user => {
        return email === user.us_username , password === user.us_pass
      })
      if (targetUser) {
         setUserToken('fgkj');
        setIsLoading(false);   
      }else{
        alert('Something wrong. Plase check')
      }
     
      // let userToken;
      // userName = null;
      // if( userName =='user' && password == 'pass') {
      //   userToken = 'dfgdfg'
      // }
      // dispatch({ type:'LOGIN', id:userName, token:userToken });
    },
    signOut:() => {
      setUserToken(null);
      setIsLoading(false);
    },
    // signUp: () => {
    //   setUserToken('fgkj');
    //   setIsLoading(false);
    // },
    
  }), []);

  useEffect(() => {
    setTimeout(()=> {
      setIsLoading(false);
      // dispatch({type:'REGISTER', token: 'dfgdfg'})
    }, 1000);
  },[]);
  

  if( isloading ) {
    return(
      <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
        <ActivityIndicator size="large"/>
      </View>
    );
  }

  return (
    <AuthContext.Provider value={authContext}>
    <NavigationContainer>
      { userToken != null ? (
        <Drawer.Navigator drawerContent={props => <DrawerContent {...props}/>}>
        <Drawer.Screen name="HomeDrawer" component={MainTabScreen}/>
        </Drawer.Navigator>
      )
    :
     <RootStackScreen/>
    }
      
    </NavigationContainer>
    </AuthContext.Provider>
  );
}

export default App;
