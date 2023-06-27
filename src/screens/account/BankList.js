import React, {useState} from 'react';
import {View, Text, StyleSheet, Image, TextInput} from 'react-native';
// import BottomNavigator from '../navigation/BottomNavigator';
import Header from '../../components/Header';
import {SafeAreaView} from 'react-native-safe-area-context';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import {fontSize, inputBox} from '../assets/styles/common';
import {RNSVGGroup} from 'react-native-svg';
const BankList = ({navigation}) => {
  const [searchData, setSerchData] = useState();

  const handalInput = () => {
    setSerchData(searchData);
  };
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
      <View style={styles.container}>
        {/* <Header navigation={navigation} /> */}
        <View>
          <Text style={styles.upi_id_slect_text}>
            Select the Account where you want your money to be transferred
          </Text>
          <View style={styles.upi_box}>
            <Text style={styles.upi_box_text}>Account Holder Name</Text>
            <Text style={styles.upi_box_a_text}>**** **** 123</Text>
          </View>
        </View>
      </View>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <TouchableOpacity
          onPress={() => navigation.navigate('Addbank')}
          style={styles.withdraw_button}>
          <Text style={styles.withdraw_button_text}>Add</Text>
        </TouchableOpacity>
      </View>
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
  upi_id_slect_text: {
    fontSize: 16,
    textTransform: 'capitalize',
    paddingBottom: 10,
  },
  upi_box: {
    position: 'relative',
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 7,
    backgroundColor: '#fff',

    padding: 15,
    marginTop: 10,
  },
  upi_box_a_text: {
    position: 'absolute',
    right: 10,
    top: 14,
    color: '#0A8AFF',
    fontSize: 18,
  },
  upi_box_text: {
    fontSize: 18,
  },
  withdraw_button: {
    fontSize: 20,
    backgroundColor: '#0A8AFF',
    elevation: 5,
    width: 300,
    shadowColor: '#333',
    borderRadius: 40,
    padding: 10,
  },
  withdraw_button_text: {
    textAlign: 'center',
    fontSize: 20,
    color: '#fff',
    textTransform: 'uppercase',
    fontWeight: 600,
  },
});
export default BankList;
