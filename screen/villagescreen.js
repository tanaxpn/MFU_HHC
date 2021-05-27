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
import Cardhome from '../components/cardhome';
import {AuthContext} from '../components/context';
import {TouchableOpacity} from 'react-native-gesture-handler';

const villageScreen = ({navigation}) => {
  const {signOut} = React.useContext(AuthContext);
  const [person, setPerson] = useState([]);
  
  
  const init = async () => {
    const response = await fetch('http://10.0.3.2/api/village/getAll');
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
        // onPress={() => navigation.navigate('Home')}>
        // onPress={alertshow(item.village_name)}
        onPress={() => navigation.navigate('Home',{Homename:item.village_name})}
        >

        <Cardhome
        imageUri={item.village_image}
        title={item.village_name}
        item={item.village_name}
        />
        

        {/* <View
          style={{
            flexDirection: 'row',
            backgroundColor: 'white',
            borderRadius: 10,
          }}>
          <Image
            source={{
              uri:
                'https://png.pngtree.com/element_our/20190528/ourlarge/pngtree-vector-cartoon-stereo-small-house-image_1165731.jpg',
            }}
            style={{
              marginLeft: 10,
              height: 100,
              width: 100,
              borderWidth: 0.5,
              marginTop: 10,
              marginRight: 10,
              marginBottom: 10,
            }}
          />
          <View style={{flex: 2, marginTop: 10}}>
            <Text>{item.ho_owner_home}</Text>
            <Text >
              {item.ho_address},{item.ho_country}
            </Text>
            <Text >{item.cr_date}</Text>
            <Text >หมายเหตุ : {item.upd_date}</Text>
          </View>

        </View>
        <View /> */}
        </TouchableOpacity>
        
        {/* <TouchableOpacity 
            style={styles.button}
            onPress={alert(item.village_name)}
            >
            <LinearGradient
                colors={['#08d4c4','#01ab9d']}
                style={styles.signIn}            
            >
                <Text style={[styles.textSign,{
                color:'#fff'
                }]}>Sign In</Text>
            </LinearGradient>
            </TouchableOpacity> */}
      </View>
      </ScrollView>
      </View>
       
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

export default villageScreen;

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