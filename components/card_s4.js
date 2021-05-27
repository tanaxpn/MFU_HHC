import React, { Component } from 'react'
import { StyleSheet, Text, View, SafeAreaView, ScrollView, TextInput, Image } from 'react-native';

export default class Card4 extends Component {
    render() {
        return (
            <View style={{ flex: 1, flexDirection: 'row', borderWidth: 1 }}>
                <View style={{ flex: 1 }}>
                    <Image source={{uri : this.props.imageUri}} 
                    style={{ marginLeft: 20, height: 100, width: 100, borderWidth: 0.5,marginTop:10,marginRight:10, marginBottom:10 }} />
                </View>
                <View style={{ flex:2, }}>
                    <Text></Text>
                    <Text style={style.title}>{this.props.title}</Text>
                    <Text style={style.txt}>{this.props.descrip}</Text>
                    <Text></Text>
                    <Text style={style.txt}>เวลา : {this.props.time}</Text>
                    <Text style={style.txt}>หมายเหตุ : {this.props.note}</Text>
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
        fontSize: 10,
        color: "#A9A9A9"
    },
})