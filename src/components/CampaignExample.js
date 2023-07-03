import React, {useState} from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ImageBackground,
} from 'react-native';
import Modal from 'react-native-modal';

function CompaignExample({navigation}) {
  const [imageUrl, setImageUrl] = useState(null);
  const [imageModel, setImageModel] = useState(false);

  const openImage = url => {
    setImageUrl(url);
    setImageModel(true);
  };
  return (
    <View>
      <View style={styles.container}>
        <TouchableOpacity
          onPress={() => openImage(require('../assets/images/examples1.png'))}>
          <Image
            width={30}
            height={30}
            source={require('../assets/images/examples1.png')}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => openImage(require('../assets/images/examples1.png'))}>
          <Image
            width={30}
            height={30}
            source={require('../assets/images/examples1.png')}
          />
        </TouchableOpacity>
      </View>
      <WebStories
        imageModel={imageModel}
        setImageModel={setImageModel}
        imageUrl={imageUrl}
      />
    </View>
  );
}

const WebStories = ({imageModel, imageUrl, setImageModel}) => {
  return (
    <Modal style={styles.modalBox} backdropOpacity={0.2} isVisible={imageModel}>
      <View style={styles.modal_container}>
        <ImageBackground
          source={imageUrl}
          style={{flex: 1, position: 'relative'}}>
          <TouchableOpacity
            style={styles.model_close_btn}
            onPress={() => setImageModel(false)}>
            <Image
              style={styles.model_close_btn_img}
              source={require('../assets/images/Close_model.png')}
            />
          </TouchableOpacity>
        </ImageBackground>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    gap: 10,
    columnGap: 20,
  },
  modalBox: {
    margin: 0,
    padding: 0,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: '#ffffff2e',
  },
  modal_container: {
    flex: 1,
    zIndex: 99,
    width: '100%',
    top: 0,
    bottom: 0,
    position: 'absolute',
    backgroundColor: '#fff',
    overflow: 'hidden',
  },
  model_close_btn: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
  model_close_btn_img: {
    width: 30,
    height: 30,
  },
});
export default CompaignExample;
