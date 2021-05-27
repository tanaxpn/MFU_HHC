import React, {useState, useEffect} from 'react';
import {
  Button,
  ScrollView,
  Text,
  View,
  StyleSheet,
  TextInput,
  CheckBox,
  FlatList
} from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';
// import {CheckBox} from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';

import {TouchableOpacity} from 'react-native-gesture-handler';

const assessmentbodypart2result = ({route,navigation}) => {

  const { PersonName } = route.params;
  const { assetp2ID } = route.params;

  const [person, setPerson] = useState();

  const init = async () => {
    console.log(2);
    const response = await fetch('http://10.0.3.2/api/assetP2/'+assetp2ID);
    const {data} = await response.json();
    if(person!= undefined||person!= null){
      // alert('person alredy have')
      
    }else{
      
      setPerson(data);
      if(data[0].assetp2_dis_normal==1)setSelection(true)
      if(data[0].assetp2_dis_unnormal==1)setASelection(true)
      if(data[0].assetp2_weak_normal==1)setBSelection(true)
      if(data[0].assetp2_weak_unnormal==1)setCSelection(true)
      if(data[0].assetp2_foot_none==1)setfootASelection(true)
      if(data[0].assetp2_foot_have==1)setfootBSelection(true)
      if(data[0].assetp2_wound_normal==1)setwoundASelection(true)
      if(data[0].assetp2_wound_unnormal==1)setwoundBSelection(true)
      if(data[0].assetp2_pain_normal==1)setpainASelection(true)
      if(data[0].assetp2_pain_unnormal==1)setpainBSelection(true)
      if(data[0].assetp2_pain_hurt==1)setUsepain1Selection(true)
      if(data[0].assetp2_pain_tolerable==1)setUsepain2Selection(true)
      if(data[0].assetp2_pain_usedrug==1)setUsepain3Selection(true)
      if(data[0].assetp2_head_normal==1)setheadSelection(true)
      if(data[0].assetp2_head_sometime==1)setheadASelection(true)
      if(data[0].assetp2_head_always==1)setheadBSelection(true)
      if(data[0].assetp2_head_have==1)setheadCSelection(true)
      if(data[0].assetp2_head_hurt==1)setUseheadASelection(true)
      if(data[0].assetp2_head_tolerable==1)setUseheadBSelection(true)
      if(data[0].assetp2_head_usedrug==1)setUseheadCSelection(true)
      if(data[0].assetp2_swell_normal==1)setSwellSelection(true)
      if(data[0].assetp2_swell_unnormal==1)setSwellASelection(true)
      if(data[0].assetp2_rod_normal==1)setRodSelection(true)
      if(data[0].assetp2_rod_unnormal==1)setRodASelection(true)
      if(data[0].assetp2_eye_uncheck==1)setEyeSelection(true)
      if(data[0].assetp2_eye_check==1)setEyeASelection(true)
      if(data[0].assetp2_eye_normal==1)setEyeBSelection(true)
      if(data[0].assetp2_eye_unnormal==1)setEyeCSelection(true)
      if(data[0].assetp2_complicate_normal==1)setComplicateSelection(true)
      if(data[0].assetp2_complicate_unnormal==1)setComplicateASelection(true)
      if(data[0].assetp2_eat_normal==1)setEatSelection(true)
      if(data[0].assetp2_eat_unnormal==1)setEatASelection(true)
      if(data[0].assetp2_excrete_normal==1)setExcreteSelection(true)
      if(data[0].assetp2_excrete_unnormal==1)setExcreteASelection(true)
      if(data[0].assetp2_risk_fats==1)setRiskSelection(true)
      if(data[0].assetp2_risk_fatinblood==1)setRisk2Selection(true)
      if(data[0].assetp2_risk_unexercise==1)setRisk3Selection(true)
      if(data[0].assetp2_risk_smoking==1)setRisk4Selection(true)
      if(data[0].assetp2_risk_alcohol==1)setRisk5Selection(true)
      if(data[0].assetp2_risk_stress==1)setRisk6Selection(true)
      if(data[0].assetp2_risk_other==1)setRisk7Selection(true)
      if(data[0].assetp2_drug_correct==1)setCorrectSelection(true)
      if(data[0].assetp2_drug_wrong==1)setFalseSelection(true)
      if(data[0].assetp2_problemdrug_1==1)setPatientSelection(true)
      if(data[0].assetp2_problemdrug_2==1)setPatient2Selection(true)
      if(data[0].assetp2_problemdrug_3==1)setPatient3Selection(true)
      if(data[0].assetp2_problemdrug_4==1)setPatient4Selection(true)
      if(data[0].assetp2_problemdrug_5==1)setPatient5Selection(true)
      if(data[0].assetp2_problemdrug_6==1)setPatient6Selection(true)
      if(data[0].assetp2_problemdrug_7==1)setPatient7Selection(true)
      if(data[0].assetp2_lab_none==1)setHaveSelection(true)
      if(data[0].assetp2_lab_have==1)setDhaveSelection(true)
      if(data[0].assetp2_medequipment_none==1)setHave10Selection(true)
      if(data[0].assetp2_medequipment_have==1)setDHave10Selection(true)
      if(data[0].assetp2_emote_none==1)setPhyscoSelected(true)
      if(data[0].assetp2_emote_changing==1)setPhysco2Selected(true)
      if(data[0].assetp2_emote_other==1)setPhysco3Selected(true)
      if(data[0].assetp2_social_none==1)setSocialSelection(true)
      if(data[0].assetp2_social_have==1)setSocial2Selection(true)
      if(data[0].assetp2_financial_none==1)setFinSelection(true)
      if(data[0].assetp2_financial_have==1)setFin2Selection(true)
      if(data[0].assetp2_meet_always==1)setMeetSelection(true)
      if(data[0].assetp2_meet_none==1)setMeet2Selection(true)
      // if(data[0].asset_regular==1)setregulaSelection(true)
    }
  }
  
  useEffect(() => {
    init();
  });


  //all Text Box state//
  

  //all checkbox state//
  const [isSelected, setSelection] = useState(false);
  const [isASelected, setASelection] = useState(false);

  const [isBSelected, setBSelection] = useState(false);
  const [isCSelection, setCSelection] = useState(false);

  const [isfootASelected, setfootASelection] = useState(false);
  const [isfootBSelected, setfootBSelection] = useState(false);

  const [iswoundASelected, setwoundASelection] = useState(false);
  const [iswoundBSelected, setwoundBSelection] = useState(false);

  const [ispainASelected, setpainASelection] = useState(false);
  const [ispainBSelected, setpainBSelection] = useState(false);
  const [isUsepain1Selected, setUsepain1Selection] = useState(false);
  const [isUsepain2Selected, setUsepain2Selection ] = useState(false);
  const [isUsepain3Selected, setUsepain3Selection] = useState(false);

  const [isheadSelected, setheadSelection] = useState(false);
  const [isheadASelected, setheadASelection] = useState(false);
  const [isheadBSelected, setheadBSelection] = useState(false);
  const [isheadCSelected, setheadCSelection] = useState(false);
  const [isUseheadASelected, setUseheadASelection] = useState(false);
  const [isUseheadBSelected, setUseheadBSelection] = useState(false);
  const [isUseheadCSelected, setUseheadCSelection] = useState(false);

  const [isSwellSelected, setSwellSelection] = useState(false);
  const [isSwellASelected, setSwellASelection] = useState(false);

  const [isRodSelected, setRodSelection] = useState(false);
  const [isRodASelected, setRodASelection] = useState(false);

  const [isEyeSelected, setEyeSelection] = useState(false);
  const [isEyeASelected, setEyeASelection] = useState(false);
  const [isEyeBSelected, setEyeBSelection] = useState(false);
  const [isEyeCSelected, setEyeCSelection] = useState(false);
  
  const [isComplicateSelected, setComplicateSelection] = useState(false);
  const [isComplicateASelected, setComplicateASelection] = useState(false);

  const [isEatSelected, setEatSelection] = useState(false);
  const [isEatASelected, setEatASelection] = useState(false);

  const [isExcreteSelected, setExcreteSelection] = useState(false);
  const [isExcreteASelected, setExcreteASelection] = useState(false);

  const [isRiskSelected, setRiskSelection] = useState(false);
  const [isRisk2Selected, setRisk2Selection] = useState(false);
  const [isRisk3Selected, setRisk3Selection] = useState(false);
  const [isRisk4Selected, setRisk4Selection] = useState(false);
  const [isRisk5Selected, setRisk5Selection] = useState(false);
  const [isRisk6Selected, setRisk6Selection] = useState(false);
  const [isRisk7Selected, setRisk7Selection] = useState(false);

  //ข้อที่ 8
  const [isCorrectSelected, setCorrectSelection] = useState(false);
  const [isFalseSelected, setFalseSelection] = useState(false);

  const [isPatientSelected, setPatientSelection] = useState(false);
  const [isPatient2Selected, setPatient2Selection] = useState(false);
  const [isPatient3Selected, setPatient3Selection] = useState(false);
  const [isPatient4Selected, setPatient4Selection] = useState(false);
  const [isPatient5Selected, setPatient5Selection] = useState(false);
  const [isPatient6Selected, setPatient6Selection] = useState(false);
  const [isPatient7Selected, setPatient7Selection] = useState(false);

  //ข้อ 9 
  const [isHaveSelected, setHaveSelection] = useState(false);
  const [isDhaveSelected, setDhaveSelection] = useState(false);

  //ข้อที่ 10 
  const [isHave10Selected, setHave10Selection] = useState(false);
  const [isDHave10Selected, setDHave10Selection] = useState(false);

  //ข้อที 11
  const [isPhyscoSelected, setPhyscoSelected] = useState(false);
  const [isPhysco2Selected, setPhysco2Selected] = useState(false);
  const [isPhysco3Selected, setPhysco3Selected] = useState(false);

  //ข้อที่ 12 
  const [isSocialSelected, setSocialSelection] = useState(false);
  const [isSocial2Selected, setSocial2Selection] = useState(false);
  //ข้อที่ 13
  const [isFinSelected, setFinSelection] = useState(false);
  const [isFin2Selected, setFin2Selection] = useState(false);
  //ข้อทั้ 14
  const [isMeetSelected, setMeetSelection] = useState(false);
  const [isMeet2Selected, setMeet2Selection] = useState(false);



_renderItem = ({item,index}) => {
  return (
    <ScrollView>
        
          <View style={{flexDirection: 'row'}}>
            <Text style={styles.topictext}>ครั้งที่ : </Text>
            <Text style={styles.textInput2}>{index+1}</Text>
          </View>
          <View
            style={{
              borderBottomColor: 'black',
              borderBottomWidth: 1,
            }}
          />
          <View style={{flexDirection: 'row'}}>
            <Text style={{fontSize: 20, marginTop: 5, marginLeft: 10,marginBottom:10}}>วันที่ : </Text>
            <Text style={{marginLeft: 10, marginTop: 10}}>{item.assetp2_date}</Text>
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
            <Text style={{marginLeft: 10, marginTop: 10}}>{item.assetp2_time}</Text>
          </View>
          <View
            style={{
              borderBottomColor: 'black',
              borderBottomWidth: 1,
            }}
          />



        <View style={{flexDirection: 'row',}}>


        <Text style={styles.topictext}>2.อาการ/อาการแสดง</Text>
       
        </View>
        
        <View style={{flexDirection: 'row',marginTop:10,borderTopWidth:0.5}}>    
        <Text style={{marginLeft:10,fontSize:15,marginTop:14}}>ความพิการ</Text>
        <CheckBox style={{marginTop:8}} value={isSelected} disabled/>
        <Text style={{fontSize:15,marginTop:14}}>ไม่มี</Text>
        <CheckBox style={{marginTop:8}} value={isASelected} disabled/>
        <Text style={{fontSize:15,marginTop:14}}>มี ระบุ</Text>
        <Text style={styles.textInput2}>{item.assetp2_dis_other}</Text>
        </View>
 
        <View >
        <Text style={{marginLeft:10,fontSize:15,marginTop:14}}>อาการอ่อนแรง (ควรประเมิณในผู้ป่วยโรคหลอดเลือดสมอง)</Text>
        <View style={{flexDirection: 'row'}}>
        <CheckBox style={{marginTop:8,marginLeft:5}} value={isBSelected} disabled/>
        <Text style={{fontSize:15,marginTop:14}}>ไม่มี</Text>
        <CheckBox style={{marginTop:8,marginLeft:5}} value={isCSelection} disabled/>
        <Text style={{fontSize:15,marginTop:14}}>มี ระบุลักษณะ</Text>
        <Text style={styles.textInput2}>{item.assetp2_weak_other}</Text>
        </View>
        </View>

        <View >
        <Text style={{marginLeft:10,fontSize:15,marginTop:14}}>อาการชาตามมือ/เท้า (ควรประเมิณในผู้ป่วยโรคเบาหวานเรื้อรัง)</Text>
        <View style={{flexDirection: 'row'}}>
        <CheckBox style={{marginTop:8,marginLeft:5}} value={isfootASelected} disabled/>
        <Text style={{fontSize:15,marginTop:14}}>ไม่มี</Text>
        <CheckBox style={{marginTop:8,marginLeft:5}} value={isfootBSelected} disabled/>
        <Text style={{fontSize:15,marginTop:14}}>มี ระบุลักษณะ</Text>
        <Text style={styles.textInput2}>{item.assetp2_foot_other}</Text>
        </View>
        </View>

        <View >
        <Text style={{marginLeft:10,fontSize:15,marginTop:14}}>แผล</Text>
        <View style={{flexDirection: 'row'}}>
        <CheckBox style={{marginTop:8,marginLeft:5}} value={iswoundASelected} disabled/>
        <Text style={{fontSize:15,marginTop:14}}>ไม่มี</Text>
        <CheckBox style={{marginTop:8,marginLeft:5}} value={iswoundBSelected} disabled/>
        <Text style={{fontSize:15,marginTop:14}}>มี ระบุตำแหน่งลักษณะ</Text>
        <Text style={styles.textInput2}>{item.assetp2_wound_other}</Text>
        </View>
        </View>

        <View >
        <Text style={{marginLeft:10,fontSize:15,marginTop:14}}>อาการปวด</Text>
        <View style={{flexDirection: 'row'}}>
        <CheckBox style={{marginTop:8,marginLeft:5}} value={ispainASelected} disabled/>
        <Text style={{fontSize:15,marginTop:14}}>ไม่มี</Text>
        <CheckBox style={{marginTop:8,marginLeft:5}} value={ispainBSelected} disabled/>
        <Text style={{fontSize:15,marginTop:14}}>มี ระบุตำแหน่งลักษณะ</Text>
        <Text style={styles.textInput2}>{item.assetp2_pain_other}</Text>
        </View>
        <View style={{flexDirection: 'row'}}>
        <CheckBox style={{marginLeft:5}} value={isUsepain1Selected} disabled/>
        <Text style={{fontSize:15,marginTop:4}}>รุนแรง</Text>
        <CheckBox style={{marginLeft:5}} value={isUsepain2Selected} disabled/>
        <Text style={{fontSize:15,marginTop:4}}>พอทนได้</Text>
        <CheckBox style={{marginLeft:5}} value={isUsepain3Selected} disabled/>
        <Text style={{fontSize:15,marginTop:4}}>ต้องใช้ยาแก้ปวด</Text>

        </View>
        </View>

        <View >
        <Text style={{marginLeft:10,fontSize:15,marginTop:14}}>ปวดศรีษะ (ควรประเมิณในผู้ป่วยความดันโลหิตสูง)</Text>
        <View style={{flexDirection: 'row'}}>
        <CheckBox style={{marginTop:8,marginLeft:5}} value={isheadSelected} disabled/>
        <Text style={{fontSize:15,marginTop:14}}>ไม่ปวด</Text>
        <CheckBox style={{marginTop:8,marginLeft:5}} value={isheadASelected} disabled/>
        <Text style={{fontSize:15,marginTop:14}}>ปวดนานๆ ครั้ง</Text>
        </View>
        <View style={{flexDirection: 'row'}}>
        <CheckBox style={{marginTop:8,marginLeft:5}} value={isheadBSelected} disabled/>
        <Text style={{fontSize:15,marginTop:14}}>ปวดบ่อยๆ</Text>
        <CheckBox style={{marginTop:8,marginLeft:5}} value={isheadCSelected} disabled/>
        <Text style={{fontSize:15,marginTop:14}}>มี ระบุตำแหน่งลักษณะ</Text>
        <Text style={styles.textInput2}>{item.assetp2_head_other}</Text>
        </View>
        <View style={{flexDirection: 'row'}}>
        <CheckBox style={{marginLeft:5}} value={isUseheadASelected} disabled/>
        <Text style={{fontSize:15,marginTop:4}}>รุนแรง</Text>
        <CheckBox style={{marginLeft:5}} value={isUseheadBSelected} disabled/>
        <Text style={{fontSize:15,marginTop:4}}>พอทนได้</Text>
        <CheckBox style={{marginLeft:5}} value={isUseheadCSelected} disabled/>
        <Text style={{fontSize:15,marginTop:4}}>ต้องใช้ยาแก้ปวด</Text>
        </View>
        </View>

        <View >
        <Text style={{marginLeft:10,fontSize:15,marginTop:14}}>อาการบวม</Text>
        <View style={{flexDirection: 'row'}}>
        <CheckBox style={{marginTop:8,marginLeft:5}} value={isSwellSelected} disabled/>
        <Text style={{fontSize:15,marginTop:14}}>ไม่มี</Text>
        <CheckBox style={{marginTop:8,marginLeft:5}} value={isSwellASelected} disabled/>
        <Text style={{fontSize:15,marginTop:14}}>มี</Text>
        </View>
        </View>

        <View style={{borderBottomWidth:0.5}}>
        <Text style={{marginLeft:10,fontSize:15,marginTop:14}}>คันตามผิวหนัง (ควรประเมิณในผู้ป่วยเบาหวานรื้อรัง)</Text>
        <View style={{flexDirection: 'row'}}>
        <CheckBox style={{marginTop:8,marginLeft:5}} value={isRodSelected} disabled/>
        <Text style={{fontSize:15,marginTop:14}}>ไม่มี</Text>
        <CheckBox style={{marginTop:8,marginLeft:5}} value={isRodASelected} disabled/>
        <Text style={{fontSize:15,marginTop:14}}>มี</Text>
        <Text style={styles.textInput2}>{item.assetp2_rod_other}</Text>
        </View>
        </View>

        <View style={{borderBottomWidth:0.5}}>
        <Text style={{marginLeft:10,fontSize:15,marginTop:14,fontWeight: 'bold'}}>3.ตรวจตาประจำปี (ควรประเมิณในผู้ป่วยเบาหวานรื้อรัง)</Text>
        <View style={{flexDirection: 'row'}}>
        <CheckBox style={{marginTop:8,marginLeft:5}} value={isEyeSelected} disabled/>
        <Text style={{fontSize:15,marginTop:14}}>ไม่ตรวจ</Text>
        <CheckBox style={{marginTop:8,marginLeft:5}} value={isEyeASelected} disabled/>
        <Text style={{fontSize:15,marginTop:14}}>ตรวจผล</Text>
        </View>
        <View style={{flexDirection: 'row'}}>
        <CheckBox style={{marginTop:8,marginLeft:5}} value={isEyeBSelected} disabled/>
        <Text style={{fontSize:15,marginTop:14}}>ปกติ</Text>
        <CheckBox style={{marginTop:8,marginLeft:5}} value={isEyeCSelected} disabled/>
        <Text style={{fontSize:15,marginTop:14}}>ผิดปกติ ระบุ</Text>
        <Text style={styles.textInput2}>{item.assetp2_eye_other}</Text>
        </View>
        </View>

        <View style={{borderBottomWidth:0.5}}>
        <Text style={{marginLeft:10,fontSize:15,marginTop:14,fontWeight: 'bold'}}>4.อาการโรคแทรกซ้อน</Text>
        <View style={{flexDirection: 'row'}}>
        <CheckBox style={{marginTop:8,marginLeft:5}} value={isComplicateSelected} disabled/>
        <Text style={{fontSize:15,marginTop:14}}>ไม่มี</Text>
        <CheckBox style={{marginTop:8,marginLeft:5}} value={isComplicateASelected} disabled/>
        <Text style={{fontSize:15,marginTop:14}}>มี ระบุโรค</Text>
        <Text style={styles.textInput2}>{item.assetp2_complicate_other}</Text>
        </View>
        </View>

        <View style={{borderBottomWidth:0.5}}>
        <Text style={{marginLeft:10,fontSize:15,marginTop:14,fontWeight: 'bold'}}>5.การรับประทานอาหาร</Text>
        <View style={{flexDirection: 'row'}}>
        <CheckBox style={{marginTop:8,marginLeft:5}} value={isEatSelected} disabled/>
        <Text style={{fontSize:15,marginTop:14}}>เหมาะสม</Text>
        <CheckBox style={{marginTop:8,marginLeft:5}} value={isEatASelected} disabled/>
        <Text style={{fontSize:15,marginTop:14}}>ไม่เหมาะสม ระบุ</Text>
        <Text style={styles.textInput2}>{item.assetp2_eat_other}</Text>
        </View>
        </View>

        <View style={{borderBottomWidth:0.5}}>
        <Text style={{marginLeft:10,fontSize:15,marginTop:14,fontWeight: 'bold'}}>6.การขับถ่าย</Text>
        <View style={{flexDirection: 'row'}}>
        <CheckBox style={{marginTop:8,marginLeft:5}} value={isExcreteSelected} disabled/>
        <Text style={{fontSize:15,marginTop:14}}>ปกติ</Text>
        <CheckBox style={{marginTop:8,marginLeft:5}} value={isExcreteASelected} disabled/>
        <Text style={{fontSize:15,marginTop:14}}>ท้องผูก</Text>
        </View>
        </View>

        <View style={{borderBottomWidth:0.5}}>
        <Text style={{marginLeft:10,fontSize:15,marginTop:14,fontWeight: 'bold'}}>7.ปัจจัยเสี่ยง/พฤติกรรม</Text>
        <View style={{flexDirection: 'row'}}>
        <CheckBox style={{marginTop:8,marginLeft:5}} value={isRiskSelected} disabled/>
        <Text style={{fontSize:15,marginTop:14}}>ภาระอ้วน</Text>
        <CheckBox style={{marginTop:8,marginLeft:5}} value={isRisk2Selected} disabled/>
        <Text style={{fontSize:15,marginTop:14}}>ไขมันในเลือดสูง</Text>
        <CheckBox style={{marginTop:8,marginLeft:5}} value={isRisk3Selected} disabled/>
        <Text style={{fontSize:15,marginTop:14}}>ไม่ออกกำลังกาย</Text>
        </View>
        <View style={{flexDirection: 'row'}}>
        <CheckBox style={{marginTop:8,marginLeft:5}} value={isRisk4Selected} disabled/>
        <Text style={{fontSize:15,marginTop:14}}>สูบบุหรี่</Text>
        <CheckBox style={{marginTop:8,marginLeft:5}} value={isRisk5Selected} disabled/>
        <Text style={{fontSize:15,marginTop:14}}>เครื่องดื่มแอลกอฮอล์</Text>
        <CheckBox style={{marginTop:8,marginLeft:5}} value={isRisk6Selected} disabled/>
        <Text style={{fontSize:15,marginTop:14}}>ความเครียด</Text>
        </View>
        <View style={{flexDirection: 'row'}}>
        <CheckBox style={{marginTop:8,marginLeft:5}} value={isRisk7Selected} disabled/>
        <Text style={{fontSize:15,marginTop:14}}>อื่นๆ</Text>
        <Text style={styles.textInput2}>{item.assetp2_risk_otherbe}</Text>
        </View>
        </View>

        <View >
        <Text style={{marginLeft:10,fontSize:15,marginTop:14,fontWeight: 'bold'}}>8.การใช้ยา/วิตามิน/อาหารเสริม/สมุนไพรโดยระบุชื่อ{'\n'}
        (ในกรณีเป็นยาให้บอกชื่อสามัญทางยา) ขนาดวิธีการใช้ในกรณีที่ผู้ป่วยใช้ยาไม่ถูกต้องให้ระบุวิธีการใช้ดังกล่าว</Text>
        <View style={{flexDirection: 'row'}}>
        <Text style={{fontSize:15,marginTop:14,marginLeft:10}}>1.</Text>
        <Text style={styles.textInput2}>{item.assetp2_drug_1}</Text>
        </View>
        <View style={{flexDirection: 'row'}}>
        <Text style={{fontSize:15,marginTop:14,marginLeft:10}}>2.</Text>
        <Text style={styles.textInput2}>{item.assetp2_drug_2}</Text>
        </View>
        <View style={{flexDirection: 'row'}}>
        <Text style={{fontSize:15,marginTop:14,marginLeft:10}}>3.</Text>
        <Text style={styles.textInput2}>{item.assetp2_drug_3}</Text>
        </View>
        <View style={{flexDirection: 'row'}}>
        <Text style={{fontSize:15,marginTop:14,marginLeft:10}}>4.</Text>
        <Text style={styles.textInput2}>{item.assetp2_drug_4}</Text>
        </View>
        <View style={{flexDirection: 'row'}}>
        <Text style={{fontSize:15,marginTop:14,marginLeft:10}}>5.</Text>
        <Text style={styles.textInput2}>{item.assetp2_drug_5}</Text>
        </View>
        <View style={{flexDirection: 'row'}}>
        <Text style={{fontSize:15,marginTop:14,marginLeft:10}}>6.</Text>
        <Text style={styles.textInput2}>{item.assetp2_drug_6}</Text>
        </View>
        <View style={{flexDirection: 'row'}}>
        <CheckBox style={{marginTop:8,marginLeft:5}} value={isCorrectSelected} disabled/>
        <Text style={{fontSize:15,marginTop:14}}>ถูกต้อง</Text>
        <CheckBox style={{marginTop:8,marginLeft:5}} value={isFalseSelected} disabled/>
        <Text style={{fontSize:15,marginTop:14}}>ไม่ถูกต้อง ระบุ</Text>
        <Text style={styles.textInput2}>{item.assetp2_drug_wrongbe}</Text>
        </View>
        </View>

        <View style={{borderBottomWidth:0.5}}>
        <Text style={{marginLeft:10,fontSize:15,marginTop:14}}>ปัญหาการใช้ยาที่ควรปรึกษาเภสัชกร</Text>
        <View style={{flexDirection: 'row'}}>
        <CheckBox style={{marginTop:8,marginLeft:5}} value={isPatientSelected} disabled/>
        <Text style={{fontSize:15,marginTop:14}}>ผู้ป่วยเรื้อรังที่มีปัญหาในการใช้ยา</Text>
        </View>
        <View style={{flexDirection: 'row'}}>
        <CheckBox style={{marginTop:8,marginLeft:5}} value={isPatient2Selected} disabled/>
        <Text style={{fontSize:15,marginTop:14}}>ผู้ป่วยเรื้อรังที่มีการใช่ยาหลายชนิด</Text>
        </View>
        <View style={{flexDirection: 'row'}}>
        <CheckBox style={{marginTop:8,marginLeft:5}} value={isPatient3Selected} disabled/>
        <Text style={{fontSize:15,marginTop:14}}>ผู้ป่วยที่ใช้ยาเทคนิคพิเศษ</Text>
        </View>
        <View style={{flexDirection: 'row'}}>
        <CheckBox style={{marginTop:8,marginLeft:5}} value={isPatient4Selected} disabled/>
        <Text style={{fontSize:15,marginTop:14}}>ผู้ป่วยที่ใช้ยา HAD</Text>
        <CheckBox style={{marginTop:8,marginLeft:5}} value={isPatient5Selected} disabled/>
        <Text style={{fontSize:15,marginTop:14}}>ผู้ป่วยกลุ่มเฉพาะ</Text>
        </View>
        <View style={{flexDirection: 'row'}}>
        <CheckBox style={{marginTop:8,marginLeft:5}} value={isPatient6Selected} disabled/>
        <Text style={{fontSize:15,marginTop:14}}>ผู้ป่วยที่ให้ยาทางสายอาหาร</Text>
        </View>
        <View style={{flexDirection: 'row'}}>
        <CheckBox style={{marginTop:8,marginLeft:5}} value={isPatient7Selected} disabled/>
        <Text style={{fontSize:15,marginTop:14}}>อื่นๆ</Text>
        <Text style={styles.textInput2}>{item.assetp2_problemdrug_other}</Text>
        </View>
        </View>

        <View style={{borderBottomWidth:0.5}}>
        <Text style={{marginLeft:10,fontSize:15,marginTop:14,fontWeight: 'bold'}}>9.ผล lab ต่างๆ</Text>
        <View style={{flexDirection: 'row'}}>
        <CheckBox style={{marginTop:8,marginLeft:5}} value={isHaveSelected} disabled/>
        <Text style={{fontSize:15,marginTop:14}}>ไม่มี</Text>
        <CheckBox style={{marginTop:8,marginLeft:5}} value={isDhaveSelected} disabled/>
        <Text style={{fontSize:15,marginTop:14}}>มี ระบุ</Text>
        <Text style={styles.textInput2}>{item.assetp2_lab_other}</Text>
        </View>
        <View style={{flexDirection: 'row'}}>
        <Text style={{fontSize:15,marginTop:14,marginLeft:10}}> -     FBS</Text>
        <Text style={styles.textInput2}>{item.assetp2_lab_fbs}</Text>
        <Text style={{fontSize:15,marginTop:14,marginLeft:10}}>mg%</Text>
        </View>
        <View style={{flexDirection: 'row'}}>
        <Text style={{fontSize:15,marginTop:14,marginLeft:10}}> - </Text>
        <Text style={styles.textInput2}>{item.assetp2_lab_other1}</Text>
        </View>
        <View style={{flexDirection: 'row'}}>
        <Text style={{fontSize:15,marginTop:14,marginLeft:10}}> - </Text>
        <Text style={styles.textInput2}>{item.assetp2_lab_other2}</Text>
        </View>
        </View>

        <View style={{borderBottomWidth:0.5}}>
        <Text style={{marginLeft:10,fontSize:15,marginTop:14,fontWeight: 'bold'}}>10.อุปกรณ์ทางการแพทย์</Text>
        <View style={{flexDirection: 'row'}}>
        <CheckBox style={{marginTop:8,marginLeft:5}} value={isHave10Selected} disabled/>
        <Text style={{fontSize:15,marginTop:14}}>ไม่มี</Text>
        <CheckBox style={{marginTop:8,marginLeft:5}} value={isDHave10Selected} disabled/>
        <Text style={{fontSize:15,marginTop:14}}>มี ระบุ</Text>
        <Text style={styles.textInput2}>{item.assetp2_medequipment_havebecaz}</Text>
        </View>
        </View>

        <View style={{borderBottomWidth:0.5}}>
        <Text style={{marginLeft:10,fontSize:15,marginTop:14,fontWeight: 'bold'}}>11.สภาพอารมณ์/จิตใจ</Text>
        <View style={{flexDirection: 'row'}}>
        <CheckBox style={{marginTop:8,marginLeft:5}} value={isPhyscoSelected} disabled/>
        <Text style={{fontSize:15,marginTop:14}}>ไม่มี</Text>
        <CheckBox style={{marginTop:8,marginLeft:5}} value={isPhysco2Selected} disabled/>
        <Text style={{fontSize:15,marginTop:14}}>เปลี่ยนแปลง</Text>
        <CheckBox style={{marginTop:8,marginLeft:5}} value={isPhysco3Selected} disabled/>
        <Text style={{fontSize:15,marginTop:14}}>อื่น</Text>
        <Text style={styles.textInput2}>{item.assetp2_emote_otherbe}</Text>
        </View>
        </View>

        <View style={{borderBottomWidth:0.5}}>
        <Text style={{marginLeft:10,fontSize:15,marginTop:14,fontWeight: 'bold'}}>12.สภาพปัญหาทางสังคม</Text>
        <View style={{flexDirection: 'row'}}>
        <CheckBox style={{marginTop:8,marginLeft:5}} value={isSocialSelected} disabled/>
        <Text style={{fontSize:15,marginTop:14}}>ไม่มี</Text>
        <CheckBox style={{marginTop:8,marginLeft:5}} value={isSocial2Selected} disabled/>
        <Text style={{fontSize:15,marginTop:14}}>มี ระบุ</Text>
        <Text style={styles.textInput2}>{item.assetp2_social_other}</Text>
        </View>
        </View>

        <View style={{borderBottomWidth:0.5}}>
        <Text style={{marginLeft:10,fontSize:15,marginTop:14,fontWeight: 'bold'}}>13.สภาพปัญหาทางเศรษฐกิจ</Text>
        <View style={{flexDirection: 'row'}}>
        <CheckBox style={{marginTop:8,marginLeft:5}} value={isFinSelected} disabled/>
        <Text style={{fontSize:15,marginTop:14}}>ไม่มี</Text>
        <CheckBox style={{marginTop:8,marginLeft:5}} value={isFin2Selected} disabled/>
        <Text style={{fontSize:15,marginTop:14}}>มี ระบุ</Text>
        <Text style={styles.textInput2}>{item.assetp2_financial_other}</Text>
        </View>
        </View>

        <View style={{borderBottomWidth:0.5}}>
        <Text style={{marginLeft:10,fontSize:15,marginTop:14,fontWeight: 'bold'}}>14.การแพทย์ตามนัด</Text>
        <View style={{flexDirection: 'row'}}>
        <CheckBox style={{marginTop:8,marginLeft:5}} value={isMeetSelected} disabled/>
        <Text style={{fontSize:15,marginTop:14}}>ไป</Text>
        <CheckBox style={{marginTop:8,marginLeft:5}} value={isMeet2Selected} disabled/>
        <Text style={{fontSize:15,marginTop:14}}>ไม่ไป เพราะ</Text>
        <Text style={styles.textInput2}>{item.assetp2_meet_other}</Text>
        </View>
        </View>

        <View style={{borderBottomWidth:0.5}}>
        <Text style={{marginLeft:10,fontSize:15,marginTop:14,fontWeight: 'bold'}}>15.Note/Progressnote</Text>
        <View style={{flexDirection: 'row'}}>
        <Text style={styles.textInput2}>{item.assetp2_note}</Text>
        </View>
        </View>

        <View style={{borderBottomWidth:0.5}}>
        <Text style={{marginLeft:10,fontSize:15,marginTop:14,fontWeight: 'bold'}}>16.นัดเยี่ยมครั้งต่อไป และ วัตถุประสงค์การเยี่ยม</Text>
        <View style={{flexDirection: 'row'}}>
        <Text style={styles.textInput2}>{item.assetp2_meeting}</Text>
        </View>
        </View>

        <View style={{borderBottomWidth:0.5,marginBottom:20}}>
        <Text style={{marginLeft:10,fontSize:15,marginTop:14,fontWeight: 'bold'}}>17.ผู้ประเมิณ/ตำแหน่ง</Text>
        <View style={{flexDirection: 'row'}}>
        <Text style={{fontSize:15,marginTop:14,marginLeft:10}}>1.</Text>
        <Text style={styles.textInput2}>{item.assetp2_assessor1}</Text>
        </View>
        <View style={{flexDirection: 'row'}}>
        <Text style={{fontSize:15,marginTop:14,marginLeft:10}}>2.</Text>
        <Text style={styles.textInput2}>{item.assetp2_assessor2}</Text>
        
        </View>
        </View>



        </ScrollView>
  );
};

  return (
    <SafeAreaView style= {{backgroundColor:'white'}}>
         <FlatList
          data={person}
          keyExtractor={({id}, index) => id}
          renderItem={
            _renderItem
            // <Text>{item.ho_id}, {item.ho_country}</Text>
          }

        />
    </SafeAreaView>
  );
};

export default assessmentbodypart2result;

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
    fontWeight: 'bold'
  },
  textInput2: {
    flex: 1,
    fontSize: 20,
    paddingLeft: 10,
    marginTop:10,
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
