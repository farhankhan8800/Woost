import React, {useState} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Modal from 'react-native-modal';

function SuccessModal({navigation, popupBox, setPopupBox}) {
  return (
    <Modal style={styles.modalBox} backdropOpacity={0.2} isVisible={popupBox}>
      <View style={styles.container}>
        <Image
          style={styles.pop_image}
          source={require('../assets/images/success_modal.png')}
        />
        <Text style={styles.pop_text}>
          YOU’VE SUCCESSFULLY APLIED FOR THE CAMPAIGN
        </Text>
        <Text style={styles.close_popup} onPress={() => setPopupBox(false)}>
          Close
        </Text>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modalBox: {
    margin: 0,
    padding: 0,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: '#ffffff2e',
  },
  close_top_section: {
    flex: 1,
  },
  container: {
    flex: 1,
    padding: 30,
    zIndex: 99,
    width: '85%',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    backgroundColor: '#fff',
    overflow: 'hidden',
    borderRadius: 10,
  },
  pop_image: {
    width: 80,
    height: 80,
    marginBottom: 30,
  },
  pop_text: {
    fontWeight: 500,
    fontSize: 18,
    textAlign: 'center',
    textTransform: 'capitalize',
  },
  close_popup: {
    position: 'absolute',
    right: 15,
    top: 8,
    fontSize: 15,
    color: 'gray',
    fontWeight: 400,
  },
});
export default SuccessModal;
