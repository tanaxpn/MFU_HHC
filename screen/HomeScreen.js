import  React, {Component,useState,useEffect}from 'react';
import {Button, ScrollView, Text,FlatList,View} from 'react-native';

import SafeAreaView from 'react-native-safe-area-view';
import Cardhome from '../components/cardhome';
import {AuthContext} from '../components/context';
import { TouchableOpacity } from 'react-native-gesture-handler';



const HomeScreen = ({route ,navigation}) => {
  const { Homename } = route.params;
  const {signOut} =React.useContext(AuthContext);
  const [person, setPerson] = useState([]);
  
  
  const init = async () => {
    const response = await fetch('http://10.0.3.2/api/village/getAllHome/'+Homename);
    const {data} = await response.json();
 
    setPerson(data);
  }


  useEffect( () => {
    init();
  }, []);

  _renderItem = ({item,index}) => {
    return (
      
      <View>
      <ScrollView>
      <View>
        <TouchableOpacity
        // onPress={() => navigation.navigate('homeperson')}>
        onPress={() => navigation.navigate('homeperson',{homeID: item.ho_id, HomeLat: item.ho_lat, HomeLong: item.ho_long,HomeImg: item.ho_image})}>
      
        <Cardhome
        
        imageUri={item.ho_image}
        title={item.ho_village}
        descrip={item.ho_province}
        time={item.ho_district}
        note={item.ho_subdistrict}
        />
         </TouchableOpacity>
      </View>
      </ScrollView>
      </View>
       
    //    <ul>
    //    {data.users.map((user) => (
    //      <li key={user.id}>{user.name}</li>
    //    ))}
    //  </ul>


    );
  };
  
  renderSeparator = () => {
    return (
      <View style={{height: 1, width: '100%', backgroundColor: 'purple'}} />
    );
  };
  
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
      <ScrollView>
        <FlatList
          data={person}
          keyExtractor={({id}, index) => id}
          renderItem={
            _renderItem
            // <Text>{item.ho_id}, {item.ho_country}</Text>
          }
          ItemSeperatorComponent={renderSeparator}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;