import React, {useState} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Modal from 'react-native-modal';

function CompaignExample({navigation}) {
  const [imageUrl, setImageUrl] = useState('');
  const [imageModel, setImageModel] = useState(false);

  const openImage = url => {
    setImageUrl(url);
    setImageModel(true);
  };
  return (
    <View>
      <View style={styles.container}>
        <TouchableOpacity
          onPress={() => openImage('../assets/images/examples1.png')}>
          <Image
            width={30}
            height={30}
            source={require('../assets/images/examples1.png')}
          />
        </TouchableOpacity>
      </View>
      <WebStories imageModel={imageModel} imageUrl={imageUrl} />
    </View>
  );
}

const WebStories = ({imageModel, imageUrl}) => {
  return (
    <Modal backdropOpacity={0.2} isVisible={imageModel}>
      <View></View>
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
});
export default CompaignExample;
