import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  TextInput,
  Image,
  FlatList,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';

export default class extends Component {
  // componentDidMount() {
  //   this.fetchData();
  // fetch('http://10.0.3.2/api/home/', {
  //   method: 'GET',
  //   headers: {
  //     Accept: 'application/json',
  //     'Content-Type': 'application/json',
  //   },
  //   body: JSON.stringify({
  //     firstParam: 'yourValue',
  //     secondParam: 'yourOtherValue',
  //   }),
  // });
  //   fetch('http://10.0.3.2/api/home/',
  //   headers:{
  //     'Accept': 'application/json',
  //     'Content-Type':'application/json'
  // })
  //     .then((response) => response.json())

  //     .then((res) => {
  //       this.setState({ dataS: res });
  //     })

  //     .catch((error) => console.error(error))

  //     .finally(() => {
  //       this.setState({ isLoading: false });
  //     });
  // }
  // fetchData = async () => {
  //   try {
  //     let response = await fetch('http://10.0.3.2/api/home/getAll', {
  //       method: 'GET',
  //       headers: {
  //         Accept: 'application/json',
  //         'Content-Type': 'application/json',
  //       },
  //     });
  //     let responseJson = await response.json();
  //     this.setState({dataTest: responseJson.data});
  //     this.setState({isLoading: false, dataS: responseJson});
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  // _renderItem = ({item}) => {
  //   return (
  //     <View>
  //     <View style={{flexDirection: 'row' , backgroundColor:'white', borderRadius:10}}>
  //       <Image
  //         source={{
  //           uri:
  //             'https://png.pngtree.com/element_our/20190528/ourlarge/pngtree-vector-cartoon-stereo-small-house-image_1165731.jpg',
  //         }}
  //         style={{
  //           marginLeft: 10,
  //           height: 100,
  //           width: 100,
  //           borderWidth: 0.5,
  //           marginTop: 10,
  //           marginRight: 10,
  //           marginBottom: 10,
  //         }}
  //       />
  //       <View style={{flex: 2, marginTop: 10}}>
  //         <Text>{item.ho_owner_home}</Text>
  //         <Text style={style.txt}>
  //           {item.ho_address},{item.ho_country}
  //         </Text>
  //         <Text style={style.txt}>{item.cr_date}</Text>
  //         <Text style={style.txt}>หมายเหตุ : {item.upd_date}</Text>

  //       </View>
  //     </View>
  //     <View
  //         style={style.lineStyle}
  //         />
  //    </View>
  //   );
  // };

  // renderSeparator = () => {
  //   return (
  //     <View style={{height: 1, width: '100%', backgroundColor: 'purple'}} />
  //   );
  // };

  // render() {}
  // if (this.state.isLoading) {
  //   return (
  //     <View>
  //       <ActivityIndicator size="large" animating />
  //     </View>
  //   );
  // } else {
  //   const {dataS, isLoading} = this.state;
  // return (

  // <View style={{flex: 1, flexDirection: 'row', borderWidth: 1}}>
  //   <View style={{flex: 1, padding: 24}}>

  //    <View style={{ flex: 1 }}>
  //             <Image source={{uri : 'https://png.pngtree.com/element_our/20190528/ourlarge/pngtree-vector-cartoon-stereo-small-house-image_1165731.jpg'}}
  //             style={{ marginLeft: 20, height: 100, width: 100, borderWidth: 0.5,marginTop:10,marginRight:10, marginBottom:10 }} />
  //         </View>
  //         <View style={{ flex:2, }}>
  //             <Text></Text>
  //             <Text>{this.props.title}</Text>
  //             <Text style={style.txt}>{this.props.descrip}</Text>

  //             <Text></Text>
  //             <Text style={style.txt}> {this.props.time}</Text>
  //             <Text style={style.txt}>หมายเหตุ : {this.props.note}</Text>
  //         </View>

  /* <FlatList
                data={this.state.dataTest}
                keyExtractor={({id}, index) => id}
                renderItem={
                  this._renderItem
                  // <Text>{item.ho_id}, {item.ho_country}</Text>
                }
                ItemSeperatorComponent={this.renderSeparator}
              /> */

  /* <Text>{this.state.dataTest}</Text>
                      <Text>{this.state.dataTest.ho_id}</Text> */
  // </View>
  /* <View style={{ flex: 1 }}>
                    <Image source={{uri : 'https://png.pngtree.com/element_our/20190528/ourlarge/pngtree-vector-cartoon-stereo-small-house-image_1165731.jpg'}} 
                    style={{ marginLeft: 20, height: 100, width: 100, borderWidth: 0.5,marginTop:10,marginRight:10, marginBottom:10 }} />
                </View>
                <View style={{ flex:2, }}>
                    <Text></Text>
                    <Text>{this.props.title}</Text>
                    <Text style={style.txt}>{this.props.descrip}</Text>
                    
                    
                    <Text></Text>
                    <Text style={style.txt}> {this.props.time}</Text>
                    <Text style={style.txt}>หมายเหตุ : {this.props.note}</Text>
                </View> */
  // </View>
  //   );
  // }

  render() {
    return (
    
        <View style={{borderWidth:2,borderRadius:10,borderColor:'grey',margin:10}}>
        <View
          style={{
            flexDirection: 'row',
            backgroundColor: 'white',
            borderRadius: 10,
          }}>
          <Image
            source={{uri: this.props.imageUri }}
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
            <Text>{this.props.title}</Text>
            <Text style={style.txt}>
              {this.props.descrip}
            </Text>
            <Text style={style.txt}>{this.props.time}</Text>
            <Text style={style.txt}>{this.props.note}</Text>
          </View>
        </View>
       
      </View>

    );
  }
}

const style = StyleSheet.create({
  title: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  txt: {
    fontSize: 10,
    color: '#A9A9A9',
  },
  lineStyle: {
    borderWidth: 0.5,
    borderColor: 'black',
    margin: 5,
  },
});
