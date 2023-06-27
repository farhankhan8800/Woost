import React, {useState} from 'react';
import {View, Text, StyleSheet, Image, TextInput} from 'react-native';
// import BottomNavigator from '../navigation/BottomNavigator';
import Header from '../components/Header';
import {SafeAreaView} from 'react-native-safe-area-context';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import {fontSize, inputBox} from '../assets/styles/common';
import {RNSVGGroup} from 'react-native-svg';
const MyEarning = ({navigation}) => {
  const [searchData, setSerchData] = useState();

  const handalInput = () => {
    setSerchData(searchData);
  };
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          {/* <Header navigation={navigation} /> */}
          <View style={[styles.top_header_box]}>
            <Text style={[styles.top_header_text, {flex: 3}]}>My Earnings</Text>
            <View style={[styles.notify_icon, {flex: 1}]}>
              <TouchableOpacity>
                <Image
                  width={45}
                  height={45}
                  source={require('../assets/images/ballnotify.png')}
                />
              </TouchableOpacity>
            </View>
          </View>
          <View style={[styles.user_details]}>
            <Image
              style={{width: 70}}
              source={require('../assets/images/userhome.png')}
            />
            <View style={styles.user_detail_box}>
              <Text style={styles.user_detail_username}>UserName</Text>
              <Text style={styles.user_detail_userearning}>
                Total Earnings : {'\u20B9'} 1233445
              </Text>
            </View>
          </View>
          <View style={styles.earning_section}>
            <View style={styles.earning_card}>
              <Text style={styles.earning_card_count}> {'\u20B9'} 54235</Text>
              <Text style={styles.earning_card_text}> Available Earnings</Text>
            </View>
            <View style={styles.earning_card}>
              <Text style={styles.earning_card_count}> 235</Text>
              <Text style={styles.earning_card_text}>Number Of Collabs</Text>
            </View>
            <View style={styles.earning_card}>
              <Text style={styles.earning_card_count}> {'\u20B9'} 535</Text>
              <Text style={styles.earning_card_text}> Current Earnings</Text>
            </View>
            <View style={styles.earning_card}>
              <Text style={styles.earning_card_count}> {'\u20B9'} 54235</Text>
              <Text style={styles.earning_card_text}> Total Withdraw</Text>
            </View>
          </View>
          <View style={styles.withdraw_button_box}>
            <TouchableOpacity
              onPress={() => navigation.navigate('Withdraw')}
              style={styles.withdraw_button}>
              <Text style={styles.withdraw_button_text}>Withdraw Amount</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.activity_box}>
            <View style={styles.activity_box_top}>
              <Text style={styles.activity_box_top_h}>Activity</Text>
              <TouchableOpacity>
                <Text style={styles.activity_box_top_view_all}>View All</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.activity_box_tab_section}>
              <View style={styles.activity_box_tab}>
                <Text style={styles.activity_box_tab_text}>Complated </Text>
              </View>
              <View style={styles.activity_box_tab}>
                <Text style={styles.activity_box_tab_text}>On Going </Text>
              </View>
              <View style={styles.activity_box_tab}>
                <Text style={styles.activity_box_tab_text}>Paid </Text>
              </View>
              <View style={styles.activity_box_tab}>
                <Text style={styles.activity_box_tab_text}>Panding </Text>
              </View>
              <View style={styles.activity_box_tab}>
                <Text style={styles.activity_box_tab_text}>Tab 1 </Text>
              </View>
              <View style={styles.activity_box_tab}>
                <Text style={styles.activity_box_tab_text}>Tab 2 </Text>
              </View>
            </View>
            <View>
              <View style={styles.campan_card}>
                <Image
                  style={styles.campan_card_image}
                  source={require('../assets/images/campanlogo.png')}
                />
                <View style={styles.campan_card_name_s}>
                  <Text style={styles.campan_card_name_t}>campaign Name</Text>
                  <Text style={styles.campan_card_name}>on Going</Text>
                </View>
                <View style={styles.campan_card_status}>
                  <Text style={styles.campan_card_status_amount}>
                    {'\u20B9'}2754725
                  </Text>
                  <Text
                    style={[
                      styles.campan_card_status_text,
                      {color: '#D27E00'},
                    ]}>
                    Wating
                  </Text>
                </View>
              </View>
              <View style={styles.campan_card}>
                <Image
                  style={styles.campan_card_image}
                  source={require('../assets/images/campanlogo.png')}
                />
                <View style={styles.campan_card_name_s}>
                  <Text style={styles.campan_card_name_t}>campaign Name</Text>
                  <Text style={styles.campan_card_name}>on Going</Text>
                </View>
                <View style={styles.campan_card_status}>
                  <Text style={styles.campan_card_status_amount}>
                    {'\u20B9'}2754725
                  </Text>
                  <Text
                    style={[
                      styles.campan_card_status_text,
                      {color: '#50D200'},
                    ]}>
                    Paid
                  </Text>
                </View>
              </View>
            </View>
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
  },

  top_header_box: {
    flex: 1,
    paddingBottom: 20,
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  top_header_text: {
    fontWeight: 'bold',
    color: '#222',
    fontSize: 26,
  },
  notify_icon: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  user_details: {
    flex: 1,
    paddingBottom: 15,
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  user_detail_box: {
    paddingLeft: 20,
  },
  user_detail_username: {
    fontSize: 20,
    color: '#222',
    fontWeight: 'bold',
    letterSpacing: 1,
  },
  user_detail_userearning: {
    color: '#222',
    fontSize: 15,
    fontWeight: 'bold',
  },
  earning_section: {
    marginTop: 15,
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 15,
  },
  earning_card: {
    width: '47%',
    height: 93.75,
    borderRadius: 10,
    elevation: 7,
    backgroundColor: '#fff',
    shadowColor: '#333',
    alignItems: 'center',
    justifyContent: 'center',
  },
  earning_card_count: {
    color: '#0A8AFF',
    fontSize: 24,
    paddingBottom: 5,
    fontWeight: '500',
  },
  earning_card_text: {
    color: 'gray',
    fontSize: 15,
  },
  withdraw_button_box: {
    flex: 1,
    padding: 30,
    alignItems: 'center',
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
  activity_box: {},
  activity_box_top: {
    flex: 1,
    padding: 10,
    paddingLeft: 0,
    paddingRight: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  activity_box_top_h: {
    fontSize: 22,
    color: '#222',
    fontWeight: 500,
  },
  activity_box_top_view_all: {
    color: '#0A8AFF',
  },
  activity_box_tab_section: {
    flex: 1,
    padding: 10,
    paddingLeft: 0,
    paddingRight: 0,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexWrap: 'nowrap',
    overflow: 'scroll',
  },
  activity_box_tab: {
    backgroundColor: '#9ED0FF',
    padding: 8,
    paddingRight: 12,
    paddingLeft: 12,
    marginRight: 15,
    borderRadius: 7,
  },
  activity_box_tab_text: {
    color: '#222',
    fontWeight: 500,
    fontSize: 15,
  },
  campan_card: {
    flex: 1,
    padding: 10,
    paddingLeft: 0,
    paddingRight: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    overflow: 'hidden',
  },
  campan_card_image: {},
  campan_card_name_s: {},
  campan_card_name_t: {
    fontSize: 17,
    color: '#222',
    fontWeight: 500,
    textTransform: 'capitalize',
  },
  campan_card_name: {
    fontSize: 15,
    color: 'gray',
    fontWeight: 400,
    textTransform: 'capitalize',
  },
  campan_card_status: {},
  campan_card_status_amount: {
    fontSize: 17,
    color: '#222',
    fontWeight: 'bold',
  },
  campan_card_status_text: {
    fontSize: 15,
    fontWeight: 400,
    textTransform: 'capitalize',
  },
});
export default MyEarning;
