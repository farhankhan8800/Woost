import React, {useState} from 'react';
import {View, Text, StyleSheet, Image, TextInput} from 'react-native';
// import BottomNavigator from '../navigation/BottomNavigator';
import Header from '../../components/Header';
import {SafeAreaView} from 'react-native-safe-area-context';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import {fontSize, inputBox} from '../assets/styles/common';
import {RNSVGGroup} from 'react-native-svg';
import {Formik} from 'formik';
import * as yup from 'yup';
import ErroLabel from '../../components/ErrorCom';

const AddBankForm = () => {
  const [error, setError] = useState(false);
  return (
    <Formik
      initialValues={{
        bankName: '',
        accountHolderName: '',
        accountNumber: '',
        conAccountNumber: '',
        ifscCode: '',
      }}
      onSubmit={async values => {
        // try {
        //   const {data} = await request.post(
        //     navigation,
        //     Config.API_URL + ENDPOINT,
        //     {
        //       apiAuth: Config.API_AUTH,
        //       user_type: deviceType,
        //       android_id_value: 'xyz',
        //       phone: values.phone,
        //     },
        //   );
        //   if (data.code == '1' && data.error == '0') {
        //     console.log(data);
        //   } else {
        //     console.log(data);
        //     setError(data.msg);
        //   }
        // } catch (e) {
        //   setError(e.message);
        // }
      }}
      validationSchema={yup.object().shape({
        bankName: yup.string().required('Please enter bankName'),
      })}>
      {({values, handleChange, errors, touched, handleSubmit}) => (
        <View>
          <View>
            <View style={styles.inputBoxContainer}>
              <TextInput
                autoCapitalize="none"
                style={styles.inputText}
                value={values.bankName}
                placeholderTextColor="#666"
                onChangeText={handleChange('bankName')}
                placeholder="Bank Name"
              />
              <View>
                {touched.bankName && errors.bankName && (
                  <Text style={styles.error}>{errors.bankName}</Text>
                )}
              </View>
            </View>
            <View style={styles.inputBoxContainer}>
              <TextInput
                autoCapitalize="none"
                style={styles.inputText}
                value={values.accountHolderName}
                placeholderTextColor="#666"
                onChangeText={handleChange('accountHolderName')}
                placeholder="Account Holder Name"
              />
              <View>
                {touched.accountHolderName && errors.accountHolderName && (
                  <Text style={styles.error}>{errors.accountHolderName}</Text>
                )}
              </View>
            </View>
            <View style={styles.inputBoxContainer}>
              <TextInput
                autoCapitalize="none"
                keyboardType="numeric"
                style={styles.inputText}
                value={values.accountNumber}
                placeholderTextColor="#666"
                onChangeText={handleChange('accountNumber')}
                placeholder="Account Number"
                maxLength={16}
              />
              <View>
                {touched.accountNumber && errors.accountNumber && (
                  <Text style={styles.error}>{errors.accountNumber}</Text>
                )}
              </View>
            </View>
            <View style={styles.inputBoxContainer}>
              <TextInput
                autoCapitalize="none"
                keyboardType="numeric"
                style={styles.inputText}
                value={values.conAccountNumber}
                placeholderTextColor="#666"
                onChangeText={handleChange('conAccountNumber')}
                placeholder=" Confirm Account Number"
                maxLength={16}
              />
              <View>
                {touched.conAccountNumber && errors.conAccountNumber && (
                  <Text style={styles.error}>{errors.conAccountNumber}</Text>
                )}
              </View>
            </View>
            <View style={styles.inputBoxContainer}>
              <TextInput
                autoCapitalize="none"
                style={styles.inputText}
                value={values.ifscCode}
                placeholderTextColor="#666"
                onChangeText={handleChange('ifscCode')}
                placeholder=" IFSC Code"
                maxLength={16}
              />
              <View>
                {touched.ifscCode && errors.ifscCode && (
                  <Text style={styles.error}>{errors.ifscCode}</Text>
                )}
              </View>
            </View>
            {error && <ErroLabel message={error} />}
          </View>
          <View style={{paddingTop: 20, alignItems: 'center'}}>
            <TouchableOpacity
              onPress={handleSubmit}
              style={styles.withdraw_button}>
              <Text style={styles.withdraw_button_text}>Save</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </Formik>
  );
};

const AddBank = ({navigation}) => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
      <View style={styles.container}>
        {/* <Header navigation={navigation} /> */}

        <AddBankForm />
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
  inputBoxContainer: {
    paddingBottom: 5,
  },
  withdraw_button: {
    fontSize: 20,
    backgroundColor: '#0A8AFF',
    elevation: 5,
    width: 150,
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
export default AddBank;
