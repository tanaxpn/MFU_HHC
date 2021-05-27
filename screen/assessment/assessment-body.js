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

import {TouchableOpacity} from 'react-native-gesture-handler';


const assessmentbody = ({route,navigation}) => {
  const { PersonName } = route.params;
  
  const [isSelected, setSelection] = useState(false);
  
  // Chage Text //////////////////////////////////
  const [Normalbody, setNormalBody] = useState('');
  const [Celcius,setCelcius]  = useState();
  const [Hrate,setHrate] = useState();
  const [OtherRe,setOtherRe] = useState('');
  const [Breathe,setBreathe] = useState();
  const [OtherCo,setOtherCo] = useState('');
  const [BloodP,setBloodP] = useState();
  const [Weight,setWeight] = useState();
  const [Tall,setTall] = useState();
  const [Bmi,setBmi] = useState();

  

  // checkbox //
  const [isregulaSelected, setregulaSelection] = useState(false);
  const [isregula1Selected, setregula1Selection] = useState(false);
  const [isregula2Selected, setregula2Selection] = useState(false);
  const [isregula3Selected, setregula3Selection] = useState(false);
  const [isregula4Selected, setregula4Selection] = useState(false);
  const [isregula5Selected, setregula5Selection] = useState(false);
  const [isregula6Selected, setregula6Selection] = useState(false);

  const [currentTime, setCurrentTime] = useState('');
  const [currentDate, setCurrentDate] = useState('');

  const onFieldChange = (key, value) => {
    setFormValues({...formValues, [key]: value })
  }
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

  useEffect(() => {
    startTime();
   
  });

  const send = async () => {
    
    const response = await fetch('http://10.0.3.2/api/assetP1/add', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        assetpat_id : PersonName.id,
        asset_date : currentDate,
        asset_time : currentTime,
        asset_body : Normalbody,
        asset_tem : Celcius,
        asset_hrate : Hrate,
        asset_regular : isregulaSelected,
        asset_irregular : isregula1Selected,
        asset_other_regular : OtherRe,
        asset_breathe : Breathe,
        asset_normal : isregula2Selected,
        asset_gasp : isregula3Selected,
        asset_dry : isregula4Selected,
        asset_wet : isregula5Selected,
        asset_othercheck : isregula6Selected,
        asset_other : OtherCo,
        asset_blood : BloodP,
        asset_weight : Weight,
        asset_tall : Tall,
        asset_bmi : Bmi



        // asset_body : ,
        // asset_tem : 
      }),
    });
    
    const {data} = await response.json();
    
    setPerson(data);
  }

  function adding () {
    send();
  alert("บันทึกข้อมูลสำเร็จ")
}


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
        <View>
          <View
            style={{
              borderBottomColor: 'black',
              borderBottomWidth: 1,
            }}
          />
          <View style={{flexDirection: 'row'}}>
            <Text style={{fontSize: 20, marginTop: 5, marginLeft: 10,marginBottom:10}}>วันที่ : </Text>
            <Text style={{marginLeft: 10, marginTop: 10}}>{currentDate}</Text>
          </View>
          <View
            style={{
              borderBottomColor: 'black',
              borderBottomWidth: 1,
            }}
          />
          <View style={{flexDirection: 'row'}}>
            <Text style={{fontSize: 20, marginTop: 5, marginLeft: 10,marginBottom:10}}>
              เวลา :{' '}
            </Text>
            <Text style={{marginLeft: 10, marginTop: 10}}>{currentTime}</Text>
          </View>
          <View
            style={{
              borderBottomColor: 'black',
              borderBottomWidth: 1,
            }}
          />
          <View>
            <Text style={styles.topictext}>ลักษณะทั่วไป</Text>
            <TextInput
                  style={styles.textInput2}
                  onChangeText={text => setNormalBody(text)}

                  placeholder="_________________________"
                  keyboardType="text"
                  value={Normalbody}
                />

            <Text style={{fontSize: 30, fontWeight: 'bold', marginLeft: 20}}>
              1.ด้านร่างกาย
            </Text>
            <View style={{flexDirection: 'row'}}>
              <Text style={styles.topictext}>อุณหภูมิ : </Text>
              <View style={{width: 100}}>
                <TextInput
                  onChangeText={text => setCelcius(text)}
                  
                  style={styles.textInput2}
                  placeholder="number"
                  keyboardType="numeric"
                  value={Celcius}
                />
              </View>
              <Text style={styles.topictext}>°C</Text>
            </View>

            <View style={{flexDirection: 'row'}}>
              <Text style={styles.topictext}>ชีพจร : </Text>
              <View style={{width: 100}}>
                <TextInput
                  style={styles.textInput2}
                  onChangeText={text => setHrate(text)}
                  placeholder="number"
                  keyboardType="numeric"
                  value={Hrate}
                />
              </View>
              <Text style={styles.topictext}>ครั้ง/นาที</Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <CheckBox value={isregulaSelected} onValueChange={setregulaSelection} />
              <Text style={{fontSize: 20}}>Regula</Text>
              <CheckBox value={isregula1Selected} onValueChange={setregula1Selection} />
              <Text style={{fontSize: 20}}>Irregula</Text>
              <TextInput 
              style={{fontSize: 15}} 
              onChangeText={text => setOtherRe(text)}
              value={OtherRe}
              placeholder="__________________" />
            </View>
            <View style={{flexDirection: 'row'}}>
            <Text style={styles.topictext}>การหายใจ : </Text>
              <View style={{width: 100}}>
                <TextInput
                  style={styles.textInput2}
                  onChangeText={text => setBreathe(text)}
                  value={Breathe}
                  placeholder="number"
                  keyboardType="numeric"
                />
              </View>
              <Text style={styles.topictext}>ครั้ง/นาที</Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <CheckBox value={isregula2Selected} onValueChange={setregula2Selection} />
              <Text style={{fontSize: 20}}>ปกติ</Text>
              <CheckBox value={isregula3Selected} onValueChange={setregula3Selection} />
              <Text style={{fontSize: 20}}>หอบเหนื่อย</Text>
              <CheckBox value={isregula4Selected} onValueChange={setregula4Selection} />
              <Text style={{fontSize: 20}}>ไอแห้งๆ</Text>

            </View>
            <View style={{flexDirection: 'row'}}>
            <CheckBox value={isregula5Selected} onValueChange={setregula5Selection} />
              <Text style={{fontSize: 20}}>ไอมีเสมหะ</Text>
              <CheckBox value={isregula6Selected} onValueChange={setregula6Selection} />
              <Text style={{fontSize: 20}}>อื่นๆ ระบุ</Text>
              <TextInput style={{fontSize: 15}} 
              onChangeText={text => setOtherCo(text)}
              value={OtherCo}
              placeholder="__________________" />
            </View>
            <View style={{flexDirection: 'row'}}>
            <Text style={styles.topictext}>ความดันโลหิต : </Text>
              <View style={{width: 100}}>
                <TextInput
                  style={styles.textInput2}
                  onChangeText={text => setBloodP(text)}
                  value={BloodP}
                  placeholder="number"
                  keyboardType="numeric"
                />
              </View>
              <Text style={styles.topictext}>มม.ปรอท</Text>
            </View>
            <View style={{flexDirection: 'row'}}>
            <Text style={styles.topictext}>น้ำหนัก/ส่วนสูง : </Text>
              <View style={{width: 100}}>
                <TextInput
                  style={styles.textInput2}
                  onChangeText={text => setWeight(text)}
                  value={Weight}
                  placeholder="number"
                  keyboardType="numeric"
                />
              </View>
              <Text style={styles.topictext}>กก./</Text>
            </View>
            <View style={{flexDirection: 'row'}}>
            <View style={{width: 100}}>
                <TextInput
                  style={styles.textInput2}
                  onChangeText={text => setTall(text)}
                  value={Tall}
                  placeholder="number"
                  keyboardType="numeric"
                />
              </View>
              <Text style={styles.topictext}>ซม.</Text>
              </View>
              <View style={{flexDirection: 'row'}}>
            <Text style={styles.topictext}>ดัชนีมวลกาย : </Text>
              <View style={{width: 100}}>
                <TextInput
                  style={styles.textInput2}
                  onChangeText={text => setBmi(text)}
                  value={Bmi}
                  placeholder="number"
                  keyboardType="numeric"
                />
              </View>
              <Text style={styles.topictext}>กก/ม^2</Text>
            </View>
              
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
                SAVE
              </Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default assessmentbody;

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
