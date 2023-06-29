import React, {useState} from 'react';
import {View, Text, StyleSheet, Image, TextInput} from 'react-native';
// import BottomNavigator from '../navigation/BottomNavigator';
import Header from '../../components/Header';
import {SafeAreaView} from 'react-native-safe-area-context';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import CompaignExample from '../../components/CampaignExample';

const CollabDetails = ({navigation}) => {
  const [tabs, setTabs] = useState('Deals');

  const changeTabFun = item => {
    if (item == 'Deals') {
      setTabs('Deals');
    } else {
      setTabs('Example');
    }
  };
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
          <View style={styles.tab_list_con}>
            <TouchableOpacity
              onPress={() => changeTabFun('Deals')}
              style={[
                styles.tab_button,
                tabs == 'Deals' ? styles.tab_button_active : '',
              ]}>
              <Text
                style={[
                  styles.tab_button_text,
                  tabs == 'Deals' ? styles.tab_button_text_active : '',
                ]}>
                Deals
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => changeTabFun('Example')}
              style={[
                styles.tab_button,
                tabs == 'Example' ? styles.tab_button_active : '',
              ]}>
              <Text
                style={[
                  styles.tab_button_text,
                  tabs == 'Example' ? styles.tab_button_text_active : '',
                ]}>
                Example
              </Text>
            </TouchableOpacity>
          </View>
          <View>
            {tabs == 'Deals' ? (
              <View>
                <View style={styles.main_box}>
                  <View style={styles.main_box_card}>
                    <Text style={styles.main_box_card_title}>
                      Brand Details
                    </Text>
                    <View style={styles.line_style}></View>
                    <Text style={styles.company_name}>URBAN Companny</Text>
                  </View>
                  <View style={styles.main_box_card}>
                    <Text style={styles.main_box_card_title}>Task Details</Text>
                    <View style={styles.line_style}></View>
                    <View>
                      <Text style={styles.sub_title_card}>
                        Campaing Type ::{' '}
                        <Text style={styles.sub_title_card_name}> Female</Text>
                      </Text>
                      <Text style={styles.sub_title_card}>
                        Product Name ::{' '}
                        <Text style={styles.sub_title_card_name}>
                          {' '}
                          Whatever
                        </Text>
                      </Text>
                      <Text style={styles.sub_title_card}>
                        Product Link ::{' '}
                        <Text style={styles.sub_title_card_name}>
                          {' '}
                          Some Link
                        </Text>
                      </Text>
                    </View>
                  </View>
                  <View style={styles.main_box_card}>
                    <Text style={styles.main_box_card_title}>
                      Collab Requirements
                    </Text>
                    <View style={styles.line_style}></View>
                    <View>
                      <View
                        style={{
                          flex: 1,
                          flexDirection: 'row',
                          alignItems: 'center',
                        }}>
                        <Text style={styles.sub_title_card}>
                          To Be Posted On -{' '}
                        </Text>
                        <Image
                          style={styles.sub_title_card_img}
                          source={require('../../assets/images/instagram.png')}
                        />
                      </View>
                      <View>
                        <Text style={styles.sub_title_card}>
                          Deliverables -{' '}
                        </Text>
                        <View>
                          <TouchableOpacity style={styles.real_post_box}>
                            <View
                              style={{
                                flex: 1,
                                flexDirection: 'row',
                                alignItems: 'center',
                              }}>
                              <Image
                                style={styles.sub_card_real_img}
                                source={require('../../assets/images/bx_movie-play.png')}
                              />
                              <View>
                                <Text style={styles.sub_card_real_title}>
                                  Reals Post (Videos) X1
                                </Text>
                                <Text style={styles.sub_card_real_dur}>
                                  Duration - 30 - 60 Sec
                                </Text>
                              </View>
                            </View>
                          </TouchableOpacity>
                          <TouchableOpacity style={styles.real_post_box}>
                            <View
                              style={{
                                flex: 1,
                                flexDirection: 'row',
                                alignItems: 'center',
                              }}>
                              <Image
                                style={styles.sub_card_real_img}
                                source={require('../../assets/images/bx_movie-play.png')}
                              />
                              <View>
                                <Text style={styles.sub_card_real_title}>
                                  Reals Post (Videos) X1
                                </Text>
                                <Text style={styles.sub_card_real_dur}>
                                  Duration - 30 - 60 Sec
                                </Text>
                              </View>
                            </View>
                          </TouchableOpacity>
                        </View>
                      </View>
                    </View>
                  </View>
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
                          <Text style={styles.sub_title_card_name}>
                            {' '}
                            Female
                          </Text>
                        </Text>
                        <View style={styles.active_green_circle}></View>
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
                        <View style={styles.active_green_circle}></View>
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
                          <Text style={styles.sub_title_card_name}>
                            {' '}
                            50k-80k
                          </Text>
                        </Text>
                        <View style={styles.active_green_circle}></View>
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
                        <View style={styles.active_green_circle}></View>
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
                        <View style={styles.active_green_circle}></View>
                      </View>
                    </View>
                  </View>
                </View>
                <View style={styles.apply_button_box}>
                  <TouchableOpacity style={styles.apply_button}>
                    <Text style={styles.apply_button_text}>Apply</Text>
                  </TouchableOpacity>
                </View>
              </View>
            ) : (
              ''
            )}
          </View>
          <View>{tabs == 'Example' ? <CompaignExample /> : ''}</View>
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
  tab_list_con: {
    flex: 1,
    alignItems: 'center',
    marginBottom: 20,
    justifyContent: 'space-around',
    flexDirection: 'row',
  },
  tab_button: {
    padding: 9,
    paddingLeft: 40,
    paddingRight: 40,
    borderRadius: 10,
  },
  tab_button_text: {
    fontSize: 16,
    fontWeight: 500,
    color: '#222',
  },
  tab_button_active: {
    backgroundColor: '#0070D7',
  },
  tab_button_text_active: {
    color: '#fff',
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
  active_green_circle: {
    padding: 7,
    backgroundColor: 'green',
    zIndex: 2,
    marginRight: 10,
    borderRadius: 40,
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
});

export default CollabDetails;
