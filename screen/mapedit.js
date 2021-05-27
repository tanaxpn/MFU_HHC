import  React  , {useState}from 'react';
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
    testcenter:{
    // position: 'absolute', 
    // top: 50, left: 0, 
    // right: 0, bottom: 0, 
    // justifyContent: 'center', 
    // alignItems: 'center',
    marginBottom:40,
    width:40,
    height:40
    }
   });


const EditMapscreen = ({route,navigation}) => {
    const {homeID} = route.params;
    const { HomeLat } = route.params;
    const { HomeLong } = route.params;
  
  const {signOut} = React.useContext(AuthContext);
  

 
  const update = async () => {
    
    const response = await fetch('http://10.0.3.2/api/home/edit/'+homeID, {
      method: 'patch',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        editholat:lat,
        editholong:long

      }),
    });
    
    const {data} = await response.json();
    
    setPerson(data);
  }
  function patching() {
    //   update()
      alert('บันทึกข้อมูลสำเร็จ')
  }

  const [lat,setlat] = useState()
  const [long,setlong] = useState()

  function showedit () {
    alert('แก้ไขสำเร็จ')
    update();
    
  }

  const onChangeValue = (value) => {
    //   alert(JSON.stringify(value.latitude))
    const latitude = value.latitude
    const longitude = value.longitude
    setlat(latitude)
    setlong(longitude)
  }


  return (
    <SafeAreaView style={{justifyContent: 'center',alignItems: 'center', flex: 1 , backgroundColor :"#fff"}}>
        
     <MapView
       provider={PROVIDER_GOOGLE} // remove if not using Google Maps
       style={styles.map}
       initialRegion={{
         latitude: HomeLat,
         longitude: HomeLong,
         latitudeDelta: 0.025,
         longitudeDelta: 0.025,
       }}
       onRegionChangeComplete = {onChangeValue}
     />
     <View>
    <Image style={styles.testcenter}  source={{uri: 'https://cdn0.iconfinder.com/data/icons/small-n-flat/24/678111-map-marker-512.png'}}/>
    </View>
     

     
    <View style={{position: 'absolute',bottom:50,left:170}}>
        <Button
        title="Click to update"
        onPress={() => {showedit()}}
        />
    </View>
   
    
   </SafeAreaView>
);
};

export default EditMapscreen;

