import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

const LogingComponents = () => {
  return (
    <View style={styles.container}>
      <View style={styles.loding_box}>
        <Image
          style={styles.social_meida_icon}
          source={require('../assets/images/Loadingimage.gif')}
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  loding_box: {
    padding: 50,
  },
});

export default LogingComponents;
