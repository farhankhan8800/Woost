import axios from 'axios';
import Config from 'react-native-config';
import React, {useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Platform, View, Text, StyleSheet, Image, TextInput} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Formik} from 'formik';
import * as yup from 'yup';

import KeybaordAvoidingWrapper from '../components/keyboardAvoidingWrapper';

import {centerContainer, fontSize, inputBox} from '../assets/styles/common';

// import { useDispatch } from 'react-redux';
// import { SIGNEDIN } from '../redux/actionTypes';
const ENDPOINT = '/user/login';

const SignUp = ({navigation}) => {
  const deviceType = Platform.OS == 'ios' ? 4 : 3;
  const [error, setError] = useState(false);

  const [app_device_id, setAppDeviceId] = useState('');
  // const dispatch = useDispatch();

  const getDeviceToken = async () => {
    let token = await messaging().getToken();
    setAppDeviceId(token);
    console.log('deviceToken', token);
  };
  // Somewhere in your code
  useEffect(() => {}, []);
  return (
    <KeybaordAvoidingWrapper>
      <Formik
        initialValues={{
          phone: '',
          countryCode: '+91',
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
              <View style={styles.contantContainerInner}>
                <View>
                  <Text style={[styles.headingSize]}>Sign Up</Text>
                </View>
                <View>
                  <Text style={[styles.lableFont]}>
                    Enter Your Phone Number
                  </Text>
                </View>
                <View>
                  <View style={styles.inputBoxContainer}>
                    <View style={styles.inputBoxInner}>
                      <TextInput
                        autoCapitalize="none"
                        style={styles.inputTextCode}
                        value="+91"
                        keyboardType="numeric"
                        maxLength={4}
                        editable={false}
                        placeholderTextColor="#666"
                        onChangeText={handleChange('countryCode')}
                      />
                      <TextInput
                        maxLength={10}
                        autoCapitalize="none"
                        keyboardType="numeric"
                        style={styles.inputText}
                        value={values.phone}
                        placeholderTextColor="#666"
                        onChangeText={handleChange('phone')}
                        placeholder="Phone Number"
                      />
                    </View>
                    <View>
                      {touched.phone && errors.phone && (
                        <Text style={styles.error}>{errors.phone}</Text>
                      )}
                    </View>
                  </View>
                  <View style={styles.loginButtonBox}>
                    <TouchableOpacity
                      onPress={() => navigation.navigate('Socialprofile')}>
                      {/* handleSubmit */}
                      <View style={styles.loginButton}>
                        <Text style={styles.loginTxt}>Request OTP</Text>
                      </View>
                    </TouchableOpacity>
                  </View>

                  <View style={styles.newLogin}>
                    <Text
                      onPress={() => navigation.navigate('Home')}
                      style={[styles.font16, styles.newLoginText]}>
                      Terms Condition & Privacy Policy
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
        )}
      </Formik>
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
  },
  contantContainerInner: {
    position: 'absolute',
    top: -120,
    left: 50,
  },
  headingSize: {
    fontSize: 32,
    fontWeight: '800',
    color: '#222222',
    letterSpacing: 1,
    marginBottom: 10,
  },
  inputBoxContainer: {
    position: 'relative',
  },
  inputBoxInner: {
    marginTop: 10,
    alignItems: centerContainer.alignCenter,
    justifyContent: centerContainer.justifyCenter,
    gap: 10,
    flexDirection: 'row',
  },
  inputText: {
    height: 52,
    padding: inputBox.padding,
    borderWidth: inputBox.borderWidth,
    marginTop: 10,
    borderColor: '#0A8AFF',
    borderRadius: 10,
    color: '#333333',
    width: 250,
    fontSize: 14,
  },
  inputTextCode: {
    height: 52,
    padding: inputBox.padding,
    borderWidth: inputBox.borderWidth,
    marginTop: 10,
    width: 52,
    borderColor: '#0A8AFF',
    borderRadius: 10,
    color: '#333333',
    fontSize: 14,
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

export default SignUp;
