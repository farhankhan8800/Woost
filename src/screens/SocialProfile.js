import axios from 'axios';
import Config from 'react-native-config';
import React, {useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Platform, View, Text, StyleSheet, Image, TextInput} from 'react-native';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import {Formik} from 'formik';
import * as yup from 'yup';

import KeybaordAvoidingWrapper from '../components/keyboardAvoidingWrapper';

import {centerContainer, inputBox} from '../assets/styles/common';
import {Instagram, Linkedin, Youtube} from 'react-native-feather';

// import { useDispatch } from 'react-redux';
// import { SIGNEDIN } from '../redux/actionTypes';
const ENDPOINT = '/user/login';

const SocialProfile = ({navigation}) => {
  const deviceType = Platform.OS == 'ios' ? 4 : 3;
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  // const dispatch = useDispatch();

  
  // Somewhere in your code
  useEffect(() => {}, []);
  return (
    <KeybaordAvoidingWrapper style={{flex: 1}}>
      <ScrollView>
        <Formik
          initialValues={{
            linkdin: '',
            instagram: '',
            youtube: '',
          }}
          onSubmit={async values => {
            try {
              const {data} = await request.post(
                navigation,
                Config.API_URL + ENDPOINT,
                {
                  apiAuth: Config.API_AUTH,
                  device_type: deviceType,
                  app_device_id: '',
                  password: values.password,
                  phone: values.phone,
                  app_device_id: app_device_id,
                },
              );
              if (data.status == '1' && data.error == '0') {
                // dispatch({
                //     type: SIGNEDIN,
                //     userToken: data.token,
                //     userInfo: data.data,
                // });
                navigation.navigate('Home');
              } else {
                setError(data.message);
              }
            } catch (e) {
              setError(e.message);
            }
          }}
          validationSchema={yup.object().shape({
            phone: yup.string().required('Please enter phone'),
          })}>
          {({values, handleChange, errors, touched, handleSubmit}) => (
            <View style={styles.container}>
              <View style={styles.imageContainer}>
                <Image
                  source={require('../assets/images/login-page-image.png')}
                />
              </View>
              <View style={styles.contantContainer}>
                <View>
                  <Text style={[styles.headingSize]}>Social Profile</Text>
                  <Text style={[styles.headingPara]}>
                    Add Your Social Profile Link{' '}
                  </Text>
                </View>
                <View style={{flex: 1}}>
                  <View style={styles.inputBoxContainer}>
                    <View style={styles.iconStyle}>
                      <Linkedin fill="#0A8AFF" width={25} height={25} />
                    </View>

                    <TextInput
                      autoCapitalize="none"
                      style={styles.inputText}
                      value={values.linkdin}
                      placeholderTextColor="#666"
                      onChangeText={handleChange('linkdin')}
                      placeholder="Linkdin Profile"
                    />
                  </View>
                  <View style={styles.inputBoxContainer}>
                    <View style={styles.iconStyle}>
                      <Instagram fill="#3f729b" width={25} height={25} />
                    </View>

                    <TextInput
                      autoCapitalize="none"
                      style={styles.inputText}
                      value={values.instagram}
                      placeholderTextColor="#666"
                      onChangeText={handleChange('instagram')}
                      placeholder="Instagram Profile"
                    />
                  </View>
                  <View style={styles.inputBoxContainer}>
                    <View style={styles.iconStyle}>
                      <Youtube fill="#CD201F" width={25} height={25} />
                    </View>

                    <TextInput
                      autoCapitalize="none"
                      style={styles.inputText}
                      value={values.youtube}
                      placeholderTextColor="#666"
                      onChangeText={handleChange('youtube')}
                      placeholder="You Tube Profile"
                    />
                  </View>

                  {/* <View>
                        {touched.phone && errors.phone && (
                          <Text style={styles.error}>{errors.phone}</Text>
                        )}
                      </View> */}

                  <View style={styles.loginButtonBox}>
                    <TouchableOpacity
                      onPress={handleSubmit}>
                      <View style={styles.loginButton}>
                        <Text style={styles.loginTxt}>Submit</Text>
                      </View>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </View>
          )}
        </Formik>
      </ScrollView>
    </KeybaordAvoidingWrapper>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    flex: 1,
    position: 'relative',
    justifyContent: 'flex-start',
  },
  imageContainer: {
    alignItems: centerContainer.alignCenter,
  },
  contantContainer: {
    position: 'relative',
    flex: 1,
    marginBottom: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },

  headingSize: {
    fontSize: 32,
    fontWeight: '800',
    color: '#222222',
    letterSpacing: 1,
    marginBottom: 10,
  },
  headingPara: {
    fontSize: 19,
    color: '#222222',
    letterSpacing: 1,
    marginBottom: 10,
  },
  inputBoxContainer: {
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
  },

  inputText: {
    height: 52,
    padding: inputBox.padding,
    paddingLeft: 40,
    borderWidth: inputBox.borderWidth,
    marginTop: 10,
    borderColor: '#0A8AFF',
    borderRadius: 10,
    color: '#333333',
    width: 280,
    fontSize: 15,
  },
  iconStyle: {
    position: 'absolute',
    top: 22,
    left: 6,
  },
  error: {
    fontSize: 12,
    color: '#FF0D10',
    marginTop: 7,
    marginLeft: 30,
  },
  errorLabel: {
    color: 'red',
    fontSize: 12,
    marginTop: 10,
  },
  lableFont: {
    fontSize: 19,
    color: '#222222',
  },
  loginButtonBox: {alignItems: 'center'},
  loginButton: {
    alignItems: centerContainer.alignCenter,
    justifyContent: centerContainer.justifyCenter,
    backgroundColor: '#0A8AFF',
    padding: 10,
    width: 190,
    marginTop: 30,
    borderRadius: 50,
    height: 46,
  },

  loginTxt: {
    fontSize: 19,
    fontWeight: '600',
    color: '#fff',
  },

  newLogin: {
    justifyContent: 'center',
    flexDirection: 'row',
    marginTop: 20,
  },
  newLoginText: {
    color: '#727272',
    borderBottomColor: '#727272',
    borderBottomWidth: 0.6,
  },
});

export default SocialProfile;
