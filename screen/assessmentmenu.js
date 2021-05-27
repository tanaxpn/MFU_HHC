import React from 'react';
import {Button, ScrollView, Text, View, StyleSheet} from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';

import {TouchableOpacity} from 'react-native-gesture-handler';

const assessmentmenu = ({route,navigation}) => {

  const { PersonName } = route.params;
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
      <ScrollView>
        <View>
          <TouchableOpacity onPress={() => navigation.navigate('assetbody',{PersonName:PersonName})}>
            <View
              style={styles.textbox}>
              <Text />
              <Text style={styles.title}> ด้านร่างกาย </Text>
              <Text />
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate('assetbody2',{PersonName:PersonName})}>
            <View
              style={styles.textbox}>
              <Text />
              <Text style={styles.title}> อาการ/อาการแสดง </Text>
              <Text />
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate('barthel',{PersonName:PersonName})}>
            <View
              style={{
                marginBottom: 20,
                marginTop: 10,
                borderWidth: 1,
                backgroundColor: '#3F82DC',
                alignItems: 'center',
                borderColor: '#ffff',
                justifyContent: 'center',
                borderRadius: 40,
              }}>
              <Text />
              <Text style={styles.title}>
                {' '}
                BARTHEL ACTIVITY OF DAILY LIVING SCALE{' '}
              </Text>
              <Text />
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default assessmentmenu;

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    fontWeight: '300',
    color: '#fff',
    justifyContent: 'center',
    alignContent: 'center',
    textAlign: 'center',
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
  textbox: {
    marginBottom: 20,
    marginTop: 10,
    borderWidth: 1,
    backgroundColor: '#3F82DC',
    alignItems: 'center',
    borderColor: '#ffff',
    borderRadius: 40,
  },
});
