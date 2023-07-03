import Config from 'react-native-config';
import React, {useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Platform, View, Text, StyleSheet, Image} from 'react-native';
import {
  ScrollView,
  TextInput,
  TouchableOpacity,
} from 'react-native-gesture-handler';

const ENDPOINT = '/user/login';

const GetToKnowBetter = ({navigation}) => {
  useEffect(() => {}, []);

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.userDetailsBox}>
          <View>
            <Image source={require('../../assets/images/slectCategory.png')} />
          </View>
          <View style={styles.main_container}>
            <Text style={styles.heading}>Let's Get To Know Better </Text>
            <View style={styles.input_container}>
              <View style={styles.input_box}>
                <Text style={styles.input_lable}>
                  We are here to help you find the best match for your needs and
                </Text>
                <TextInput
                  autoCapitalize="none"
                  style={styles.inputText}
                  placeholderTextColor="#666"
                  placeholder="Write.."
                />
              </View>
              <View style={styles.input_box}>
                <Text style={styles.input_lable}>
                  We are here to help you find the best match for your needs and
                </Text>
                <TextInput
                  autoCapitalize="none"
                  style={styles.inputText}
                  placeholderTextColor="#666"
                  placeholder="Write.."
                />
              </View>
              <View style={styles.input_box}>
                <Text style={styles.input_lable}>
                  We are here to help you find the best match for your needs and
                </Text>
                <TextInput
                  autoCapitalize="none"
                  style={styles.inputText}
                  placeholderTextColor="#666"
                  placeholder="Write.."
                />
              </View>
            </View>
          </View>
          <View style={styles.back_button_box}>
            <TouchableOpacity
              style={styles.back_button}
              onPress={navigation.navigate}>
              <Image
                style={styles.back_button_img}
                source={require('../../assets/images/right-arrow1.png')}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#EFEFEF',
    flex: 1,
    position: 'relative',
    justifyContent: 'flex-start',
  },
  main_container: {
    position: 'absolute',
    top: 100,
    flex: 1,
    width: '90%',
    left: 25,
  },
  heading: {
    fontSize: 40,
    fontWeight: 700,
    color: '#fff',
    lineHeight: 50,
    textTransform: 'capitalize',
  },

  back_button: {
    width: 60,
    height: 60,
    borderRadius: 50,
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#0A8AFF',
  },
  back_button_box: {
    justifyContent: 'center',
    flex: 1,
    alignItems: 'center',
    width: '100%',
  },
  back_button_img: {
    height: 30,
    width: 30,
  },
  inputText: {
    padding: 20,
    paddingBottom: 8,
    paddingTop: 8,
    borderWidth: 1,
    borderColor: '#fff',
    marginTop: 10,
    borderColor: 'gray',
    borderRadius: 10,
    color: '#333333',
    width: '100%',
    fontSize: 15,
  },
  input_container: {
    paddingTop: 70,
  },
  input_box: {
    marginBottom: 20,
  },
  input_lable: {
    fontSize: 17,
    paddingBottom: 3,
    color: '#222',
  },
});

export default GetToKnowBetter;
