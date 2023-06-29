import React, {useState} from 'react';
import {
  Button,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Modal from 'react-native-modal';

function FilterCom({navigation, filterBox, setFilterBox}) {
  const [campaignSlecte, setCampaignSlecte] = useState('');

  const campaignSlecteFun = campaing => {
    setCampaignSlecte(campaing);
  };
  console.log(campaignSlecte);

  return (
    <Modal style={styles.modalBox} isVisible={filterBox}>
      <TouchableOpacity
        style={styles.close_top_section}
        onPress={() => setFilterBox(false)}></TouchableOpacity>
      <View style={styles.container}>
        <View style={{alignItems: 'center', padding: 6}}>
          <TouchableOpacity
            style={styles.close_line}
            onPress={() => setFilterBox(false)}
          />
        </View>
        <View style={styles.main_container}>
          <View style={styles.filter_img_sec}>
            <View style={styles.filter_img_box}>
              <Image
                style={styles.filter_img}
                width={45}
                height={45}
                source={require('../assets/images/cil_filter.png')}
              />
              <Text style={styles.filter_top_text}>Filter</Text>
            </View>
            <Text style={styles.filter_clear_text}>Clear</Text>
          </View>
          <View>
            <Text style={styles.campaign_type_text}>Campaign type</Text>
            <View style={styles.campaign_type_box}>
              <TouchableOpacity
                style={[
                  styles.campaign_type_button,
                  campaignSlecte == 'Paid'
                    ? styles.campaign_type_button_active
                    : '',
                ]}
                onPress={() => campaignSlecteFun('Paid')}>
                <Text style={styles.campaign_type_button_text}>Paid</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  styles.campaign_type_button,
                  campaignSlecte == 'Bater'
                    ? styles.campaign_type_button_active
                    : '',
                ]}
                onPress={() => campaignSlecteFun('Bater')}>
                <Text style={styles.campaign_type_button_text}>Bater</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  styles.campaign_type_button,
                  campaignSlecte == 'Performance Marketing'
                    ? styles.campaign_type_button_active
                    : '',
                ]}
                onPress={() => campaignSlecteFun('Performance Marketing')}>
                <Text style={styles.campaign_type_button_text}>
                  Performance Marketing
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <View>
            <Text style={styles.campaign_type_text}>Social Media</Text>
            <View style={styles.campaign_type_box}>
              <TouchableOpacity
                style={[styles.campaign_type_button, styles.social_media]}>
                <Image
                  style={styles.filter_img}
                  width={45}
                  height={45}
                  source={require('../assets/images/instaFilter.png')}
                />
                <Text style={styles.campaign_type_button_text}> Instagram</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.campaign_type_button, styles.social_media]}>
                <Image
                  style={styles.filter_img}
                  width={45}
                  height={45}
                  source={require('../assets/images/youtubeFilter.png')}
                />
                <Text style={styles.campaign_type_button_text}>Youtube</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.campaign_type_button, styles.social_media]}>
                <Image
                  style={styles.filter_img}
                  width={45}
                  height={45}
                  source={require('../assets/images/youtubeFilter.png')}
                />
                <Text style={styles.campaign_type_button_text}>Linkdin</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View>
            <View style={{alignItems: 'center'}}>
              <TouchableOpacity style={styles.apply_button}>
                <Text style={styles.apply_button_text}>Apply</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modalBox: {
    margin: 0,
    padding: 0,
    // backgroundColor: '#ffffff2e',
  },
  close_top_section: {
    flex: 1,
  },
  container: {
    flex: 1,
    zIndex: 99,
    width: '100%',
    bottom: 0,
    position: 'absolute',
    backgroundColor: '#fff',
    overflow: 'hidden',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  close_line: {
    height: 7,
    width: '50%',
    borderRadius: 8,
    backgroundColor: '#0A8AFF',
  },
  main_container: {
    padding: 10,
    paddingLeft: 20,
    paddingRight: 20,
  },
  filter_img_sec: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingBottom: 30,
    paddingTop: 10,
  },
  filter_img_box: {
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  filter_img: {
    width: 30,
    height: 30,
    marginRight: 10,
  },
  filter_top_text: {
    fontSize: 22,
    color: '#222',
    fontWeight: 700,
  },
  filter_clear_text: {
    fontSize: 16,
    borderBottomColor: 'gray',
    borderBottomWidth: 2,
    fontWeight: 500,
    color: 'gray',
  },
  campaign_type_text: {
    fontSize: 17,
    fontWeight: 500,
    paddingBottom: 5,
    textTransform: 'capitalize',
    color: '#222',
  },
  campaign_type_box: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    overflow: 'scroll',
    paddingTop: 10,
    paddingBottom: 20,
  },
  campaign_type_button: {
    padding: 8,
    paddingLeft: 12,
    minWidth: 120,
    alignItems: 'center',
    paddingRight: 12,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: '#0A8AFF',
    marginRight: 15,
  },
  campaign_type_button_text: {
    fontSize: 15,
    fontWeight: 600,
    color: '#222',
  },
  campaign_type_button_active: {
    borderWidth: 2,
  },
  social_media: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  apply_button: {
    backgroundColor: '#0A8AFF',
    margin: 30,

    width: '60%',
    paddingTop: 10,
    paddingBottom: 10,
    textAlign: 'center',
    borderRadius: 30,
  },
  apply_button_text: {
    color: '#fff',
    fontSize: 23,
    textAlign: 'center',
    fontWeight: 600,
    letterSpacing: 1,
  },
});
export default FilterCom;
