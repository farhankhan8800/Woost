import React, {useState} from 'react';
import {View, Text, StyleSheet, Image, TextInput, Button} from 'react-native';
// import BottomNavigator from '../navigation/BottomNavigator';

import {SafeAreaView} from 'react-native-safe-area-context';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';

const FAQscreen = ({navigation}) => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
      <ScrollView>
        <View style={styles.container}><Text>Hello</Text></View>
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
});

export default FAQscreen;
