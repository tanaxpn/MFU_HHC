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

const resultbarthel = ({route,navigation}) => {

  const { PersonName } = route.params;
 

  const {signOut} = React.useContext(AuthContext);
  const [person, setPerson] = useState([]);
  const [Resultscore,setResultscore] = useState('');
 
  
  
  const init = async () => {
    const response = await fetch('http://10.0.3.2/api/barthel/getAllbarthel/'+PersonName.id);
    const {data} = await response.json();
    
    setPerson(data);
  }



  function calculate  (data)  {
      
         if (data <= 4){
           return "ไม่สามารถทำกิจวัตรประจำวันได้เองต้องการความช่วยเหลืออย่างมากที่สุด"

         }else if (data <= 9) {
           return "ไม่สามารถทำกิจวัตรประจำวันได้เองต้องการความช่วยเหลืออย่างมาก"
         }else if (data <= 14){
            return "สามารถทำกิจวัตรประจำวันได้เองระดับปานกลาง"
         }else if (data <= 19 ){
           return "สามารถทำกิจวัตรประจำวันได้ในระดับมาก"
         }else {
           return "มีสามารถทำกิจวัตรประจำวันได้อย่างปกติ"
         }
       
  }

  function round (){
    const number = [];
    for (var i = 0; i < person.length; i++){
    number.push(person[i])}
    return number
  }
  //   function round (data) {
  //   var result = []
  //   for(var i = 0; i < data.length; i++) {
  //     result.push(data[i])
  //   }
  //   return result
  // }

//   function startTime() {
//     var today = new Date();
//     var h = today.getHours();
//     var m = today.getMinutes();
//     var s = today.getSeconds();
//     var date = today.getDate();
//     var month = today.getMonth() + 1;
//     var year = today.getFullYear();
//     m = checkTime(m);
//     s = checkTime(s);
//     setCurrentTime(h + ':' + m);
//     var t = setTimeout(startTime, 500);
//     setCurrentDate (date + '/' + month + '/' + year)
//   }
//   function checkTime(i) {
//     if (i < 10) {
//       i = '0' + i;
//     } // add zero in front of numbers < 10
//     return i;
//   }

//   useEffect(() => {
//     calculate();
//   });

  useEffect( () => {
    init();
  }, []);

  _renderItem = ({item,index}) => {
    return (
      
      <View>
      <ScrollView>
      <View style={{flexDirection: 'row' ,borderWidth:1,borderRadius:15,margin:10,alignItems: 'center'}}>
        <Text style={{margin:20,fontWeight: 'bold',color: 'grey'}}>
          รอบที่ {index+1}</Text>
          <View style={{}}>
        <Text>       วันที่ {"\n"} {item.barthel_date}</Text>
        </View>
         <Text style={{flexDirection: 'row',paddingRight:50,marginRight:130,marginLeft:30}}>
        ผลที่ได้ {calculate(item.barthel_score)} 
        </Text>
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
        <View style={{flexDirection: 'row',justifyContent: 'center', marginTop: 20,marginBottom:20}}>
          <Text style={{fontSize:25,justifyContent: 'center',fontWeight:'bold'}}>ผลการรักษาด้าน Daily Living Scale</Text>

          
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

export default resultbarthel;

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