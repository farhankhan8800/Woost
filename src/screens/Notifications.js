import React from 'react';
import {View, Text, StyleSheet, Image, TextInput} from 'react-native';
// import BottomNavigator from '../navigation/BottomNavigator';
import {SafeAreaView} from 'react-native-safe-area-context';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import {PhoneIncoming} from 'react-native-feather';

const Notification = ({navigation}) => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.notify_box}>
            <Image
              style={styles.notify_box_img}
              source={require('../assets/images/notification-screen.png')}
            />
            <View style={styles.notify_contant}>
              <Text style={styles.notify_contant_con}>Congratulations ,</Text>
              <Text style={styles.notify_contant_c}>
                Puma has Accepted Your Compaing Request
              </Text>
            </View>
            <Text style={styles.notify_time}> 6 Days Ago</Text>
          </View>
          <View style={styles.notify_box}>
            <Image
              style={styles.notify_box_img}
              source={require('../assets/images/notification-screen.png')}
            />
            <View style={styles.notify_contant}>
              <Text style={styles.notify_contant_con}>Congratulations ,</Text>
              <Text style={styles.notify_contant_c}>
                Puma has Accepted Your Compaing Request
              </Text>
            </View>
            <Text style={styles.notify_time}> 6 Days Ago</Text>
          </View>
          <View style={styles.notify_box}>
            <Image
              style={styles.notify_box_img}
              source={require('../assets/images/notification-screen.png')}
            />
            <View style={styles.notify_contant}>
              <Text style={styles.notify_contant_con}>Congratulations ,</Text>
              <Text style={styles.notify_contant_c}>
                Puma has Accepted Your Compaing Request
              </Text>
            </View>
            <Text style={styles.notify_time}> 6 Days Ago</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 15,
    position: 'relative',
  },
  notify_box: {
    padding: 8,
    paddingBottom: 11,
    paddingTop: 11,
    borderColor: 'gray',
    borderWidth: 0.4,
    borderRadius: 7,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginBottom: 10,
  },
  notify_box_img: {
    width: 50,
  },
  notify_contant: {
    width: '60%',
  },
  notify_contant_con: {
    fontWeight: 500,
    fontSize: 15,
    color: '#222',
    textTransform: 'capitalize',
  },
  notify_time: {
    fontSize: 12,
    opacity: 0.7,
  },
  notify_contant_c: {
    fontSize: 13,
  },
});

export default Notification;
