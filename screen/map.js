import  React from 'react';
import {Button, ScrollView, Text, StyleSheet, View,Image} from 'react-native';
import MapView, { PROVIDER_GOOGLE, Marker, Callout } from 'react-native-maps';

import SafeAreaView from 'react-native-safe-area-view';
import Cardhome from '../components/cardhome';
import {AuthContext} from '../components/context';
import { TouchableOpacity } from 'react-native-gesture-handler';



const styles = StyleSheet.create({
    container: {
      ...StyleSheet.absoluteFillObject,
      height: 400,
      width: 400,
      justifyContent: 'flex-end',
      alignItems: 'center',
    },
    map: {
      ...StyleSheet.absoluteFillObject,
      height:'100%',
    },
    container: {
        flexDirection:'column',
        alignSelf:'flex-start'
    },
    bubble : {
        flexDirection : 'column',
        alignSelf: 'flex-start',
        backgroundColor: '#fff',
        borderRadius:6,
        borderColor:'#ccc',
        borderWidth:0.5,
        padding:15,
        width:150,
    },
    arrow: {
        backgroundColor:'transparent',
        borderColor : 'transparent',
        borderTopColor:'#fff',
        borderWidth:16,
        alignSelf:'center',
        marginTop:-32
    },
    arrowBorder:{
        backgroundColor:'transparent',
        borderColor : 'transparent',
        borderTopColor: '#007a97',
        borderWidth:16,
        alignSelf:'center',
        marginTop:-0.5
    },
    name : {
        fontSize :16,
        marginBottom:5
    },
    image:{
        width:120,
        height:80,
    },
   });


const Mapscreen = ({route,navigation}) => {
  const { homeID } = route.params;
  const { HomeLat } = route.params;
  const { HomeLong } = route.params;
  const { HomeImg } = route.params;
  const {signOut} = React.useContext(AuthContext);
  

  const update = async () => {
    
    const response = await fetch('http://10.0.3.2/api/home/edit/'+homeID, {
      method: 'patch',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        
      }),
    });
    
    const {data} = await response.json();
    
    setPerson(data);
  }

  return (
    <SafeAreaView style={{ flex: 1 , backgroundColor :"#fff"}}>
   
     <MapView
       provider={PROVIDER_GOOGLE} // remove if not using Google Maps
       style={styles.map}
       region={{
         latitude: HomeLat,
         longitude: HomeLong,
         latitudeDelta: 0.015,
         longitudeDelta: 0.0121,
       }}
     >
         <Marker draggable
         coordinate={{
          latitude: HomeLat,
          longitude: HomeLong,
         }}
         
         title="เลือกสำเร็จ"
         description="This is test"
         >
             
         </Marker>

     </MapView>
    

    <View style={{position:'absolute',top:30,right:20,borderRadius:100}}>
      <Button style={{opacity:0.5}}
      onPress={() => navigation.navigate('editmap',{homeID : homeID ,HomeLat: HomeLat,HomeLong: HomeLong})}
      color='#2196F3'
      title="แก้ไขที่อยู่ผู้ป่วย"
      />
    </View>
   </SafeAreaView>
);
};

export default Mapscreen;

