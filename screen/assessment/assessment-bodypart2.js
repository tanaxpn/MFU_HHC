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

const assessmentbodypart2 = ({route,navigation}) => {
  
  const { PersonName } = route.params;
  
  const [currentTime, setCurrentTime] = useState('');
  const [currentDate, setCurrentDate] = useState('');


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
  //ข้อที่ 3
  const [isEyeSelected, setEyeSelection] = useState(false);
  const [isEyeASelected, setEyeASelection] = useState(false);
  const [isEyeBSelected, setEyeBSelection] = useState(false);
  const [isEyeCSelected, setEyeCSelection] = useState(false);
  //ข้อที่ 4
  const [isComplicateSelected, setComplicateSelection] = useState(false);
  const [isComplicateASelected, setComplicateASelection] = useState(false);
  //ข้อที่ 5 
  const [isEatSelected, setEatSelection] = useState(false);
  const [isEatASelected, setEatASelection] = useState(false);
  //ข้อที่ 6
  const [isExcreteSelected, setExcreteSelection] = useState(false);
  const [isExcreteASelected, setExcreteASelection] = useState(false);
  //ข้อที่ 7
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


  // all textbox state //
  const [dis_other,setdis_other] = useState('');  
  const [weak_other,setweak_other] = useState('');
  const [foot_other,setfoot_other] = useState('');
  const [wound_other,setwound_other] = useState('');
  const [pain_other,setpain_other] = useState('');
  const [head_other,sethead_other] = useState('');
  const [rod_other,setrod_other] = useState('');
  const [eye_other,seteye_other] = useState('');
  const [complicate_other,setcomplicate_other] = useState('');
  const [eat_other,seteat_other] = useState('');
  const [risk_otherbe,setrisk_otherbe] = useState('');
  const [drug_1,setdrug_1] = useState('');
  const [drug_2,setdrug_2] = useState('');
  const [drug_3,setdrug_3] = useState('');
  const [drug_4,setdrug_4] = useState('');
  const [drug_5,setdrug_5] = useState('');
  const [drug_6,setdrug_6] = useState('');
  const [drug_wrongbe,setdrug_wrongbe] = useState('');
  const [problemdrug_other,setproblemdrug_other] = useState('');
  const [lab_other,setlab_other] = useState('');
  const [lab_fbs,setlab_fbs] = useState('');
  const [lab_other1,setlab_other1] = useState('');
  const [lab_other2,setlab_other2] = useState('');
  const [medequipment_havebecaz,setmedequipment_havebecaz] = useState('');
  const [emote_otherbe,setemote_otherbe] = useState('');
  const [social_other,setsocial_other] = useState('');
  const [financial_other,setsfinancial_other] = useState('');
  const [meet_other,setmeet_other] = useState('');
  const [note,setnote] = useState('');
  const [meeting,setmeeting] = useState('');
  const [assessor1,setassessor1] = useState('');
  const [assessor2,setassessor2] = useState('');





  






  // post data 
  const send = async () => {
    
    const response = await fetch('http://10.0.3.2/api/assetP2/add', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        assetpats_id : PersonName.id,
        assetp2_date : currentDate,
        assetp2_time : currentTime,
        assetp2_dis_normal : isSelected,
        assetp2_dis_unnormal : isASelected,
        assetp2_dis_other : dis_other,
        assetp2_weak_normal : isBSelected,
        assetp2_weak_unnormal : isCSelection,
        assetp2_weak_other : weak_other,
        assetp2_foot_none : isfootASelected,
        assetp2_foot_have : isfootBSelected,
        assetp2_foot_other : foot_other,
        assetp2_wound_normal : iswoundASelected,
        assetp2_wound_unnormal : iswoundBSelected,
        assetp2_wound_other : wound_other,
        assetp2_pain_normal : ispainASelected,
        assetp2_pain_unnormal : ispainBSelected,
        assetp2_pain_other : pain_other,
        assetp2_pain_hurt : isUsepain1Selected,
        assetp2_pain_tolerable : isUsepain2Selected,
        assetp2_pain_usedrug : isUsepain3Selected,
        assetp2_head_normal : isheadSelected,
        assetp2_head_sometime : isheadASelected,
        assetp2_head_always : isheadBSelected,
        assetp2_head_have : isheadCSelected,
        assetp2_head_other : head_other,
        assetp2_head_hurt : isUseheadASelected,
        assetp2_head_tolerable : isUseheadBSelected,
        assetp2_head_usedrug : isUseheadCSelected,
        assetp2_swell_normal : isSwellSelected,
        assetp2_swell_unnormal : isSwellASelected,
        assetp2_rod_normal : isRodSelected,
        assetp2_rod_unnormal : isRodASelected,
        assetp2_rod_other : rod_other,
        assetp2_eye_uncheck : isEyeSelected,
        assetp2_eye_check : isEyeASelected,
        assetp2_eye_normal : isEyeBSelected,
        assetp2_eye_unnormal :isEyeCSelected,
        assetp2_eye_other : eye_other,
        assetp2_complicate_normal : isComplicateSelected,
        assetp2_complicate_unnormal : isComplicateASelected,
        assetp2_complicate_other : complicate_other,
        assetp2_eat_normal : isEatSelected,
        assetp2_eat_unnormal : isEatASelected,
        assetp2_eat_other : eat_other,
        assetp2_excrete_normal : isExcreteSelected,
        assetp2_excrete_unnormal : isExcreteASelected,
        assetp2_risk_fats : isRiskSelected,
        assetp2_risk_fatinblood : isRisk2Selected,
        assetp2_risk_unexercise : isRisk3Selected,
        assetp2_risk_smoking : isRisk4Selected,
        assetp2_risk_alcohol : isRisk5Selected,
        assetp2_risk_stress : isRisk6Selected,
        assetp2_risk_other : isRisk7Selected,
        assetp2_risk_otherbe : risk_otherbe,
        assetp2_drug_1 : drug_1,
        assetp2_drug_2 : drug_2,
        assetp2_drug_3 : drug_3,
        assetp2_drug_4 : drug_4,
        assetp2_drug_5 : drug_5,
        assetp2_drug_6 : drug_6,
        assetp2_drug_correct : isCorrectSelected,
        assetp2_drug_wrong : isFalseSelected,
        assetp2_drug_wrongbe : drug_wrongbe,
        assetp2_problemdrug_1 : isPatientSelected,
        assetp2_problemdrug_2 : isPatient2Selected,
        assetp2_problemdrug_3 : isPatient3Selected,
        assetp2_problemdrug_4 : isPatient4Selected,
        assetp2_problemdrug_5 : isPatient5Selected,
        assetp2_problemdrug_6 : isPatient6Selected,
        assetp2_problemdrug_7 : isPatient7Selected,
        assetp2_problemdrug_other : problemdrug_other,
        assetp2_lab_none : isHaveSelected,
        assetp2_lab_have : isDhaveSelected,
        assetp2_lab_other : lab_other,
        assetp2_lab_fbs : lab_fbs,
        assetp2_lab_other1 : lab_other1,
        assetp2_lab_other2 : lab_other2,
        assetp2_medequipment_none : isHave10Selected,
        assetp2_medequipment_have : isDHave10Selected,
        assetp2_medequipment_havebecaz : medequipment_havebecaz,
        assetp2_emote_none : isPhyscoSelected,
        assetp2_emote_changing : isPhysco2Selected,
        assetp2_emote_other : isPhysco3Selected,
        assetp2_emote_otherbe : emote_otherbe,
        assetp2_social_none : isSocialSelected,
        assetp2_social_have : isSocial2Selected,
        assetp2_social_other : social_other,
        assetp2_financial_none : isFinSelected,
        assetp2_financial_have : isFin2Selected,
        assetp2_financial_other : financial_other,
        assetp2_meet_always : isMeetSelected,
        assetp2_meet_none : isMeet2Selected,
        assetp2_meet_other : meet_other,
        assetp2_note : note,
        assetp2_meeting : meeting,
        assetp2_assessor1 : assessor1,
        assetp2_assessor2 : assessor2

      }),
    });
    
    const {data} = await response.json();
    
    setPerson(data);
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

function adding () {
    send();
  alert("บันทึกข้อมูลสำเร็จ")
}


  return (
    <SafeAreaView style= {{backgroundColor:'white'}}>
        <ScrollView>
        
         
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



        <View style={{flexDirection: 'row',}}>


        <Text style={styles.topictext}>2.อาการ/อาการแสดง</Text>
       
        </View>
        
        <View style={{flexDirection: 'row',marginTop:10,borderTopWidth:0.5}}>    
        <Text style={{marginLeft:10,fontSize:15,marginTop:14}}>ความพิการ</Text>
        <CheckBox style={{marginTop:8}} value={isSelected} onValueChange={setSelection} />
        <Text style={{fontSize:15,marginTop:14}}>ไม่มี</Text>
        <CheckBox style={{marginTop:8}} value={isASelected} onValueChange={setASelection} />
        <Text style={{fontSize:15,marginTop:14}}>มี ระบุ</Text>
        <TextInput style={{fontSize: 15 , marginLeft:10}} 
        onChangeText={text => setdis_other(text)}
        value={dis_other}
        placeholder="__________________" />
        </View>
 
        <View >
        <Text style={{marginLeft:10,fontSize:15,marginTop:14}}>อาการอ่อนแรง (ควรประเมิณในผู้ป่วยโรคหลอดเลือดสมอง)</Text>
        <View style={{flexDirection: 'row'}}>
        <CheckBox style={{marginTop:8,marginLeft:5}} value={isBSelected} onValueChange={setBSelection} />
        <Text style={{fontSize:15,marginTop:14}}>ไม่มี</Text>
        <CheckBox style={{marginTop:8,marginLeft:5}} value={isCSelection} onValueChange={setCSelection} />
        <Text style={{fontSize:15,marginTop:14}}>มี ระบุลักษณะ</Text>
        <TextInput style={{fontSize: 15 , marginLeft:10}} placeholder="_________________________" 
        onChangeText={text => setweak_other(text)}
        value={weak_other}
        />
        </View>
        </View>

        <View >
        <Text style={{marginLeft:10,fontSize:15,marginTop:14}}>อาการชาตามมือ/เท้า (ควรประเมิณในผู้ป่วยโรคเบาหวานเรื้อรัง)</Text>
        <View style={{flexDirection: 'row'}}>
        <CheckBox style={{marginTop:8,marginLeft:5}} value={isfootASelected} onValueChange={setfootASelection} />
        <Text style={{fontSize:15,marginTop:14}}>ไม่มี</Text>
        <CheckBox style={{marginTop:8,marginLeft:5}} value={isfootBSelected} onValueChange={setfootBSelection} />
        <Text style={{fontSize:15,marginTop:14}}>มี ระบุลักษณะ</Text>
        <TextInput style={{fontSize: 15 , marginLeft:10}} placeholder="_________________________" 
        onChangeText={text => setfoot_other(text)}
        value={foot_other}
        />
        </View>
        </View>

        <View >
        <Text style={{marginLeft:10,fontSize:15,marginTop:14}}>แผล</Text>
        <View style={{flexDirection: 'row'}}>
        <CheckBox style={{marginTop:8,marginLeft:5}} value={iswoundASelected} onValueChange={setwoundASelection} />
        <Text style={{fontSize:15,marginTop:14}}>ไม่มี</Text>
        <CheckBox style={{marginTop:8,marginLeft:5}} value={iswoundBSelected} onValueChange={setwoundBSelection} />
        <Text style={{fontSize:15,marginTop:14}}>มี ระบุตำแหน่งลักษณะ</Text>
        <TextInput style={{fontSize: 15 , marginLeft:10}} 
        placeholder="__________________" 
        onChangeText={text => setwound_other(text)}
        value={wound_other}
        />
        </View>
        </View>

        <View >
        <Text style={{marginLeft:10,fontSize:15,marginTop:14}}>อาการปวด</Text>
        <View style={{flexDirection: 'row'}}>
        <CheckBox style={{marginTop:8,marginLeft:5}} value={ispainASelected} onValueChange={setpainASelection} />
        <Text style={{fontSize:15,marginTop:14}}>ไม่มี</Text>
        <CheckBox style={{marginTop:8,marginLeft:5}} value={ispainBSelected} onValueChange={setpainBSelection} />
        <Text style={{fontSize:15,marginTop:14}}>มี ระบุตำแหน่งลักษณะ</Text>
        <TextInput style={{fontSize: 15 , marginLeft:10}} 
        placeholder="__________________" 
        onChangeText={text => setpain_other(text)} 
        value={pain_other}
        />
        </View>
        <View style={{flexDirection: 'row'}}>
        <CheckBox style={{marginLeft:5}} value={isUsepain1Selected} onValueChange={setUsepain1Selection} />
        <Text style={{fontSize:15,marginTop:4}}>รุนแรง</Text>
        <CheckBox style={{marginLeft:5}} value={isUsepain2Selected} onValueChange={setUsepain2Selection} />
        <Text style={{fontSize:15,marginTop:4}}>พอทนได้</Text>
        <CheckBox style={{marginLeft:5}} value={isUsepain3Selected} onValueChange={setUsepain3Selection} />
        <Text style={{fontSize:15,marginTop:4}}>ต้องใช้ยาแก้ปวด</Text>

        </View>
        </View>

        <View >
        <Text style={{marginLeft:10,fontSize:15,marginTop:14}}>ปวดศรีษะ (ควรประเมิณในผู้ป่วยความดันโลหิตสูง)</Text>
        <View style={{flexDirection: 'row'}}>
        <CheckBox style={{marginTop:8,marginLeft:5}} value={isheadSelected} onValueChange={setheadSelection} />
        <Text style={{fontSize:15,marginTop:14}}>ไม่ปวด</Text>
        <CheckBox style={{marginTop:8,marginLeft:5}} value={isheadASelected} onValueChange={setheadASelection} />
        <Text style={{fontSize:15,marginTop:14}}>ปวดนานๆ ครั้ง</Text>
        </View>
        <View style={{flexDirection: 'row'}}>
        <CheckBox style={{marginTop:8,marginLeft:5}} value={isheadBSelected} onValueChange={setheadBSelection} />
        <Text style={{fontSize:15,marginTop:14}}>ปวดบ่อยๆ</Text>
        <CheckBox style={{marginTop:8,marginLeft:5}} value={isheadCSelected} onValueChange={setheadCSelection} />
        <Text style={{fontSize:15,marginTop:14}}>มี ระบุตำแหน่งลักษณะ</Text>
        <TextInput style={{fontSize: 15 , marginLeft:10}} 
        placeholder="__________________" 
        onChangeText={text => sethead_other(text)}
        value={head_other}
        />
        </View>
        <View style={{flexDirection: 'row'}}>
        <CheckBox style={{marginLeft:5}} value={isUseheadASelected} onValueChange={setUseheadASelection} />
        <Text style={{fontSize:15,marginTop:4}}>รุนแรง</Text>
        <CheckBox style={{marginLeft:5}} value={isUseheadBSelected} onValueChange={setUseheadBSelection} />
        <Text style={{fontSize:15,marginTop:4}}>พอทนได้</Text>
        <CheckBox style={{marginLeft:5}} value={isUseheadCSelected} onValueChange={setUseheadCSelection} />
        <Text style={{fontSize:15,marginTop:4}}>ต้องใช้ยาแก้ปวด</Text>
        </View>
        </View>

        <View >
        <Text style={{marginLeft:10,fontSize:15,marginTop:14}}>อาการบวม</Text>
        <View style={{flexDirection: 'row'}}>
        <CheckBox style={{marginTop:8,marginLeft:5}} value={isSwellSelected} onValueChange={setSwellSelection} />
        <Text style={{fontSize:15,marginTop:14}}>ไม่มี</Text>
        <CheckBox style={{marginTop:8,marginLeft:5}} value={isSwellASelected} onValueChange={setSwellASelection} />
        <Text style={{fontSize:15,marginTop:14}}>มี</Text>
        </View>
        </View>

        <View style={{borderBottomWidth:0.5}}>
        <Text style={{marginLeft:10,fontSize:15,marginTop:14}}>คันตามผิวหนัง (ควรประเมิณในผู้ป่วยเบาหวานรื้อรัง)</Text>
        <View style={{flexDirection: 'row'}}>
        <CheckBox style={{marginTop:8,marginLeft:5}} value={isRodSelected} onValueChange={setRodSelection} />
        <Text style={{fontSize:15,marginTop:14}}>ไม่มี</Text>
        <CheckBox style={{marginTop:8,marginLeft:5}} value={isRodASelected} onValueChange={setRodASelection} />
        <Text style={{fontSize:15,marginTop:14}}>มี</Text>
        <TextInput style={{fontSize: 15 , marginLeft:10}} 
        placeholder="_________________________" 
        onChangeText={text => setrod_other(text)}
        value={rod_other}
        />
        </View>
        </View>

        <View style={{borderBottomWidth:0.5}}>
        <Text style={{marginLeft:10,fontSize:15,marginTop:14,fontWeight: 'bold'}}>3.ตรวจตาประจำปี (ควรประเมิณในผู้ป่วยเบาหวานรื้อรัง)</Text>
        <View style={{flexDirection: 'row'}}>
        <CheckBox style={{marginTop:8,marginLeft:5}} value={isEyeSelected} onValueChange={setEyeSelection} />
        <Text style={{fontSize:15,marginTop:14}}>ไม่ตรวจ</Text>
        <CheckBox style={{marginTop:8,marginLeft:5}} value={isEyeASelected} onValueChange={setEyeASelection} />
        <Text style={{fontSize:15,marginTop:14}}>ตรวจผล</Text>
        </View>
        <View style={{flexDirection: 'row'}}>
        <CheckBox style={{marginTop:8,marginLeft:5}} value={isEyeBSelected} onValueChange={setEyeBSelection} />
        <Text style={{fontSize:15,marginTop:14}}>ปกติ</Text>
        <CheckBox style={{marginTop:8,marginLeft:5}} value={isEyeCSelected} onValueChange={setEyeCSelection} />
        <Text style={{fontSize:15,marginTop:14}}>ผิดปกติ ระบุ</Text>
        <TextInput style={{fontSize: 15 , marginLeft:10}}
        placeholder="_____________" 
        onChangeText={text => seteye_other(text)}
        value={eye_other}
        />
        </View>
        </View>

        <View style={{borderBottomWidth:0.5}}>
        <Text style={{marginLeft:10,fontSize:15,marginTop:14,fontWeight: 'bold'}}>4.อาการโรคแทรกซ้อน</Text>
        <View style={{flexDirection: 'row'}}>
        <CheckBox style={{marginTop:8,marginLeft:5}} value={isComplicateSelected} onValueChange={setComplicateSelection} />
        <Text style={{fontSize:15,marginTop:14}}>ไม่มี</Text>
        <CheckBox style={{marginTop:8,marginLeft:5}} value={isComplicateASelected} onValueChange={setComplicateASelection} />
        <Text style={{fontSize:15,marginTop:14}}>มี ระบุโรค</Text>
        <TextInput style={{fontSize: 15 , marginLeft:10}}
        placeholder="_________________________" 
        onChangeText={text => setcomplicate_other(text)}
        value={complicate_other}
        />
        </View>
        </View>

        <View style={{borderBottomWidth:0.5}}>
        <Text style={{marginLeft:10,fontSize:15,marginTop:14,fontWeight: 'bold'}}>5.การรับประทานอาหาร</Text>
        <View style={{flexDirection: 'row'}}>
        <CheckBox style={{marginTop:8,marginLeft:5}} value={isEatSelected} onValueChange={setEatSelection} />
        <Text style={{fontSize:15,marginTop:14}}>เหมาะสม</Text>
        <CheckBox style={{marginTop:8,marginLeft:5}} value={isEatASelected} onValueChange={setEatASelection} />
        <Text style={{fontSize:15,marginTop:14}}>ไม่เหมาะสม ระบุ</Text>
        <TextInput style={{fontSize: 15 , marginLeft:10}} 
        placeholder="________________" 
        onChangeText={text => seteat_other(text)}
        value={eat_other}
        />
        </View>
        </View>

        <View style={{borderBottomWidth:0.5}}>
        <Text style={{marginLeft:10,fontSize:15,marginTop:14,fontWeight: 'bold'}}>6.การขับถ่าย</Text>
        <View style={{flexDirection: 'row'}}>
        <CheckBox style={{marginTop:8,marginLeft:5}} value={isExcreteSelected} onValueChange={setExcreteSelection} />
        <Text style={{fontSize:15,marginTop:14}}>ปกติ</Text>
        <CheckBox style={{marginTop:8,marginLeft:5}} value={isExcreteASelected} onValueChange={setExcreteASelection} />
        <Text style={{fontSize:15,marginTop:14}}>ท้องผูก</Text>
        </View>
        </View>

        <View style={{borderBottomWidth:0.5}}>
        <Text style={{marginLeft:10,fontSize:15,marginTop:14,fontWeight: 'bold'}}>7.ปัจจัยเสี่ยง/พฤติกรรม</Text>
        <View style={{flexDirection: 'row'}}>
        <CheckBox style={{marginTop:8,marginLeft:5}} value={isRiskSelected} onValueChange={setRiskSelection} />
        <Text style={{fontSize:15,marginTop:14}}>ภาระอ้วน</Text>
        <CheckBox style={{marginTop:8,marginLeft:5}} value={isRisk2Selected} onValueChange={setRisk2Selection} />
        <Text style={{fontSize:15,marginTop:14}}>ไขมันในเลือดสูง</Text>
        <CheckBox style={{marginTop:8,marginLeft:5}} value={isRisk3Selected} onValueChange={setRisk3Selection} />
        <Text style={{fontSize:15,marginTop:14}}>ไม่ออกกำลังกาย</Text>
        </View>
        <View style={{flexDirection: 'row'}}>
        <CheckBox style={{marginTop:8,marginLeft:5}} value={isRisk4Selected} onValueChange={setRisk4Selection} />
        <Text style={{fontSize:15,marginTop:14}}>สูบบุหรี่</Text>
        <CheckBox style={{marginTop:8,marginLeft:5}} value={isRisk5Selected} onValueChange={setRisk5Selection} />
        <Text style={{fontSize:15,marginTop:14}}>เครื่องดื่มแอลกอฮอล์</Text>
        <CheckBox style={{marginTop:8,marginLeft:5}} value={isRisk6Selected} onValueChange={setRisk6Selection} />
        <Text style={{fontSize:15,marginTop:14}}>ความเครียด</Text>
        </View>
        <View style={{flexDirection: 'row'}}>
        <CheckBox style={{marginTop:8,marginLeft:5}} value={isRisk7Selected} onValueChange={setRisk7Selection} />
        <Text style={{fontSize:15,marginTop:14}}>อื่นๆ</Text>
        <TextInput style={{fontSize: 15 , marginLeft:10}} 
        placeholder="________________" 
        onChangeText={text => setrisk_otherbe(text)}
        value={risk_otherbe}
        />
        </View>
        </View>

        <View >
        <Text style={{marginLeft:10,fontSize:15,marginTop:14,fontWeight: 'bold'}}>8.การใช้ยา/วิตามิน/อาหารเสริม/สมุนไพรโดยระบุชื่อ{'\n'}
        (ในกรณีเป็นยาให้บอกชื่อสามัญทางยา) ขนาดวิธีการใช้ในกรณีที่ผู้ป่วยใช้ยาไม่ถูกต้องให้ระบุวิธีการใช้ดังกล่าว</Text>
        <View style={{flexDirection: 'row'}}>
        <Text style={{fontSize:15,marginTop:14,marginLeft:10}}>1.</Text>
        <TextInput style={{fontSize: 15 , marginLeft:10}} placeholder="______________________________________________" onChangeText={text => setdrug_1(text)} value={drug_1} />
        </View>
        <View style={{flexDirection: 'row'}}>
        <Text style={{fontSize:15,marginTop:14,marginLeft:10}}>2.</Text>
        <TextInput style={{fontSize: 15 , marginLeft:10}} placeholder="______________________________________________" onChangeText={text => setdrug_2(text)} value={drug_2} />
        </View>
        <View style={{flexDirection: 'row'}}>
        <Text style={{fontSize:15,marginTop:14,marginLeft:10}}>3.</Text>
        <TextInput style={{fontSize: 15 , marginLeft:10}} placeholder="______________________________________________" onChangeText={text => setdrug_3(text)} value={drug_3} />
        </View>
        <View style={{flexDirection: 'row'}}>
        <Text style={{fontSize:15,marginTop:14,marginLeft:10}}>4.</Text>
        <TextInput style={{fontSize: 15 , marginLeft:10}} placeholder="______________________________________________" onChangeText={text => setdrug_4(text)} value={drug_4} />
        </View>
        <View style={{flexDirection: 'row'}}>
        <Text style={{fontSize:15,marginTop:14,marginLeft:10}}>5.</Text>
        <TextInput style={{fontSize: 15 , marginLeft:10}} placeholder="______________________________________________" onChangeText={text => setdrug_5(text)} value={drug_5} />
        </View>
        <View style={{flexDirection: 'row'}}>
        <Text style={{fontSize:15,marginTop:14,marginLeft:10}}>6.</Text>
        <TextInput style={{fontSize: 15 , marginLeft:10}} placeholder="______________________________________________" onChangeText={text => setdrug_6(text)} value={drug_6} />
        </View>
        <View style={{flexDirection: 'row'}}>
        <CheckBox style={{marginTop:8,marginLeft:5}} value={isCorrectSelected} onValueChange={setCorrectSelection} />
        <Text style={{fontSize:15,marginTop:14}}>ถูกต้อง</Text>
        <CheckBox style={{marginTop:8,marginLeft:5}} value={isFalseSelected} onValueChange={setFalseSelection} />
        <Text style={{fontSize:15,marginTop:14}}>ไม่ถูกต้อง ระบุ</Text>
        <TextInput style={{fontSize: 15 , marginLeft:10}} 
        placeholder="________________" 
        onChangeText={text => setdrug_wrongbe(text)}
        value={drug_wrongbe}
        />
        </View>
        </View>

        <View style={{borderBottomWidth:0.5}}>
        <Text style={{marginLeft:10,fontSize:15,marginTop:14}}>ปัญหาการใช้ยาที่ควรปรึกษาเภสัชกร</Text>
        <View style={{flexDirection: 'row'}}>
        <CheckBox style={{marginTop:8,marginLeft:5}} value={isPatientSelected} onValueChange={setPatientSelection} />
        <Text style={{fontSize:15,marginTop:14}}>ผู้ป่วยเรื้อรังที่มีปัญหาในการใช้ยา</Text>
        </View>
        <View style={{flexDirection: 'row'}}>
        <CheckBox style={{marginTop:8,marginLeft:5}} value={isPatient2Selected} onValueChange={setPatient2Selection} />
        <Text style={{fontSize:15,marginTop:14}}>ผู้ป่วยเรื้อรังที่มีการใช่ยาหลายชนิด</Text>
        </View>
        <View style={{flexDirection: 'row'}}>
        <CheckBox style={{marginTop:8,marginLeft:5}} value={isPatient3Selected} onValueChange={setPatient3Selection} />
        <Text style={{fontSize:15,marginTop:14}}>ผู้ป่วยที่ใช้ยาเทคนิคพิเศษ</Text>
        </View>
        <View style={{flexDirection: 'row'}}>
        <CheckBox style={{marginTop:8,marginLeft:5}} value={isPatient4Selected} onValueChange={setPatient4Selection} />
        <Text style={{fontSize:15,marginTop:14}}>ผู้ป่วยที่ใช้ยา HAD</Text>
        <CheckBox style={{marginTop:8,marginLeft:5}} value={isPatient5Selected} onValueChange={setPatient5Selection} />
        <Text style={{fontSize:15,marginTop:14}}>ผู้ป่วยกลุ่มเฉพาะ</Text>
        </View>
        <View style={{flexDirection: 'row'}}>
        <CheckBox style={{marginTop:8,marginLeft:5}} value={isPatient6Selected} onValueChange={setPatient6Selection} />
        <Text style={{fontSize:15,marginTop:14}}>ผู้ป่วยที่ให้ยาทางสายอาหาร</Text>
        </View>
        <View style={{flexDirection: 'row'}}>
        <CheckBox style={{marginTop:8,marginLeft:5}} value={isPatient7Selected} onValueChange={setPatient7Selection} />
        <Text style={{fontSize:15,marginTop:14}}>อื่นๆ</Text>
        <TextInput style={{fontSize: 15 , marginLeft:10}} placeholder="________________" 
        onChangeText={text => setproblemdrug_other(text)}
        value={problemdrug_other}
        />
        </View>
        </View>

        <View style={{borderBottomWidth:0.5}}>
        <Text style={{marginLeft:10,fontSize:15,marginTop:14,fontWeight: 'bold'}}>9.ผล lab ต่างๆ</Text>
        <View style={{flexDirection: 'row'}}>
        <CheckBox style={{marginTop:8,marginLeft:5}} value={isHaveSelected} onValueChange={setHaveSelection} />
        <Text style={{fontSize:15,marginTop:14}}>ไม่มี</Text>
        <CheckBox style={{marginTop:8,marginLeft:5}} value={isDhaveSelected} onValueChange={setDhaveSelection} />
        <Text style={{fontSize:15,marginTop:14}}>มี ระบุ</Text>
        <TextInput style={{fontSize: 15 , marginLeft:10}} placeholder="________________" 
        onChangeText={text => setlab_other(text)}
        value={lab_other}
        />
        </View>
        <View style={{flexDirection: 'row'}}>
        <Text style={{fontSize:15,marginTop:14,marginLeft:10}}> -     FBS</Text>
        <TextInput style={{fontSize: 15 , marginLeft:10}} placeholder="_________________________________" 
        onChangeText={text => setlab_fbs(text)}
        value={lab_fbs}
        />
        <Text style={{fontSize:15,marginTop:14,marginLeft:10}}>mg%</Text>
        </View>
        <View style={{flexDirection: 'row'}}>
        <Text style={{fontSize:15,marginTop:14,marginLeft:10}}> - </Text>
        <TextInput style={{fontSize: 15 , marginLeft:10}} placeholder="______________________________________________" 
        onChangeText={text => setlab_other1(text)}
        value={lab_other1}
        />
        </View>
        <View style={{flexDirection: 'row'}}>
        <Text style={{fontSize:15,marginTop:14,marginLeft:10}}> - </Text>
        <TextInput style={{fontSize: 15 , marginLeft:10}} placeholder="______________________________________________" 
        onChangeText={text => setlab_other2(text)}
        value={lab_other2}
        />
        </View>
        </View>

        <View style={{borderBottomWidth:0.5}}>
        <Text style={{marginLeft:10,fontSize:15,marginTop:14,fontWeight: 'bold'}}>10.อุปกรณ์ทางการแพทย์</Text>
        <View style={{flexDirection: 'row'}}>
        <CheckBox style={{marginTop:8,marginLeft:5}} value={isHave10Selected} onValueChange={setHave10Selection} />
        <Text style={{fontSize:15,marginTop:14}}>ไม่มี</Text>
        <CheckBox style={{marginTop:8,marginLeft:5}} value={isDHave10Selected} onValueChange={setDHave10Selection} />
        <Text style={{fontSize:15,marginTop:14}}>มี ระบุ</Text>
        <TextInput style={{fontSize: 15 , marginLeft:10}} placeholder="________________" 
        onChangeText={text => setmedequipment_havebecaz(text)}
        value={medequipment_havebecaz}
        />
        </View>
        </View>

        <View style={{borderBottomWidth:0.5}}>
        <Text style={{marginLeft:10,fontSize:15,marginTop:14,fontWeight: 'bold'}}>11.สภาพอารมณ์/จิตใจ</Text>
        <View style={{flexDirection: 'row'}}>
        <CheckBox style={{marginTop:8,marginLeft:5}} value={isPhyscoSelected} onValueChange={setPhyscoSelected} />
        <Text style={{fontSize:15,marginTop:14}}>ไม่มี</Text>
        <CheckBox style={{marginTop:8,marginLeft:5}} value={isPhysco2Selected} onValueChange={setPhysco2Selected} />
        <Text style={{fontSize:15,marginTop:14}}>เปลี่ยนแปลง</Text>
        <CheckBox style={{marginTop:8,marginLeft:5}} value={isPhysco3Selected} onValueChange={setPhysco3Selected} />
        <Text style={{fontSize:15,marginTop:14}}>อื่น</Text>
        <TextInput style={{fontSize: 15 , marginLeft:10}} placeholder="________________" 
        onChangeText={text => setemote_otherbe(text)}
        value={emote_otherbe}
        />
        </View>
        </View>

        <View style={{borderBottomWidth:0.5}}>
        <Text style={{marginLeft:10,fontSize:15,marginTop:14,fontWeight: 'bold'}}>12.สภาพปัญหาทางสังคม</Text>
        <View style={{flexDirection: 'row'}}>
        <CheckBox style={{marginTop:8,marginLeft:5}} value={isSocialSelected} onValueChange={setSocialSelection} />
        <Text style={{fontSize:15,marginTop:14}}>ไม่มี</Text>
        <CheckBox style={{marginTop:8,marginLeft:5}} value={isSocial2Selected} onValueChange={setSocial2Selection} />
        <Text style={{fontSize:15,marginTop:14}}>มี ระบุ</Text>
        <TextInput style={{fontSize: 15 , marginLeft:10}} placeholder="________________" 
        onChangeText={text => setsocial_other(text)}
        value={social_other}
        />
        </View>
        </View>

        <View style={{borderBottomWidth:0.5}}>
        <Text style={{marginLeft:10,fontSize:15,marginTop:14,fontWeight: 'bold'}}>13.สภาพปัญหาทางเศรษฐกิจ</Text>
        <View style={{flexDirection: 'row'}}>
        <CheckBox style={{marginTop:8,marginLeft:5}} value={isFinSelected} onValueChange={setFinSelection} />
        <Text style={{fontSize:15,marginTop:14}}>ไม่มี</Text>
        <CheckBox style={{marginTop:8,marginLeft:5}} value={isFin2Selected} onValueChange={setFin2Selection} />
        <Text style={{fontSize:15,marginTop:14}}>มี ระบุ</Text>
        <TextInput style={{fontSize: 15 , marginLeft:10}} placeholder="________________" 
        onChangeText={text => setsfinancial_other(text)}
        value={financial_other}
        />
        </View>
        </View>

        <View style={{borderBottomWidth:0.5}}>
        <Text style={{marginLeft:10,fontSize:15,marginTop:14,fontWeight: 'bold'}}>14.การแพทย์ตามนัด</Text>
        <View style={{flexDirection: 'row'}}>
        <CheckBox style={{marginTop:8,marginLeft:5}} value={isMeetSelected} onValueChange={setMeetSelection} />
        <Text style={{fontSize:15,marginTop:14}}>ไป</Text>
        <CheckBox style={{marginTop:8,marginLeft:5}} value={isMeet2Selected} onValueChange={setMeet2Selection} />
        <Text style={{fontSize:15,marginTop:14}}>ไม่ไป เพราะ</Text>
        <TextInput style={{fontSize: 15 , marginLeft:10}} placeholder="________________" 
        onChangeText={text => setmeet_other(text)}
        value={meet_other}
        />
        </View>
        </View>

        <View style={{borderBottomWidth:0.5}}>
        <Text style={{marginLeft:10,fontSize:15,marginTop:14,fontWeight: 'bold'}}>15.Note/Progressnote</Text>
        <View style={{flexDirection: 'row'}}>
        <TextInput style={{fontSize: 15 , marginLeft:10}} placeholder="________________________________________________________" 
        onChangeText={text => setnote(text)}
        value={note}
        />
        </View>
        </View>

        <View style={{borderBottomWidth:0.5}}>
        <Text style={{marginLeft:10,fontSize:15,marginTop:14,fontWeight: 'bold'}}>16.นัดเยี่ยมครั้งต่อไป และ วัตถุประสงค์การเยี่ยม</Text>
        <View style={{flexDirection: 'row'}}>
        <TextInput style={{fontSize: 15 , marginLeft:10}} placeholder="________________________________________________________"
        onChangeText={text => setmeeting(text)}
        value={meeting}
        />
        </View>
        </View>

        <View style={{borderBottomWidth:0.5}}>
        <Text style={{marginLeft:10,fontSize:15,marginTop:14,fontWeight: 'bold'}}>17.ผู้ประเมิณ/ตำแหน่ง</Text>
        <View style={{flexDirection: 'row'}}>
        <Text style={{fontSize:15,marginTop:14,marginLeft:10}}>1.</Text>
        <TextInput style={{fontSize: 15 , marginLeft:10}} placeholder="______________________________________________" 
        onChangeText={text => setassessor1(text)}
        value={assessor1}
        />
        </View>
        <View style={{flexDirection: 'row'}}>
        <Text style={{fontSize:15,marginTop:14,marginLeft:10}}>2.</Text>
        <TextInput style={{fontSize: 15 , marginLeft:10}} placeholder="______________________________________________" 
        onChangeText={text => setassessor2(text)}
        value={assessor2}
        />
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
                Save
              </Text>
            </LinearGradient>
          </TouchableOpacity>

        </ScrollView>
    </SafeAreaView>
  );
};

export default assessmentbodypart2;

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
