import React, { Component } from 'react'
import { StyleSheet, Text, View, SafeAreaView, ScrollView, TextInput, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default class Card2_3 extends Component {
    render() {
        return (
            <View >

                <View style={{marginBottom:20,marginTop:5,marginLeft:20,marginRight:20,borderWidth:2,borderRadius:80,backgroundColor:"#3F82DC",alignItems:"center",borderColor:"#ffff"}}>
                    <Text style={style.title2}>บันทึกการรักษา</Text>
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
        margin : 25 ,
        fontSize: 25,
        fontWeight: "bold",
        justifyContent:"center",
        color:"#ffff",
    },
    txt2:{
        marginLeft : 15,
        marginBottom : 10,
        fontSize:13,
        color: "#A9A9A9"

    },
})