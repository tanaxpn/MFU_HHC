import React from 'react';
import {View, StyleSheet} from 'react-native';
import {
  Avatar,
  Title,
  Caption,
  Paragraph,
  Drawer,
  Text,
  TouchableRipple,
  Switch,
} from 'react-native-paper';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';

import {AuthContext} from '../components/context';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';

export function DrawerContent(props) {

    const [isDarkTheme, setIsDarkTheme] = React.useState(false);

    const { signOut } = React.useContext(AuthContext);

    const toggleTheme = () => {
        setIsDarkTheme(!isDarkTheme);
    }

  return (
    <View style={{flex: 1}}>
      <DrawerContentScrollView {...props}>
        <View style={styles.drawerContent}>
          <View style={styles.userInfoSection}>
            <View style={{flexDirection: 'row', marginTop: 15}}>
              <Avatar.Image
                source={{
                  uri:
                    'https://scontent.fbkk5-7.fna.fbcdn.net/v/t31.0-8/s960x960/15800526_1359523287445116_6024908484682680828_o.jpg?_nc_cat=107&_nc_sid=85a577&_nc_eui2=AeHQ_1sR9xPuUTjbkcgDOyNRhpIZbrFod96GkhlusWh33iCYF8Ja9HM6M3RjX6BNFoIroWsNgqYSdPpG_1iEuEai&_nc_ohc=Un-_yuB319AAX_nMdwn&_nc_ht=scontent.fbkk5-7.fna&_nc_tp=7&oh=a2c1597f5232e08a6af4dc60355054b1&oe=5EE2A9E6',
                }}
                size={50}
              />
              <View style={{marginLeft: 15, flexDirection: 'column'}}>
                <Title style={styles.title}>Tanakrit Nammakuna</Title>
                <Caption style={styles.caption}>@TANA</Caption>
              </View>
            </View>
            <View style={styles.row}>
              <View style={styles.section}>
                <Paragraph style={(styles.paragraph, styles.caption)}>
                  100{' '}
                </Paragraph>
                <Caption style={styles.caption}>Following</Caption>
              </View>
              <View style={styles.section}>
                <Paragraph style={(styles.paragraph, styles.caption)}>
                  100{' '}
                </Paragraph>
                <Caption style={styles.caption}>Follower</Caption>
              </View>
            </View>
          </View>

          <Drawer.Section style={styles.drawerSection}>
            <DrawerItem
              icon={({color, size}) => (
                <MaterialCommunityIcons
                  name="home-outline"
                  color={color}
                  size={size}
                />
              )}
              label="Home"
              onPress={() => {props.navigation.navigate('Home')}}
            />

            {/* <DrawerItem
              icon={({color, size}) => (
                <Ionicons
                  name="md-map"
                  color={color}
                  size={size}
                />
              )}
              label="Maps"
              onPress={() => {props.navigation.navigate('Maps')}}
            />

            <DrawerItem
              icon={({color, size}) => (
                <Ionicons
                  name="ios-person"
                  color={color}
                  size={size}
                />
              )}
              label="Profile"
              onPress={() => {props.navigation.navigate('Profile')}}
            /> */}

          </Drawer.Section>
          <Drawer.Section title="Preferences">
              <TouchableRipple onPress={() => {toggleTheme()}}>
                <View style={styles.preference}>
                    <Text>Dark Theme</Text>
                    <View pointerEvents="none">
                        <Switch value={isDarkTheme}/>
                    </View>
                </View>    
              </TouchableRipple>
          </Drawer.Section>
        </View>
      </DrawerContentScrollView>
      <Drawer.Section style={styles.bottomDrawerSection}>
        <DrawerItem
          icon={({color, size}) => (
            <MaterialCommunityIcons
              name="exit-to-app"
              color={color}
              size={size}
            />
          )}
          label="Sign Out"
          onPress={() => {signOut()}}
        />
      </Drawer.Section>
    </View>
  );
}

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
  },
  userInfoSection: {
    paddingLeft: 20,
  },
  title: {
    fontSize: 16,
    marginTop: 3,
    fontWeight: 'bold',
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
  },
  row: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 15,
  },
  paragraph: {
    fontWeight: 'bold',
    marginRight: 3,
  },
  drawerSection: {
    marginTop: 15,
  },
  bottomDrawerSection: {
    marginBottom: 15,
    borderTopColor: '#f4f4f4',
    borderTopWidth: 1,
  },
  preference: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
});
