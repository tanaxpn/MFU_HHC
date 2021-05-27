import React, {useState, useEffect} from 'react';
import {
  Button,
  ScrollView,
  Text,
  View,
  StyleSheet,
  TextInput,
  FlatList,
  CheckBox,
  Picker
} from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';



const assessmentbodyresult = ({route,navigation}) => {
  const { PersonName } = route.params;
  const {assetp1ID} = route.params;

  const init = async () => {
    console.log(2);
    const response = await fetch('http://10.0.3.2/api/assetP1/'+assetp1ID);
    const {data} = await response.json();
    if(person!= undefined||person!= null){
      // alert('person alredy have')
      
    }else{
      
      setPerson(data);
      if(data[0].asset_regular==1)setregulaSelection(true)
      if(data[0].asset_irregular==1)setregula1Selection(true)
      if(data[0].asset_normal==1)setregula2Selection(true)
      if(data[0].asset_gasp==1)setregula3Selection(true)
      if(data[0].asset_dry==1)setregula4Selection(true)
      if(data[0].asset_wet==1)setregula5Selection(true)
      if(data[0].asset_othercheck==1)setregula6Selection(true)
      // if(data[0].asset_regular==1)setregulaSelection(true)
    }
  }
  
  const [person, setPerson] = useState();

  const [isSelected, setSelection] = useState(false);
  
  // Chage Text //////////////////////////////////
  const [Normalbody, setNormalBody] = useState('');
  const [Celcius,setCelcius]  = useState();
  const [Hrate,setHrate] = useState();

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

  useEffect(() => {
    init();
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

  _renderItem = ({item,index}) => {
    return (
      
      
        <View>
          <View style={{flexDirection: 'row'}}>
            
            <Text style={styles.topictext}>ครั้งที่ :   {index+1}</Text>
            
          </View>
          <View
            style={{
              borderBottomColor: 'black',
              borderBottomWidth: 1,
            }}
          />
          <View style={{flexDirection: 'row'}}>
            <Text style={{fontSize: 20, marginTop: 5, marginLeft: 10,marginBottom:10}}>วันที่ : </Text>
            <Text style={{marginLeft: 10, marginTop: 10}}>{item.asset_date}</Text>
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
            <Text style={{marginLeft: 10, marginTop: 10}}>{item.asset_time}</Text>
          </View>
          <View
            style={{
              borderBottomColor: 'black',
              borderBottomWidth: 1,
            }}
          />
          <View>
            <Text style={styles.topictext}>ลักษณะทั่วไป</Text>
            <Text style={{textDecorationLine: 'underline',fontSize:20,marginLeft:10,marginTop:10}}>{item.asset_body}</Text>
 

            <Text style={{fontSize: 30, fontWeight: 'bold', marginLeft: 20,marginTop:20}}>
              1.ด้านร่างกาย
            </Text>
            <View style={{flexDirection: 'row'}}>
              <Text style={styles.topictext}>อุณหภูมิ : </Text>
              <View style={{width: 100}}>
                <Text style={styles.textInput2}>{item.asset_tem}</Text>
              </View>
              <Text style={styles.topictext}>°C</Text>
            </View>

            <View style={{flexDirection: 'row'}}>
              <Text style={styles.topictext}>ชีพจร : </Text>
              <View style={{width: 100}}>
              <Text style={styles.textInput2}>{item.asset_hrate}</Text>
              </View>
              <Text style={styles.topictext}>ครั้ง/นาที</Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <CheckBox value={isregulaSelected} disabled/>
              <Text style={{fontSize: 20}}>Regula</Text>
              <CheckBox value={isregula1Selected} disabled/>
              <Text style={{fontSize: 20}}>Irregula</Text>
              <Text style={styles.textInput2}>{item.asset_other_regular}</Text>
            </View>
            <View style={{flexDirection: 'row'}}>
            <Text style={styles.topictext}>การหายใจ : </Text>
              <View style={{width: 100}}>
              <Text style={styles.textInput2}>{item.asset_breathe}</Text>
              </View>
              <Text style={styles.topictext}>ครั้ง/นาที</Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <CheckBox value={isregula2Selected} disabled/>
              <Text style={{fontSize: 20}}>ปกติ</Text>
              <CheckBox value={isregula3Selected} disabled />
              <Text style={{fontSize: 20}}>หอบเหนื่อย</Text>
              <CheckBox value={isregula4Selected} disabled />
              <Text style={{fontSize: 20}}>ไอแห้งๆ</Text>

            </View>
            <View style={{flexDirection: 'row'}}>
            <CheckBox value={isregula5Selected} disabled />
              <Text style={{fontSize: 20}}>ไอมีเสมหะ</Text>
              <CheckBox value={isregula6Selected} disabled />
              <Text style={{fontSize: 20}}>อื่นๆ ระบุ</Text>
              <Text style={styles.textInput2}>{item.asset_other}</Text>
            </View>
            <View style={{flexDirection: 'row'}}>
            <Text style={styles.topictext}>ความดันโลหิต : </Text>
              <View style={{width: 100}}>
              <Text style={styles.textInput2}>{item.asset_blood}</Text>
              </View>
              <Text style={styles.topictext}>มม.ปรอท</Text>
            </View>
            <View style={{flexDirection: 'row'}}>
            <Text style={styles.topictext}>น้ำหนัก/ส่วนสูง : </Text>
              <View style={{width: 100}}>
              <Text style={styles.textInput2}>{item.asset_weight}</Text>
              </View>
              <Text style={styles.topictext}>กก./</Text>
            </View>
            <View style={{flexDirection: 'row'}}>
            <View style={{width: 100}}>
            <Text style={styles.textInput2}>{item.asset_tall}</Text>
              </View>
              <Text style={styles.topictext}>ซม.</Text>
              </View>
              <View style={{flexDirection: 'row'}}>
            <Text style={styles.topictext}>ดัชนีมวลกาย : </Text>
              <View style={{width: 100}}>
              <Text style={styles.textInput2}>{item.asset_bmi}</Text>
              </View>
              <Text style={styles.topictext}>กก/ม^2</Text>
            </View>
              
          </View>
          
        </View>
    

       
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

        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default assessmentbodyresult;

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
    marginTop: 10,
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
