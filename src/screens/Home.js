import React, { Component } from 'react';
import { View, Text } from 'react-native';
// import BottomNavigator from '../navigation/BottomNavigator';
import Header from '../components/Header';
const Home = ({navigation}) => {
    return (
       <View style={{flex: 1}}>
       <Header navigation={navigation} />
       <Text>Home</Text>
       
        </View>
    );
};
export default Home;

