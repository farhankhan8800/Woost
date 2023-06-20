import React, { Component, useEffect } from 'react';
import { View, Text } from 'react-native';
import MainNavigator from '../navigation/MainNavigator';
const Splash = ({navigation}) => {

    useEffect(()=> {
   setTimeout(()=>{
    navigation.navigate('MainNavigator');
   },2000);
    },[]);
    return (
       <View>
        <Text>
            Splash
        </Text>
        </View>
    );
};
export default Splash;

