import React, { Component } from 'react'
import { StyleSheet, Text, View, SafeAreaView, ScrollView, TextInput, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default class Card2 extends Component {
    render() {
        return (
            <View >

                <View style={{ flex: 1,flexDirection:'row', borderWidth: 1 }}>
                <View style={{ flex: 1 }}>
                    <Image source={{uri: this.props.imageUri }} 
                    style={{ marginLeft: 20, height: 150, width: 150, borderWidth: 0.5,marginTop:10,marginRight:10, marginBottom:10 }} />
                </View>
                <View style={{flex :1 }}>  
                    <Text></Text>
                    <Text style={style.title}>{this.props.title}</Text>
                    <Text></Text>
                    <Text style={style.txt}>เพศ : {this.props.gender}</Text>
                    <Text style={style.txt}>อายุ : {this.props.olds}</Text>
                    <Text style={style.txt}>สถานะ : {this.props.status}</Text>
                    <Text style={style.txt}>ส่วนสูง : {this.props.talls}  น้ำหนัก : {this.props.weight}</Text>
                    <Text style={style.txt}>ตรวจล่าสุดวันที่ : {this.props.outtime}</Text>
                </View>
                </View>


            </View>
            

             
        )
    }
}

const style = StyleSheet.create({
    title: {
        fontSize: 15,
        fontWeight:"bold"
    },
    txt: {
        fontSize: 12,
        color: "#A9A9A9"
    },
    title2: {
        margin : 15 ,
        fontSize: 20,
        fontWeight: "bold"
    },
    txt2:{
        marginLeft : 15,
        marginBottom : 10,
        fontSize:13,
        color: "#A9A9A9"

    },
})