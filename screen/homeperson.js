import  React, {useState, useEffect} from 'react';
import {Button, ScrollView, Text, ActivityIndicator,FlatList,View} from 'react-native';

import SafeAreaView from 'react-native-safe-area-view';
import Card4 from '../components/card_s4';
import {AuthContext} from '../components/context';
import { TouchableOpacity } from 'react-native-gesture-handler';


const HomepersonScreen = ({route,navigation}) => {
  const { homeID } = route.params;
  const { HomeLat } = route.params;
  const { HomeLong } = route.params;
  const { HomeImg } = route.params;
  const {signOut} =React.useContext(AuthContext);
  const [person, setPerson] = useState([]);
  
  
  const init = async () => {
    const response = await fetch('http://10.0.3.2/api/person/getAllPerson/'+homeID);
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
        onPress={() => navigation.navigate('Deatailss1', {PersonName : person[index], homeID : homeID ,HomeLat: HomeLat, HomeLong: HomeLong, HomeImg : HomeImg})}>
        
      
        <Card4
        
        imageUri={item.patient_img}
        title={item.pa_name}
        descrip={item.pa_last_name}
        time={item.pa_gender}
        note={item.pa_religion}
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

export default HomepersonScreen;