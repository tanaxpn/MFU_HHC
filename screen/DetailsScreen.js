import  React from 'react';
import {Button, ScrollView, Text} from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';
import Card2 from '../components/card_s2';
import Card2_1 from '../components/card_s2-1';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Card2_2 from '../components/card_s2-2';
import Card2_3 from '../components/card_s2-3';

const DetailsScreen = ({route ,navigation}) => {
  const { homeID } = route.params;
  const { PersonName } = route.params;
  const { HomeLat } = route.params;
  const { HomeLong } = route.params;
 const { HomeImg } = route.params;


    function marital (data) {
      if(data == 1 ){
        return "โสด"
      }else if(data == 2 ){
       return "สมรส"
      }else if(data == 3 ){
        return "หย่าร้าง"
      }
      else if(data == 4) {
        return "sม้าย"
      }else{
        return ""
      }
    }

    return (
      <SafeAreaView style={{ flex: 1 , backgroundColor :"#fff" }}>
      
      
      <ScrollView>
      
      <Card2 style = {{}}

      imageUri={PersonName.patient_img}
      title={PersonName.pa_name +" "+ PersonName.pa_last_name}
      gender = {PersonName.pa_gender}
      olds={PersonName.pa_age}
      status = {marital(PersonName.pa_marital)}
      talls = {PersonName.pa_talls}
      weight = {PersonName.pa_weight}
      outtime = {PersonName.upd_date}
      
        />
        
      <TouchableOpacity
      onPress={() => navigation.navigate('assetmenu',{PersonName:PersonName})}
      >
      <Card2_1 style = {{}}

      />
      </TouchableOpacity>

      <TouchableOpacity
      onPress={() => navigation.navigate('mapscreen',{PersonName:PersonName,homeID : homeID ,HomeLat: HomeLat,HomeLong: HomeLong,HomeImg : HomeImg})}
      >
        
      <Card2_2 style = {{}}

      />
      </TouchableOpacity>

      <TouchableOpacity
      onPress={() => navigation.navigate('treatresult',{PersonName:PersonName})}>
      <Card2_3 style = {{}}

      />
      </TouchableOpacity>

      </ScrollView>

    </SafeAreaView>
    );
  }

  export default DetailsScreen;