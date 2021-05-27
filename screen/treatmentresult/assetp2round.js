import React, {useState, useEffect} from 'react';
import {
  Button,
  ScrollView,
  View,
  Text,
  ActivityIndicator,
  FlatList,
  Image,
  style,
  StyleSheet
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import SafeAreaView from 'react-native-safe-area-view';
import Cardhome from '..//../components/cardhome'

import {AuthContext} from '..//../components/context';
import {TouchableOpacity} from 'react-native-gesture-handler';

const roundassetp2 = ({route,navigation}) => {

  const { PersonName } = route.params;
 

  const {signOut} = React.useContext(AuthContext);
  const [person, setPerson] = useState([]);
  const [Resultscore,setResultscore] = useState('');
 
  
  
  const init = async () => {
    const response = await fetch('http://10.0.3.2/api/assetP2/getRoundassetP2/'+PersonName.id);
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
        <TouchableOpacity
        onPress={() => navigation.navigate('assetp2result',{assetp2ID : item.assetp2_id,PersonName : PersonName})}
        >
      <View style={{flexDirection: 'row' ,borderWidth:1,borderRadius:15,margin:10,alignItems: 'center', justifyContent: 'center'}}>
        <Text style={{margin:20,fontWeight: 'bold',color: 'black',textAlign: 'center'}}>
          รอบที่ {index+1}</Text>
      </View>
      </TouchableOpacity>
      </ScrollView>
      </View>
       
    );
  };


  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
      <ScrollView>
        <View style={{flexDirection: 'row',justifyContent: 'center', marginTop: 20,marginBottom:20}}>
          <Text style={{fontSize:25,justifyContent: 'center',fontWeight:'bold'}}>ผลการรักษาด้านร่างกาย</Text>

          
        </View>
        
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

export default roundassetp2;

const styles = StyleSheet.create({
  button : {
   justifyContent: 'center'

  },
  signIn: {
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  textSign: {
    fontSize: 18,
    fontWeight: 'bold',
  },

})