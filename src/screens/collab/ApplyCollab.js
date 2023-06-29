import React, {useState} from 'react';
import {View, Text, StyleSheet, Image, TextInput} from 'react-native';
// import BottomNavigator from '../navigation/BottomNavigator';
import Header from '../../components/Header';
import {SafeAreaView} from 'react-native-safe-area-context';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import CheckBox from '@react-native-community/checkbox';

const ApplyCollab = ({navigation}) => {
  const [input1, setInput1] = useState('');
  const [input2, setInput2] = useState('');
  const [input3, setInput3] = useState('');
  const [input4, setInput4] = useState('');
  const [acceptNotify, setAcceptNotify] = useState(false);
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.top_header}>
            <Image
              style={styles.top_header_img}
              source={require('../../assets/images/company-logo.png')}
            />
            <View style={styles.top_header_box}>
              <Text style={styles.top_header_name_title}>Campaign name</Text>
              <View style={styles.top_applid_box}>
                <Text style={styles.top_applid_tit}>Apply By </Text>
                <Text>01/12/2022 </Text>
              </View>
            </View>
          </View>
          <View style={styles.main_box}>
            <View style={styles.main_box_card}>
              <Text style={styles.main_box_card_title}>
                Creator Requirements
              </Text>
              <View style={styles.line_style}></View>
              <View>
                <View
                  style={{
                    flex: 1,
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    flexDirection: 'row',
                  }}>
                  <Text style={styles.sub_title_card}>
                    Gander:{' '}
                    <Text style={styles.sub_title_card_name}> Female</Text>
                  </Text>
                </View>
                <View
                  style={{
                    flex: 1,
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    flexDirection: 'row',
                  }}>
                  <Text style={styles.sub_title_card}>
                    Age-Group:{' '}
                    <Text style={styles.sub_title_card_name}> 24-36</Text>
                  </Text>
                </View>
                <View
                  style={{
                    flex: 1,
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    flexDirection: 'row',
                  }}>
                  <Text style={styles.sub_title_card}>
                    Follower Range:{' '}
                    <Text style={styles.sub_title_card_name}> 50k-80k</Text>
                  </Text>
                </View>
                <View
                  style={{
                    flex: 1,
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    flexDirection: 'row',
                  }}>
                  <Text style={styles.sub_title_card}>
                    Category:{' '}
                    <Text style={styles.sub_title_card_name}>
                      {' '}
                      Fashion, Lifestyle Etc.
                    </Text>
                  </Text>
                </View>
                <View
                  style={{
                    flex: 1,
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    flexDirection: 'row',
                  }}>
                  <Text style={styles.sub_title_card}>
                    Location:{' '}
                    <Text style={styles.sub_title_card_name}>
                      {' '}
                      Place1 ,palce 2, place 3
                    </Text>
                  </Text>
                </View>
              </View>
            </View>
            <View style={styles.main_box_card}>
              <Text style={styles.main_box_card_title}>
                Selection Possibility
              </Text>
              <View style={styles.line_style}></View>

              <View style={{paddingTop: 10}}>
                <View style={{alignItems: 'center'}}>
                  <View style={styles.status_bar_box}>
                    <View style={styles.status_bar_fill}></View>
                  </View>
                </View>

                <View style={styles.input_box}>
                  <Text style={styles.input_lable}>
                    Enter the amount to check the possibility of your selection
                  </Text>
                  <TextInput
                    autoCapitalize="none"
                    style={styles.inputText}
                    value={input1}
                    keyboardType="numeric"
                    placeholderTextColor="#666"
                    onChangeText={data => setInput1(data)}
                    placeholder="1000"
                  />
                </View>
                <View style={styles.input_box}>
                  <Text style={styles.input_lable}>
                    Lorem ipsum dolor sit amet consectetur. Dignissim
                    consectetur elit ut felis. Nascetur.
                  </Text>
                  <TextInput
                    autoCapitalize="none"
                    style={styles.inputText}
                    value={input2}
                    placeholderTextColor="#666"
                    onChangeText={data => setInput2(data)}
                    placeholder="|"
                  />
                </View>
                <View style={styles.input_box}>
                  <Text style={styles.input_lable}>
                    Lorem ipsum dolor tetur elit ut felis. Nascetur.
                  </Text>
                  <TextInput
                    autoCapitalize="none"
                    style={styles.inputText}
                    value={input3}
                    placeholderTextColor="#666"
                    onChangeText={data => setInput3(data)}
                    placeholder="|"
                  />
                </View>
                <View style={styles.input_box}>
                  <Text style={styles.input_lable}>
                    Lorem ipsu sit amet consectetur. Dignissim felis. Nascetur.
                  </Text>
                  <TextInput
                    autoCapitalize="none"
                    style={styles.inputText}
                    value={input4}
                    placeholderTextColor="#666"
                    onChangeText={data => setInput4(data)}
                    placeholder="|"
                  />
                </View>
              </View>
            </View>
          </View>
          <View style={styles.whatApp_box}>
            <View>
              <CheckBox
                disabled={false}
                value={acceptNotify}
                onValueChange={newValue => setAcceptNotify(newValue)}
              />
            </View>

            <Image
              style={styles.whatapp_icon}
              source={require('../../assets/images/logos_whatsapp-icon.png')}
            />
            <Text style={styles.whatApp_text}>
              Get Whatsapp Notification, Regarding, Relavent Campaigns AndUpdate
            </Text>
          </View>
          <View style={styles.apply_button_box}>
            <TouchableOpacity style={styles.apply_button}>
              <Text style={styles.apply_button_text}>Confirm</Text>
            </TouchableOpacity>
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
  top_header: {
    padding: 10,
    flex: 1,
    paddingTop: 5,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    paddingLeft: 0,
    alignItems: 'center',
    paddingRight: 0,
  },
  top_header_img: {
    width: 60,
    height: 60,
    marginRight: 10,
  },
  top_header_name_title: {
    fontSize: 19,
    fontWeight: 500,
    paddingBottom: 3,
    color: '#222',
    textTransform: 'capitalize',
  },
  top_applid_box: {
    flex: 1,
    flexDirection: 'row',
  },
  top_applid_tit: {
    fontSize: 15,
    marginRight: 10,
    fontWeight: 500,
  },

  main_box_card: {
    borderRadius: 10,
    elevation: 7,
    backgroundColor: '#fff',
    shadowColor: '#333',
    padding: 15,
    paddingBottom: 20,
    overflow: 'hidden',
    marginBottom: 20,
  },
  main_box_card_title: {
    fontSize: 17,
    fontWeight: 600,
    color: '#222',
  },
  line_style: {
    width: '80%',
    height: 2,
    marginBottom: 10,
    marginTop: 10,
    backgroundColor: '#EEDBA0',
  },
  company_name: {
    color: '#222',
    fontSize: 16,
    textTransform: 'capitalize',
  },
  sub_title_card: {
    fontSize: 16,
    fontWeight: 500,
    position: 'relative',
    paddingBottom: 5,
    color: '#222',
  },
  sub_title_card_name: {
    paddingLeft: 10,
    fontSize: 15,

    fontWeight: 400,
    color: '#222',
  },
  sub_title_card_img: {
    width: 30,
    height: 30,
  },
  real_post_box: {
    padding: 10,
    borderColor: '#222',
    borderWidth: 0.4,
    borderRadius: 4,
    marginBottom: 10,
    backgroundColor: '#fff',
  },
  sub_card_real_img: {
    width: 40,
    height: 40,
    marginRight: 6,
  },
  sub_card_real_title: {
    fontSize: 16,
    fontWeight: 500,
    letterSpacing: 0.8,
  },
  sub_card_real_dur: {
    color: '#222',
    fontSize: 15,
    fontWeight: 500,
    letterSpacing: 0.7,
  },

  apply_button: {
    padding: 15,
    paddingLeft: 50,
    paddingRight: 50,
    borderRadius: 30,
    backgroundColor: 'yellow',
  },
  apply_button_text: {
    color: '#222',
    fontSize: 20,
    letterSpacing: 1,
    fontWeight: 800,
    textTransform: 'uppercase',
  },
  apply_button_box: {
    alignItems: 'center',
    padding: 20,
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
  input_lable: {
    fontSize: 17,
    paddingBottom: 5,
  },
  input_box: {
    paddingBottom: 10,
  },
  status_bar_box: {
    margin: 10,
    overflow: 'hidden',
    width: 300,
    backgroundColor: '#C3E2FF',
    marginBottom: 20,
    borderRadius: 20,
    elevation: 3,
  },
  status_bar_fill: {
    height: 10,
    borderRadius: 20,
    width: '70%',
    backgroundColor: '#FF4B4B',
  },
  whatApp_box: {
    padding: 10,
    paddingLeft: 0,
    paddingRight: 0,
    flex: 1,
    margin: 10,
    alignItems: 'center',
    flexDirection: 'row',
  },
  whatapp_icon: {
    marginLeft: 10,
    marginRight: 10,
  },
  whatApp_text: {
    fontWeight: 500,
    fontSize: 16,
    paddingLeft: 5,
    textTransform: 'capitalize',
    maxWidth: 300,
  },
});

export default ApplyCollab;
