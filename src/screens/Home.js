import React, {useState} from 'react';
import {View, Text, StyleSheet, Image, TextInput} from 'react-native';
// import BottomNavigator from '../navigation/BottomNavigator';
import Header from '../components/Header';
import {SafeAreaView} from 'react-native-safe-area-context';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import {fontSize, inputBox} from '../assets/styles/common';
const Home = ({navigation}) => {
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
            <Text style={[styles.top_header_text, {flex: 3}]}>
              Perfect Campaigns are waiting for you
            </Text>
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
          <View style={[styles.serch_section]}>
            <View style={[styles.serch_section_box]}>
              <Image
                style={[styles.serch_input_icon]}
                width={30}
                height={30}
                source={require('../assets/images/home-search-Icon.png')}
              />
              <TextInput
                autoCapitalize="none"
                style={styles.inputText}
                value={searchData}
                placeholderTextColor="#666"
                onChangeText={handalInput}
                placeholder="What are You Looking For?"
              />
            </View>
            <TouchableOpacity>
              <Image
                width={30}
                height={30}
                source={require('../assets/images/userhome.png')}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.tab_section}>
            <TouchableOpacity
              style={[styles.tab_activeTab, styles.tab_menu_list]}>
              <Text
                style={[
                  styles.tab_menu_listitem_text,
                  styles.tab_menu_listitem_text_active,
                ]}>
                New Collabs
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.tab_menu_list]}>
              <Text style={styles.tab_menu_listitem_text}>My Collabs</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{width: 100, flex: 1, alignItems: 'flex-end'}}>
              <Image
                width={20}
                height={20}
                source={require('../assets/images/homefilter.png')}
              />
            </TouchableOpacity>
          </View>
          <View>
            <View style={styles.collabs_card}>
              <View style={styles.collabs_card_image}>
                <Text style={styles.collabs_float_text}>LifeStyle</Text>
                <Image
                  style={styles.collabs_card_img}
                  source={require('../assets/images/brand-image.png')}
                />
              </View>
              <View
                style={{
                  padding: 6,
                  paddingLeft: 16,
                  paddingRight: 16,
                  width: '100%',
                }}>
                <View style={styles.collab_section_bottom}>
                  <View style={{flex: 2}}>
                    <Text style={styles.collab_bottomname}>Collabs Name</Text>
                    <Text>Company Name</Text>
                  </View>
                  <View style={styles.collab_section_paid_box}>
                    <Text style={styles.paid_text}>Paid</Text>

                    <View
                      style={{
                        flex: 1,
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'flex-end',
                      }}>
                      <Image
                        style={styles.share_icon}
                        source={require('../assets/images/home-youtube.png')}
                      />
                      <Image
                        style={styles.share_icon}
                        source={require('../assets/images/home-instagram.png')}
                      />
                    </View>
                  </View>
                </View>
                <View
                  style={{
                    flex: 1,
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    paddingBottom: 10,
                  }}>
                  <Text style={styles.apply_text}>Apply By 31st August</Text>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                    }}>
                    <Image
                      style={styles.green_icon}
                      width={30}
                      height={30}
                      source={require('../assets/images/ellipse-home.png')}
                    />
                    <Text style={styles.applicant_text}>47 Applicant</Text>
                  </View>
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
    paddingBottom: 15,
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
  serch_section: {
    flex: 1,
    paddingBottom: 15,
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  serch_section_box: {
    position: 'relative',
  },
  inputText: {
    height: 46,
    padding: 10,
    paddingLeft: 47,
    borderWidth: inputBox.borderWidth,
    marginTop: 10,
    borderColor: '#0A8AFF',
    borderRadius: 10,
    color: '#333333',
    width: 300,
    fontSize: 15,
  },
  serch_input_icon: {
    position: 'absolute',
    top: 20,
    left: 10,
  },
  tab_section: {
    flex: 1,
    paddingBottom: 15,
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  tab_menu_list: {
    padding: 10,
    paddingLeft: 14,
    borderRadius: 4,
    paddingRight: 15,
  },
  tab_activeTab: {
    backgroundColor: '#0070D7',
  },
  tab_menu_listitem_text: {
    color: '#222',
    fontSize: 17,
  },
  tab_menu_listitem_text_active: {
    color: '#fff',
  },
  collabs_card: {
    width: '100%',
    borderColor: '#222',
    borderWidth: 0.5,
    // elevation: 1,
    borderRadius: 5,
    overflow: 'hidden',
  },
  collabs_card_image: {
    position: 'relative',
    width: '100%',
  },
  collabs_card_img: {
    width: '100%',
    overflow: 'hidden',
    height: 200,
  },
  collabs_float_text: {
    position: 'absolute',
    top: 10,
    right: 20,
    padding: 10,
    paddingBottom: 3,
    paddingTop: 3,
    fontSize: 12,
    color: '#222',
    borderRadius: 20,
    backgroundColor: '#D9D9D9',
    zIndex: 1,
  },
  collab_section_bottom: {
    flex: 1,
    paddingBottom: 5,
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  collab_section_paid_box: {
    flex: 2,
    paddingBottom: 15,
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  collab_bottomname: {
    fontWeight: 'bold',
    fontSize: 17,
    color: '#222',
  },
  paid_icon: {
    marginRight: 8,
  },
  paid_text: {
    padding: 6,
    paddingLeft: 22,
    paddingRight: 22,
    backgroundColor: '#86B2DA',
    color: '#222',
    borderRadius: 7,
    fontWeight: '600',
  },
  share_icon: {
    width: 40,
    height: 40,
  },
  apply_text: {
    fontSize: 16,
    color: '#0070D7',
    fontWeight: 500,
  },
  green_icon: {
    marginRight: 10,
  },
  applicant_text: {
    fontSize: 15,
  },
});
export default Home;
