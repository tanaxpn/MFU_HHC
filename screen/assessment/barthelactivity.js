import React, {useState, useEffect} from 'react';
import {
  Button,
  ScrollView,
  Text,
  View,
  StyleSheet,
  TextInput,
  CheckBox,
} from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';
// import {CheckBox} from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';

import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';

import {TouchableOpacity} from 'react-native-gesture-handler';

const Barthel = ({route,navigation}) => {
  const [isSelected, setSelection] = useState(false);
  const [isASelected, setBSelection, setCSelection, setDSelection, setESelection] = useState(false);
  const [currentTime, setCurrentTime] = useState('');
  const [currentDate, setCurrentDate] = useState('');
  const [Score, setScore] = useState(0);


  const { PersonName } = route.params;
  

  

  var radio_props1 = [
    {label: 'ต้องมีคนป้อน', value: 0},
    {label: 'ต้องมีคนอื่นช่วยแต่พอตักอาหารได้', value: 1 },
    {label: 'สามารถรับประทานอาหารเองได้', value: 2}
  ];

  var radio_props2 = [
    {label: 'ต้องมีคนช่วย', value: 0 },
    {label: 'ทำเองได้', value: 1 },
   
  ];

  var radio_props3 = [
    {label: 'ไม่สามารถควบคุมการถ่ายอุจจาระได้เลย', value: 0 },
    {label: 'มีอุจจาระราดเป็นครั้งคราว', value: 1 },
    {label: 'กลั้นได้ดีเป็นปกติ', value: 2}
  ];

  var radio_props4 = [
    {label: 'ไม่สามารถควบคุมการถ่ายปัสสาวะได้เลย', value: 0 },
    {label: 'มีปัสสาวะราดเป็นครั้งคราว', value: 1 },
    {label: 'กลั้นได้ดีเป็นปกติ', value: 2}
  ];

  var radio_props5 = [
    {label: 'ช่วยตัวเองไม่ได้เลย', value: 0 },
    {label: 'ต้องมีคนอื่นช่วยในการแต่งตัวบ้าง', value: 1 },
    {label: 'สามารถแต่งตัวได้เอง', value: 2}
  ];

  var radio_props6 = [
    {label: 'ช่วยตัวเองไม่ได้เลย', value: 0 },
    {label: 'นั่งเองได้ ต้องมีคนช่วยย้ายจากเก้าอี้ไปยังเตียง', value: 1 },
    {label: 'ต้องมีคนช่วยพยุงบ้างเล็กน้อย', value: 2 },
    {label: 'ไปได้เองโดยไม่ต้องมีคนช่วย', value: 3}
  ];

  var radio_props7 = [
    {label: 'ไม่สามารถช่วยตัวเองได้เลย', value: 0 },
    {label: 'นั่งเองได้ ต้องมีคนช่วยย้ายจากเก้าอี้ไปยังเตียง', value: 1 },
    {label: 'ช่วยตัวเองได้ดี', value: 2}
  ];

  var radio_props8 = [
    {label: 'ไม่สามารถเคลื่อนที่ได้เอง', value: 0 },
    {label: 'เดินไม่ได้ แต่เคลื่อนที่ได้เองโดยใช้รถเข็น (Wheel Chair)', value: 1 },
    {label: 'เดินได้ถ้ามีคนพยุง หรือใช้ไม้เท้า', value: 2},
    {label: 'เดินได้เอง', value: 3},
  ];

  var radio_props9 = [
    {label: 'ไม่สามารถขึ้นลงบันไดได้', value: 0 },
    {label: 'ต้องมีคนพยุง', value: 1 },
    {label: 'ขึ้นลงบันไดได้เอง', value: 2}
  ];

  var radio_props10 = [
    {label: 'ต้องมีคนช่วยในการอาบน้ำ', value: 0 },
    {label: 'อาบน้ำได้เอง', value: 1 },
    
  ];

  

  function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    var date = today.getDate();
    var month = today.getMonth() + 1;
    var year = today.getFullYear();
    m = checkTime(m);
    s = checkTime(s);
    setCurrentTime(h + ':' + m);
    var t = setTimeout(startTime, 500);
    setCurrentDate (date + '/' + month + '/' + year)
  }
  function checkTime(i) {
    if (i < 10) {
      i = '0' + i;
    } // add zero in front of numbers < 10
    return i;
  }

  


  function handle(value){


    setScore(Score + value)
    console.log(Score);
  
    return Score
    
  }

  const send = async () => {
    console.log("ssssssssssssssssssssssssssssssssssssss");
    const response = await fetch('http://10.0.3.2/api/barthel/add', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        pats_id: PersonName.id,
        barthel_score: Score,
        barthel_date : currentDate
      }),
    });
    
    const {data} = await response.json();
    
    setPerson(data);
  }

  function adding () {
    send();
  alert("บันทึกข้อมูลสำเร็จ")
}


  useEffect(() => {
    startTime();
  });

  // useEffect(() => {
  //   var date = new Date().getDate(); //Current Date
  //   var month = new Date().getMonth() + 1; //Current Month
  //   var year = new Date().getFullYear(); //Current Year
  //   var hours = new Date().getHours(); //Current Hours
  //   var min = new Date().getMinutes(); //Current Minutes
  //   setCurrentDate(
  //    + hours + ':' + min
  //   );
  // }, []);

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
      <ScrollView>

      <View style={{flexDirection: 'row'}}>

          </View>
          <View
            style={{
              borderBottomColor: 'black',
              borderBottomWidth: 1,
            }}
          />

      <View style={{flexDirection: 'row'}}>
            <Text style={{fontSize: 20, marginTop: 5, marginLeft: 10,marginBottom:10}}>วันที่ :  </Text>
            <Text style={{marginLeft: 10, marginTop: 10}}>{currentDate}</Text>
          </View>
          <View
            style={{
              borderBottomColor: 'black',
              borderBottomWidth: 1,
            }}
          />
          

        <View style={{borderBottomWidth:0.5}}>
          <Text style={{marginLeft:10,fontSize:25,marginTop:14,fontWeight: 'bold'}}>
            1.การรับประทานอาหาร
            </Text>
        <RadioForm
          style={{marginLeft:20, marginTop:10, marginBottom:10}}
          radio_props={radio_props1}
          initial={null}
          onPress={handle}
          buttonColor={'#B9D4DB'}
        />
        </View>
        
        <View style={{borderBottomWidth:0.5}}>
          <Text style={{marginLeft:10,fontSize:25,marginTop:14,fontWeight: 'bold'}}>
            2.การจัดทรงผม/หวีผม
            </Text>
        <RadioForm
          style={{marginLeft:20, marginTop:10, marginBottom:10}}
          radio_props={radio_props2}
          initial={null}
          onPress={handle}
          buttonColor={'#B9D4DB'}
        />
        </View>
        
        <View style={{borderBottomWidth:0.5}}>
          <Text style={{marginLeft:10,fontSize:25,marginTop:14,fontWeight: 'bold'}}>
            3.การถ่ายอุจจาระ
            </Text>
        <RadioForm
          style={{marginLeft:20, marginTop:10, marginBottom:10}}
          radio_props={radio_props3}
          initial={null}
          onPress={handle}
          buttonColor={'#B9D4DB'}
        />
        </View>

        <View style={{borderBottomWidth:0.5}}>
          <Text style={{marginLeft:10,fontSize:25,marginTop:14,fontWeight: 'bold'}}>
            4.การถ่ายปัสสาวะ
            </Text>
        <RadioForm
          style={{marginLeft:20, marginTop:10, marginBottom:10}}
          radio_props={radio_props4}
          initial={null}
          onPress={handle}
          buttonColor={'#B9D4DB'}
        />
        </View>

        <View style={{borderBottomWidth:0.5}}>
          <Text style={{marginLeft:10,fontSize:25,marginTop:14,fontWeight: 'bold'}}>
            5.การแต่งตัว
            </Text>
        <RadioForm
          style={{marginLeft:20, marginTop:10, marginBottom:10}}
          radio_props={radio_props5}
          initial={null}
          onPress={handle}
          buttonColor={'#B9D4DB'}
        />
        </View>

        <View style={{borderBottomWidth:0.5}}>
          <Text style={{marginLeft:10,fontSize:25,marginTop:14,fontWeight: 'bold'}}>
          6.การเคลื่อนย้ายจากเก้าอี้ไปยัง{'\n'}เตียงนอน
            </Text>
        <RadioForm
          style={{marginLeft:20, marginTop:10, marginBottom:10}}
          radio_props={radio_props6}
          initial={null}
          onPress={handle}
          buttonColor={'#B9D4DB'}
        />
        </View>

        <View style={{borderBottomWidth:0.5}}>
          <Text style={{marginLeft:10,fontSize:25,marginTop:14,fontWeight: 'bold'}}>
          7.การเข้าห้องน้ำและการดูแลตนเองระหว่างถ่ายอุจจาระและปัสสาวะ
            </Text>
        <RadioForm
          style={{marginLeft:20, marginTop:10, marginBottom:10}}
          radio_props={radio_props7}
          initial={null}
          onPress={handle}
          buttonColor={'#B9D4DB'}
        />
        </View>

        <View style={{borderBottomWidth:0.5}}>
          <Text style={{marginLeft:10,fontSize:25,marginTop:14,fontWeight: 'bold'}}>
          8.การเคลื่อนที่
            </Text>
        <RadioForm
          style={{marginLeft:20, marginTop:10, marginBottom:10}}
          radio_props={radio_props8}
          initial={null}
          onPress={handle}
          buttonColor={'#B9D4DB'}
        />
        </View>

        <View style={{borderBottomWidth:0.5}}>
          <Text style={{marginLeft:10,fontSize:25,marginTop:14,fontWeight: 'bold'}}>
          9.การขึ้นลงบันได
            </Text>
        <RadioForm
          style={{marginLeft:20, marginTop:10, marginBottom:10}}
          radio_props={radio_props9}
          initial={null}
          onPress={handle}
          buttonColor={'#B9D4DB'}
        />
        </View>

        <View style={{borderBottomWidth:0.5}}>
          <Text style={{marginLeft:10,fontSize:25,marginTop:14,fontWeight: 'bold'}}>
          10.การอาบน้ำ
            </Text>
        <RadioForm
          style={{marginLeft:20, marginTop:10, marginBottom:10}}
          radio_props={radio_props10}
          initial={null}
          onPress={handle}
          buttonColor={'#B9D4DB'}
        />
        </View>

        <TouchableOpacity style={styles.button,{margin:20}}
        onPress={() => {adding()}}>
            <LinearGradient
              colors={['#08d4c4', '#01ab9d']}
              style={styles.signIn}>
              <Text
                style={[
                  styles.textSign,
                  {
                    color: '#fff',
                  },
                ]}>
                Save
              </Text>
            </LinearGradient>
          </TouchableOpacity>
        
      </ScrollView>
    </SafeAreaView>
  );
};

export default Barthel;

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    fontWeight: '300',
    color: '#fff',
  },
  txt: {
    fontSize: 12,
    color: '#A9A9A9',
  },
  title2: {
    margin: 15,
    fontSize: 20,
    fontWeight: 'bold',
  },
  txt2: {
    marginLeft: 15,
    marginBottom: 10,
    fontSize: 13,
    color: '#A9A9A9',
  },
  text_footer: {
    color: '#05375a',
    fontSize: 18,
    textAlign: 'center',
    marginTop: 15,
  },
  action: {
    flexDirection: 'row',
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f2f2f2',
    paddingBottom: 5,
    marginLeft: 30,
  },
  textInput: {
    flex: 1,
    fontSize: 20,
    paddingLeft: 10,
    color: '#05375a',
  },
  textInput1: {
    flex: 1,
    marginTop: Platform.OS == 'ios' ? 0 : -12,
    paddingLeft: 10,
    color: '#05375a',
    fontSize: 20,
  },
  topictext: {
    fontSize: 20,
    marginTop: 10,
    marginLeft: 10,
  },
  textInput2: {
    flex: 1,
    fontSize: 20,
    paddingLeft: 10,
    color: '#05375a',
    borderBottomWidth: 1,
    borderBottomColor: '#f2f2f2',
  },
  button: {
    alignItems: 'center',
    marginTop: 50,
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
});
